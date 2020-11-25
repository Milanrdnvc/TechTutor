import LandingPage from '../SharedComponents/LandingPage';
import Configuration from '../SharedComponents/Configuration';
import '../../CSS/Desktops.css';

function Desktops() {
  return (
    <div className="desktops-wrapper">
      <main className="desktops">
        <LandingPage
          title="DESKTOPOVI"
          quote="Želite da sastavite svoj novi računar? Došli ste na pravo mesto!"
        />
        <Configuration />
        <Configuration />
      </main>
    </div>
  );
}

export default Desktops;
