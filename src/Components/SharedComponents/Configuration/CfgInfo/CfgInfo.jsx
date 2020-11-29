import CfgDescription from './CfgDescription';
import CfgTable from './CfgTable';
import '../../../../CSS/CfgInfo.css';

function CfgInfo() {
  return (
    <div className="cfg-info-wrapper">
      <div className="cfg-info">
        <CfgDescription />
        <CfgTable />
      </div>
    </div>
  );
}

export default CfgInfo;
