const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // context: path.join(__dirname, './app'),
  entry: {
    app: [
      './src/main/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'main.js'
  },
  target: 'electron-main',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  node: {
    __dirname: false
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  optimization: {
    minimize: false
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
}
