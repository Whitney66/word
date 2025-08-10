import ReactECharts from 'echarts-for-react';
import './ChartCard.scss';

export interface ChartCardProps {
  title: string;
  option: any;
  height?: number | string;
}

export const ChartCard = ({ title, option, height = 300 }: ChartCardProps) => {
  return (
    <div className="chart-card" style={{ height }}>
      <div className="chart-card__header">{title}</div>
      <div className="chart-card__body">
        <ReactECharts option={option} notMerge={true} lazyUpdate={true} style={{ height: '100%', width: '100%' }} />
      </div>
    </div>
  );
};

export default ChartCard;