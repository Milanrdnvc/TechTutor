import pointer from '../../../../Pictures/pointer.png';
import { pointerSmoothScroll } from '../../../../helpers';
import '../../../../CSS/CfgDescription.css';

function CfgDescription({ title, desc, benchmark }) {
  return (
    <div className="cfg-desc">
      <h2 className="cfg-desc__title">{title}</h2>
      <p className="cfg-desc__desc">{desc}</p>
      <a
        href={benchmark}
        className="cfg-desc__btn"
        target="_blank"
        rel="noreferrer"
      >
        Pogledajte Testove
      </a>
      <div
        className="cfg-desc__pointer"
        onClick={pointerSmoothScroll}
        onTouchEnd={e => {
          e.preventDefault();
          pointerSmoothScroll();
        }}
      >
        <h4 className="cfg-desc__pointer-text">Istraži</h4>
        <img
          src={pointer}
          alt="pokazivac na dole"
          className="cfg-desc__pointer-img"
        />
      </div>
    </div>
  );
}

export default CfgDescription;
