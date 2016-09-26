var webpack = require('webpack');
var libraryName = 'qtk';

module.exports = {  
  cache: true,
  entry: {
    index : './js/index.js'
  },
  output: {
    path: '',
    filename: '[name].js',
    library: libraryName
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js']
  }
}
