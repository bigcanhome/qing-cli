const { merge } = require('lodash');
const path = require('path');

const before = require('./before');
const { requireConfig } = require('../utils');
const log = require('../utils/log');

module.exports = function(options) {
  if (options.params.name === 'none') {
    options.page = options.root;
  } else {
    options.page = path.resolve(options.root + `/${options.params.name}`);
  }
  process.chdir(options.page);
  log.info('Change working path to', c => c.magenta(options.page));

  const cfgArr = [];
  if (options.params.isCurrDir) {
    cfgArr.push([options.page, '../qing.config.js']);
  } else {
    cfgArr.push([options.root, './qing.config.js']);
  }
  cfgArr.push([options.page, './qing.config.js']);

  const defaultCfg = require('../config/default/qing.config');
  const getFileData = requireConfig(cfgArr);

  if (getFileData.index === 0) {
    log.warning(
      ...[
        '您没有设置 qing.config.js 使用了默认配置 幸运的是QING是开箱即用的',
        '如要配置请参考: http://fe.pandatv.com/docs/muse/MUSERC.html'
      ]
    );
  }
  const cfg = merge(defaultCfg, getFileData.data);
  options.cfg = cfg;
  log.success('QING配置读取成功！！');
  before(options);
};
