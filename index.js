// set our max value to 2^53 as this is the biggest value we can trust JS with
var MAXVAL = Math.pow(2, 53);
var MAXVAL_STR = '' + MAXVAL;
var MAXLEN = MAXVAL_STR.length;

// create the padders for fast padding
var PADDERS = createPadders(MAXLEN);

var pack = module.exports = function(val) {
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
