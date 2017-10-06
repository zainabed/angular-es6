const path = require('path');
const webpack = require('webpack');

module.exports = {
  context : path.resolve(__dirname, 'src'),
  entry : {
    app: './main/js/app.js',
    card: './main/js/card/card.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].module.js'
  },

  // module loader config
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },

      // Loaders for other file types can go here
    ],
  }
}
