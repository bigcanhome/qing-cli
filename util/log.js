const chalk = require('chalk');
const boxen = require('boxen');
const dayjs = require('dayjs');

function resolveChalk(arr, fn) {
  arr.forEach((item, index) => {
    if (typeof item === 'function') {
      arr[index] = item(chalk);
      return;
    }
    if (fn && typeof fn === 'function') {
      arr[index] = fn(item);
    }
  });
  return arr;
}

function info(...args) {
  args = resolveChalk(args);
  args.unshift(chalk.blue('ℹ') + ' ' + chalk.gray(`[ ${dayjs().format('HH:mm:ss')} ]`) + ':');
  console.log(...args);
}

function warning(...args) {
  args = resolveChalk(args, (item) => {
    return chalk.yellowBright(' ' + item);
  });
  args.unshift('\n' + chalk.yellowBright('WARNING:') + '\n');
  args.push('\n');
  console.log(...args);
}

function error(...args) {
  args = resolveChalk(args, (item) => {
    return chalk.red(item);
  });
  args.unshift(chalk.red('✘') + ' ' + chalk.gray(`[ ${dayjs().format('HH:mm:ss')} ]`) + ':');
  console.log(...args);
}

function success(...args) {
  args = resolveChalk(args, (item) => {
    return chalk.green(item);
  });
  args.unshift(chalk.green('✔') + ' ' + chalk.gray(`[ ${dayjs().format('HH:mm:ss')} ]`) + ':');
  console.log(...args);
}

function code({
  content = [],
  options = {},
}) {
  content = Array.isArray(content) ? content : [content];
  const args = resolveChalk(content);
  const opts = Object.assign({
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    align: 'center',
    borderColor: 'blue',
  }, options);
  console.log(boxen(args.join(' '), opts));
}

module.exports = {
  code,
  info,
  warning,
  error,
  success,
};