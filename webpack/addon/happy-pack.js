const os = require("os");

const { merge } = require("lodash");
const HappyPack = require("happypack");

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

const { requireConfig } = require("../../utils");
const log = require("../../utils/log");

module.exports = function(webpackConf, config) {
  const { page } = config;
  const cfgArr = [];
  cfgArr.push([page, "./babel.config.js"]);
  const defaultCfg = require("../../config/default/babel.config")(config);
  const cfg = merge(defaultCfg, requireConfig(cfgArr).data);

  log.success("BABEL配置读取成功！！");
  webpackConf.plugins.push(
    new HappyPack({
      id: "babel",
      loaders: [
        {
          loader: require.resolve("babel-loader"),
          options: merge(cfg, {
            babelrc: false,
            configFile: false,
            sourceType: "unambiguous"
          })
        }
      ],
      threadPool: happyThreadPool,
      verbose: true
    })
  );
  return webpackConf;
};
