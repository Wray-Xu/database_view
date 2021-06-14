<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <div class="sn-title"></div> 
      <div class="sn-body"> 
        <div class="wrap-container"> 
          <div class="chartsdom" id="chart_ptrend"></div>
        </div> 
      </div> 
    </div>   
  </div>
</template>

<script>

export default {
  name: "pyramidTrend",
  data() {
    return {
      option: null,
      dataMap: {}
    }
  }, 
  mounted() {
    this.getEchart();
  },
  methods: {
    dataFormatter(obj) {
      let pList = ['合肥','芜湖','蚌埠','淮南','淮北','马鞍山','安庆','池州','黄山','六安','宣城','阜阳','宿州','铜陵'];
      let temp;
      for (let x = 0; x < 3; x++) {
          let max = 0;
          let sum = 0;
          temp = obj[x];
          for (let i = 0, l = temp.length; i < l; i++) {
              max = Math.max(max, temp[i]);
              sum += temp[i];
              obj[x][i] = {
                name: pList[i],
                value: temp[i]
              };
          }
          obj[x + 'max'] = Math.floor(max / 100) * 100;
          obj[x + 'sum'] = sum;
      }
      return obj;
    },
    getEchart() {
      let myChart = echarts.init(document.getElementById('chart_ptrend'));
      let itemStyle = {
        barBorderRadius: [15, 0],
        color: '#0084ff'
      }
 
      this.dataMap.dataType = this.dataFormatter({
        2:[124,145,261,54,195,131,150,39,11,40,23,51,45,88],
        1:[136,159,205,41,306,7,77,101,24,34,8,15,14,9],
        0:[118,128,220,47,92,14,9,11,113,61,11,22,33,5],
      });

      this.option = {
        baseOption: {
          timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 1000,
            data: ['第一季度', '第二季度', '第三季度'],
            left: 80,
            right: 80,
            bottom: 3,
            lineStyle: {
              color: '#179bf1'
            },
            label: {
              color: '#fff'
            },
            checkpointStyle: {
              color: '#01d8ff',
              symbolSize: 10,
              borderColor: 'rgba(1, 216, 255, 0.5)',
              borderWidth: 5,
            },
            controlStyle: {
              show: false,
            }, 
            itemStyle: {
              borderColor: '#004b85',
              borderWidth: 1,
              shadowColor: 'rgba(1, 216, 225, 0.5)',
              shadowBlur: 5
            },
            emphasis: {
              label: {
                color: '#01d8ff',
                show: false
              },
              checkpointStyle: {
                color: '#01d8ff',
                borderColor: 'rgba(1, 216, 255, 0.5)',
                borderWidth: 5,
              },
              itemStyle: {
                color: '#01d8ff',
                borderColor: 'rgba(1, 216, 225, 0.5)',
                borderWidth: 5
              } 
            }
          },
          calculable: true,
          grid: {
            top: '10%',
            bottom: '25%'
          },
          xAxis: [{
            type: 'category',
            axisLabel: {
              interval: 0
            },
            data: ['合肥','芜湖','蚌埠','淮南','淮北','马鞍山','安庆','池州','黄山','六安','宣城','阜阳','宿州','铜陵'],
            splitLine: { 
              show: false 
            },
            axisTick: {
              show: false
            }, 
            axisLine: {
              show: true,
              lineStyle: {
                color: '#2867a8',
              }
            },
          }],
          yAxis: [{
            type: 'value',
            name: '数量（件）',
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            }, 
            axisLine: {
              show: true,
              lineStyle: {
                color: '#2867a8'
              }
            }
          }],
          series: [{
            name: '一类', 
            type: 'line',
            barWidth: 15,
            legendHoverLink: true,
            label: {
              show: true,
              position: 'top',
              color: '#fff'
            },
          }]
        },
        options: [{
          series: [{
            data: this.dataMap.dataType['0'],
            itemStyle: itemStyle
          }]
        },{
          series: [{
            data: this.dataMap.dataType['1'],
            itemStyle: itemStyle
          }]
        },{
          series: [{
            data: this.dataMap.dataType['2'],
            itemStyle: itemStyle
          }]
        }]
      }

      myChart.setOption(this.option, true);

      window.addEventListener('resize', () => {
        myChart.resize();
      });
    }
  },
  beforeDestroy() {
    
  }
}; 
</script>

<style lang="scss" scoped>
.sn-container {
  left: 0px;
  top: -20px;
  width: 507px;
  height: 307px;
  .chartsdom {
    width: 100%;
    height: 100%;
  }
}


</style>
