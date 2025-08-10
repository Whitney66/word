export const monthlyTrendOption = (label: string) => ({
  grid: { left: 40, right: 20, top: 30, bottom: 30 },
  tooltip: { trigger: 'axis' },
  legend: { data: ['实际', '预算', '去年'], textStyle: { color: '#9bb1cd' } },
  xAxis: { type: 'category', data: Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0')), axisLabel: { color: '#9bb1cd' } },
  yAxis: { type: 'value', name: label, axisLabel: { color: '#9bb1cd' } },
  series: [
    { name: '实际', type: 'line', smooth: true, data: [12, 14, 16, 18, 20, 22, 25, 23, 26, 28, 30, 32] },
    { name: '预算', type: 'line', smooth: true, data: [11, 13, 15, 17, 19, 21, 23, 22, 24, 26, 27, 29], lineStyle: { type: 'dashed' } },
    { name: '去年', type: 'line', smooth: true, data: [9, 10, 12, 13, 15, 17, 18, 19, 20, 22, 23, 25], lineStyle: { opacity: 0.6 } },
  ],
});

export const profitWaterfallOption = () => ({
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  grid: { left: 60, right: 20, top: 20, bottom: 30 },
  xAxis: { type: 'category', data: ['收入', '成本', '毛利', '费用', '净利'], axisLabel: { color: '#9bb1cd' } },
  yAxis: { type: 'value', axisLabel: { color: '#9bb1cd' } },
  series: [
    {
      type: 'bar',
      data: [220, -160, 60, -35, 25],
      itemStyle: { color: (params: any) => (params.data >= 0 ? '#4da3ff' : '#ff6b6b') },
    },
  ],
});

export const budgetCompletionOption = () => ({
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  grid: { left: 120, right: 20, top: 20, bottom: 30 },
  xAxis: { type: 'value', axisLabel: { color: '#9bb1cd' }, max: 120 },
  yAxis: { type: 'category', data: ['集团', '事业群A', '事业群B', '公司1', '公司2', '公司3'], axisLabel: { color: '#9bb1cd' } },
  series: [
    { type: 'bar', data: [98, 105, 92, 110, 88, 96], label: { show: true, position: 'right', formatter: '{c}%' } },
  ],
});