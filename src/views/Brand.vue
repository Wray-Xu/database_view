<template>
  <div class="brand-container">
    <div class="wrap">
      <header>
        <div class="weather">
          <img :src="imgSrc" />
          <span class="wea">天气:{{ weatcherData.wea }}</span>
          <span class="tem">温度:{{ weatcherData.tem }}°C</span>
          <!-- 实时温度 -->
          <span class="humidity">湿度:{{ weatcherData.humidity }}</span>
          <!-- 空气湿度 -->
          <!-- 天气情况 -->
          <!-- <span class="tem1">最高温度{{ weatcherData.tem1 }}</span> -->
          <!-- 高温 -->
          <!-- <span class="tem2">最低温度{{ weatcherData.tem2 }}</span> -->
          <!-- 低温 --> 
        </div>
        <h2>安徽省蔬菜区块链可信溯源系统</h2>
        <div class="showTime">
          <span class="time">{{ nowTime }}</span>
          <span class="date">
            <span>{{ week }}</span>
            <span>{{ date }}</span>
          </span>
        </div>
      </header>

      <section class="mainbox">
        <div class="item left">
          <div class="panel1">
            <h2>链上实体</h2>
            <flashCloud />
            <div class="panel-footer"></div>
          </div>
          <div class="panel2">
            <dynamicList /> 
            <h2>链上查询</h2>

            <div class="panel-footer"></div>
          </div>
          <div class="panel3">
            <cakeLinkage />
            <h2>销售统计</h2>

            <div class="panel-footer"></div>
          </div>
        </div>

        <div class="item center">
          <div class="resume">
            <div class="resume-hd">
              <ul> 
                <li>
                  <enterprisecount />
                  <!-- <countTo
                    :startVal="startVal"
                    :endVal="getEnterpriseCount"
                    :duration="6000"
                    separator
                  ></countTo> -->
                </li>
                <li>
                  <sitecount />
                  <!-- <countTo
                    :startVal="startVal"
                    :endVal="175"
                    :duration="6000"
                    separator
                  ></countTo> -->
                </li>
                <li>
                  <plantationcount />
                  <!-- <countTo
                    :startVal="startVal"
                    :endVal="692"
                    :duration="6000"
                    separator
                  ></countTo> -->
                </li>
                <li>
                  <goodcount />
                  <!-- <countTo
                    :startVal="startVal"
                    :endVal="79"
                    :duration="6000"
                    separator
                  ></countTo> -->
                </li>
              </ul>
            </div>
            <div class="resume-bd">
              <ul>
                <li>链上实体（单位：个）</li>
                <li>基地数量（单位：个）</li>
                <li>地块数量（单位：个）</li>
                <li>产品种类（单位：种）</li>
              </ul>
            </div>
          </div>
          <!-- 水球 -->
          <div class="waterpolo">
            <h2>绿色农产品占有率</h2>
            <waterPolo />
          </div>
           <div class="citysell">
            <h2>城市销售排行</h2>
            <citysell />
          </div>
          <div class="goodsell">
            <h2>产品销售排行</h2>
            <goodsell />
          </div>
          <div class="map">
            <!-- 晶体背景 -->
            <div class="map1"></div>
            <!-- 网络 -->
            <div class="map2"></div>
            <!-- 旋转 -->
            <div class="map3"></div>
            <!-- 安徽地图 -->
            <div class="anhuimap">
              <echartsmapanhui />
            </div>
          </div>
        </div>
        <div class="item right">
          <div class="panel">
            <pyramidTrend />
            <h2>重点区域查询</h2>
            <div class="panel-footer"></div>
          </div>

          <div class="panel">
            <h2>产品召回</h2>
            <seamless />
            <div class="panel-footer"></div>
          </div>
          <div class="panel4">
            <h2>产品总量</h2>
            <goodsum /> 
            <div class="panel-footer"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import "@/assets/js/flexible";
import countTo from "vue-count-to";

export default {
  name: "Brand",
  components: {
    countTo,
  },
  data() {
    return {
      nowTime: "",
      week: "",
      date: "",
      timer: null,
      imgSrc: "",
      weatcherData: {},
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.getWeather();
    this.timer = setInterval(() => {
      this.getWeather();
    }, 1000 * 60 * 60);

    this.nowTimes();
    this.getEchart();
  },
  methods: {
    timeFormate(timeStamp) {
      //显示当前时间
      let newDate = new Date(timeStamp);
      let year = newDate.getFullYear();
      let month =
        newDate.getMonth() + 1 < 10
          ? "0" + (newDate.getMonth() + 1)
          : newDate.getMonth() + 1;
      let date =
        newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
      let hh =
        newDate.getHours() < 10 ? "0" + newDate.getHours() : newDate.getHours();
      let mm =
        newDate.getMinutes() < 10
          ? "0" + newDate.getMinutes()
          : newDate.getMinutes();
      let ss =
        newDate.getSeconds() < 10
          ? "0" + newDate.getSeconds()
          : newDate.getSeconds();
      let week = newDate.getDay();
      let weeks = ["日", "一", "二", "三", "四", "五", "六"];
      let getWeek = "星期" + weeks[week];
      this.week = getWeek;
      this.date = year + "." + month + "." + date;
      this.nowTime = hh + ":" + mm + ":" + ss;
    },
    nowTimes() {
      this.timeFormate(new Date());
      setInterval(this.nowTimes, 1000);
      this.clear();
    },
    clear() {
      clearInterval(this.nowTimes);
      this.nowTimes = null;
    },
    getWeather() {
      // 第三方天气api接口
      axios
        .get("https://www.tianqiapi.com/api/", {
          params: {
            appid: "26148275", //用户id注册方法https://www.tianqiapi.com/index/doc?version=v61
            appsecret: "2id6H48Y", //用户appsecret
            version: "v6", //接口版本
          },
        })
        .then((res) => {
          if (res.data) {
            if (res.data.wea_img == "xue") {
              this.imgSrc = require("../assets/img/brand/xue.png");
            } else if (res.data.wea_img == "yin") {
              this.imgSrc = require("../assets/img/brand/yin.png");
            } else if (
              res.data.wea_img == "yu" ||
              res.data.wea_img == "bingbao"
            ) {
              this.imgSrc = require("../assets/img/brand/yu.png");
            } else if (res.data.wea_img == "yun") {
              this.imgSrc = require("../assets/img/brand/yun.png");
            } else if (res.data.wea_img == "wu") {
              this.imgSrc = require("../assets/img/brand/wu.png");
            } else if (res.data.wea_img == "shachen") {
              this.imgSrc = require("../assets/img/brand/shachen.png");
            } else if (res.data.wea_img == "lei") {
              this.imgSrc = require("../assets/img/brand/lei.png");
            } else {
              this.imgSrc = require("../assets/img/brand/qing.png");
            }
            this.weatcherData = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss" scoped>
.brand-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  .wrap {
    background: url(../assets/img/brand/bg.jpg) no-repeat #000;
    background-size: cover;
    line-height: 1.15;
    header {
      position: relative;
      height: 1rem;
      background: url(../assets/img/brand/head_bg.png) no-repeat top center;
      background-size: 100% 100%;
      h2 {
        color: #7ef0ff;
        font-size: 0.475rem;
        text-align: center;
        line-height: 0.75rem;
        letter-spacing: 1px;
      }
      .weather {
        position: absolute;
        left: 0.45rem;
        top: 0.4rem;
        font-size: 0.25rem;
        color: rgba(126, 240, 255, 0.7);
        img {
          width: 0.45rem;
        }
        span {
          display: inline-block;
        }
        .tem {
          margin: 0 0.1rem 0.2rem 0.2rem;
        }
        .wea {
          margin: 0 0.1rem 0.2rem 0.2rem;
        }
        .humidity {
          margin: 0 0.1rem 0.2rem 0.2rem;
        }
      }
      .showTime {
        position: absolute;
        right: 1.375rem;
        top: 0.5rem;
        color: rgba(126, 240, 255, 0.7);
        display: flex;
        .time {
          font-size: 0.28rem;
          margin-right: 0.18rem;
        }
        .date {
          span {
            display: block;
            &:nth-child(1) {
              font-size: 0.12rem;
              text-align: right;
            }
            &:nth-child(2) {
              font-size: 0.14rem;
            }
          }
        }
      }
    }

    .mainbox {
      min-width: 1024px;
      max-width: 1920px;
      padding: 0.001rem 0 0;
      display: flex;
      .item {
        flex: 2;
        &.center {
          flex: 5;
          margin: 0 0.15rem 0 0.05rem;
          overflow: hidden;

          .resume {
            background: rgba(101, 132, 226, 0.1);
            padding: 0.1875rem;
            .resume-hd {
              position: relative;
              border: 1px solid rgba(25, 186, 139, 0.17);
              ul {
                display: flex;
                %li-line {
                  content: "";
                  position: absolute;
                  height: 50%;
                  width: 1px;
                  background: rgba(255, 255, 255, 0.2);
                  top: 25%;
                }
                li {
                  position: relative;
                  flex: 1;
                  text-align: center;
                  height: 1.2rem;
                  line-height: 1.2rem;

                  font-size: 0.5rem;
                  // 数字大小
                  color: #ffeb7b;
                  padding: 0.05rem 0;
                  font-family: "DIGITALDREAMFAT";
                  font-weight: bold;
                  &:nth-child(2) {
                    &:after {
                      @extend %li-line;
                      right: 0;
                    }
                    &:before {
                      @extend %li-line;
                      left: 0;
                    }
                  }
                }
              }
              &:before {
                content: "";
                position: absolute;
                width: 30px;
                height: 10px;
                border-top: 2px solid #02a6b5;
                border-left: 2px solid #02a6b5;
                top: 0;
                left: 0;
              }
              &:after {
                content: "";
                position: absolute;
                width: 30px;
                height: 10px;
                border-bottom: 2px solid #02a6b5;
                border-right: 2px solid #02a6b5;
                right: 0;
                bottom: 0;
              }
            }
            .resume-bd {      
              ul {
                display: flex;
                li {
                  flex: 1;
                  height: 0.5rem;
                  line-height: 0.3rem;
                  text-align: center;
                  font-size: 0.225rem;
                  color: rgba(255, 255, 255, 0.7);
                  padding-top: 0.125rem;
                }
              }
            }
          }
        }

        %map-style {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 6.475rem;
          height: 6.475rem;
          background: url(../assets/img/brand/map.png) no-repeat;
          background-size: 100% 100%;
          opacity: 0.3;
        }
        .map {
          position: relative;
          height: 5.8rem;
          .chart {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 5;
            height: 6.125rem;
            width: 100%;
          }
          .map1 {
            @extend %map-style;//继承map-style
          }
          .map2 {
            @extend %map-style;
            width: 7.0375rem;
            height: 7.0375rem;
            background-image: url(../assets/img/brand/lbx.png);
            opacity: 0.6;//透明度
            -webkit-animation: rotate 15s linear infinite;//设置旋转
            animation: rotate 15s linear infinite;
            z-index: 2;//优先级，优先级小的会被优先级大的覆盖
          }
           .mapanhui1   {
           @extend %map-style;
          }
          .map3 {
            @extend %map-style;
            width: 7.075rem;
            height: 7.075rem;
            background-image: url(../assets/img/brand/jt.png);
            -webkit-animation: rotate1 10s linear infinite;
            animation: rotate1 10s linear infinite;
          }
        }
        .panel1 {
          //链上实体
          position: relative;
          height: 4.66rem;
          width: 362px;
          border: 0px;
          background: rgba(255, 255, 255, 0.04)
            url(../assets/img/brand/line.png);
          padding: 0 0.1875rem 0;
          margin-bottom: 0.075rem;
          &:before {
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            width: 10px;
            height: 10px;
            border-top: 2px solid #02a6b5;
            border-left: 2px solid #02a6b5;
          }
          &:after {
            position: absolute;
            top: 0;
            right: 0;
            content: "";
            width: 10px;
            height: 10px;
            border-top: 2px solid #02a6b5;
            border-right: 2px solid #02a6b5;
          }
          .panel-footer {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            &:before {
              position: absolute;
              bottom: 0;
              left: 0;
              content: "";
              width: 10px;
              height: 10px;
              border-bottom: 2px solid #02a6b5;
              border-left: 2px solid #02a6b5;
            }
            &:after {
              position: absolute;
              bottom: 0;
              right: 0;
              content: "";
              width: 10px;
              height: 10px;
              border-bottom: 2px solid #02a6b5;
              border-right: 2px solid #02a6b5;
            }
          }

          h2 {
            height: 0.6rem;
            line-height: 0.6rem;
            text-align: center;
            color: #fff;
            font-size: 0.225rem;
            font-weight: 400;
            a {
              margin: 0 0.1875rem;
              color: #fff;
              text-decoration: none;
            }
          }
          .chart {
            height: 3rem;
          }
        }

        .panel2 {
          //链上查询
          position: relative;
          height: 3.35rem;
          width: 362px;
          border: 1px solid rgba(25, 186, 139, 0.17);
          background: rgba(255, 255, 255, 0.04)
            url(../assets/img/brand/line.png);
          padding: 0 0.1875rem 0;
          margin-bottom: 0.075rem;
          &:before {
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            width: 10px;
            height: 10px;
            border-top: 2px solid #02a6b5;
            border-left: 2px solid #02a6b5;
          }
          &:after {
            position: absolute;
            top: 0;
            right: 0;
            content: "";
            width: 10px;
            height: 10px;
            border-top: 2px solid #02a6b5;
            border-right: 2px solid #02a6b5;
          }
          .panel-footer {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            &:before {
              position: absolute;
              bottom: 0;
              left: 0;
              content: "";
              width: 10px;
              height: 10px;
              border-bottom: 2px solid #02a6b5;
              border-left: 2px solid #02a6b5;
            }
            &:after {
              position: absolute;
              bottom: 0;
              right: 0;
              content: "";
              width: 10px;
              height: 10px;
              border-bottom: 2px solid #02a6b5;
              border-right: 2px solid #02a6b5;
            }
          }

          h2 {
            height: 0.6rem;
            line-height: 0.6rem;
            text-align: center;
            color: #fff;
            font-size: 0.225rem;
            font-weight: 400;
            a {
              margin: 0 0.1875rem;
              color: #fff;
              text-decoration: none;
            }
          }
          .chart {
            height: 3rem;
          }
        }

        .panel3 {
          //销量
          position: relative;
          height: 2.4rem;
          width: 362px;
          border: 1px solid rgba(25, 186, 139, 0.17);
          background: rgba(255, 255, 255, 0.04)
            url(../assets/img/brand/line.png);
          padding: 0 0.1875rem 0;
          margin-bottom: 0.1875rem;
          &:before {
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            width: 10px;
            height: 10px;
            border-top: 2px solid #02a6b5;
            border-left: 2px solid #02a6b5;
          }
          &:after {
            position: absolute;
            top: 0;
            right: 0;
            content: "";
            width: 10px;
            height: 10px;
            border-top: 2px solid #02a6b5;
            border-right: 2px solid #02a6b5;
          }
          .panel-footer {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            &:before {
              position: absolute;
              bottom: 0;
              left: 0;
              content: "";
              width: 10px;
              height: 10px;
              border-bottom: 2px solid #02a6b5;
              border-left: 2px solid #02a6b5;
            }
            &:after {
              position: absolute;
              bottom: 0;
              right: 0;
              content: "";
              width: 10px;
              height: 10px;
              border-bottom: 2px solid #02a6b5;
              border-right: 2px solid #02a6b5;
            }
          }

          h2 {
            height: 0.6rem;
            line-height: 0.6rem;
            text-align: center;
            color: #fff;
            font-size: 0.225rem;
            font-weight: 400;
            a {
              margin: 0 0.1875rem;
              color: #fff;
              text-decoration: none;
            }
          }
          .chart {
            height: 3rem;
          }
        }
        .panel4 {
          //产品总量
          position: relative;
          height: 3.35rem;
          width: 480px;
          border: 1px solid rgba(25, 186, 139, 0.17);
          background: rgba(255, 255, 255, 0.04)
            url(../assets/img/brand/line.png);
          padding: 0 0.1875rem 0;
          margin-bottom: 0.1875rem;
          &:before {
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            width: 10px;
            height: 10px;
            border-top: 2px solid #02a6b5;
            border-left: 2px solid #02a6b5;
          }
          &:after {
            position: absolute;
            top: 0;
            right: 0;
            content: "";
            width: 10px;
            height: 10px;
            border-top: 2px solid #02a6b5;
            border-right: 2px solid #02a6b5;
          }
          .panel-footer {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            &:before {
              position: absolute;
              bottom: 0;
              left: 0;
              content: "";
              width: 10px;
              height: 10px;
              border-bottom: 2px solid #02a6b5;
              border-left: 2px solid #02a6b5;
            }
            &:after {
              position: absolute;
              bottom: 0;
              right: 0;
              content: "";
              width: 10px;
              height: 10px;
              border-bottom: 2px solid #02a6b5;
              border-right: 2px solid #02a6b5;
            }
          }

          h2 {
            height: 0.6rem;
            line-height: 0.6rem;
            text-align: center;
            color: #fff;
            font-size: 0.225rem;
            font-weight: 400;
            a {
              margin: 0 0.1875rem;
              color: #fff;
              text-decoration: none;
            }
          }
          .chart {
            height: 3rem;
          }
        }

        .panel {
          position: relative;
          height: 3.5rem;
          border: 1px solid rgba(25, 186, 139, 0.17);
          background: rgba(255, 255, 255, 0.04)
            url(../assets/img/brand/line.png);
          padding: 0 0.1875rem 0;
          margin-bottom: 0.075rem;
          &:before {
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            width: 10px;
            height: 10px;
            border-top: 2px solid #02a6b5;
            border-left: 2px solid #02a6b5;
          }
          &:after {
            position: absolute;
            top: 0;
            right: 0;
            content: "";
            width: 10px;
            height: 10px;
            border-top: 2px solid #02a6b5;
            border-right: 2px solid #02a6b5;
          }

          .panel-footer {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            &:before {
              position: absolute;
              bottom: 0;
              left: 0;
              content: "";
              width: 10px;
              height: 10px;
              border-bottom: 2px solid #02a6b5;
              border-left: 2px solid #02a6b5;
            }
            &:after {
              position: absolute;
              bottom: 0;
              right: 0;
              content: "";
              width: 10px;
              height: 10px;
              border-bottom: 2px solid #02a6b5;
              border-right: 2px solid #02a6b5;
            }
          }

          h2 {
            height: 0.6rem;
            line-height: 0.6rem;
            text-align: center;
            color: #fff;
            font-size: 0.225rem;
            font-weight: 400;
            a {
              margin: 0 0.1875rem;
              color: #fff;
              text-decoration: none;
            }
          }
          .chart {
            height: 3rem;
          }
        }
      }
    }
  }
}

.waterpolo {
  //水球
  position: relative;
  height: 0px;
  width: 0px;//文字显示样式
  border: 0px;
  background: url(../assets/img/brand/line.png);
  padding: 0 0 0;
  margin-bottom: 0.4rem;//外部控件间距
  h2 {
    height: 0.1rem;
    line-height: 0.3rem;
    text-align: left;
    color: #fff;
    font-size: 0.225rem;
    font-weight: 400;
    a {
      margin: 0 0.1875rem;
      color: #fff;
      text-decoration: none;
    }
  }
  .chart {
    height: 3rem;
  }
} 

.citysell {
  //城市销售排行
  position: relative;
  height: 0px;
  width: 0px;
  border: 0px;
  background: url(../assets/img/brand/line.png);
  padding: 0 0 0;
  margin-bottom:0;
  top: 38%;
  h2 {
    
    height: 0.1rem;
    line-height: 0.4rem;
    padding-top: 60px;
    color: #fff;
    font-size: 0.225rem;
    font-weight: 400;
  }
  .chart {
    height: 5rem;
  }
}
.goodsell {
  //产品销售排行
  position: relative;
  height: 0px;
  width: 0px;
  border: 0px;
  left: 59%;
  background: url(../assets/img/brand/line.png);
  padding: 0 0 0;
  margin-bottom:0;
  top: 38%;
  h2 {
    height: 0.1rem;
    line-height: 0.4rem;
    padding-top: 60px;
    text-align: left;
    color: #fff;
    position: relative;
    width: 20px;
    left: 380px;
    font-size: 0.225rem;
    font-weight: 400;
  }
  .chart {
    height: 5rem;
  }
}


@-webkit-keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@-webkit-keyframes rotate1 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}
@keyframes rotate1 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@media screen and (max-width: 1024px) {
  html {
    font-size: 42px !important;
  }
}
@media screen and (min-width: 1920) {
  html {
    font-size: 80px !important;
  }
}
</style>
