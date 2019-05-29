const path = require('path');
const fs = require('fs');

const xlog = require('../../util/log');

const {
  readConfig,
} = require('../../util/index');

const checkNodeVersion = require('./checkNodeVersion');
const configFild = 'qing.config.js';

function getPath(options) {
  const { QING_ENV: { qing, cwd, } } = options;
  const arr = [
    [cwd, configFild],
    [cwd, '../', configFild],
    [cwd, '../../', configFild],
    [cwd, '../../../', configFild],
  ];
  let obj = {};
  const Project = {};
  arr.forEach(item => {
    const configPath = path.resolve(...item);
    const config = readConfig(item);
    if (config) {
      Project.root = configPath.split(configFild)[0];
      obj = Object.assign({}, obj, config);
    }
  });
  const defaultConfigPathArr = [qing, '../../config/defaults', configFild];
  const defaultConfig = readConfig(defaultConfigPathArr);
  if (!Project.root) {
    if (cwd.indexOf('websrc') > -1) {
      const index = cwd.indexOf(path.sep + 'websrc');
      Project.root = cwd.slice(0, index);
    } else if (fs.existsSync(path.resolve(cwd, 'websrc'))) {
      Project.root = cwd;
    } else {
      xlog.error(c => c.red('Can`t found working path. Please make sure that you are in the correct directory!'));
      process.exit(-1);
    }
  }

  obj = Object.assign(Project, defaultConfig, obj);
  obj.workPath = obj.workPath.replace(/\{root\}/g, Project.root);
  obj.workPath = path.resolve(obj.root, obj.workPath, './');
  obj.pagePath = obj.pagePath.replace(/\{root\}/g, obj.root).replace(/\{work\}/g, obj.workPath);
  obj.pagePath = path.resolve(obj.root, obj.workPath, obj.pagePath, './');
  obj.buildDist = obj.buildDist.replace(/\{root\}/g, obj.root).replace(/\{work\}/g, obj.workPath);
  obj.buildDist = path.resolve(obj.buildDist, './');
  obj.prodDist = obj.prodDist.replace(/\{root\}/g, obj.root).replace(/\{work\}/g, obj.workPath);
  obj.prodDist = path.resolve(obj.prodDist, './');
  return obj
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
  const config = getPath(data.options);
  process.env['QING_' + action] = {
    RC: config,
    data
  }
}