const path = require('path');

const run = require('./run');
const after = require('./after');

const { setToEnv } = require('../utils/');

module.exports = function(options) {
  const { sys_root } = options;
  options.webpackConfigFile = path.resolve(sys_root, 'webpack/index.js');
  options.webpackBin = path.resolve(sys_root, 'node_modules/.bin/webpack');
  options.webpackDevBin = path.resolve(sys_root, 'node_modules/.bin/webpack-dev-server');

  setToEnv(options);
  const processor = run(options);

  processor.on('close', CODE => {
    console.log('close');
    after(options, CODE);
  });
};
