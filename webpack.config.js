var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
      articlesPageContent: "./src/jsx/articles-page-content.jsx",
      navigationBarInclude: "./src/jsx/navigation-bar-include.jsx"
  },
  output: {
    path: __dirname + "/public/js/react",
    filename: "[name].js"
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
