import pointer from '../../Pictures/pointer.png';
import '../../CSS/LandingPage.css';

function LandingPage({ title, quote }) {
  if (title === 'TECHTUTOR') {
    title = (
      <>
        TECH
        <br />
        TUTOR
      </>
    );
  }

  return (
    <div className="landing-page">
      <div className="landing-page__text">
        <h1>{title}</h1>
        <h3>{quote}</h3>
      </div>
      <div className="landing-page__pointer">
        <h4 className="landing-page__pointer-text">Istraži</h4>
        <img src={pointer} alt="" className="landing-page__pointer-img" />
      </div>
    </div>
  );
}

export default LandingPage;
