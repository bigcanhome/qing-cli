const path = require('path');
module.exports = function(webpackConf, config) {
  const { page, sys_root } = config;
  webpackConf.resolve = {
    symlinks: false,
    extensions: ['.js', '.jsx', '.json', '.ts', '.mjs', '.wasm', '.vue'],
    modules: [
      path.resolve(sys_root, 'node_modules'),
      path.resolve(page, 'node_modules'),
      'node_modules'
    ]
  };
  return webpackConf;
};
