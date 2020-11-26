import LandingPage from '../SharedComponents/LandingPage';
import Configuration from '../SharedComponents/Configuration/Configuration';
import '../../CSS/Desktops.css';

function Desktops() {
  return (
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
}

export default Desktops;
