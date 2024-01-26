const { merge } = require('webpack-merge');
const commonConfig = require("./webpack.config.common");
const { resolve } = require("path");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    hot: true,
    open: true
  }
});