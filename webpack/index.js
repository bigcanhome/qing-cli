const path = require('path');
const { getFromEnv, readWebpackConfig } = require('../utils');

module.exports = function() {
  const config = getFromEnv();
  const { env, root, cfg, sys_root, page } = config;
  let webpackConf = {
    mode: env,
    devtool: env !== 'production' ? 'cheap-eval-source-map' : 'none',
    target: 'web',
    context: root,
    externals: cfg.externals,
    module: {},
    resolve: {},
    plugins: [],
    stats: { children: false }
  };
  webpackConf = readWebpackConfig(path.resolve(sys_root, './webpack/addon'), webpackConf, config);
  /* 获取用户自定义 webpack 参数，自由度极高*/
  webpackConf = readWebpackConfig(
    path.resolve(page, './webpack.config.addon.js'),
    webpackConf,
    config
  );
  console.log(JSON.stringify(webpackConf));
  return webpackConf;
};
