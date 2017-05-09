const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    host: '0.0.0.0',
    port: '3000',
    hot: true,
    inline: true,
    historyApiFallback: true
  },
  module: {
  rules: [
    {
      test: /\.js$/, use: 'babel-loader'
    }
  ]},
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
}
