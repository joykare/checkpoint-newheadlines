const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    // below line only works for webpack 1.0
    // path: './dist', 
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'node_modules/react-mdl/extra'),
        ],
        loaders: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
