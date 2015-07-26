'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var env = process.env.NODE_ENV || 'development';

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
