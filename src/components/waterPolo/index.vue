<template>
  <div class="wrap-container sn-container"> 
          <div class="chartsdom" id="chart_polo"></div> 
        </div> 
</template>

<script> 


export default {
  name: "waterPolo",
  data() {
    return {
      option: null   
    }
  }, 
  mounted() {
    this.getEchart();
  },
  methods: {
    getEchart() {
      let myChart = echarts.init(document.getElementById('chart_polo'));
      this.option = {
        series: [{
          type: 'liquidFill',
          data: [0.73],
          radius: '70%', 
          color: ['#00b9f5'],
          backgroundStyle: {
            color: 'rgba(0, 0, 0, 0.5)',//水球的颜色
            borderColor: '#007bff',
            borderWidth: 3,
            shadowColor: 'rgba(0, 123, 225, 0.4)',
            shadowBlur: 20
          },
          outline: {
            show: false,
          }, 
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
  top: 0px;
  width: 200px;
  height: 200px;
  .chartsdom {
    width: 100%;
    height: 100%;
  }
}
</style>
