module.exports = function(options) {
  const cssCfgArr = [];
  if (options.params.isCurrDir) {
    cssCfgArr.push([options.page, '../postcss.config.js']);
  } else {
    cssCfgArr.push([options.root, './postcss.config.js']);
  }
  cssCfgArr.push([options.page, './postcss.config.js']);

  const defaultPostCssCfg = require('../config/default/postcss.config')(options);
  const cssCfg = merge(defaultPostCssCfg, requireConfig(cssCfgArr).data);
  return cssCfg;
};
