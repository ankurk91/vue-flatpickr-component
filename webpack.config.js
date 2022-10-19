'use strict';

const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
  context: __dirname,
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
    ],
    alias: {
      vue: '@vue/runtime-dom'
    },
  },
  entry: {
    'index': './src/index.js',
    'index.min': './src/index.js',
  },
  externals: {
    'vue': {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'Vue'
    },
    'flatpickr': 'flatpickr'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: {
      name: 'VueFlatpickr',
      type: 'umd',
      umdNamedDefine: true,
    },
    clean: true,
    pathinfo: false,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
  optimization: {
    minimize: true,
    usedExports: false,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        extractComments: false,
        terserOptions: {
          output: {
            comments: false,
          },
          compress: {
            drop_console: true,
          }
        }
      }),
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
    }),
    new VueLoaderPlugin(),
  ],
  devtool: false,
  performance: {
    hints: false,
  },
  stats: {
    modules: false,
    children: false,
    entrypoints: false,
  },
};
