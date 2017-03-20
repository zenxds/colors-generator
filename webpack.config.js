const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, './build'),
    filename: 'colors-generator.js',
    library: "colors",
    libraryTarget: "umd"
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {
        ascii_only: true
      },
      compress: {
        warnings: false,
        drop_console: false
      }
    })
  ]
}
