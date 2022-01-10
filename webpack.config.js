const nodeExternals = require('webpack-node-externals')
const serverlessWebpack = require('serverless-webpack')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: serverlessWebpack.lib.entries,
  mode: serverlessWebpack.lib.webpack.isLocal ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.eta$/i,
        use: 'raw-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [new ESLintPlugin({ extensions: ['ts'] })],
  externals: [nodeExternals()]
}
