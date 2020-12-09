import LandingPage from '../SharedComponents/LandingPage';
import Configuration from '../SharedComponents/Configuration/Configuration';
import CfgInfo from '../SharedComponents/Configuration/CfgInfo/CfgInfo';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { data } from '../../data';
import '../../CSS/Desktops.css';

function Desktops() {
  const desktops = () => (
    <div className="desktops-wrapper">
      <main className="desktops">
        <LandingPage
          title="DESKTOPOVI"
          quote="Želite da sastavite svoj novi računar? Došli ste na pravo mesto!"
        />
        <Configuration
          img={require('../../Pictures/conf-pic1.png')}
          title={data.desktops.generalPurpose.title}
          desc={data.desktops.generalPurpose.desc}
          cfgs={data.desktops.generalPurpose.cfgs}
        />
        <Configuration
          img={require('../../Pictures/conf-pic2.png')}
          title={data.desktops.gaming.title}
          desc={data.desktops.gaming.desc}
          cfgs={data.desktops.gaming.cfgs}
        />
        <Configuration
          img={require('../../Pictures/conf-pic3.png')}
          title={data.desktops.productivity.title}
          desc={data.desktops.productivity.desc}
          cfgs={data.desktops.gaming.cfgs}
        />
      </main>
    </div>
  );

  const cfgInfo = Object.values(data.desktops)
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
          exact
          key={cfg.id}
          path={`/desktops/${cfg.id}`}
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

  return (
    <Router>
      <Switch>
        <Route path="/desktops" exact component={desktops} />
        {cfgInfo}
      </Switch>
    </Router>
  );
}

export default Desktops;
