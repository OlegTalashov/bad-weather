const merge = require('webpack-merge');
const common = require('./webpack.common.ts');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'src/good-weather.min.js'
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: false
    })
  ]
});