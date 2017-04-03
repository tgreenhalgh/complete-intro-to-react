/* global require, __dirname, module */

// commonjs (node style)
// could go through babel, but much easier to do straight up
const path = require('path');

module.exports = {
  // context is where to run the command __dirname is root dir
  context: __dirname,
  entry: './js/ClientApp.js',
  devtool: 'eval', // like a source map (do NOT include devtools in production)
  // devtool: 'source-map', // is the full source map (takes longer to build)
  output: {
    path: path.join(__dirname, '/public'), // where bundle.js goes
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json'] // search order for import from
    // e.g. import Blah from './blah'
    // first looks for blah, then blah.js, finally blah.json
  },
  stats: { // what we want webpack to report on
    colors: true,
    reasons: true, // if something fails, tells why it failed
    chunks: true
  },
  module: { // all the transforms want webpack to apply
    rules: [ // if passes this rule, do this transformation
      {
        test: /\.js$/,  // if ends in .js , do the transform loader below
        loader: 'babel-loader'
      }
    ]
  }
};
