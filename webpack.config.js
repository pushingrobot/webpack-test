const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function() {
  return {
    entry: {
      main: './app/index.js',
      vendor: './vendor.js',
      moment: 'moment'
    },
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      }],
    },
    plugins: [
      new ExtractTextPlugin('styles.css'),
    ],
  }
}