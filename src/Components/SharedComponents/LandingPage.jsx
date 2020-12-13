import pointer from '../../Pictures/pointer.png';
import HomePageGif from '../../Pictures/home-page-gif.svg';
import { pointerSmoothScroll } from '../../helpers';
import '../../CSS/LandingPage.css';

function LandingPage({ title, quote, home }) {
  if (title === 'TECHTUTOR') {
    title = (
      <>
        TECH
        <br />
        TUTOR
      </>
    );
  }

  return !home ? (
    <div className="landing-page">
      <div className="landing-page__text">
        <h1>{title}</h1>
        <h3>{quote}</h3>
      </div>
      <div
        className="landing-page__pointer"
        onClick={pointerSmoothScroll}
        onTouchEnd={e => {
          e.preventDefault();
          pointerSmoothScroll();
        }}
      >
        <h4 className="landing-page__pointer-text">Istraži</h4>
        <img
          src={pointer}
          alt="pokazivac na dole"
          className="landing-page__pointer-img"
        />
      </div>
    </div>
  ) : (
    <div className="landing-page landing-page--home">
      <div className="landing-page__content">
        <div className="landing-page__text">
          <h1>{title}</h1>
          <h3>{quote}</h3>
        </div>
        <div className="landing-page__gif-container">
          <img
            className="landing-page__gif"
            src={HomePageGif}
            width="500px"
            alt="uredjaji"
          />
          <div className="landing-page__slideshow"></div>
        </div>
      </div>
      <div
        className="landing-page__pointer"
        onClick={pointerSmoothScroll}
        onTouchEnd={e => {
          e.preventDefault();
          pointerSmoothScroll();
        }}
      >
        <h4 className="landing-page__pointer-text">Istraži</h4>
        <img
          src={pointer}
          alt="pokazivac na dole"
          className="landing-page__pointer-img"
        ></img>
      </div>
    </div>
  );
}

export default LandingPage;
