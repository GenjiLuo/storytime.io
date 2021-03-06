
const path = require('path');
const webpack = require('webpack');

const baseConfig = require('./base');
const defaultSettings = require('./defaults');

const config = Object.assign({}, baseConfig, {
  entry: path.join(__dirname, '../src/index'),
  cache: false,
  devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: defaultSettings.getDefaultModules(),
});

// Add needed loaders to the defaults here
config.module.rules.push({
  test: /\.(js|jsx)$/,
  use: ['babel-loader'],
  include: [].concat(defaultSettings.additionalPaths, path.join(__dirname, '/../src')),
});

module.exports = config;
