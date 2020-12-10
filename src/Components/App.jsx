import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Desktops from './Desktops/Desktops';
import Laptops from './Laptops/Laptops';
import Phones from './Phones/Phones';
import Contact from './Contact/Contact';
import CfgInfo from './SharedComponents/Configuration/CfgInfo/CfgInfo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { data } from '../data';
import '../CSS/App.css';

function processDataIntoComponent(device) {
  return Object.values(data[device])
    .map(category => {
      return category.cfgs;
    })
    .map(cfgs => {
      return Object.values(cfgs);
    })
    .reduce((flat, current) => {
      return flat.concat(current);
    }, [])
    .map(cfg => {
      return (
        <Route
          key={cfg.id}
          path={`/${device}/${cfg.id}`}
          render={() => {
            return (
              <CfgInfo
                title={cfg.title}
                desc={cfg.desc}
                benchmark={cfg.benchmark}
                components={cfg.components}
              />
            );
          }}
        />
      );
    });
}

const cfgInfoDesktops = processDataIntoComponent('desktops');
const cfgInfoLaptops = processDataIntoComponent('laptops');
const cfgInfoPhones = processDataIntoComponent('phones');

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/desktops" exact component={Desktops} />
          <Route path="/laptops" exact component={Laptops} />
          <Route path="/phones" exact component={Phones} />
          <Route path="/contact" component={Contact} />
          {cfgInfoDesktops}
          {cfgInfoLaptops}
          {cfgInfoPhones}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
