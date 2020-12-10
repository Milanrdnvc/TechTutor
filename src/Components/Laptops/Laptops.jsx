import LandingPage from '../SharedComponents/LandingPage';
import Configuration from '../SharedComponents/Configuration/Configuration';
import { data } from '../../data';
import '../../CSS/Desktops.css';

function Laptops() {
  return (
    <div className="desktops-wrapper">
      <main className="desktops">
        <LandingPage
          title="LAPTOPOVI"
          quote="Želite novi laptop? Došli ste na pravo mesto!"
        />
        <Configuration
          img={require('../../Pictures/conf-pic1.png')}
          title={data.laptops.generalPurpose.title}
          desc={data.laptops.generalPurpose.desc}
          cfgs={data.laptops.generalPurpose.cfgs}
          device="laptops"
        />
        <Configuration
          img={require('../../Pictures/conf-pic2.png')}
          title={data.laptops.gaming.title}
          desc={data.laptops.gaming.desc}
          cfgs={data.laptops.gaming.cfgs}
          device="laptops"
        />
        <Configuration
          img={require('../../Pictures/conf-pic3.png')}
          title={data.laptops.productivity.title}
          desc={data.laptops.productivity.desc}
          cfgs={data.laptops.productivity.cfgs}
          device="laptops"
        />
      </main>
    </div>
  );
}

export default Laptops;
