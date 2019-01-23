const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'src/public');
const APP_DIR = path.resolve(__dirname, 'frontend');


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
  }
};
