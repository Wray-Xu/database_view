module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "/vueDataV/" : "/",
  productionSourceMap: false,
  // lintOnSave: false,
  publicPath: '/display/',
  // publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    port: 8022,
    // proxy: {
    //   "/api": {
    //     target: "https://api.github.com",
    //     changeOrigin: true,
    //     ws: false,
    //     pathRewrite: {
    //       "^/api": ""
    //     } 
    //   } 
    // }
  },
  configureWebpack: {
    // 把原本需要写在webpack.config.js中的配置代码 写在这里 会自动合并
    externals: {
     'jquery' : '$',
     'echarts': 'echarts',
     'axios' : 'axios'
    }
  }
};