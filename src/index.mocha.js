/* eslint no-magic-numbers:0 */
'use strict';

var initTimeMock = require('./');
var assert = require('assert');

describe('sf-time-mock', function() {
  var timeStub;

  beforeEach(function() {
    timeStub = initTimeMock();
  });

  it('should throw an error when calling the stub and no timestamp where given', function() {
    assert.throws(function() {
      timeStub();
    });
  });

  it('should work when using setTime()', function() {
    timeStub.setTime(1267833600000, 1);
    assert.equal(timeStub(), 1267833600000);
    assert.throws(function() {
      timeStub();
    });
    assert(timeStub.ended());
    timeStub.setTime(1267833600001);
    assert.equal(timeStub(), 1267833600001);
    assert.equal(timeStub(), 1267833600001);
    assert.equal(timeStub(), 1267833600001);
    assert(!timeStub.ended());
  });

  it('should work when using reset()', function() {
    timeStub.setTime(1267833600000);
    assert.equal(timeStub(), 1267833600000);
    assert.equal(timeStub(), 1267833600000);
    timeStub.reset(1267833600000);
    assert.throws(function() {
      timeStub();
    });
    assert(timeStub.ended());
  });

  it('should work when using setTimes() with timestamps', function() {
    timeStub.setTimes([1267833600000, 1267833600001, 1267833600002]);
    assert.equal(timeStub(), 1267833600000);
    assert.equal(timeStub(), 1267833600001);
    assert.equal(timeStub(), 1267833600002);
    assert.throws(function() {
      timeStub();
    });
    assert(timeStub.ended());
  });

  it('should work when using setTimes() with timestamp objects', function() {
    timeStub.setTimes([{
      value: 1267833600000,
      n: 2,
    }, {
      value: 1267833600001,
      n: 1,
    }]);
    assert.equal(timeStub(), 1267833600000);
    assert.equal(timeStub(), 1267833600000);
    assert.equal(timeStub(), 1267833600001);
    assert.throws(function() {
      timeStub();
    });
    assert(timeStub.ended());
  });

  it('should work when using appendTimes() with timestamps', function() {
    timeStub.appendTimes([1267833600000, 1267833600001]);
    timeStub.appendTimes([1267833600002, 1267833600003]);
    assert.equal(timeStub(), 1267833600000);
    assert.equal(timeStub(), 1267833600001);
    assert.equal(timeStub(), 1267833600002);
    assert.equal(timeStub(), 1267833600003);
    assert.throws(function() {
      timeStub();
    });
    assert(timeStub.ended());
  });

});
