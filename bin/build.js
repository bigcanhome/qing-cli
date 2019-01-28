#!/usr/bin/env node

const log = require('../util/log');

const build = (option) => {
const log = require('../util/log');
log.code({content: option.page});
}

module.exports = {
  build,
};