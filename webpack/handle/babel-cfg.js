module.exports = function(options) {
  const babelCfgArr = [];
  if (options.params.isCurrDir) {
    babelCfgArr.push([options.page, '../babel.config.js']);
  } else {
    babelCfgArr.push([options.root, './babel.config.js']);
  }
  babelCfgArr.push([options.page, './babel.config.js']);

  const defaultBabelCfg = require('../config/default/babel.config')(options);
  const babelCfg = merge(defaultBabelCfg, requireConfig(babelCfgArr).data);
  return babelCfg;
};
