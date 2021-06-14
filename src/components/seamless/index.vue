<template>
  <div class="wrap-container sn-container">
    <div class="sn-content">
      <div class="sn-title"></div>
      <div class="sn-body">
        <div class="wrap-container">
          <div class="table">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="table-header"
            >
              <tbody>
                <tr>
                  <td width="40%">
                    <span>企业名称</span>
                  </td>                  
                  <td width="20%">
                    <span>产品名称</span>
                  </td>
                  <td width="20%">
                    <span>日 期</span>
                  </td>
                  <td width="20%">
                    <span>数 量</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <vue-seamless-scroll
              :data="listData"
              class="seamless-warp"
              :class-option="optionSetting"
            >
              <table border="0" cellpadding="0" cellspacing="0" class="item">
                <tbody>
                  <tr v-for="(item, index) in listData" :key="index">                   
                    <td width="40%" >
                      <span>{{ item.enterprise }}</span>
                    </td>
                    <td width="20%">
                      <span>{{ item.good }}</span>
                    </td>
                    <td width="20%">
                      <span>{{ item.date }}</span>
                    </td>
                    <td width="20%">
                      <span
                        :class="{
                          colorRed: item.hot > 4999,
                          colorOrange: item.hot < 10,
                        }"
                        >{{ item.hot }}</span
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </vue-seamless-scroll>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";

export default {
  name: "seamless",
  components: {
    vueSeamlessScroll,
  },
  data() {
    return {
      listData: [
        {
          enterprise: "岳西碧涛农林",
          good: "茶叶",
          date: "2020-09-05",
          hot: 2306,
        },
        {
          enterprise: "岳西碧涛农林",
          good: "茶叶",
          date: "2020-09-02",
          hot: 5689,
        },
        {
          enterprise: "六安绿中宝农业科技有限公司",
          good: "白菜",
          date: "2020-09-02",
          hot: 9,
        },
        {
          enterprise: "霍山黄芽茶叶有限公司",
          good: "茶叶",
          date: "2020-08-25",
          hot: 288,
        },
        {
          enterprise: "岳西华之慧农业",
          good: "洋葱",
          date: "2020-08-21",
          hot: 158,
        },
        {
          enterprise: "合肥安谷农业有限公司",
          good: "白菜",
          date: "2020-08-20",
          hot: 889,
        },
        {
          enterprise: "宿州市埇桥区农业技术推广中心",
          good: "萝卜",
          date: "2020-08-01",
          hot: 5800,
        },
        {
          enterprise: "安徽龙亢农场",
          good: "白菜",
          date: "2020-07-25",
          hot: 6,
        },
        {
          enterprise: "蒙城县农业技术推广中心",
          good: "洋葱",
          date: "2020-07-16",
          hot: 88,
        },
        {
          enterprise: "黄山猴魁茶叶股份有限公司",    
          good: "茶叶",
          date: "2020-07-12",
          hot: 88,
        },
        {
          enterprise: "石台县茶叶实业有限公司",
          good: "茶叶",
          date: "2020-07-28",
          hot: 5,
        },
        {
          enterprise: "全椒县农业技术推广中心",
          good: "白菜",
          date: "2020-07-15",
          hot: 258,
        },
        {
          enterprise: "安徽徽灵菌业有限公司",
          good: "金针菇",
          date: "2020-07-10",
          hot: 198,
        },
        {
          enterprise: "临泉农业技术技推广中心",
          good: "萝卜",
          date: "2020-07-08",
          hot: 19,
        },
        {
          enterprise: "涡阳县农业技术推广中心",
          good: "山药",
          date: "2020-07-15",
          hot: 258,
        },
        {
          enterprise: "东至县农业技术推广中心",
          good: "土豆",
          date: "2020-07-10",
          hot: 198,
        },
        {
          enterprise: "和县农业技术推广中心",
          good: "萝卜",
          date: "2020-07-08",
          hot: 19,
        },
        {
          enterprise: "泾县农业技术推广中心",
          good: "洋葱",
          date: "2020-07-10",
          hot: 198,
        },
        {
          enterprise: "青阳农场",
          good: "萝卜",
          date: "2020-07-08",
          hot: 19,
        },
      ],
    };
  },
  computed: {
    optionSetting() {
      return {
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        // autoPlay: false,
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  mounted() {},
  methods: {},
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
.sn-container {
  left: 0px;
  top: 0px;
  height: 307px;
  width: 507px;
  %table-style {
    width: 100%;
    height: 35px;
    table-layout: fixed;
    tr {
      td {
        padding: 10px 5px;
        text-align: center;
        background-color: transparent;
        white-space: nowrap;
        overflow: hidden;
        color: #e2e5ff;
        font-size: 14px;
      }
    }
  }
  .table {
    .table-header {
      @extend %table-style;
    }
    .seamless-warp {
      height: 200px;
      overflow: hidden;
      visibility: visible;
      .colorRed {
        color: #ff4669;
      }
      .colorOrange {
        color: #ffc956;
      }
      .item {
        height: auto;
        @extend %table-style;
        tr {
          td {
            &.title {
              text-overflow: ellipsis;
              display: inline-block;
            }
          }
        }
      }
    }
  }
}
</style>
