const path = require('path');

module.exports = {
  mode: 'development', //production
  entry: {
    main: path.resolve(__dirname, './client/src/app.jsx')
  },
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  module:
  {
    rules: [{ test: /.jsx?$/, exclude: /node_modules/, loader: "babel-loader"}]
  }
}