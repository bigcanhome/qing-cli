const webpack = require('webpack');
module.exports = function(webpackConf, config) {
  const base = [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: config.env
      }
    })
  ];
  webpackConf.plugins.push(...base);
  return webpackConf;
};
