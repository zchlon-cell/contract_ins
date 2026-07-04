const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

const plugins = [
  new NodePolyfillPlugin()
]
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/scss/_variables.scss";`
      },
      less: {
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量
            'red': '#f74748',
            'field-input-error-text-color': '#f74748',
          },
        },
      }
    }
  },
  devServer: {
    client: {
      overlay: false
    },
    proxy: {
      '/api': {
        // target: 'https://dapp.contractsins.com/',
        target: 'https://olyn.cc/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      },
      // 'https://api-futures.kucoin.com/api/v1/': {
      //   target: 'https://api-futures.kucoin.com/',
      //   ws: true,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^https://api-futures.kucoin.com/api/v1/': 'https://api-futures.kucoin.com/api/v1/'
      //   }
      // }
    },
    // proxy: {
    //   '/chat': {
    //     target: 'wss://contractsins.com/',
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/chat': '/chat'
    //     }
    //   }
    // }
  },
  configureWebpack: {
    plugins
  }
})
