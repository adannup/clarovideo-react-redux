const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FILE_PATH = require('./FILE_PATH');

const isProd = process.env.NODE_ENV === 'production'; // true || false

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: FILE_PATH.template,
  title: 'Clarovideo',
  filename: 'index.html',
  minify: {
    collapseWhitespace: isProd,
  },
  hash: true,
});

const ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: 'main.css',
  allChunks: true,
  disable: false,
});

const CleanWebpackPluginConfig = new CleanWebpackPlugin(['dist']);

const HotModuleReplacement = new webpack.HotModuleReplacementPlugin();

const OpenBrowserPluginConfig = new OpenBrowserPlugin({ url: 'http://localhost:3000' });

const getPlugins = () => {
  const pluginsProd = [CleanWebpackPluginConfig, ExtractTextPluginConfig];
  const pluginsDev = [HotModuleReplacement, OpenBrowserPluginConfig];
  const pluginsConfig = isProd ? pluginsProd : pluginsDev;

  return [HtmlWebpackPluginConfig, ...pluginsConfig];
};

module.exports = getPlugins;
