<template>
  <div class="wrap-container sn-container">
    <div class="sn-content">
      <div class="sn-title"></div>
      <div class="sn-body">
        <div class="wrap-container">
          <div class="chartsdom" id="good-sell"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsell",
  data() {
    return {
      option: null,
      dataMap: {},
    };
  },
  mounted() {
    this.getEchart();
  },
  methods: {
    dataFormatter(obj) {
      let temp;
      //设置显示范围
      for (let y = 2016; y <= 2020; y++) { 
        let max = 0;
        let sum = 0;
        temp = obj[y];
        for (let i = 0, l = temp.length; i < l; i++) {
          max = Math.max(max, temp[i]);
          sum += temp[i];
          obj[y][i] = {
            value: temp[i],
          };
        }
        obj[y + "max"] = Math.floor(max / 100) * 100;
        obj[y + "sum"] = sum;
      }
      return obj;
    },
    getEchart() {
      let myChart = echarts.init(document.getElementById("good-sell"));
      let itemStyleJR = {
        color: "#d6d638",
      };
      let itemStyleZW = {
        color: "#00c86c",
      };
      let itemStyleYL = {
        color: "#07d8ff",
      };
      let itemStyleIT = {
        color: "#0c71cf",
      };
      let itemStyleXL = {
        color: "#07dfff",
      };
      let itemStyleXD = {
        color: "#fc71cf",
      };

      this.dataMap.dataJR = this.dataFormatter({
        //max : 4000,
        2020: [136, 159, 905, 305],
        2019: [124, 145, 562, 285],
        2018: [118, 128, 207, 265],
        2017: [112, 122, 234, 245],
        2016: [101, 110, 804, 225],
      });

      this.dataMap.dataZW = this.dataFormatter({
        //max : 26600,
        2020: [752, 928, 126, 210],
        2019: [388, 840, 707, 208],
        2018: [855, 987, 959, 207],
        2017: [626, 709, 701, 206],
        2016: [509, 892, 201, 205],
      });

      this.dataMap.dataYL = this.dataFormatter({
        //max : 25000,
        2020: [363, 219, 483, 505],
        2019: [600, 438, 123, 405],
        2018: [179, 405, 668, 305],
        2017: [375, 2886, 276, 205],
        2016: [236, 250, 408, 105],
      });

      this.dataMap.dataIT = this.dataFormatter({
        //max : 26600,
        2020: [752, 928, 126, 255],
        2019: [388, 840, 707, 245],
        2018: [855, 987, 959, 235],
        2017: [626, 709, 701, 225],
        2016: [509, 892, 201, 215],
      });
 
      this.option = {
        baseOption: {
          timeline: {
            //时间轴
            axisType: "category", //数据类型，离散数据
            autoPlay: true,
            playInterval: 3000, //轮播速度
            data: ['第一季度', '第二季度', '第三季度'],
            lineStyle: {
              color: "#179bf1",
            }, 
            left: -20, //调整时间轴的位置
            top: 215,
            padding:0,
            right: -50,
            // borderWidth:1,
            label: {
              color: "#fff",
            },
            checkpointStyle: {
              color: "#01d8ff",
              symbolSize: 10,
              borderColor: "rgba(1, 216, 255, 0.5)",
              borderWidth: 5, //浮动点大小
            },
            controlStyle: {
              showPlayBtn: false,
              borderColor: "#01bde6",
              itemGap: 80, //浮动时间轴大小
            },
            itemStyle: {
              // color: '#004b85',
              borderColor: "#004b85",
              borderWidth: 1,
              shadowColor: "rgba(1, 216, 225, 0.5)",
              shadowBlur: 5,
            },
          },
          grid: {        
            bottom: "60%",
            right: "40%",
          },          
          series: [
            
            {    
              type: "pie",              
              labelLine: {//设置标签
                length: 8,//第一条线
                length2:15,//第二条线
                },
              center: ["56%", "40%"],
              radius: "60%",
              z: 10,
            },
          ],
        },
        options: [
          {
            series: [             
              {
                data: [
                  {
                    name: "萝卜",
                    value: this.dataMap.dataJR["2016sum"],
                    itemStyle: itemStyleJR,
                  },
                  {
                    name: "洋葱",
                    value: this.dataMap.dataZW["2016sum"],
                    itemStyle: itemStyleZW,
                  },
                  {
                    name: "白菜",
                    value: this.dataMap.dataYL["2016sum"],
                    itemStyle: itemStyleYL,
                  },
                  {
                    name: "土豆",
                    value: this.dataMap.dataIT["2016sum"],
                    itemStyle: itemStyleIT,
                  },
                  {
                    name: "山药",
                    value: this.dataMap.dataIT["2016sum"],
                    itemStyle: itemStyleXL,
                  },
                  {
                    name: "花菜",
                    value: this.dataMap.dataIT["2016sum"],
                    itemStyle: itemStyleXD,
                  },
                ],
              },
            ],
          },
          {
            series: [
             
              {
                data: [
                  {
                    name: "萝卜",
                    value: this.dataMap.dataJR["2017sum"],
                    itemStyle: itemStyleJR,
                  },
                  {
                    name: "洋葱",
                    value: this.dataMap.dataZW["2017sum"],
                    itemStyle: itemStyleZW,
                  },
                  {
                    name: "白菜",
                    value: this.dataMap.dataYL["2017sum"],
                    itemStyle: itemStyleYL,
                  },
                  {
                    name: "土豆",
                    value: this.dataMap.dataIT["2017sum"],
                    itemStyle: itemStyleIT,
                  },
                  {
                    name: "山药",
                    value: this.dataMap.dataIT["2017sum"],
                    itemStyle: itemStyleXL,
                  },
                  {
                    name: "花菜",
                    value: this.dataMap.dataIT["2017sum"],
                    itemStyle: itemStyleXD,
                  },
                ],
              },
            ],
          },
          {
            series: [              
              {
                data: [
                  {
                    name: "萝卜",
                    value: this.dataMap.dataJR["2018sum"],
                    itemStyle: itemStyleJR,
                  },
                  {
                    name: "洋葱",
                    value: this.dataMap.dataZW["2018sum"],
                    itemStyle: itemStyleZW,
                  },
                  {
                    name: "白菜",
                    value: this.dataMap.dataYL["2018sum"],
                    itemStyle: itemStyleYL,
                  },
                  {
                    name: "土豆",
                    value: this.dataMap.dataIT["2018sum"],
                    itemStyle: itemStyleIT,
                  },
                  {
                    name: "山药",
                    value: this.dataMap.dataIT["2018sum"],
                    itemStyle: itemStyleXL,
                  },
                  {
                    name: "花菜",
                    value: this.dataMap.dataIT["2018sum"],
                    itemStyle: itemStyleXD,
                  },
                ],
              },
            ],
          },
          {
            series: [              
              {
                data: [
                  {
                    name: "萝卜",
                    value: this.dataMap.dataJR["2019sum"],
                    itemStyle: itemStyleJR,
                  },
                  {
                    name: "洋葱",
                    value: this.dataMap.dataZW["2019sum"],
                    itemStyle: itemStyleZW,
                  },
                  {
                    name: "白菜",
                    value: this.dataMap.dataYL["2019sum"],
                    itemStyle: itemStyleYL,
                  },
                  {
                    name: "土豆",
                    value: this.dataMap.dataIT["2019sum"],
                    itemStyle: itemStyleIT,
                  },
                  {
                    name: "山药",
                    value: this.dataMap.dataIT["2019sum"],
                    itemStyle: itemStyleXL,
                  },
                  {
                    name: "花菜",
                    value: this.dataMap.dataIT["2019sum"],
                    itemStyle: itemStyleXD,
                  },
                ],
              },
            ],
          },
          {
            series: [              
              {
                data: [
                  {
                    name: "萝卜",
                    value: this.dataMap.dataJR["2020sum"],
                    itemStyle: itemStyleJR,
                  },
                  {
                    name: "洋葱",
                    value: this.dataMap.dataZW["2020sum"],
                    itemStyle: itemStyleZW,
                  },
                  {
                    name: "白菜",
                    value: this.dataMap.dataYL["2020sum"],
                    itemStyle: itemStyleYL,
                  },
                  {
                    name: "土豆",
                    value: this.dataMap.dataIT["2020sum"],
                    itemStyle: itemStyleIT,
                  },
                  {
                    name: "山药",
                    value: this.dataMap.dataIT["2020sum"],
                    itemStyle: itemStyleXL,
                  },
                  {
                    name: "花菜",
                    value: this.dataMap.dataIT["2020sum"],
                    itemStyle: itemStyleXD,
                  },
                ],
              },
            ],
          },
        ],
      };

      myChart.setOption(this.option, true);

      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
  },
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
.sn-container {
  left: 0px;
  top: 0px;
  width: 586px;//调整框子大小
  height: 400px;
  .chartsdom {
    width: 400px;
    height: 300px;
  }
}
</style>
