const ACTION = {
  BUILD: {
    env: 'production',
    action: 'build'
  },
  WATCH: {
    env: 'development',
    action: 'watch'
  },
  DEPLOY: {
    env: 'production',
    action: 'deploy'
  },
  INIT: {
    env: '',
    action: 'init'
  }
};
const commands = {
  WATCH: {
    command: 'watch [name]', // 监听一个页面；如果page === '' 则判定 要监听当前这个目录的项目
    description: '监听页面'
  },
  BUILD: {
    command: 'build [name]',
    description: '构建页面'
  },
  DEPLOY: {
    command: 'deploy [name]',
    description: '资源上传'
  },
  INIT: {
    command: 'init [name]',
    description: '创建项目模板'
  }
};

const browserList = ['iOS >= 8.1.2', 'Android >= 4.4', 'ie >= 9', ' > 0.25%'];

module.exports = {
  ACTION,
  commands,
  browserList,
  envOPtionsName: 'QING_OPTIONS'
};
