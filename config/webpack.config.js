const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const DotEnv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  resolve: {
    extensions: [".es6", ".js", ".jsx"],
    modules: ["node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js$|\.es6|\.jsx$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(png|svg|jpg|gif|ico|jpeg)$/,
        loader: "file-loader",
        options: {
          name: "assets/images/[name]-[hash].[ext]"
        }
      }
    ]
  },
  plugins: [
    new DotEnv({
      path: path.resolve(__dirname, "..", ".env")
    }),
    new HtmlWebpackPlugin({
      template: "./static/index.html",
      filename: "index.html",
      inject: "body"
    }),
    new ExtractTextPlugin({ filename: "css/[name]-[hash].css" })
  ]
};
