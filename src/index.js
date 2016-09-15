'use strict';

var YError = require('yerror');

/**
 * Spawn a new time stub
 * @return {Function} A time stub
 */
function initTimeMock() {
  var times = [];

  /**
   * Return the next timestamp
   * @return {Number} The next mocked timestamp
   * @throws {YError} E_TIME_ENDED exception when no timestamp available
   */
  function timeStub() {
    if(times[0] && 1 > times[0].n) { // eslint-disable-line
      times.shift();
    }
    if(!times.length) {
      throw new YError('E_TIME_ENDED');
    }
    times[0].n--;
    return times[0].value;
  }

  /**
   * Set a timestamp for the n next calls
   * @param {Number} value The timestamp value
   * @param {Number} n     The number of call it should be used. Default to Infinity.
   * @return {void}
   */
  timeStub.setTime = function timeStubSetTimes(value, n) {
    times = [{
      n: 'undefined' !== typeof n ? n : Infinity,
      value: value,
    }];
  };

  /**
   * Reset the time stub
   * @return {void}
   */
  timeStub.reset = function timeStubReset() {
    times = [];
  };

  /**
   * Say if there is no more timestamp available
   * @return {Boolean} A boolean indicating if it ended or not
   */
  timeStub.ended = function timeStubEnded() {
    return !times.length;
  };

  /**
   * Set a bunch of timestamp to the queue
   * @param {Array} theTimes An array of timestamps or timestamp objects (format: {value, n}).
   * @return {void}
   */
  timeStub.setTimes = function timeStubSetTimes(theTimes) {
    times = theTimes.map(function timesMapper(theTime) {
      if(!(theTime.n)) {
        return {
          value: theTime,
          n: 1,
        };
      }
      return theTime;
    });
  };

  /**
   * Add a bunch of timestamps to the queue
   * @param  {Array} theTimes An array of timestamps or timestamp objects (format: {value, n}).
   * @return {void}
   */
  timeStub.appendTimes = function timeStubAppendTimes(theTimes) {
    timeStub.setTimes(times.concat(theTimes));
  };

  return timeStub;
}

module.exports = initTimeMock;
