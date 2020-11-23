import { useRef } from 'react';
import '../../CSS/GeneralInfo.css';

function GeneralInfo({ title, desc, img, png }) {
  const para = useRef(null);

  function animatePara() {
    const windowHeight = window.innerHeight;

    if (para.current) {
      const paraPos = para.current.getBoundingClientRect().top;

      if (paraPos <= windowHeight / 1.8 && paraPos >= 50) {
        para.current.classList.add('para-animate');
      }
    }
  }

  animatePara();
  window.addEventListener('scroll', animatePara);

  return (
    <div className="general-info" data-png={png}>
      <div className="general-info__text">
        <h2 className="general-info__title">{title}</h2>
        <p className="general-info__desc" ref={para}>
          {desc}
        </p>
      </div>
      <img src={img} alt="mascot" className="general-info__mascot-picture" />
    </div>
  );
}

export default GeneralInfo;
