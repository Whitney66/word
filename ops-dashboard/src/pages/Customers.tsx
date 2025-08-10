import KpiCard from '../components/KpiCard';
import ChartCard from '../components/ChartCard';
import { growthActiveOption, repurchaseOption, rfmHeatmapOption, membershipFunnelOption, intlShareOption } from '../visuals/customerCharts';
import './pages.scss';

const Customers = () => {
  return (
    <div className="page">
      <div className="kpi-row">
        <KpiCard label="新增客户数" value={65243} yoy={0.18} budgetRate={1.12} />
        <KpiCard label="活跃客户数" value={312004} yoy={0.12} budgetRate={1.05} />
        <KpiCard label="复购率" value={'28.4%'} yoy={0.04} budgetRate={1.09} positiveIsGood={true} />
        <KpiCard label="客单价ARPU(元)" value={368} yoy={0.03} budgetRate={1.02} />
        <KpiCard label="CLV(元)" value={1250} yoy={0.07} budgetRate={1.10} />
        <KpiCard label="NPS" value={52} yoy={0.05} budgetRate={1.06} positiveIsGood={true} />
      </div>

      <div className="grid two-cols">
        <ChartCard title="客户增长与活跃趋势" option={growthActiveOption()} height={340} />
        <ChartCard title="复购率与回购周期" option={repurchaseOption()} height={340} />
      </div>
      <div className="grid two-cols">
        <ChartCard title="RFM分群九宫格" option={rfmHeatmapOption()} height={360} />
        <ChartCard title="会员等级漏斗" option={membershipFunnelOption()} height={360} />
      </div>
      <div className="grid one-col">
        <ChartCard title="国际化客户占比与贡献" option={intlShareOption()} height={360} />
      </div>
    </div>
  );
};

export default Customers;