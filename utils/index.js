const _ = require('lodash');
const path = require('path');
const fs = require('fs');

function requireConfig(arr) {
  let data = {};
  let index = 0;
  let filePath = '';
  for (let i = 0; i < arr.length; i++) {
    const fp = path.resolve(...arr[i]);
    if (fs.existsSync(fp)) {
      try {
        filePath = fp;
        index = i + 1;
        data = _.merge(data, require(fp));
      } catch (err) {
        try {
          filePath = fp;
          index = i + 1;
          data = _.merge(data, JSON.parse(fs.readFileSync(fp, 'utf8')));
        } catch (e) {}
      }
    }
  }
  return { data, index, filePath };
}

module.exports = {
  requireConfig
};
