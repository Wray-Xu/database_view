import bgAnimation from './bgAnimation' // 登录界面背景图动画
import modal from './modal' // 自定义全局模态框
import sinan from './sinan' // 司南排名图
import seamless from './seamless' // 新闻无缝滚动
import cakeLinkage from './cakeLinkage' // 柱饼组合联动
import pyramidTrend from './pyramidTrend' // 金字塔趋势
import flashCloud from './flashCloud' // 闪动云
import dynamicList from './dynamicList' // 动态列表动画
import waterPolo from './waterPolo' // 水球图
import wordCloud from './companySummary/wordCloud' // 产品热词
import history from './companySummary/history' // 发展历程
import echartsmapanhui from './echartsmapanhui'//安徽地图
import citysell from './citysell'  //城市销量
import goodsell from './goodsell'  //产品销量
import goodsum from './goodsum'  //产品总量


import enterprisecount from './enterprisecount' //链上实体数量（企业数量）
import sitecount from './sitecount'  //基地数量
import plantationcount from './plantationcount' //地块数量
import goodcount from './goodcount'  //产品数量

const components = {
  bgAnimation,
  modal,
  sinan,
  seamless,
  cakeLinkage,
  pyramidTrend,
  flashCloud,
  dynamicList,
  waterPolo,
  wordCloud,
  history,
  echartsmapanhui,
  citysell,
  goodsell,
  goodsum,


  enterprisecount,
  sitecount,
  plantationcount,
  goodcount,
  

};

const install = (Vue = {}) => {
  if (install.installed) return;
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component]);
  });

  install.installed = true;
};

install.installed = false;

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
  install.installed = true;
}

const Vcomp = {
  ...components,
  install
};


export default Vcomp
