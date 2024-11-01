import path from 'path';

export default {
  // devtool: 'source-map' // Possible values: 'eval', 'cheap-module-source-map', 'source-map', etc.
  devtool: 'source-map',
  entry: [
    path.resolve(import.meta.dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(import.meta.dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [],
  module: {
    rules: [
      // { test: /\.ts$/, use: 'ts-loader' },
      {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},


    ]
  }
};

