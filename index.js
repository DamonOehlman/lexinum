// set our max value to 2^53 as this is the biggest value we can trust JS with
var MAXVAL = Math.pow(2, 53);
var MAXVAL_STR = '' + MAXVAL;
var MAXLEN = MAXVAL_STR.length;

// create the padders for fast padding
var PADDERS = createPadders(MAXLEN);

/**
  # lexinum

  A simple function that is able to convert an integer value into a lexicographically
  sortable string.  I wrote this so I could dependably use both positive and negative
  values in the keys of [leveldb](https://code.google.com/p/leveldb/) store via
  [levelup](https://github.com/rvagg/node-levelup).

  ## Example Usage

  Packing:

  <<< examples/pack.js

  Unpacking:

  <<< examples/unpack.js

  ## Why

  For two reasons:

  1. LevelDB keys are lexicographically sorted.
  2. Arrays in JS are lexicographically sorted (when the sort method is used).

  ## How it works

  An integer value is packed using the following logic:

  1. The integer value is converted to a string value

  2. The string value is then padded left to the match the string length of the
     maximum value we are catering (2^53).

  3. The sign of the integer is prepended to that string with a string ensures
     correct ordering when lexicographically sorted. The `+` and `-` are not
     used as the ordering of these characters is `['+', '-']`.  Instead the
     characters `P` and `N` are used.

**/

var lexi = module.exports = function(val) {
  // initialise the prefix to P for positive value
  var prefix = 'P';

  // if not a number then simply pass through the value
  if (typeof val != 'number') {
    return val;
  }

  // if the value is less than 0, then
  if (val < 0) {
    prefix = 'N';
    val = Math.abs(val);
  }

  // convert the value to a string
  val = val.toString();

  // pad the left of the value
  val = PADDERS[MAXLEN - val.length] + val;

  // return the prefixed value
  return prefix + val;
};

lexi.unpack = function(packedVal) {
  // extract the first character
  var sign = packedVal.charAt(0);

  // parseint the rest
  var val = parseInt(packedVal.slice(1), 10);

  // if the value is not a number, then return the original packed value
  if (isNaN(val)) {
    return packedVal;
  }

  return sign === 'N' ? (0 - val) : val;
}

function createPadders(count) {
  var items = [];

  for (var ii = count; ii--; ) {
    var str = '';
    for (var jj = ii; jj--; ) {
      str = str + '0';
    }

    items[ii] = str;
  }

  return items;
}
