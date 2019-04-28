const { WEBPACK } = require('../static');

const baseConf = {
  presets: [
    ['@babel/preset-env', {
      modules: false,
      targets: WEBPACK.browserList.join(','),
    }],
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-export-default-from',
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-transform-runtime', {
      absoluteRuntime: true,
      corejs: 2,
    }],
  ],
};

baseConf.presets.push(
  ['@babel/preset-react', {
    development: process.env.NODE_ENV === 'development',
  }],
);

module.exports = baseConf;