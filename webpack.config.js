const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, "./dist"),
    filename: 'bundle.js',
    publicPath:'/'
  },
  devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: './src',
    port: 8100
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            plugins:[ 'transform-object-rest-spread' ]
          }
        }
      },
      {
        test:/\.(s*)css$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
};