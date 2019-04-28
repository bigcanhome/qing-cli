module.exports = {
  devPort: '8080',
  proxy: {},
  // 需要走编译的node_modules，一般为源码引入，ES6模块
  transpileDependencies: [
    'node_modules/leona',
    'node_modules/@api/core',
    'node_modules/vue-open-popup',
    'node_modules/@pscp'
  ],
  buildDist: 'dist/build', // build模式输出目录
  deployDist: 'dist/online', // deploy模式输出目录
}