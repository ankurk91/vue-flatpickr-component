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
      'vue$': 'vue/dist/vue.runtime.esm.js'
    },
  },
  entry: {
    'vue-flatpickr': './src/index.js',
    'vue-flatpickr.min': './src/index.js',
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
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: {
      name: 'VueFlatpickr',
      type: 'umd',
      umdNamedDefine: true,
      export: 'default'
    },
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          compilerOptions: {
            preserveWhitespace: false, //Deprecated
            whitespace: 'condense',
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        extractComments: false,
        terserOptions: {
          output: {
            comments: false,
          },
          compress: {
            drop_console: true
          }
        }
      }),
    ]
  },
  plugins: [
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
