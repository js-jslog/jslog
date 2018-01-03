var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
      PageBody: "./src/react-components/PageBody.jsx"
  },
  output: {
    path: __dirname + "/public/js/react",
    publicPath: "/js/react/",
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
  },
  devServer: {
      proxy: {
          "/": "http://localhost:3000"
      }
  }
};
