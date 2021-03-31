

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../build"),
  },
  devServer: {
    contentBase:path.resolve(__dirname, "../src"),
    port: 9000,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: (__dirname, "src/index.html")
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/assets", to: "assets/images"},
      ],
    }),
  ],
}