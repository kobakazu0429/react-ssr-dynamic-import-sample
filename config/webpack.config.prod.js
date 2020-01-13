"use strict";

const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",

  output: {
    path: path.resolve(__dirname, "../dist/"),
    filename: "bundle.js",
    chunkFilename: "[name].js",
    sourceMapFilename: "[name].js.map",
    publicPath: `/static/`
  },

  optimization: {
    splitChunks: {
      chunks: "initial",
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          enforce: true
        }
      }
    },
    concatenateModules: true
  },

  plugins: [new CleanWebpackPlugin(), new ManifestPlugin()],

  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name]-[hash].[ext]",
              outputPath: "/",
              publicPath: "../dist"
            }
          }
        ]
      }
    ]
  }
});
