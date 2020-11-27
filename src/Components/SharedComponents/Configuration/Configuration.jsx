import { useRef, useEffect } from 'react';
import { animatePara } from '../../../helpers';
import test from '../../../Pictures/gejmerski2.png';
import arrow from '../../../Pictures/arrow.png';
import '../../../CSS/Configuration.css';

const images = [];
for (let i = 0; i < 5; i++) {
  images.push(
    <div
      style={{
        backgroundImage: `url(${test})`,
        transform: `translateX(${i * 100}%)`,
      }}
      className="configuration__image"
      key={i}
      alt="configuration"
    />
  );
}

function toggleImageCarousel(imageCarousel, para) {
  if (!para.classList.contains('para-hide')) {
    para.classList.add('para-hide');
    imageCarousel.classList.add('image-carousel-show');
  } else {
    para.classList.remove('para-hide');
    imageCarousel.classList.remove('image-carousel-show');
  }
}

let counter = 0;
function handleSlideLeft(imageCarousel) {
  const numOfImages = Array.from(imageCarousel.querySelectorAll('div')).length;
  if (Math.abs(counter) >= numOfImages - 1) return;
  counter++;
  imageCarousel.style.transition = 'all 0.5s ease';
  imageCarousel.style.transform = `translateX(${
    counter * -100
  }%) translateY(-50%)`;
}

function handleSlideRight(imageCarousel) {
  console.log(counter);
  const numOfImages = Array.from(imageCarousel.querySelectorAll('div')).length;
  if (counter <= 0) return;
  counter--;
  if (counter <= numOfImages) {
    imageCarousel.style.transition = 'all 0.5s ease';
    imageCarousel.style.transform = `translateX(${
      counter * -100
    }%) translateY(-50%)`;
  }
}

function Configuration({ img }) {
  const para = useRef(null);
  const imageCarousel = useRef(null);

  useEffect(() => {
    const handleAnimatePara = () => animatePara(para.current);
    window.addEventListener('scroll', handleAnimatePara);
    return () => window.removeEventListener('scroll', handleAnimatePara);
  }, []);

  return (
    <div
      className="configuration"
      style={{ backgroundImage: `url(${img.default})` }}
    >
      <h2 className="configuration__title">Sample Title</h2>
      <p className="configuration__para" ref={para}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
        autem dicta dolor cum obcaecati tempora. Debitis eum, eligendi ab
        voluptatum rem quae sunt a neque, aliquam, accusamus esse consectetur
        aliquid.
      </p>

      <img
        src={arrow}
        className="configuration__arrow-left"
        width="50px"
        height="50px"
        onClick={() => handleSlideLeft(imageCarousel.current)}
      />
      <img
        src={arrow}
        className="configuration__arrow-right"
        width="50px"
        height="50px"
        onClick={() => handleSlideRight(imageCarousel.current)}
      />
      <div className="configuration__image-carousel" ref={imageCarousel}>
        {images}
      </div>
      <button
        className="configuration__btn btn-primary"
        onClick={() => toggleImageCarousel(imageCarousel.current, para.current)}
        onTouchEnd={e => {
          e.preventDefault();
          toggleImageCarousel(imageCarousel.current, para.current);
        }}
      >
        Pogledajte Konfiguracije
      </button>
    </div>
  );
}

export default Configuration;
