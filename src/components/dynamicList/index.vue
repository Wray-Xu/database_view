<!--
 描述: 动态列表动画
 作者: Jack Chen
 日期: 2020-04-18
-->

<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
     
        <div class="wrap-container pd-info"> 
          <div class="pd-info-center">
            <div class="y-center">
              <div class="info-1-0 animated infinite rotateF"></div>
              <div class="info-1-1 animated infinite rotateF"></div>
              <div class="info-1-2 animated infinite rotate"></div>
              <div class="info-1-3 animated infinite rotate"></div>
              <div class="info-1-4 animated infinite flashPD"></div>
            </div>

            <div class="y-number y-number-1 animated fadeInLeft">
              <div class="y-number-bg animated infinite rotate"></div>
              <div class="y-number-icon"></div>
              <div class="y-number-text">
                <span>合格数量</span>
                <span id="number1" class="odometer odometer-theme-digital">
                  <div class="odometer-inside">
                    <span class="odometer-digit">
                      <span class="odometer-digit-spacer">8</span>
                      <span class="odometer-digit-inner">
                        <span class="odometer-ribbon">
                          <span class="odometer-ribbon-inner">
                            <span class="odometer-value">
                              <countTo :startVal='startVal' :endVal='822' :duration='6000' separator=""></countTo>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </span>
              </div>
            </div>

            <div class="y-number y-number-2 animated fadeInLeft">
              <div class="y-number-bg animated infinite rotateF"></div>
              <div class="y-number-icon"></div>
              <div class="y-number-text">
                <span>查询次数</span>
                <span id="number2" class="odometer odometer-theme-digital">
                  <div class="odometer-inside">
                    <span class="odometer-digit">
                      <span class="odometer-digit-spacer">8</span>
                      <span class="odometer-digit-inner">
                        <span class="odometer-ribbon">
                          <span class="odometer-ribbon-inner">
                            <span class="odometer-value">
                              <countTo :startVal='startVal' :endVal='1216' :duration='6000' separator=""></countTo>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </span>
              </div>
            </div>
            <div class="y-number y-number-4 animated fadeInLeft">
              <div class="y-number-bg animated infinite rotate"></div>
              <div class="y-number-icon"></div>
              <div class="y-number-text">
                <span>投诉次数</span>
                <span id="number4" class="odometer odometer-theme-digital">
                  <div class="odometer-inside">
                    <span class="odometer-digit">
                      <span class="odometer-digit-spacer">8</span>
                      <span class="odometer-digit-inner">
                        <span class="odometer-ribbon">
                          <span class="odometer-ribbon-inner">
                            <span class="odometer-value">
                              <countTo :startVal='startVal' :endVal='21' :duration='6000' separator=""></countTo>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </div>
                </span>
              </div>
            </div>
          </div>

        </div> 
     
    </div>   
  </div>
</template>

<script>
import countTo from 'vue-count-to'
import "@/assets/js/flexible";


export default {
  name: "dynamicList",
  components: {
    countTo
  },
  data() {
    return {
      startVal: 0
    }
  },
  mounted() {
    
  },
  methods: {
    
  },
  beforeDestroy() {
    
  }
}; 
</script>

<style lang="scss" scoped>
.sn-container {
  left: 0px;
  top: 45px;
  width: 390px;
  height: 237px;
  .pd-info {
    left: 0;
    top: 0px;
    width: 100%;
    height: 80%;
  }
  .pd-info-center {
    width: 100%;
    height: 100%;
    .y-center {
      position: absolute;
      top: 0px;
      left: 1px;
      width: 190px;
      height: 190px;
      > [class^=info-1] {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-repeat: no-repeat;
        background-position: center center;
      }
      .info-1-0 {
        background-image: url(../../assets/img/dynamic/info-1-0.png);
        -webkit-animation-duration: 20s;
        -moz-animation-duration: 20s;
        -o-animation-duration: 20s;
        animation-duration: 20s;
      }
      .info-1-1 {
        background-image: url(../../assets/img/dynamic/info-1-1.png);
        -webkit-animation-duration: 20s;
        -moz-animation-duration: 20s;
        -o-animation-duration: 20s;
        animation-duration: 20s;
        -webkit-animation-delay: 3s;
        -moz-animation-delay: 3s;
        -o-animation-delay: 3s;
        animation-delay: 3s;
      }
      .info-1-2 {
        background-image: url(../../assets/img/dynamic/info-1-2.png);
        -webkit-animation-duration: 20s;
        -moz-animation-duration: 20s;
        -o-animation-duration: 20s;
        animation-duration: 20s;
        -webkit-animation-delay: 8s;
        -moz-animation-delay: 8s;
        -o-animation-delay: 8s;
        animation-delay: 8s;
      }
      .info-1-3 {
        background-image: url(../../assets/img/dynamic/info-1-3.png);
        -webkit-animation-duration: 10s;
        -moz-animation-duration: 10s;
        -o-animation-duration: 10s;
        animation-duration: 10s;
        -webkit-animation-delay: 5s;
        -moz-animation-delay: 5s;
        -o-animation-delay: 5s;
        animation-delay: 5s;
      }
      .info-1-4 {
        background-image: url(../../assets/img/dynamic/info-1-4.png);
        -webkit-animation-duration: 5s;
        -moz-animation-duration: 5s;
        -o-animation-duration: 5s;
        animation-duration: 5s;
      }
    }

    .y-number {
      position: absolute;
      left: 0;
      padding-left: 150px;
      -webkit-animation-timing-function: cubic-bezier(1, 0, 0.6, 0.6);
      -moz-animation-timing-function: cubic-bezier(1, 0, 0.6, 0.6);
      -o-animation-timing-function: cubic-bezier(1, 0, 0.6, 0.6);
      animation-timing-function: cubic-bezier(1, 0, 0.6, 0.6);
      .y-number-bg {
        width: 54px;
        height: 54px;
        position: absolute;
        top: 0px;
        -webkit-animation-duration: 5s;
        -moz-animation-duration: 5s;
        -o-animation-duration: 5s;
        animation-duration: 5s;
      }
      .y-number-icon {
        width: 54px;
        height: 54px;
        position: absolute;
        top: 0px;
      }
      .y-number-text {
        display: inline-block;
        color: #0072bc;
        font-size: 18px;
        padding: 10px 0 0 60px;
        > span {
          display: block;
          &:nth-child(2) {
            font-size: 22px;
            color: #00aeef;
            line-height: 28px;
            padding: 0;
            background: transparent;
          }
        }
      }

      &.y-number-1 {
        -webkit-animation-delay: 1s;
        -moz-animation-delay: 1s;
        -o-animation-delay: 1s;
        animation-delay: 1s;
        background: url(../../assets/img/dynamic/info-line-01.png) no-repeat 180px center;
        height: 60px;
        top: 0px;
        .y-number-bg {
          -webkit-animation-delay: 2s;
          -moz-animation-delay: 2s;
          -o-animation-delay: 2s;
          animation-delay: 2s;
          background: url(../../assets/img/dynamic/info-bg-01.png) no-repeat 50% 50%;
        }
        .y-number-icon {
          background: url(../../assets/img/dynamic/info-icon-1.png) no-repeat 50% 50%;
        }
      }
      &.y-number-2 {
        -webkit-animation-delay: 1.25s;
        -moz-animation-delay: 1.25s;
        -o-animation-delay: 1.25s;
        animation-delay: 1.25s;
        background: url(../../assets/img/dynamic/info-line-02.png) no-repeat 180px center;
        height: 60px;
        top: 65px;
        padding-left: 178px;
        .y-number-bg {
          -webkit-animation-delay: 2.5s;
          -moz-animation-delay: 2.5s;
          -o-animation-delay: 2.5s;
          animation-delay: 2.5s;
          background: url(../../assets/img/dynamic/info-bg-02.png) no-repeat 50% 50%;
        }
        .y-number-icon {
          background: url(../../assets/img/dynamic/info-icon-2.png) no-repeat 50% 50%;
        }
      }
      &.y-number-4 {
        -webkit-animation-delay: 1.75s;
        -moz-animation-delay: 1.75s;
        -o-animation-delay: 1.75s;
        animation-delay: 1.75s;
        background: url(../../assets/img/dynamic/info-line-01.png) no-repeat 180px center;
        height: 60px;
        padding-left: 158px;
        top: 130px;
        .y-number-bg {
          -webkit-animation-delay: 3.5s;
          -moz-animation-delay: 3.5s;
          -o-animation-delay: 3.5s;
          animation-delay: 3.5s;
          background: url(../../assets/img/dynamic/info-bg-04.png) no-repeat 50% 50%;
        }
        .y-number-icon {
          background: url(../../assets/img/dynamic/info-icon-4.png) no-repeat 50% 50%;
        }
      }
    }
  }

}

.animated {
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  -o-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  -o-animation-fill-mode: both;
  animation-fill-mode: both;
}
.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

@-webkit-keyframes rotate {
  0% {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-moz-keyframes rotate {
  0% {
    -webkit-transform-origin: center;
    -moz-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform-origin: center;
    -moz-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@-o-keyframes rotate {
  0% {
    -webkit-transform-origin: center;
    -o-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform-origin: center;
    -o-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes rotate {
  0% {
    -webkit-transform-origin: center;
    -moz-transform-origin: center;
    -o-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform-origin: center;
    -moz-transform-origin: center;
    -o-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.rotate {
  -webkit-animation-name: rotate;
  -moz-animation-name: rotate;
  -o-animation-name: rotate;
  animation-name: rotate;
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -o-animation-timing-function: linear;
  animation-timing-function: linear;
}

@-webkit-keyframes rotateF {
  100% {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}

@-moz-keyframes rotateF {
  100% {
    -webkit-transform-origin: center;
    -moz-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(-360deg);
    -moz-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}

@-o-keyframes rotateF {
  100% {
    -webkit-transform-origin: center;
    -o-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(-360deg);
    -o-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}

@keyframes rotateF {
  100% {
    -webkit-transform-origin: center;
    -moz-transform-origin: center;
    -o-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(-360deg);
    -moz-transform: rotate(-360deg);
    -o-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}

.rotateF {
  -webkit-animation-name: rotateF;
  -moz-animation-name: rotateF;
  -o-animation-name: rotateF;
  animation-name: rotateF;
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -o-animation-timing-function: linear;
  animation-timing-function: linear;
}

@-webkit-keyframes flashPD {
  0%,
  90% {
    opacity: 1;//这个是用来设置透明度的属性
  }
  92%,
  98% {
    opacity: 0;
  }
  96%,
  100% {
    opacity: 1;
  }
}

@-moz-keyframes flashPD {
  0%,
  90% {
    opacity: 1;
  }
  92%,
  98% {
    opacity: 0;
  }
  96%,
  100% {
    opacity: 1;
  }
}

@-o-keyframes flashPD {
  0%,
  90% {
    opacity: 1;
  }
  92%,
  98% {
    opacity: 0;
  }
  96%,
  100% {
    opacity: 1;
  }
}

@keyframes flashPD {
  0%,
  90% {
    opacity: 1;
  }
  92%,
  98% {
    opacity: 0;
  }
  96%,
  100% {
    opacity: 1;
  }
}

.flashPD {
  -webkit-animation-name: flashPD;
  -moz-animation-name: flashPD;
  -o-animation-name: flashPD;
  animation-name: flashPD;
}















</style>
