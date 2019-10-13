const _ = require('lodash');
const path = require('path');
const fs = require('fs');

const { envOPtionsName } = require('../config/static');

function requireConfig(arr) {
  let data = {};
  let index = 0;
  let filePath = '';
  for (let i = 0; i < arr.length; i++) {
    const fp = path.resolve(...arr[i]);
    if (fs.existsSync(fp)) {
      try {
        filePath = fp;
        index = i + 1;
        data = _.merge(data, require(fp));
      } catch (err) {
        try {
          filePath = fp;
          index = i + 1;
          data = _.merge(data, JSON.parse(fs.readFileSync(fp, 'utf8')));
        } catch (e) {}
      }
    }
  }
  return { data, index, filePath };
}

function setToEnv(value) {
  process.env[envOPtionsName] = JSON.stringify(value);
}

function getFromEnv() {
  const originValue = process.env[envOPtionsName];
  if (!originValue) return undefined;
  try {
    return JSON.parse(originValue);
  } catch (err) {
    return undefined;
  }
}

function readFiles(dirname) {
  let ret = {};
  const dirs = fs.readdirSync(path.resolve(dirname, 'src'));
  dirs.forEach(item => {
    const itemPath = path.resolve(dirname, 'src', item);
    const stats = fs.statSync(itemPath);
    const name = item.replace('.html', '');
    if (stats.isFile() && item.indexOf('.html') > -1) ret[name] = itemPath.replace('.html', '.js');
  });
  return ret;
}

function readWebpackConfig(dirname, webpack, config) {
  if (!fs.existsSync(dirname)) return webpack;
  const dirSt = fs.statSync(dirname);
  if (dirSt.isFile()) {
    webpack = require(dirname)(webpack, config);
    return webpack;
  }
  const dirs = fs.readdirSync(dirname).sort((a, b) => {
    const [, aIndex] = a.match(/\.(\d+)\.js$/) || [null, 0];
    const [, bIndex] = b.match(/\.(\d+)\.js$/) || [null, 0];
    return aIndex - bIndex;
  });
  dirs.forEach(item => {
    const itemPath = path.resolve(dirname, item);
    const stats = fs.statSync(itemPath);
    if (stats.isFile()) {
      webpack = require(itemPath)(webpack, config);
    }
    if (stats.isDirectory()) {
      webpack = readWebpackConfig(itemPath, webpack, config);
    }
  });
  return webpack;
}

module.exports = {
  requireConfig,
  readFiles,
  setToEnv,
  readWebpackConfig,
  getFromEnv
};
