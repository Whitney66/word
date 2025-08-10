import type { OrgLevel, RegionScope, Channel } from '../store/useFilters';
import { useGlobalFiltersStore } from '../store/useFilters';
import './FilterBar.scss';

const years = [2023, 2024, 2025];
const months = Array.from({ length: 12 }, (_, i) => i + 1);

export const FilterBar = () => {
  const {
    year, month, orgLevel, regionScope, channel, compareYoY, compareBudget,
    setYear, setMonth, setOrgLevel, setRegionScope, setChannel, toggleYoY, toggleBudget,
  } = useGlobalFiltersStore();

  return (
    <div className="filter-bar">
      <div className="row">
        <label>
          年份
          <select value={year} onChange={(e) => setYear(Number(e.target.value))}>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </label>
        <label>
          月份
          <select value={month} onChange={(e) => setMonth(Number(e.target.value))}>
            {months.map((m) => (
              <option key={m} value={m}>{m.toString().padStart(2, '0')}</option>
            ))}
          </select>
        </label>
        <label>
          组织
          <select value={orgLevel} onChange={(e) => setOrgLevel(e.target.value as OrgLevel)}>
            <option value="group">集团</option>
            <option value="bu">事业群</option>
            <option value="company">三级公司</option>
            <option value="store">门店</option>
          </select>
        </label>
        <label>
          区域
          <select value={regionScope} onChange={(e) => setRegionScope(e.target.value as RegionScope)}>
            <option value="nationwide">全国</option>
            <option value="region">大区</option>
            <option value="province">省份</option>
            <option value="hainan">海南</option>
          </select>
        </label>
        <label>
          渠道
          <select value={channel} onChange={(e) => setChannel(e.target.value as Channel | 'all')}>
            <option value="all">全部</option>
            <option value="offline">线下门店</option>
            <option value="online_taxed">线上完税</option>
            <option value="cross_border">跨境</option>
            <option value="airport">机场口岸</option>
          </select>
        </label>
        <label className="toggle">
          <input type="checkbox" checked={compareYoY} onChange={toggleYoY} /> 同比
        </label>
        <label className="toggle">
          <input type="checkbox" checked={compareBudget} onChange={toggleBudget} /> 预算
        </label>
      </div>
    </div>
  );
};

export default FilterBar;