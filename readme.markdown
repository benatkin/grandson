# Trustache

A poor man's mustache.

# Why?

It's an experiment.
I find myself wanting to roll my own code to process what's in the curly brace.
Perhaps I want to have dots to indicate member variables.
I'd also like to be able to copy and paste it.

# Example

    var me = {"name": "Ben", "greeting": "Hi"};
    document.write(Trustache.render("{{ greeting }} I'm {{ name }}"), function(s) {
      return encodeURI(me[s]);
    });

# License

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
