const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  context: __dirname,
  devtool: 'source-map',
  devServer: {
    static: {
      directory: __dirname + '/public',
    },
  },
  // this allows .env to happen
  plugins: [
    new Dotenv({
      path: '.env', // or '.env.local', '.env.[mode]', etc.
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        // this allows css styling loader
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('tailwindcss'), require('autoprefixer')],
              },
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/[path]',
              publicPath: '/assets/[path]',
              context: path.resolve(__dirname, 'src'),
            },
          },
        ],
      },
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
};
