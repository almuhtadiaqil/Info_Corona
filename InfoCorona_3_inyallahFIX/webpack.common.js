const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
 
module.exports = {
   entry: "./app.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
   module: {
       rules: [
           {
               test: /\.css$/,
               use: [
                   {
                       loader: "style-loader"
                   },
                   {
                       loader: "css-loader"
                   }
               ]
           }
       ]
   },
   plugins: [
       new webpack.ProgressPlugin(),
       new CleanWebpackPlugin(),
       new HtmlWebpackPlugin({
           template: "./index.html",
           filename: "index.html"
       }),
       new CopyWebpackPlugin({
           patterns: [
               {
                   from : path.resolve(__dirname, './images'),
                   to: path.resolve(__dirname, 'dist/images')
               }
           ]
       })
   ]
}