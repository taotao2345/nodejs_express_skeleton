'use strict';

var express = require('express');
var router = express.Router();

var config = require('../config/config');
var example = require('../lib/example');

router.get('/', function(req, res, next) {
  var x = example.hoge('hoge');
  var y = example.hoge('foo');
  res.send({
    config: config,
    hoge: x,
    foo: y
  });
});

module.exports = router;
