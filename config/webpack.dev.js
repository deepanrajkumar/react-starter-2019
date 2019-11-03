const path = require("path");
const merge = require("webpack-merge");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const common = require("./webpack.config");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "../dist",
    hot: true,
    port: 4000,
    host: "0.0.0.0",
    disableHostCheck: true,
    historyApiFallback: true,
    proxy: {
      "/mockData": "http://localhost:3000"
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new BundleAnalyzerPlugin({ openAnalyzer: false }),
    new CopyWebpackPlugin([
      {
        from: "env.config.js",
        to: "",
        transform(content) {
          return content.toString().replace("$CURRENT_ENV", "development");
        }
      }
    ])
  ],
  output: {
    filename: "js/[name]-bundle-[hash].js",
    path: path.resolve(__dirname, "../dist")
  }
});
