var test = require('tape');
var lexi = require('..');
var MAXINT = Math.pow(2, 53);
var BIGINT = MAXINT - 10;

test('can unpack an integer', function(t) {
  t.plan(1);
  t.equal(lexi.unpack('P0000000000000001'), 1, 'ok');
});

test('can unpack a negative integer', function(t) {
  t.plan(1);
  t.equal(lexi.unpack('N0000000000000001'), -1, 'ok');
});

test('can unpack a big integer', function(t) {
  t.plan(1);
  t.equal(lexi.unpack(lexi(BIGINT)), BIGINT, 'ok');
});

test('can unpack the max (2^53) integer', function(t) {
  t.plan(1);
  t.equal(lexi.unpack(lexi(MAXINT)), MAXINT, 'ok');
});
