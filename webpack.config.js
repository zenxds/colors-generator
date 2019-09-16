const path = require('path')

const config = {
  base: {
    entry: './index.js',
    output: {
      path: path.join(__dirname, './build'),
      filename: 'colors-generator.js',
      library: "colorsGenerator",
      libraryTarget: "umd"
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }]
    },
    plugins: []
  },
  dev: {
    mode: 'development',
    plugins: []
  },
  prod: {
    mode: 'production',
    plugins: []
  }
}

module.exports = function(env) {
  return Object.assign(config.base, config[env])
}
