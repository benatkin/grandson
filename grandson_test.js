// This is the [vows](http://vowsjs.org/) test suite for [trustache](trustache.html).

var  vows = require('vows'),
   assert = require('assert')
 Grandson = require('./grandson');

vows.describe('Wrapping').addBatch({
  'A nested object': {
    'topic': {a: {b: 0, c: 1}, d: 2},
    'wrapping with an underscore': function(obj) {
      var expected = {_: {a: {_: {b: { _: 0 }, c: { _: 1 }}}, d: { _: 2 }}},
          output = Grandson.wrap(obj, "_");
      assert.deepEqual(output, expected);
      assert.equal(obj.a.b, output._.a._.b._);
    }
  },
  'An object containing a nested object and an array': {
    'topic': {array: [3, 2, 1], obj: {"x": 1, "y": 2}},
    'wrapping with an underscore': function(obj) {
      var wrapped = Grandson.wrap(obj, "_");
      assert.equal(wrapped._.array._[1]._, 2);
      assert.equal(obj.array[1], 2);
      assert.equal(wrapped._.obj._.y._, 2);
    }
  }
}).export(module);
