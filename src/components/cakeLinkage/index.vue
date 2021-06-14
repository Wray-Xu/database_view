<template>
  <div class="wrap-container sn-container">
    <div class="sn-content">
      <div class="sn-title"></div>
      <div class="sn-body">
        <div class="wrap-container">
          <div class="chartsdom" id="chart_bp"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cakeLinkage",
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
      let pList = ["合肥", "芜湖", "蚌埠", "马鞍山"];
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
            name: pList[i],
            value: temp[i],
          };
        }
        obj[y + "max"] = Math.floor(max / 100) * 100;
        obj[y + "sum"] = sum;
      }
      return obj;
    },
    getEchart() {
      let myChart = echarts.init(document.getElementById("chart_bp"));
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
            playInterval: 2000, //轮播速度
            data: [
              "2016-01-01",
              "2017-01-01",
              "2018-01-01",
              "2019-01-01",
              "2020-01-01",
            ],
            lineStyle: {
              color: "#179bf1",
            },
            left: -30, //调整时间轴的位置
            top: 115,
            padding:0,
            right: -30,
            // borderWidth:1,
            label: {
              color: "#2867a8",
              formatter(s) {
                return new Date(s).getFullYear();
              },
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
            emphasis: {
              label: {
                color: "#01d8ff",
                show: false,
              },
              checkpointStyle: {
                color: "#01d8ff",
                borderColor: "rgba(1, 216, 255, 0.5)",
                borderWidth: 5,
              },
              controlStyle: {
                borderColor: "rgba(1, 216, 255, 0.5)",
              },
              itemStyle: {
                color: "#01d8ff",
                borderColor: "rgba(1, 216, 225, 0.5)",
                borderWidth: 5,
              },
            },
          },
          grid: {
            //调整柱形图和饼图的比例大小
            bottom: "60%",
            right: "40%",
          },
          calculable: true,//拖拽更新
          //横坐标
          xAxis: [
            {
              type: "category",//数据类型为离散型数据
              data: ["合肥", "芜湖", "蚌埠", "马鞍山"],
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: "#2867a8",
                },
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              name: "销售排行（个）",
              splitLine: {//显示分割线
                show: false,
              },
              axisTick: {//显示坐标刻度
                show: false,
              },
              axisLine: {//显示坐标轴线
                show: true,
                lineStyle: {
                  color: "#2867a8",
                },
              },
            },
          ],
          series: [
            {
              name: "柱形图",
              type: "bar",
              //类型，柱状图
              barMaxWidth: 15,
              center: ["20%", "65%"],
              seriesLayoutBy: "row",
              markPoint: {
                symbol: "pin",
                itemStyle: {
                  normal: {
                    color: "#eb9b44",
                    shadowColor: "#eb9b44",
                    shadowBlur: 15,
                  },
                },
                data: [
                  { type: "max", name: "最大值" },
                  { type: "min", name: "最小值" },
                ],
              },
              // label: {
              //   show: true,
              //   position: 'top'
              // },
            },
            {
              // type=line ——-折线图
              // type=bar ——-柱状图
              // type=pie ——-饼图
              name: "比例",
              type: "pie",
              
              labelLine: {//设置标签
                length: 3,//第一条线
                length2:5,//第二条线
                },
              center: ["76%", "20%"],
              radius: "28%",
              z: 100,
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
                ],
              },
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
                ],
              },
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
                ],
              },
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
                ],
              },
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
                ],
              },
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
  width: 386px;//调整框子大小
  height: 200px;
  .chartsdom {
    width: 400px;
    height: 300px;
  }
}
</style>
