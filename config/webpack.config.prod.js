const path = require('path');
// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "[name]-[contenthash].js",
    path: path.resolve(__dirname, "../docs"),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [{
          loader: 'file-loader',
          options:{
            name: 'css/[name].[ext]',
            outputPath: 'images',
          }
          },
          {
            loader: 'image-webpack-loader',
            options: {
            mozjpeg: {
              quality: 70,
              progressive: true
            }
          }
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      template: (__dirname, "src/index.html")
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/assets", to: "assets"},
      ],
    }),
    new CleanWebpackPlugin(),
  ],
}