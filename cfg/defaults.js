/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const customToolboxPath = path.join(__dirname, '/../src/styles/customToolbox');
const toolboxPath = path.join(__dirname, '/../node_modules/react-toolbox');
const dfltPort = 15467;

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
const additionalPaths = [];

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules () {
  return {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        include: srcPath,
        use: ['eslint-loader']
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:8]'
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /.scss$/,
        use: [
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded-loader'
            }
          }
        ]
      }
      // {
      //   test: /\.(png|jpg|gif|woff|woff2)$/,
      //   loader: 'url-loader?limit=8192'
      // },
      // {
      //   test: /\.(mp4|ogg|svg)$/,
      //   loader: 'file-loader'
      // }
    ]
  };
}

module.exports = {
  srcPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules,
  additionalPaths
};
