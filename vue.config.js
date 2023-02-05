const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  configureWebpack: {
    mode: 'production',
    context: __dirname,
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bad-weather.[name].js'
    },
  }
}