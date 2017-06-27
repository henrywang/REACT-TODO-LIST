const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  context: path.resolve(__dirname),
  entry: './client/client.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env'],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
  ],
  devServer: {
    hot: true, // Tell the dev-server we're using HMR
    contentBase: path.resolve(__dirname, 'client'),
    publicPath: '/dist/',
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Tell webpack .jsx is valid file and able to be imported.
  },
};
