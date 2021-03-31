const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../docs"),
  },
  devServer: {
    contentBase:path.resolve(__dirname, "../src"),
    port: 9000,
    open: true,
  },
}