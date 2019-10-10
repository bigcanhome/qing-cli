const { browserList } = require('../static');

const baseConf = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
        targets: browserList.join(', ')
      }
    ]
  ],
  plugins: []
};

module.exports = function(options) {
  baseConf.cwd = options.root;
  if (options.cfg.react) {
    baseConf.presets.push([
      '@babel/preset-react',
      {
        development: options.env === 'development'
      }
    ]);
  }
  return baseConf;
};
