import './KpiCard.scss';

export interface KpiCardProps {
  label: string;
  value: string | number;
  yoy?: number; // year over year percent
  budgetRate?: number; // completion percent
  positiveIsGood?: boolean;
}

const formatPercent = (v?: number) => (v === undefined ? '-' : `${(v * 100).toFixed(1)}%`);

export const KpiCard = ({ label, value, yoy, budgetRate, positiveIsGood = true }: KpiCardProps) => {
  const yoyGood = yoy === undefined ? undefined : (positiveIsGood ? yoy >= 0 : yoy <= 0);
  const budgetGood = budgetRate === undefined ? undefined : budgetRate >= 1;
  return (
    <div className="kpi-card">
      <div className="kpi-card__label">{label}</div>
      <div className="kpi-card__value">{value}</div>
      <div className="kpi-card__meta">
        <span className={`tag ${yoyGood === undefined ? '' : yoyGood ? 'good' : 'bad'}`}>同比 {formatPercent(yoy)}</span>
        <span className={`tag ${budgetGood === undefined ? '' : budgetGood ? 'good' : 'bad'}`}>预算达成 {formatPercent(budgetRate)}</span>
      </div>
    </div>
  );
};

export default KpiCard;