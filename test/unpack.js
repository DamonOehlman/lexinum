var test = require('tape');
var lexi = require('..');

test('can unpack an integer', function(t) {
  t.plan(1);
  t.equal(lexi.unpack('P0000000000000001'), 1, 'ok');
});

test('can unpack a negative integer', function(t) {
  t.plan(1);
  t.equal(lexi.unpack('N0000000000000001'), -1, 'ok');
});
