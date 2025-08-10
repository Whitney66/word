export const categoryTreemapOption = () => ({
  tooltip: { formatter: '{b}: {c}亿' },
  series: [{
    type: 'treemap',
    data: [
      { name: '美妆', value: 52, children: [{ name: '护肤', value: 28 }, { name: '彩妆', value: 24 }] },
      { name: '酒水', value: 38, children: [{ name: '白酒', value: 22 }, { name: '葡萄酒', value: 16 }] },
      { name: '家电', value: 26, children: [{ name: '小家电', value: 14 }, { name: '厨房电器', value: 12 }] },
      { name: '服饰', value: 20, children: [{ name: '国潮', value: 12 }, { name: '其他', value: 8 }] },
    ],
    breadcrumb: { show: true },
  }],
});

export const skuScatterOption = () => ({
  tooltip: { formatter: (p: any) => `销售额: ${p.value[0]}万<br/>毛利率: ${p.value[1]}%<br/>周转: ${p.value[2]}次` },
  xAxis: { name: '销售额(万)', axisLabel: { color: '#9bb1cd' } },
  yAxis: { name: '毛利率(%)', axisLabel: { color: '#9bb1cd' } },
  series: [{
    type: 'scatter',
    symbolSize: (val: number[]) => Math.max(8, Math.min(40, val[2] * 2)),
    data: [
      [120, 32, 5], [80, 28, 6], [200, 22, 8], [60, 35, 3], [150, 26, 7],
      [90, 18, 4], [210, 31, 9], [130, 27, 5], [170, 29, 6], [110, 24, 4],
    ],
  }],
});

export const priceBandOption = () => ({
  tooltip: { trigger: 'axis' },
  legend: { data: ['销量','毛利率'], textStyle: { color: '#9bb1cd' } },
  xAxis: { type: 'category', data: ['0-99','100-299','300-499','500-999','1000+'], axisLabel: { color: '#9bb1cd' } },
  yAxis: [
    { type: 'value', name: '销量(千件)', axisLabel: { color: '#9bb1cd' } },
    { type: 'value', name: '毛利率(%)', axisLabel: { color: '#9bb1cd' } },
  ],
  series: [
    { name: '销量', type: 'bar', data: [18, 26, 22, 15, 6] },
    { name: '毛利率', type: 'line', yAxisIndex: 1, data: [18, 22, 28, 31, 24] },
  ],
});

export const guochaoTrendOption = () => ({
  tooltip: { trigger: 'axis' },
  legend: { data: ['国潮销售额','渗透率'], textStyle: { color: '#9bb1cd' } },
  xAxis: { type: 'category', data: Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0')), axisLabel: { color: '#9bb1cd' } },
  yAxis: [
    { type: 'value', name: '销售额(亿)', axisLabel: { color: '#9bb1cd' } },
    { type: 'value', name: '渗透率(%)', axisLabel: { color: '#9bb1cd' } },
  ],
  series: [
    { name: '国潮销售额', type: 'bar', data: [2,2.2,2.5,2.8,3.0,3.2,3.6,3.8,4.0,4.3,4.6,5.0] },
    { name: '渗透率', type: 'line', yAxisIndex: 1, data: [10,11,12,13,14,15,16,17,18,19,20,22] },
  ],
});

export const slowOosTableOption = () => ({
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  grid: { left: 120, right: 20, top: 20, bottom: 30 },
  xAxis: { type: 'value', axisLabel: { color: '#9bb1cd' } },
  yAxis: { type: 'category', data: ['A001','A214','B887','C002','D119','E332','F771','G982'], axisLabel: { color: '#9bb1cd' } },
  legend: { data: ['滞销评分','缺货次数'], textStyle: { color: '#9bb1cd' } },
  series: [
    { name: '滞销评分', type: 'bar', data: [92, 15, 88, 10, 76, 64, 58, 45] },
    { name: '缺货次数', type: 'bar', data: [1, 8, 0, 6, 2, 3, 1, 5] },
  ],
});