import LandingPage from '../SharedComponents/LandingPage';
import Configuration from '../SharedComponents/Configuration/Configuration';
import { data } from '../../data';
import '../../CSS/Desktops.css';

function Phones() {
  return (
    <div className="desktops-wrapper">
      <main className="desktops">
        <LandingPage
          title="TELEFONI"
          quote="Želite novi telefon? Došli ste na pravo mesto!"
        />
        <Configuration
          img={require('../../Pictures/conf-pic1.png')}
          title={data.phones.lowEnd.title}
          desc={data.phones.lowEnd.desc}
          cfgs={data.phones.lowEnd.cfgs}
          device="phones"
        />
        <Configuration
          img={require('../../Pictures/conf-pic2.png')}
          title={data.phones.midRange.title}
          desc={data.phones.midRange.desc}
          cfgs={data.phones.midRange.cfgs}
          device="phones"
        />
        <Configuration
          img={require('../../Pictures/conf-pic3.png')}
          title={data.phones.highEnd.title}
          desc={data.phones.highEnd.desc}
          cfgs={data.phones.highEnd.cfgs}
          device="phones"
        />
      </main>
    </div>
  );
}

export default Phones;
