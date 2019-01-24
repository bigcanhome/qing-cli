#!/usr/bin/env node

const program = require('commander');
const package = require('./package.json');

const { build } = require('./bin');

process.title = 'zac';

program
  .command('build')
  .description('build your page, build [page]')
  .alias('b')
  .action((page) => {
    build({
      page,
    })
  });
program.parse(process.argv);
