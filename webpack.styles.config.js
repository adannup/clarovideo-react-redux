const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FILE_PATH = require('./FILE_PATH');

const isProd = process.env.NODE_ENV === 'production'; // true || false

const cssDev = ['style-loader', 'css-laoder', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader'],
  publicPath: FILE_PATH.public,
});

const cssConfig = isProd ? cssProd : cssDev;

module.exports = cssConfig;
