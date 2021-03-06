'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {  // 默认是{}, 解决跨域问题，增加以下
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },

    // 对于以上的解释

/**     '/api': 表示所有以 /api 为开头的请求，如我们的请求 this.$http.get('/api/getArticle')
        target: 将所有以 /api 为开头请求转发到 http://localhost:3000/api
        changeOrigin: true/false, Default: false，本地会虚拟一个服务端接收你的请求并代你发送该请求(不太明白，false 试了也可以)
        pathRewrite: 重写地址。 '^/api': '' 表示将以 /api 开头的请求的地址中的 '/api' 替换为 ''，
        即 path = path.replace(/^/api/, '')
        eg: this.$http.get('/api/getArticle')
            path = '/api/getArticle'
            path = path.replace(/^/api/, '') = '/getArticle'
        这样目标请求就变成了 http://localhost:3000/api/getArticle ,
        如果不写 pathRewrite， 请求则为 http://localhost:3000/api/api/getArticle 所以也可以这样**/

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
