import '../../../../CSS/CfgTable.css';
import mascotSitting from '../../../../Pictures/mascot-sitting.svg';

function CfgTable({ components }) {
  return (
    <div className="cfg-table">
      <div className="cfg-table__grid">
        <img
          src={mascotSitting}
          alt="mascot sitting"
          width="250vw"
          height="250vh"
          className="cfg-table__mascot-img"
        />
        <div className="cfg-table__grid-header">Komponenta</div>
        <div className="cfg-table__grid-header">Model</div>
        <div className="cfg-table__grid-header">Cena</div>
        <div className="cfg-table__grid-header"></div>
        <div className="cfg-table__grid-row">CPU</div>
        <div className="cfg-table__grid-row">{components.CPU.name}</div>
        <div className="cfg-table__grid-row">{components.CPU.price}</div>
        <div className="cfg-table__grid-row">
          <a
            className="btn-primary"
            href={components.CPU.buyLink}
            target="_blank"
            rel="noreferrer"
          >
            Kupi
          </a>
        </div>
        <div className="cfg-table__grid-row">GPU</div>
        <div className="cfg-table__grid-row">{components.GPU.name}</div>
        <div className="cfg-table__grid-row">{components.GPU.price}</div>
        <div className="cfg-table__grid-row">
          <a
            className="btn-primary"
            href={components.GPU.buyLink}
            target="_blank"
            rel="noreferrer"
          >
            Kupi
          </a>
        </div>
        <div className="cfg-table__grid-row">Matična Ploča</div>
        <div className="cfg-table__grid-row">{components.motherboard.name}</div>
        <div className="cfg-table__grid-row">
          {components.motherboard.price}
        </div>
        <div className="cfg-table__grid-row">
          <a
            className="btn-primary"
            href={components.motherboard.buyLink}
            target="_blank"
            rel="noreferrer"
          >
            Kupi
          </a>
        </div>
        <div className="cfg-table__grid-row">RAM</div>
        <div className="cfg-table__grid-row">{components.RAM.name}</div>
        <div className="cfg-table__grid-row">{components.RAM.price}</div>
        <div className="cfg-table__grid-row">
          <a
            className="btn-primary"
            href={components.RAM.buyLink}
            target="_blank"
            rel="noreferrer"
          >
            Kupi
          </a>
        </div>
        <div className="cfg-table__grid-row">Skladište (SSD)</div>
        <div className="cfg-table__grid-row">{components.SSD.name}</div>
        <div className="cfg-table__grid-row">{components.SSD.price}</div>
        <div className="cfg-table__grid-row">
          <a
            className="btn-primary"
            href={components.SSD.buyLink}
            target="_blank"
            rel="noreferrer"
          >
            Kupi
          </a>
        </div>
        <div className="cfg-table__grid-row">Skladište (HDD)</div>
        <div className="cfg-table__grid-row">{components.HDD.name}</div>
        <div className="cfg-table__grid-row">{components.HDD.price}</div>
        <div className="cfg-table__grid-row">
          <a
            className="btn-primary"
            href={components.HDD.buyLink}
            target="_blank"
            rel="noreferrer"
          >
            Kupi
          </a>
        </div>
        <div className="cfg-table__grid-row">Napajanje</div>
        <div className="cfg-table__grid-row">{components.PSU.name}</div>
        <div className="cfg-table__grid-row">{components.PSU.price}</div>
        <div className="cfg-table__grid-row">
          <a
            className="btn-primary"
            href={components.PSU.buyLink}
            target="_blank"
            rel="noreferrer"
          >
            Kupi
          </a>
        </div>
        <div className="cfg-table__grid-row">Kućište</div>
        <div className="cfg-table__grid-row">{components.case.name}</div>
        <div className="cfg-table__grid-row">{components.case.price}</div>
        <div className="cfg-table__grid-row">
          <a
            className="btn-primary"
            href={components.case.buyLink}
            target="_blank"
            rel="noreferrer"
          >
            Kupi
          </a>
        </div>
        <div className="cfg-table__final-price">Ukupna Cena: 2000$</div>
      </div>
    </div>
  );
}

export default CfgTable;
