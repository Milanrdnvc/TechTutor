import LandingPage from '../SharedComponents/LandingPage';
import '../../CSS/Desktops.css';

function Desktops() {
  return (
    <div className="desktops-wrapper">
      <main className="desktops">
        <LandingPage
          title="DESKTOPOVI"
          quote="Želite da sastavite svoj novi računar? Došli ste na pravo mesto!"
        />
      </main>
    </div>
  );
}

export default Desktops;
