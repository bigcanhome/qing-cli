#!/usr/bin/env node

const yarg = require('yargs');

yarg
  .commandDir('qing')
  .demand(1)
  .help()
  .locale('en')
  .showHelpOnFail(true, 'Specify --help for available options').argv;
