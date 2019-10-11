const webpack = require('webpack');

const { getFromEnv, readWebpackConfig } = require('../utils');

module.exports = function() {
  const { env, action, root, cfg, page, sys_root } = getFromEnv();
  let webpackConf = {
    mode: env,
    devtool: env !== 'production' ? 'cheap-eval-source-map' : 'none',
    target: 'web',
    context: root,
    externals: cfg.externals,
    module: {},
    resolve: {},
    plugins: [
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: env
        }
      })
    ],
    stats: { children: false }
  };
  webpackConf = readWebpackConfig(sys_root, webpackConf, getFromEnv());
  console.log(webpackConf);
  return webpackConf;
};
