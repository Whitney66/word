export const growthActiveOption = () => ({
  grid: { left: 40, right: 20, top: 30, bottom: 30 },
  tooltip: { trigger: 'axis' },
  legend: { data: ['新增','活跃','沉默'], textStyle: { color: '#9bb1cd' } },
  xAxis: { type: 'category', data: Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0')), axisLabel: { color: '#9bb1cd' } },
  yAxis: { type: 'value', axisLabel: { color: '#9bb1cd' } },
  series: [
    { name: '新增', type: 'line', smooth: true, data: [5,6,7,8,9,10,11,9,10,12,13,14] },
    { name: '活跃', type: 'line', smooth: true, data: [20,21,23,24,26,27,29,28,30,31,33,35] },
    { name: '沉默', type: 'line', smooth: true, data: [8,7,7,6,6,5,5,6,5,5,4,4] },
  ],
});

export const repurchaseOption = () => ({
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: ['线下','线上完税','跨境','机场'], axisLabel: { color: '#9bb1cd' } },
  yAxis: { type: 'value', axisLabel: { color: '#9bb1cd' }, max: 60 },
  series: [{ type: 'bar', data: [26, 32, 24, 28], label: { show: true, position: 'top', formatter: '{c}%' } }],
});

export const rfmHeatmapOption = () => ({
  tooltip: {},
  xAxis: { type: 'category', data: ['R1','R2','R3'], axisLabel: { color: '#9bb1cd' } },
  yAxis: { type: 'category', data: ['F1','F2','F3'], axisLabel: { color: '#9bb1cd' } },
  visualMap: { min: 0, max: 100, calculable: true, orient: 'horizontal' },
  series: [{ type: 'heatmap', data: [[0,0,20],[1,0,35],[2,0,10],[0,1,40],[1,1,55],[2,1,30],[0,2,15],[1,2,25],[2,2,5]] }],
});

export const membershipFunnelOption = () => ({
  tooltip: { trigger: 'item' },
  series: [{
    type: 'funnel',
    left: '10%',
    width: '80%',
    label: { position: 'inside', color: '#dce5f5' },
    data: [
      { value: 100000, name: '注册' },
      { value: 60000, name: '首购' },
      { value: 25000, name: '复购' },
      { value: 8000, name: '高端会员' },
    ],
  }],
});

export const intlShareOption = () => ({
  tooltip: { trigger: 'axis' },
  legend: { data: ['客户数占比','营收占比'], textStyle: { color: '#9bb1cd' } },
  xAxis: { type: 'category', data: Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0')), axisLabel: { color: '#9bb1cd' } },
  yAxis: { type: 'value', axisLabel: { color: '#9bb1cd' }, max: 100 },
  series: [
    { name: '客户数占比', type: 'line', data: [15,16,17,18,19,20,21,22,22,23,24,25] },
    { name: '营收占比', type: 'line', data: [16,17,18,19,20,22,23,24,24,25,26,27] },
  ],
});