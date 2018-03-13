const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  logLevel: 'error',
  stats: { colors: true },
  publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

app.listen(3000, () => {
  console.log('Server up on port: 3000');
});
