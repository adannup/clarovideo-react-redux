const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/js/index.js'),
  output: path.join(__dirname, 'dist'),
  public: '/',
  template: path.join(__dirname, 'src/index.html'),
};
