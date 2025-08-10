import KpiCard from '../components/KpiCard';
import ChartCard from '../components/ChartCard';
import { channelStackOption, marginCompareOption, funnelOption, turnoverTrendOption, hainanMatrixOption } from '../visuals/channelCharts';
import './pages.scss';

const Channels = () => {
  return (
    <div className="page">
      <div className="kpi-row">
        <KpiCard label="渠道营收(亿)" value={128.2} yoy={0.10} budgetRate={0.93} />
        <KpiCard label="毛利率" value={'24.8%'} yoy={-0.02} budgetRate={0.98} positiveIsGood={true} />
        <KpiCard label="预算完成率" value={'93.0%'} yoy={-0.01} budgetRate={0.93} positiveIsGood={true} />
        <KpiCard label="客单价(元)" value={486} yoy={0.06} budgetRate={1.04} />
        <KpiCard label="线上完税GMV(亿)" value={52.4} yoy={0.22} budgetRate={1.08} />
        <KpiCard label="转化率" value={'3.1%'} yoy={0.004} budgetRate={1.02} />
      </div>

      <div className="grid two-cols">
        <ChartCard title="渠道营收结构" option={channelStackOption()} height={340} />
        <ChartCard title="渠道毛利率对比" option={marginCompareOption()} height={340} />
      </div>
      <div className="grid two-cols">
        <ChartCard title="线上完税渠道漏斗" option={funnelOption()} height={360} />
        <ChartCard title="零告业务周转率(次)" option={turnoverTrendOption()} height={360} />
      </div>
      <div className="grid one-col">
        <ChartCard title="海南区域渠道矩阵" option={hainanMatrixOption()} height={360} />
      </div>
    </div>
  );
};

export default Channels;