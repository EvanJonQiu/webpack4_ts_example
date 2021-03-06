const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let mode = 'production';
let mode_index = 0;

process.argv.forEach((val, index) => {
  if (val === '--mode') {
    mode_index = index;
  }
});

process.env.NODE_ENV = process.argv[mode_index + 1];

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: "./src/main.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/, 
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      title: "An example of webpack 4 & typescript & react",
      filename: "index.html"
    }),
    new CleanWebpackPlugin()
  ],
  devtool: isDev ? 'source-map' : undefined,
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000
  },
  devServer: {
    open: true,
    hot: true,
    port: 9000
  }
};