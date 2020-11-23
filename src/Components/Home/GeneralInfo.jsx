import '../../CSS/GeneralInfo.css';

function GeneralInfo({ title, desc, img, png }) {
  return (
    <div className="general-info" data-png={png}>
      <div className="general-info__text">
        <h2 className="general-info__title">{title}</h2>
        <p className="general-info__desc">{desc}</p>
      </div>
      <img
        src={img}
        alt="mascot picture"
        className="general-info__mascot-picture"
      />
    </div>
  );
}

export default GeneralInfo;
