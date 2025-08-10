import KpiCard from '../components/KpiCard';
import ChartCard from '../components/ChartCard';
import { categoryTreemapOption, skuScatterOption, priceBandOption, guochaoTrendOption, slowOosTableOption } from '../visuals/productCharts';
import './pages.scss';

const Products = () => {
  return (
    <div className="page">
      <div className="kpi-row">
        <KpiCard label="商品销售额(亿)" value={186.5} yoy={0.09} budgetRate={0.98} />
        <KpiCard label="毛利率" value={'27.2%'} yoy={0.01} budgetRate={1.01} positiveIsGood={true} />
        <KpiCard label="动销率" value={'76.4%'} yoy={0.05} budgetRate={1.03} positiveIsGood={true} />
        <KpiCard label="缺货率" value={'3.6%'} yoy={-0.02} budgetRate={0.92} positiveIsGood={false} />
        <KpiCard label="滞销SKU数" value={1421} yoy={-0.12} budgetRate={0.88} positiveIsGood={false} />
        <KpiCard label="国潮商品销售额(亿)" value={36.2} yoy={0.28} budgetRate={1.22} positiveIsGood={true} />
      </div>

      <div className="grid two-cols">
        <ChartCard title="品类结构树图" option={categoryTreemapOption()} height={360} />
        <ChartCard title="SKU效率散点" option={skuScatterOption()} height={360} />
      </div>
      <div className="grid two-cols">
        <ChartCard title="价格带分布" option={priceBandOption()} height={360} />
        <ChartCard title="国潮趋势与占比" option={guochaoTrendOption()} height={360} />
      </div>
      <div className="grid one-col">
        <ChartCard title="滞销/缺货预警" option={slowOosTableOption()} height={360} />
      </div>
    </div>
  );
};

export default Products;