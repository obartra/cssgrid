const { LoaderOptionsPlugin, ExtractTextWebpackPlugin } = require('webpack');
const { join } = require('path');

module.exports = {
  module: {
    entry: './grid',
    output: {
        path: join(__dirname, 'dist'),
        filename: 'grid.min.css'
    },
    context: __dirname,
    rules: [
      {
        test: /\.css$/,
        use: new ExtractTextWebpackPlugin.extract({
            use: 'css-loader',
            options: {
              importLoaders: 1
            }
        })
[
          'style-loader',
          {
          },
          'postcss-loader'
        ]
      }
    ],
    plugins: [
      new ExtractTextPlugin('grid.css'),
      new LoaderOptionsPlugin({
        minimize: true
      }),
    ]
  }
}
