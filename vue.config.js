module.exports = {
  // 选项...
  publicPath: process.env.NODE_ENV === 'production' ? '' : './',
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devDist',
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./src/styles/main.scss";`,
      },
    },
  },
  // webpack-dev-server 相关配置
  devServer: {
    // devServer在发送请求时，会先走到before指定的函数中进行处理，如果before中没有对应的接口路由，才会请求外网
    before: require('./mock/index'),
    open: false, // 编译完成是否打开网页
    host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 8080, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    hotOnly: false,
    proxy: {
      '/api': {
        target: "www.baidu.com", //API服务器的地址
        ws: false, //是否需要开启webstock
        changeOrigin: true,//是否跨域
        pathRewrite: {
          '^/api': ''//路径重写
        }
      }
    },
  },
}