const config = require('./config/index');
const pkg = require('./package.json');

const xlog = require('./util/log');
// const {
//   requireIfExsit,
//   requireMiddleware,
// } = require('./util/index');

module.exports = function (options) {
  xlog.code(
    {
      content: [
        '-----欢迎使用Qing[' + pkg.version + '](Power By Webpack)-----',
      ]
    }
  )
  xlog.info('Using Node ', c => c.magenta(options.argv[0]));
  xlog.info('Using ' + pkg.name, c => c.magenta(options.argv[1]));
  xlog.info('Current directory', c => c.magenta(process.cwd()));
};
