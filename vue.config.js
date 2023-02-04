const path = require('path');
const { defineConfig } = require('@vue/cli-service');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: '/',
  assetsDir: 'src/assets',
  outputDir: 'dist',
  filenameHashing: true,
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  },
  configureWebpack: {
    entry: './src/index.ts',
    output: {
      filename: "bad-weather.js",
      path: path.resolve(__dirname, "dist")
    },
    plugins: [
      new UglifyJsPlugin({
        sourceMap: false
      })
    ]
  }
}