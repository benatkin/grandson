# Grandson

Wraps deserialized JSON objects, doubling their depth, for adding
metadata to even the most unstructured of JSON documents.

# Example

**OOPS**: the object wrapping appears to be wrong

    > var Grandson = require('./grandson');
    > var unwrapped = {array: [3, 2, 1], obj: {"x": 1, "y": 2}};
    > console.log(JSON.stringify(unwrapped, null, 2));
    {
      "array": [
        3,
        2,
        1
      ],
      "obj": {
        "x": 1,
        "y": 2
      }
    }
    > var wrapped = Grandson.wrap(unwrapped, "_");
    > console.log(JSON.stringify(wrapped, null, 2));
    {
      "_": {
        "array": {
          "_": [
            {
              "_": 3
            },
            {
              "_": 2
            },
            {
              "_": 1
            }
          ]
        },
        "obj": {
          "_": {
            "x": {
              "_": 1
            },
            "y": {
              "_": 2
            }
          }
        }
      }
    }

# TODO

* Fix object wrapping if it's indeed wrong (including broken test)
* Test array wrapping
* More tests

# License

[CC0](http://creativecommons.org/publicdomain/zero/1.0/)
