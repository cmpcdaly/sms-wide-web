
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle: './src/index.ts'
  },
  output: {
    chunkFilename: 'chunks/[name].js',
    filename: '[name].js',
    path: path.resolve(__dirname, 'www')
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['src', 'node_modules']
  },
  stats: 'errors-only',
  devServer: {
    contentBase: './www'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          { loader: 'ng-annotate-loader', options: { dynamicImport: true, ngAnnotate: 'ng-annotate-patched', single_quote: true } },
          { loader: 'ts-loader' }
        ]
      },
      {
        test: /\.(png|svg)$/,
        use: {
          loader: 'file-loader',
          options: { name: '[name].[ext]' }
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 2 } },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader', options: { precision: 8 } }
        ]
      }
    ]
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new ForkTsCheckerPlugin({
      checkSyntacticErrors: true
    }),
    new HtmlPlugin({
      template: './src/index.ejs',
      filename: 'index.html',
      inject: false
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: 'chunks/[name].css'
    })
  ]
};
