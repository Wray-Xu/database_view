<template>
  <!--  必须的手动指定高度，不然高度就是0就显示不出来-->
  <div
    id="anhui_map"
    style="left: 260px;top:-70px; width: 500px; height: 600px"
  ></div>
</template>

<script>
import axios from "axios";
import anhui from "../echartsmapanhui/anhui.json"
export default {
  name: "echartsmapanhui", 
  data() {
    return {};
  },

  mounted() {
    const _this = this;
    axios.get("").then((response) => {
      console.log(response);
      _this.canvasanhuiMap(response.data);
    });
  },
  methods: {
    //绘制安徽地图,传入鼠标移入时显示的各个市数据
    canvasanhuiMap: function (mapDta) {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("anhui_map"));
      myChart.showLoading();
      this.$echarts.registerMap("anhui", anhui);
      myChart.hideLoading();

      // 绘制图表
      let option = {
        title: {
          text: "安徽地图",
          left: "center",
        },
        //参考配置文档：https://echarts.baidu.com/option.html#tooltip
        tooltip: {
          show: true, //是否显示提示框组件，包括提示框浮层和 axisPointer。 [ default: true ]
          trigger: "item", //触发类型。 [ default: 'item' ]
          showDelay: 0,
          transitionDuration: 0.2,
          formatter: function (params) {
            // console.log(params)
            // var value = (params.value + '').split('.');
            // value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
            return (
              params.seriesName + "<br/>" + params.name + ": " + params.value
            );
          },
        },
        //参考配置文档：https://echarts.baidu.com/option.html#series-map.type
        series: [
          {
            name: "数据", //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。见上：可以在tooltip中获取到
            type: "map", //指定是地图类型
            map: "anhui", //和上面registerMap中的一直
            selectedMode: "single", //选中模式，表示是否支持多个选中，默认关闭，支持布尔值和字符串，字符串取值可选'single'表示单选，或者'multiple'表示多选。

            itemStyle: {
              areaColor: "#169bd6",
              borderColor: "#0f0f0f",
            },
            emphasis: {
              //强调的样式，也就是鼠标移入后的样式==高亮状态下的多边形和标签样式。
              itemStyle: {
                areaColor: "#d1dbe5",
              },
            },
            label: {
              normal: {
                show: true, //是否显示标签，这里显示的就是省份的名字。默认就是false
              },
              emphasis: {
                show: false, //在鼠标移入时，是否显示，如果不写，默认是显示的
              },
            },
            // 鼠标移入对应省份区域显示对应的值：可以异步获取
            data: mapDta,
          },
        ],
      };
      myChart.setOption({
        title: {
          text: "",
        },
        tooltip: {
          trigger: "item",
        },
        dataRange: {
          x: "left",
          y: "center",
          margin:200,
          show:true,//设置显示或者隐藏分类标识
          splitList: [
            { start: 0.8, label: "80以上", color: "#FF6699" },
            { start: 0.6, end: 0.8, label: "60-80", color: "#CC3300" },
            { start: 0.4, end: 0.6, label: "40-60", color: "#F7BB37" },
            { start: 0.3, end: 0.4, label: "30-40", color: "#3BAE56" },
            { start: 0.2, end: 0.3, label: "20-30", color: "#92D050" },
            { start: 0.1, end: 0.2, label: "10-20", color: "#3899FF" },
            { start: 0, end: 0.1, label: "0-10", color: "#BFBFBF" },
          ],
          textStyle: {
            color: "#3899FF", // 值域文字颜色
          },
          selectedMode: false,
          color: ["#E0022B", "#E09107", "#A3E00B"],
        },
        series: [
          {
            name: "安徽省蔬菜区块链可信溯源系统",//鼠标放上去显示的内容
            type: "map",
            map: "anhui",
            mapType: "安徽",
            mapLocation: {
              x: "left",
            },
            itemStyle: {
              normal: {
                label: { show: true },
              },
              emphasis: { label: { show: true } },
            },
            data: [
              { name: "淮北市", value: 0.11 },
              { name: "宿州市", value: 0.32 },
              { name: "亳州市", value: 0.42 },
              { name: "阜阳市", value: 0.64 },
              { name: "蚌埠市", value: 0.85 },
              { name: "淮南市", value: 0.2 },
              { name: "滁州市", value: 0.56 },
              { name: "合肥市", value: 0.9 },
              { name: "六安市", value: 0.29 },
              { name: "芜湖市", value: 0.6 },
              { name: "马鞍山市", value: 0.2 },
              { name: "池州市", value: 0.31 },
              { name: "铜陵市", value: 0.26 },
              { name: "宣城市", value: 0.12 },
              { name: "安庆市", value: 0.62 },
              { name: "黄山市", value: 0.82 },
             
             
            ],
          },
        ],
      });
    },
  },
};
</script>

<style scoped>
 
</style>
