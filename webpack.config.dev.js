'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: 'development',
  context: __dirname,
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
    ],
    alias: {
      vue: '@vue/runtime-dom'
    },
    extensions: ['.js', '.json', '.vue', '.tsx', '.ts']
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    publicPath: '',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: require.resolve('ts-loader'),
        options: {
          transpileOnly: false,
          experimentalWatchApi: true,
          appendTsSuffixTo: [/\.vue$/]
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
      {
        test: /\.(jpe?g|gif|png|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:8][ext][query]',
        },
      }
    ]
  },
  // https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      automaticNameDelimiter: '-',
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/].*\.js$/,
          name: 'vendor',
          chunks: 'all',
          enforce: true
        }
      }
    },
    minimizer: [],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true
    }),
    new HtmlBundlerPlugin({
      entry: {
        'index': './examples/index.html',
      },
      js: {
        filename: 'js/[name]-[contenthash:8].js',
      },
      css: {
        filename: 'css/[name]-[contenthash:8].css',
      },
      minify: 'auto',
      minifyOptions: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 9002,
    open: true,
    client: {
      overlay: {
        warnings: false,
        errors: true
      },
    },
    watchFiles: {
      paths: ['src/**/*.*', 'examples/**/*.*'],
      options: {
        usePolling: true,
      },
    },
    static: path.resolve(process.cwd(), 'docs'),
  },
  devtool: isProduction ? false : 'eval-cheap-source-map',
  performance: {
    hints: false,
  },
  stats: {
    modules: false,
    children: false,
    entrypoints: false,
  }
};

if (isProduction) {
  module.exports.optimization.minimizer.push(
    new TerserPlugin({
      include: /\.js$/,
      terserOptions: {
        compress: {
          drop_debugger: true,
          drop_console: true,
        }
      }
    }),
  );
}
