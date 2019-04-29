const fs = require('fs');
const path = require('path');

function readConfig(...args) {
  let config = {};
  args.forEach(arg => {
    const filePath = path.resolve(...arg);
    if (fs.existsSync(filePath)) {
      let res = {};
      try {
        res = require(filePath);
      } catch (err) { }
      config = Object.assign(config, res);
    }
  })
  return config;
}

// require一个文件，不存在返回null
function requireIfExsit(...args) {
  const filePath = path.resolve(...args);
  if (
    !fs.existsSync(filePath)
    && !fs.existsSync(filePath + '.js')
    && !fs.existsSync(filePath + '/index.js')
  ) return null;
  return require(filePath); // eslint-disable-line
}

// require一个文件，且文件内容是个function
function requireFunction(...args) {
  return requireIfExsit(...args) || function () { return null; };
}


// 请求并执行一个任务
function requireTask(name, params) {
  requireFunction(__dirname, '../task/', name)(params, () => process.exit(-1));
}

module.exports = {
  requireTask,
  readConfig,
}