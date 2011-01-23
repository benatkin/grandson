(function() {
  var _ = this._;
  if (!_ && (typeof require !== 'undefined')) _ = require('underscore')._;

  // using the pattern from Backbone.js for commonjs & browser export
  var Grandson;
  if (typeof exports !== 'undefined')
    Grandson = exports;
  else
    Grandson = this.Grandson = {};

  Grandson.wrap = function(val, key) {
    var inner, outer = {};
    if (_.isArray(val)) {
      inner = _.map(val, function(subval, subkey) {
        return Grandson.wrap(subval, key);
      });
    } else if (!(_.isFunction(val)) && typeof val === "object") {
      inner = {};
      _.each(val, function(subval, subkey) {
        inner[subkey] = Grandson.wrap(subval, key);
      });
    } else {
      inner = val;
    }
    outer[key] = inner;
    return outer;
  }

}).call(this);
