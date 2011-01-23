// This is the [vows](http://vowsjs.org/) test suite for [trustache](trustache.html).

var  vows = require('vows'),
   assert = require('assert')
 Grandson = require('./Grandson');

vows.describe('Wrapping').addBatch({
  'An object': {
    'topic': {a: {b: 0, c: 1}, d: 2},
    'wrapping with an underscore': function(obj) {
      var expected = {_: {a: {_: {b: { _: 0 }, c: { _: 1 }}}, d: { _: 2 }}},
          output = Grandson.wrap(obj, "_");
      assert.deepEqual(output, expected);
    }
  }
}).export(module);
