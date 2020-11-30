import LandingPage from '../SharedComponents/LandingPage';
import Configuration from '../SharedComponents/Configuration/Configuration';
import CfgInfo from '../SharedComponents/Configuration/CfgInfo/CfgInfo';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import '../../CSS/Desktops.css';

function Desktops() {
  const desktops = () => (
    <div className="desktops-wrapper">
      <main className="desktops">
        <LandingPage
          title="DESKTOPOVI"
          quote="Želite da sastavite svoj novi računar? Došli ste na pravo mesto!"
        />
        <Configuration img={require('../../Pictures/conf-pic1.png')} />
        <Configuration img={require('../../Pictures/conf-pic2.png')} />
        <Configuration img={require('../../Pictures/conf-pic3.png')} />
      </main>
    </div>
  );

  return (
    <Router>
      <Switch>
        <Route path="/desktops" exact component={desktops} />
        <Route path="/desktops/1" component={CfgInfo} />
      </Switch>
    </Router>
  );
}

export default Desktops;
