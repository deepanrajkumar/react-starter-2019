const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.config.js");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ],
  output: {
    filename: "js/[name]-bundle-[hash].js",
    path: path.resolve(__dirname, "../dist")
  }
});
