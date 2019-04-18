#!/usr/bin/env node

const program = require('commander');
const package = require('./package.json');

const { build } = require('./bin');

process.title = 'zac';

program
  .version(package.version, '-v, --version')

program
  .command('build [page]')
  .alias('b')
  .description('build your page, build [page]')
  .action((page) => {
    build({
      page,
    })
  });
program.parse(process.argv);
