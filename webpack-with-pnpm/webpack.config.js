const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PORT = 3000;

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    host: 'localhost',
    port: PORT,
    open: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.ts$/, //시험 속성
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
