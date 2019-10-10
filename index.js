const log = require('./utils/log');
const start = require('./task/start');
const path = require('path');

module.exports = function(options) {
  options.sys_root = __dirname;
  options.root = process.cwd();
  options.node_version = process.versions.node;
  log.info('CLI Version', c => c.magenta(options.version));
  log.info('Node Version', c => c.magenta(options.node_version));
  log.info('CLI directory', c => c.magenta(options.sys_root));
  log.info('Current directory', c => c.magenta(options.root));
  if (options.params.name === 'none') {
    options.page = options.root;
  } else {
    options.page = path.resolve(options.root + `/${options.params.name}`);
  }
  log.info(`${options.action} directory`, c => c.magenta(options.page));
  start(options);
};
