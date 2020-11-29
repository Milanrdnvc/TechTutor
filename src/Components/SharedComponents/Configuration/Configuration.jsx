import React, { useRef, useEffect } from 'react';
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
      onClick={() => console.log(i)}
    >
      <span>2000$</span>
    </div>
  );
}

function toggleImageCarousel(imageCarousel, para, arrows) {
  if (!para.classList.contains('para-hide')) {
    para.classList.add('para-hide');
    imageCarousel.classList.add('image-carousel-show');
    arrows.forEach(arrow => arrow.current.classList.add('arrows-show'));
  } else {
    para.classList.remove('para-hide');
    imageCarousel.classList.remove('image-carousel-show');
    arrows.forEach(arrow => arrow.current.classList.remove('arrows-show'));
  }
}

let transitionEnd = true;

function handleSlideRight(imageCarousel, counter) {
  const numOfImages = imageCarousel.querySelectorAll('div').length;
  if (!transitionEnd) return;
  if (Math.abs(counter) >= numOfImages - 1) return;
  counter[0]++;
  transitionEnd = false;
  imageCarousel.style.transform = `translateX(${
    counter * -100
  }%) translateY(-50%)`;
}

function handleSlideLeft(imageCarousel, counter) {
  const numOfImages = imageCarousel.querySelectorAll('div').length;
  if (!transitionEnd) return;
  if (counter <= 0) return;
  counter[0]--;
  if (counter <= numOfImages) {
    transitionEnd = false;
    imageCarousel.style.transform = `translateX(${
      counter * -100
    }%) translateY(-50%)`;
  }
}

function Configuration({ img }) {
  const para = useRef(null);
  const imageCarousel = useRef(null);
  const arrows = useRef([React.createRef(), React.createRef()]);
  const counter = [0];

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
        onClick={() => handleSlideLeft(imageCarousel.current, counter)}
        onTouchEnd={e => {
          e.preventDefault();
          handleSlideLeft(imageCarousel.current, counter);
        }}
        alt="left arrow"
        ref={arrows.current[0]}
      />
      <img
        src={arrow}
        className="configuration__arrow-right"
        width="50px"
        height="50px"
        onClick={() => handleSlideRight(imageCarousel.current, counter)}
        onTouchEnd={e => {
          e.preventDefault();
          handleSlideRight(imageCarousel.current, counter);
        }}
        alt="right arrow"
        ref={arrows.current[1]}
      />
      <div
        className="configuration__image-carousel"
        ref={imageCarousel}
        onTransitionEnd={() => (transitionEnd = true)}
      >
        {images}
      </div>
      <button
        className="configuration__btn btn-primary"
        onClick={() =>
          toggleImageCarousel(
            imageCarousel.current,
            para.current,
            arrows.current
          )
        }
        onTouchEnd={e => {
          e.preventDefault();
          toggleImageCarousel(
            imageCarousel.current,
            para.current,
            arrows.current
          );
        }}
      >
        Pogledajte Konfiguracije
      </button>
    </div>
  );
}

export default Configuration;
