var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      env: 'development'
    },
    port: 3000
  },

  test: {
    root: rootPath,
    app: {
      env: 'test'
    },
    port: 3000
  },

  production: {
    root: rootPath,
    app: {
      env: 'production'
    },
    port: 3000
  }
};

module.exports = config[env];
