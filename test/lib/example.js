'use strict';

var assert = require('power-assert');
var sinon = require('sinon');

var example = require('../../lib/example');

describe('example', function() {
  it('#hoge', function() {
    assert(example.hoge('hoge') === true);
    assert(example.hoge('foo') === true);
    assert(example.hoge('xxx') === false);
  });

  it('#hoge2 with sinon stub', function() {
    var stub = sinon.stub(example, 'hoge2');

    stub.withArgs('hoge').returns(true);
    stub.withArgs('foo').returns(false);

    assert(example.hoge2('hoge') === true);
    assert(example.hoge2('foo') === false);
  });
});
