function readConfig(...args) {
  let config = {};
  args.forEach(arg => {
    const filePath = path.resolve(...arg);
    if (fs.existsSync(filePath)) {
      let res = {};
      try {
        res = require(filePath);
      } catch (err) { }
      config = Object.assign(config, {});
    }
    return config;
  })
}