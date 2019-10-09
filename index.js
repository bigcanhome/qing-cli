const log = require('./utils/log');
const before = require('./task/before');

module.exports = function(options) {
  console.log(options);
  log.info('Current directory', c => c.magenta(process.cwd()));
};
