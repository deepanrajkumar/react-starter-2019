const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
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
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["eslint-loader"]
      },
      {
        test: /.(js|jsx)$/,
        include: [path.resolve(__dirname, "../src")],
        exclude: /node_modules/,
        loader: ["babel-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]"
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]"
        }
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      }
    ]
  },

  plugins: [
    new DotEnv({
      path: path.resolve(__dirname, "..", ".env")
    }),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: "./static/index.html",
      filename: "index.html",
      inject: "body"
    })
  ]
};
