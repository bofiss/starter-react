module.exports= {
  entry: ['./client/client.js'],
  output: {
    path:'./dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          preset: ['react','es2015' ]
        }
     }
    ]
  }
}