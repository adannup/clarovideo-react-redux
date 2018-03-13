const getPlugins = require('./webpack.plugins');
const cssConfig = require('./webpack.styles.config');
const FILE_PATH = require('./FILE_PATH');

const isProd = process.env.NODE_ENV === 'production'; // true || false
const appDev = ['react-hot-loader/patch', FILE_PATH.entry, 'webpack-hot-middleware/client'];
const appProd = [FILE_PATH.entry];
const appConfig = isProd ? appProd : appDev;

// Output Path:
const publicPath = isProd ? `.${FILE_PATH.public}` : FILE_PATH.public;

module.exports = {
  entry: {
    app: appConfig,
  },
  output: {
    filename: '[name].bundle.js',
    path: FILE_PATH.output,
    publicPath: publicPath,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [['env', { modules: false }], 'react'],
              plugins: ['react-hot-loader/babel'],
            },
          }
        ],
      }
    ],
  },
  devtool: 'inline-source-map',
  plugins: getPlugins(),
}
