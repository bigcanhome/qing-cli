module.exports = {
  mode: 'all', // all,page,sdk
  except: ['common', 'dist'], // 全部打包时排除的目录
  devPort: '8080',
  proxy: {},
  // 需要走编译的node_modules，一般为源码引入，ES6模块
  transpileDependencies: [
    'node_modules/leona',
    'node_modules/@api/core',
    'node_modules/vue-open-popup',
    'node_modules/@pscp'
  ],
  workPath: '{root}/websrc/', // 工作目录
  pagePath: '{work}/{page}/', // 具体某个页面项目
  buildDist: '{root}/src/build/{page}/', // build模式输出目录
  prodDist: '{root}/src/online/{page}/', // prod模式输出目录
  deployHost: '',
}