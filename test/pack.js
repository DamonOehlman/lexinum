var test = require('tape');
var lexi = require('..');
var MAXINT = Math.pow(2, 53);
var BIGINT = MAXINT - 10;

test('can pack an integer', function(t) {
  t.plan(1);
  t.equal(lexi(1), 'P0000000000000001', 'ok');
});

test('can pack a negative integer', function(t) {
  t.plan(1);
  t.equal(lexi(-1), 'N0000000000000001', 'ok');
});

test('can pack a float', function(t) {
  t.plan(1);
  t.equal(lexi(5.23423), 'P0000000000000005', 'ok');
});

test('can pack a negative float', function(t) {
  t.plan(1);
  t.equal(lexi(-10.35), 'N0000000000000010', 'ok');
});

test('attempting to pack a string returns the original string', function(t) {
  t.plan(1);
  t.equal(lexi('hi'), 'hi', 'value unchanged');
});

test('can pack a big integer', function(t) {
  t.plan(1);
  t.equal(lexi(BIGINT), 'P9007199254740982', 'ok');
});

test('can pack the max integer value possible (2^53)', function(t) {
  t.plan(1);
  t.equal(lexi(MAXINT), 'P9007199254740992', 'ok');
});
