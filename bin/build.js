#!/usr/bin/env node
console.log(process.cwd());

const build = (option) => {
  console.log(option)
}

module.exports = {
  build,
};