const webpack = require('webpack');
const path = require('path');
var ManifestPlugin = require('webpack-manifest-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry : {
    main:APP_DIR+"/index.js",
    vendor:['react']
  },
  output : {
    path: BUILD_DIR,
    filename:'main.js'
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
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
      }

    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'meta', chunks: ['vendor'], filename: 'meta.js' }),
    new ManifestPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('[name].css')
  ]
};

module.exports = config;
