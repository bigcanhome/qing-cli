module.exports = {
  domain: '', // watch模式用到的

  buildDist: '${root}/dist/build', // build模式输出目录
  deployDist: '${root}/dist/online', // deploy模式输出目录

  exclude: ['common', 'vue-common'], // 忽略的目录，该目录不会作为入口
  externals: {}, // 官方externals

  cache: true, // 是否开启缓存
  htmlMinify: true, // 是否启用html压缩
  preload: true, //静态资源应用preload策略

  devPort: 8361, //开发端口，port模式使用

  publicPath: '' // 线上路径
};
