const ACTION = {
  BUILD: 'build',
  WATCH: 'watch',
  SPEED: 'speed',
  DEPLOY: 'deploy',
  CREATE: 'create',
  NEW: 'new',
  LINT: 'lint',
};

const WEBPACK = {
  baseExclude: /(node_modules|bower_components)/,
  browserList: ['iOS >= 8.1.2', 'Android >= 4.4', 'ie >= 9', ' > 0.25%'],
  eslint: ['js', 'jsx', 'ts', 'vue'],
  stylelint: ['less', 'css'],
  src: 'src',
};

module.exports = {
  ACTION,
  WEBPACK,
};