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

module.exports = {
  ACTION
};
