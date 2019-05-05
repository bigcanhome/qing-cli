module.exports = function (data, exit) {
  const RUN = {};
  RUN.pages = page === 'all' ? readFolders(path.resolve(working_path, WEBPACK.src), exclude) : [page];
  RUN.cachePath = path.resolve(working_path, isString(cache) ? cache : '.muse-cache/');

  RUN.webpackConfigFile = path.resolve(root, 'webpack/index.js');
  RUN.webpackBin = path.resolve(root, 'node_modules/.bin/webpack');
  RUN.webpackDevBin = path.resolve(root, 'node_modules/.bin/webpack-dev-server');
}