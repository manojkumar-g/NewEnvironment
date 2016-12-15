  const webpack = require('webpack');
  const path = require('path');
  var BUILD_DIR = path.resolve(__dirname, 'dist');
  var APP_DIR = path.resolve(__dirname, 'src');

  var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
    module : {
      loaders : [
        {
          test : /\.js$/,
          include : APP_DIR,
          loaders: ['react-hot', 'babel']
        },
        {
          test : /\.styl$/,
          include : APP_DIR,
          loader: 'style!css!stylus'
        }

      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  };

  module.exports = config;
