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
