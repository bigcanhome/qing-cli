const { spawn } = require('child_process');

const log = require('../utils/log');

const { setToEnv } = require('../utils/');

module.exports = function(options) {
  const { webpackConfigFile, webpackBin } = options;
  setToEnv(options);
  log.info('Starting task', c => c.magenta(options.action));
  return spawn(webpackBin, ['--config', webpackConfigFile], {
    stdio: 'inherit',
    shell: true
  });
};
