const log = require('./utils/log');
const start = require('./task/start');

module.exports = function(options) {
  options.sys_root = __dirname;
  options.root = process.cwd();
  options.node_version = process.versions.node;
  options.user = process.env.COMPUTERNAME ? ' ' + process.env.COMPUTERNAME + ' ' : '你';
  log.box({
    content: c => {
      const msg = '********** 欢迎' + options.user + '使用Qing构建您的应用 **********';
      return c.green(msg);
    },
    options: {
      borderColor: 'green'
    }
  });
  log.info('CLI Version', c => c.magenta(options.version));
  log.info('Node Version', c => c.magenta(options.node_version));
  log.info('CLI directory', c => c.magenta(options.sys_root));
  log.info('Current directory', c => c.magenta(options.root));

  start(options);
};
