const before = require('./before');
const { merge } = require('lodash');
const { requireConfig } = require('../utils');

module.exports = function(options) {
  const cfgArr = [];
  if (options.params.isCurrDir) {
    cfgArr.push([options.page, '../qing.config.js']);
    cfgArr.push([options.page, './qing.config.js']);
  } else {
    cfgArr.push([options.root, './qing.config.js']);
    cfgArr.push([options.page, './qing.config.js']);
  }

  const defaultCfg = require('../config/default/qing.config');
  const cfg = merge(defaultCfg, requireConfig(cfgArr).data);
  options.cfg = cfg;

  before(options);
};
