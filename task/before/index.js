const path = require('path');
const xlog = require('./util/log');

const {
  readConfig,
} = require('../../util/index');

const checkNodeVersion = require('./checkNodeVersion');
const configFild = 'qing.config.js';
function getWebpackConfig(options) {
  const { QING_ENV: { qing, cwd, page, action } } = options;
  const userConfigPaths = [
    [qing, '../../config/defaults', configFild],
    [cwd, configFild],
    [cwd, './' + page, configFild],
  ];

  return readConfig(...userConfigPaths)
}

function getPath(options) {
  const { QING_ENV: { qing, cwd, page } } = options;
  const arr = [
    [cwd, configFild],
    [cwd, '../', configFild],
    [cwd, '../../', configFild],
    [cwd, '../../../', configFild],
  ];
  const obj = {};
  const Project = {};
  arr.forEach(item => {
    const configPath = path.resolve(...item);
    const config = readConfig(item);
    if (Object.keys(config).length) {
      Project.root = configPath.split(configFild)[0];
      obj[configPath] = config;
    }
  })
  if (Project.root) {
    const defaultConfigPathArr = [qing, '../../config/defaults', configFild];
    const defaultConfig = readConfig(defaultConfigPathArr);
    if (cwd.indexOf('websrc') > -1) {
      const index = cwd.indexOf('websrc');
      Project.root = cwd.slice(0, index);
    } else if (fs.existsSync(path.resolve(cwd, 'websrc'))) {

    } else {
      xlog.error(c => c.red('Can`t found working path. Please make sure that you are in the correct directory!'));
      process.exit(-1);
    }
  }
  console.log(obj);
}

module.exports = function (data) {
  console.log(data);
  const { QING_ENV: { action, cwd } } = data.options;
  const noCheckAxtions = ['init'];
  if (noCheckAxtions.includes(action)) {
    return;
  }
  checkNodeVersion(data, () => {
    process.exit(-1);
  });
  getPath(data);
  process.env['QING_' + action] = {
    RC: getWebpackConfig(data.options),
    data
  }
}