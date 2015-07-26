'use strict';

var assert = require('power-assert');
var request = require('supertest');
var app = require('../../index');
var req = request(app);

describe('index', function() {
  describe('GET /', function() {
    it('#200', function(done) {
      var url = '/';
      req.get(url).end(function(err, ret) {
        var res = ret.res;
        assert(res.statusCode === 200);
        done();
      });
    });
  });
});
