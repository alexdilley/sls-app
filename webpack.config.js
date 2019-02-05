const slsw = require('serverless-webpack');
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: slsw.lib.entries,
  target: 'node', // in order to ignore built-in modules like path, fs, etc
  devtool: 'nosources-source-map', // correctly map stack traces
  // Since aws-sdk is not compatible with webpack, we ignore all modules in
  // node_modules folder (see webpack-node-externals).
  externals: [nodeExternals()],
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  optimization: {
    minimize: false, // we don't want to minimize our code
  },
  performance: {
    hints: false, // disable size warnings for entry points
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
