const path = require('path');
module.export = {
  entry: path.join(__dirname, './index.js'),
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
}