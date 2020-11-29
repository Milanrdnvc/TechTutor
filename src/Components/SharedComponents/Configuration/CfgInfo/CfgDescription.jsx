import pointer from '../../../../Pictures/pointer.png';
import '../../../../CSS/CfgDescription.css';

function CfgDescription() {
  return (
    <div className="cfg-desc">
      <h2 className="cfg-desc__title">Sample Racunar Do XYZ$</h2>
      <p className="cfg-desc__desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam hic
        atque, quidem corporis ratione totam a non deserunt aut corrupti itaque
        assumenda culpa accusantium, ut, consequatur ab? Rem, numquam! Quod?
        Lorem ipsum dolor sit
      </p>
      <button className="cfg-desc__btn">Pogledajte Testove</button>
      <div className="cfg-desc__pointer">
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
