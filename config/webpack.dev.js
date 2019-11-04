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
    open: true,
    contentBase: "../dist",
    hot: true,
    port: 4000,
    host: "0.0.0.0",
    disableHostCheck: true,
    historyApiFallback: true,
    proxy: {
      "/mockData": "http://0.0.0.0:3000"
    }
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
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
    filename: "js/[name].js",
    path: path.resolve(__dirname, "../dist")
  }
});
