var test = require('tape');
var lexi = require('..');

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
