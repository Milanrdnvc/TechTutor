import { useRef, useEffect } from 'react';
import { animatePara } from '../../helpers';
import '../../CSS/GeneralInfo.css';

function GeneralInfo({ title, desc, img, png }) {
  const para = useRef(null);

  useEffect(() => {
    const handleAnimatePara = () => animatePara(para.current);
    window.addEventListener('scroll', handleAnimatePara);
    return () => window.removeEventListener('scroll', handleAnimatePara);
  }, []);

  return png ? (
    <div className="general-info" data-png={png}>
      <img src={img} alt="mascot" className="general-info__mascot-picture" />
      <div className="general-info__text">
        <h2 className="general-info__title">{title}</h2>
        <p className="general-info__desc" ref={para}>
          {desc}
        </p>
      </div>
    </div>
  ) : (
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
