import { useRef } from 'react';
import { animatePara } from '../../../helpers';
import test from '../../../Pictures/gejmerski2.png';
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

function Configuration({ img }) {
  const para = useRef(null);
  const imageCarousel = useRef(null);

  function toggleImageCarousel() {
    if (!para.current.classList.contains('para-hide')) {
      para.current.classList.add('para-hide');
      imageCarousel.current.classList.add('image-carousel-show');
    } else {
      para.current.classList.remove('para-hide');
      imageCarousel.current.classList.remove('image-carousel-show');
    }
  }

  window.addEventListener('scroll', () => {
    if (para.current) animatePara(para.current);
  });

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
      <div className="configuration__image-carousel" ref={imageCarousel}>
        {images}
      </div>
      <button
        className="configuration__btn btn-primary"
        onClick={toggleImageCarousel}
        onTouchEnd={toggleImageCarousel}
      >
        Pogledajte Konfiguracije
      </button>
    </div>
  );
}

export default Configuration;
