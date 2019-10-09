const log = require('./utils/log');

module.exports = function(options) {
  log.info('Current directory', c => c.magenta(process.cwd()));
};
