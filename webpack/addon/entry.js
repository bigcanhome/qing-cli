const { readFiles } = require('../../utils');
module.exports = function(webpackConf, config) {
  const { page } = config;
  webpackConf.entry = readFiles(page);
  return webpackConf;
};
