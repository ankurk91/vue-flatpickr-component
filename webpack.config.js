'use strict';

const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: __dirname, //home directory for webpack
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.js', '.jsx', '.vue'],
  },
  entry: './src/index.js',
  externals: [
    'vue',
    'flatpickr',
    'flatpickr/dist/flatpickr.css'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),// where to store build files
    filename: "vue-flatpickr.min.js", // build file name
    library: 'VueFlatpickr',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['./dist']),
  ],
  devtool: '#source-map',
  target: 'web',
  performance: {
    hints: false
  }
};
