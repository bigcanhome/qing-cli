exports.command = 'init [tpl]';

exports.desc = '初始化模板';

exports.builder = function(yargs) {
  yargs.default('tpl', 'base');
  return yargs;
};

exports.handler = function(argv) {
  console.log(argv);
};
