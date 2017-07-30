var webpack = require('webpack');
var path = require('path');
var libraryName = 'qtk';

module.exports = {  
  cache: true,
  entry: {
    qtk   : './js/src/index.js',
    demo1 : './js/demos/demo1/src/index.js'
  },
  output: {
    path: __dirname,
    filename: './demos/js/[name].js',
    library: libraryName
  },
  resolve: {
   modules: [
     path.join(__dirname, "js"),
     "node_modules"
   ]
  }
}
