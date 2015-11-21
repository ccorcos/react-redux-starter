var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'react-hot!babel'}, 
      { test: /\.coffee$/, exclude: /node_modules/, loader: "react-hot!babel!coffee" },
      { test: /\.css$/, loader: 'style!css'},
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.(svg|gif|png|jpe?g|ttf|woff2?|eot)$/, loader: 'url?limit=8182' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.scss'],
    root: [ __dirname ],
    modulesDirectories: ['node_modules' ]
  },
  resolveLoader: {
    modulesDirectories: ['node_modules' ]
  },
  sassLoader: {
    includePaths: [
      '.',
      'node_modules'
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
