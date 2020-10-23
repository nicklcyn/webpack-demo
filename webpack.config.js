const path = require('path');

module.exports = {
  entry: {
    login:'./src/login.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // new webpack.BannerPlugin({
    //   banner: 'hello world'
    // }),
    // new CleanWebpackPlugin()
  ]
};
