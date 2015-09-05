# sf-time-mock
> Mock utility for a function returning a timestamp (like Date.now()).

[![NPM version](https://badge.fury.io/js/sf-time-mock.svg)](https://npmjs.org/package/sf-time-mock) [![Build status](https://secure.travis-ci.org/SimpliField/sf-time-mock.svg)](https://travis-ci.org/SimpliField/sf-time-mock) [![Dependency Status](https://david-dm.org/SimpliField/sf-time-mock.svg)](https://david-dm.org/SimpliField/sf-time-mock) [![devDependency Status](https://david-dm.org/SimpliField/sf-time-mock/dev-status.svg)](https://david-dm.org/SimpliField/sf-time-mock#info=devDependencies) [![Coverage Status](https://coveralls.io/repos/SimpliField/sf-time-mock/badge.svg?branch=master)](https://coveralls.io/r/SimpliField/sf-time-mock?branch=master) [![Code Climate](https://codeclimate.com/github/SimpliField/sf-time-mock.svg)](https://codeclimate.com/github/SimpliField/sf-time-mock)

## Usage

```js
var initTimeMock = require('sf-time-mock');

// Init the time mock
var timeStub = initTimeMock();

// Set the current time
timeStub.setTime(1267833600000);

// Use it everywhere
new Date(timeStub()).toISOString();
// '2010-03-06T00:00:00.000Z'

```

<a name="initTimeMock"></a>
## initTimeMock() ⇒ <code>function</code>
Spawn a new time stub

**Kind**: global function  
**Returns**: <code>function</code> - A time stub  

* [initTimeMock()](#initTimeMock) ⇒ <code>function</code>
  * [~timeStub()](#initTimeMock..timeStub) ⇒ <code>Number</code>
    * [.setTime(value, n)](#initTimeMock..timeStub.setTime) ⇒ <code>void</code>
    * [.reset()](#initTimeMock..timeStub.reset) ⇒ <code>void</code>
    * [.ended()](#initTimeMock..timeStub.ended) ⇒ <code>Boolean</code>
    * [.setTimes(theTimes)](#initTimeMock..timeStub.setTimes) ⇒ <code>void</code>
    * [.appendTimes(theTimes)](#initTimeMock..timeStub.appendTimes) ⇒ <code>void</code>

<a name="initTimeMock..timeStub"></a>
### initTimeMock~timeStub() ⇒ <code>Number</code>
Return the next timestamp

**Kind**: inner method of <code>[initTimeMock](#initTimeMock)</code>  
**Returns**: <code>Number</code> - The next mocked timestamp  
**Throws**:

- <code>YError</code> E_TIME_ENDED exception when no timestamp available


* [~timeStub()](#initTimeMock..timeStub) ⇒ <code>Number</code>
  * [.setTime(value, n)](#initTimeMock..timeStub.setTime) ⇒ <code>void</code>
  * [.reset()](#initTimeMock..timeStub.reset) ⇒ <code>void</code>
  * [.ended()](#initTimeMock..timeStub.ended) ⇒ <code>Boolean</code>
  * [.setTimes(theTimes)](#initTimeMock..timeStub.setTimes) ⇒ <code>void</code>
  * [.appendTimes(theTimes)](#initTimeMock..timeStub.appendTimes) ⇒ <code>void</code>

<a name="initTimeMock..timeStub.setTime"></a>
#### timeStub.setTime(value, n) ⇒ <code>void</code>
Set a timestamp for the n next calls

**Kind**: static method of <code>[timeStub](#initTimeMock..timeStub)</code>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | The timestamp value |
| n | <code>Number</code> | The number of call it should be used. Default to Infinity. |

<a name="initTimeMock..timeStub.reset"></a>
#### timeStub.reset() ⇒ <code>void</code>
Reset the time stub

**Kind**: static method of <code>[timeStub](#initTimeMock..timeStub)</code>  
<a name="initTimeMock..timeStub.ended"></a>
#### timeStub.ended() ⇒ <code>Boolean</code>
Say if there is no more timestamp available

**Kind**: static method of <code>[timeStub](#initTimeMock..timeStub)</code>  
**Returns**: <code>Boolean</code> - A boolean indicating if it ended or not  
<a name="initTimeMock..timeStub.setTimes"></a>
#### timeStub.setTimes(theTimes) ⇒ <code>void</code>
Set a bunch of timestamp to the queue

**Kind**: static method of <code>[timeStub](#initTimeMock..timeStub)</code>  

| Param | Type | Description |
| --- | --- | --- |
| theTimes | <code>Array</code> | An array of timestamps or timestamp objects (format: {value, n}). |

<a name="initTimeMock..timeStub.appendTimes"></a>
#### timeStub.appendTimes(theTimes) ⇒ <code>void</code>
Add a bunch of timestamps to the queue

**Kind**: static method of <code>[timeStub](#initTimeMock..timeStub)</code>  

| Param | Type | Description |
| --- | --- | --- |
| theTimes | <code>Array</code> | An array of timestamps or timestamp objects (format: {value, n}). |
