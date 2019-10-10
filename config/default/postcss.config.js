const { browserList } = require('../static');

module.exports = function(options) {
  return {
    plugins: [
      require('autoprefixer')({
        overrideBrowserslist: browserList
      }),
      require('cssnano')({
        preset: 'default'
      })
    ]
  };
};
