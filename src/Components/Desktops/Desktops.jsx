import LandingPage from '../SharedComponents/LandingPage';
import Configuration from '../SharedComponents/Configuration/Configuration';
import { data } from '../../data';
import '../../CSS/Devices.css';

function Desktops() {
  window.scrollTo(0, 0);
  return (
    <div className="devices-wrapper">
      <main className="devices">
        <LandingPage
          title="DESKTOPOVI"
          quote="Želite da sastavite svoj novi računar? Došli ste na pravo mesto!"
        />
        <Configuration
          img={require('../../Pictures/conf-pic1.png')}
          title={data.desktops.generalPurpose.title}
          desc={data.desktops.generalPurpose.desc}
          cfgs={data.desktops.generalPurpose.cfgs}
          device="desktops"
        />
        <Configuration
          img={require('../../Pictures/conf-pic2.png')}
          title={data.desktops.gaming.title}
          desc={data.desktops.gaming.desc}
          cfgs={data.desktops.gaming.cfgs}
          device="desktops"
        />
        <Configuration
          img={require('../../Pictures/conf-pic3.png')}
          title={data.desktops.productivity.title}
          desc={data.desktops.productivity.desc}
          cfgs={data.desktops.productivity.cfgs}
          device="desktops"
        />
      </main>
    </div>
  );
}

export default Desktops;
