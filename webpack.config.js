const webpack = require('webpack');
const path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

console.log("hi");
var config = {
  entry : APP_DIR+"/index.js",
  output : {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test : /\.styl$/,
        include : APP_DIR,
        loader : 'style-loader!css-loader!stylus-loader'
      }

    ]
  }
};

module.exports = config;
