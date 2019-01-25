const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'src/public');
const HTML_DIR = path.resolve(__dirname, 'src');
const APP_DIR = path.resolve(__dirname, 'react-redux');


module.exports = {
  entry: APP_DIR + "/main.jsx",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/env']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  devServer: {
    contentBase: HTML_DIR
  }
};
