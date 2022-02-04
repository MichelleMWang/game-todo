const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
      rules: [
          {
            test: /\.(s(a|c)ss)$/,
             use: ['style-loader','css-loader', 'sass-loader']
          }
      ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

};