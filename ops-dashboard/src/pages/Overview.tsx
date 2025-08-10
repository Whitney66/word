import KpiCard from '../components/KpiCard';
import ChartCard from '../components/ChartCard';
import { monthlyTrendOption, profitWaterfallOption, budgetCompletionOption } from '../visuals/overviewCharts';
import './pages.scss';

const Overview = () => {
  return (
    <div className="page">
      <div className="kpi-row">
        <KpiCard label="营业收入(亿)" value={215.3} yoy={0.12} budgetRate={0.96} />
        <KpiCard label="净利润(亿)" value={18.6} yoy={0.08} budgetRate={1.05} />
        <KpiCard label="归母净利润(亿)" value={15.1} yoy={0.07} budgetRate={1.02} />
        <KpiCard label="ROE" value={'12.4%'} yoy={0.01} budgetRate={1.03} />
        <KpiCard label="毛利率" value={'28.6%'} yoy={0.005} budgetRate={0.99} positiveIsGood={true} />
        <KpiCard label="国际化业务占比" value={'22.1%'} yoy={0.15} budgetRate={1.10} positiveIsGood={true} />
      </div>

      <div className="grid two-cols">
        <ChartCard title="月度经营收入趋势" option={monthlyTrendOption('收入(亿)')} height={340} />
        <ChartCard title="月度净利润趋势" option={monthlyTrendOption('净利润(亿)')} height={340} />
      </div>

      <div className="grid two-cols">
        <ChartCard title="利润结构瀑布图" option={profitWaterfallOption()} height={360} />
        <ChartCard title="预算完成度排名" option={budgetCompletionOption()} height={360} />
      </div>
    </div>
  );
};

export default Overview;