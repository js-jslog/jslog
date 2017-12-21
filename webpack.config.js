var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./src/jsx/articles-page-content.jsx",
  output: {
    path: __dirname + "/public/js/react",
    filename: "article-page-content.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
