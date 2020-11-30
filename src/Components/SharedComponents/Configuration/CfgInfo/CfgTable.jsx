import '../../../../CSS/CfgTable.css';
import mascotSitting from '../../../../Pictures/mascot-sitting.svg';

function CfgTable() {
  return (
    <div className="cfg-table">
      <div className="cfg-table__grid">
        <img
          src={mascotSitting}
          alt="mascot sitting"
          width="150vw"
          height="150vh"
          className="cfg-table__mascot-img"
        />
        <div className="cfg-table__grid-header">Komponenta</div>
        <div className="cfg-table__grid-header">Model</div>
        <div className="cfg-table__grid-header">Cena</div>
        <div className="cfg-table__grid-header"></div>
        <div className="cfg-table__grid-row">CPU</div>
        <div className="cfg-table__grid-row">Name CPU</div>
        <div className="cfg-table__grid-row">4000$</div>
        <div className="cfg-table__grid-row">
          <button className="btn-primary">Kupi</button>
        </div>
        <div className="cfg-table__grid-row">CPU</div>
        <div className="cfg-table__grid-row">Name CPU</div>
        <div className="cfg-table__grid-row">4000$</div>
        <div className="cfg-table__grid-row">
          <button className="btn-primary">Kupi</button>
        </div>
        <div className="cfg-table__grid-row">CPU</div>
        <div className="cfg-table__grid-row">Name CPU</div>
        <div className="cfg-table__grid-row">4000$</div>
        <div className="cfg-table__grid-row">
          <button className="btn-primary">Kupi</button>
        </div>
        <div className="cfg-table__grid-row">CPU</div>
        <div className="cfg-table__grid-row">Name CPU</div>
        <div className="cfg-table__grid-row">4000$</div>
        <div className="cfg-table__grid-row">
          <button className="btn-primary">Kupi</button>
        </div>
        <div className="cfg-table__grid-row">CPU</div>
        <div className="cfg-table__grid-row">Name CPU</div>
        <div className="cfg-table__grid-row">4000$</div>
        <div className="cfg-table__grid-row">
          <button className="btn-primary">Kupi</button>
        </div>
        <div className="cfg-table__grid-row">CPU</div>
        <div className="cfg-table__grid-row">Name CPU</div>
        <div className="cfg-table__grid-row">4000$</div>
        <div className="cfg-table__grid-row">
          <button className="btn-primary">Kupi</button>
        </div>
        <div className="cfg-table__grid-row">CPU</div>
        <div className="cfg-table__grid-row">Name CPU</div>
        <div className="cfg-table__grid-row">4000$</div>
        <div className="cfg-table__grid-row">
          <button className="btn-primary">Kupi</button>
        </div>
        <div className="cfg-table__final-price">Ukupna Cena: 2000$</div>
      </div>
    </div>
  );
}

export default CfgTable;
