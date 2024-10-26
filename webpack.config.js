const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './frontend/src/index.js', // entry point for your app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/public/index.html', // HTML template
      filename: 'index.html'
    })
  ],
  devServer: {
    static: path.join(__dirname, 'dist'), // updated line
    compress: true,
    port: 3000
  }
};
