import CfgDescription from './CfgDescription';
import CfgTable from './CfgTable';
import '../../../../CSS/CfgInfo.css';

function CfgInfo({ title, price, benchmark, components, desc }) {
  window.scrollTo(0, 0);
  return (
    <div className="cfg-info-wrapper">
      <div className="cfg-info">
        <CfgDescription
          title={title}
          price={price}
          benchmark={benchmark}
          desc={desc}
        />
        <CfgTable components={components} />
      </div>
    </div>
  );
}

export default CfgInfo;
