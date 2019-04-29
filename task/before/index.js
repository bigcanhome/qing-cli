const {
  readConfig
} = require('../../util/index');

const checkNodeVersion = require('./checkNodeVersion');
const configFild = 'qing.config.js';
function getWebpackConfig(options) {
  const { QING_ENV: { qing, cwd, page, action } } = options;
  const userConfigPaths = [
    [qing, '../../config/defaults', configFild],
    [cwd, configFild],
  ];
  if (action === 'watch') { // watch的时候才去读单一项目中的配置，主要是proxy
    userConfigPaths.push([cwd, './' + page, configFild])
  }

  return readConfig(...userConfigPaths)
}

module.exports = function (data) {
  const { QING_ENV: { action } } = data.options;
  const noCheckAxtions = ['init'];
  if (noCheckAxtions.includes(action)) {
    return;
  }
  checkNodeVersion(data, () => {
    process.exit(-1);
  });
  process.env['QING_' + action] = {
    RC: getWebpackConfig(data.options),
    data
  }
}