const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
        '/dev-api/': {
            target: 'http://121.4.102.246:3000', // 线上环境
            // target: 'http://localhost:3000', // 本地环境
            pathRewrite: {
                '^/dev-api': ''
            }
        }
    }
  }
})
