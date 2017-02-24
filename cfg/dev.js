'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./base');
let defaultSettings = require('./defaults');

let config = Object.assign({}, baseConfig, {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://127.0.0.1:' + defaultSettings.port,
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.rules.push({
  test: /\.js?$/,
  use: [{
      loader: 'babel-loader',
      options: {
        presets: [
          "es2015",
          "stage-2",
          "react"
        ],
        "plugins": [
          "react-hot-loader/babel"
        ]
      },
    }],
  include: [].concat(
    defaultSettings.additionalPaths,
    [path.join(__dirname, '/../src')]
  )
});

module.exports = config;
