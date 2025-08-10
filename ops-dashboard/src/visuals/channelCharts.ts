export const channelStackOption = () => ({
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  legend: { data: ['线下门店', '线上完税', '跨境', '机场口岸'], textStyle: { color: '#9bb1cd' } },
  xAxis: { type: 'category', data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一','十二'], axisLabel: { color: '#9bb1cd' } },
  yAxis: { type: 'value', axisLabel: { color: '#9bb1cd' } },
  series: [
    { name: '线下门店', type: 'bar', stack: 'total', data: [5,6,6,7,7,8,9,9,10,11,12,12] },
    { name: '线上完税', type: 'bar', stack: 'total', data: [3,3,4,4,5,5,6,6,7,7,8,9] },
    { name: '跨境', type: 'bar', stack: 'total', data: [1,1,1,2,2,2,3,3,3,4,4,4] },
    { name: '机场口岸', type: 'bar', stack: 'total', data: [1,1,1,1,1,1,2,2,2,2,2,3] },
  ],
});

export const marginCompareOption = () => ({
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: ['线下','线上完税','跨境','机场'], axisLabel: { color: '#9bb1cd' } },
  yAxis: { type: 'value', axisLabel: { color: '#9bb1cd' }, max: 50 },
  series: [{ type: 'bar', data: [26, 22, 28, 24], itemStyle: { color: '#4da3ff' }, label: { show: true, position: 'top', formatter: '{c}%' } }],
});

export const funnelOption = () => ({
  tooltip: { trigger: 'item' },
  legend: { data: ['曝光','访问','下单','支付','签收'], textStyle: { color: '#9bb1cd' } },
  series: [{
    type: 'funnel',
    left: '10%',
    width: '80%',
    label: { position: 'inside', color: '#dce5f5' },
    data: [
      { value: 1000000, name: '曝光' },
      { value: 420000, name: '访问' },
      { value: 120000, name: '下单' },
      { value: 95000, name: '支付' },
      { value: 90000, name: '签收' },
    ],
  }],
});

export const turnoverTrendOption = () => ({
  grid: { left: 40, right: 20, top: 30, bottom: 30 },
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0')), axisLabel: { color: '#9bb1cd' } },
  yAxis: { type: 'value', axisLabel: { color: '#9bb1cd' } },
  series: [
    { name: '周转次数', type: 'line', smooth: true, data: [6,6.5,7,7.2,7.5,8,8.3,8.1,8.6,8.9,9.1,9.4] },
  ],
});

export const hainanMatrixOption = () => ({
  tooltip: { position: 'top' },
  grid: { top: 40, left: 60, right: 20, bottom: 30 },
  xAxis: { type: 'category', data: ['海口','三亚','琼海','儋州','万宁'], splitArea: { show: true }, axisLabel: { color: '#9bb1cd' } },
  yAxis: { type: 'category', data: ['线下','线上完税','跨境','机场'], splitArea: { show: true }, axisLabel: { color: '#9bb1cd' } },
  visualMap: { min: 0, max: 100, calculable: true, orient: 'horizontal', left: 'center', bottom: 0 },
  series: [{
    name: '营收强度',
    type: 'heatmap',
    data: [
      [0,0,82],[1,0,74],[2,0,61],[3,0,58],[4,0,69],
      [0,1,76],[1,1,83],[2,1,72],[3,1,65],[4,1,69],
      [0,2,35],[1,2,41],[2,2,38],[3,2,29],[4,2,33],
      [0,3,44],[1,3,48],[2,3,45],[3,3,56],[4,3,52],
    ],
  }],
});