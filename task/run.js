const { spawn } = require('child_process');

const log = require('../utils/log');

module.exports = function(options) {
  const { webpackConfigFile, webpackBin } = options;

  log.info('Starting task', c => c.magenta(options.action));
  return spawn(webpackBin, ['--config', webpackConfigFile], {
    stdio: 'inherit',
    shell: true
  });
};
