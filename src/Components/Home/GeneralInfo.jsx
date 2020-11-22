import '../../CSS/GeneralInfo.css';
import test from '../../Pictures/mascot-waving.svg';

function GeneralInfo({ title, desc }) {
  return (
    <div className="general-info">
      <div className="general-info__text">
        <h2 className="general-info__title">{title}</h2>
        <p className="general-info__desc">{desc}</p>
      </div>
      <img
        src={test}
        alt="mascot picture"
        className="general-info__mascot-picture"
      />
    </div>
  );
}

export default GeneralInfo;
