var lexi = require('..');

console.log(lexi(1));
// --> P0000000000000001

console.log(lexi(-1));
// --> N0000000000000001

console.log([1, -1].map(lexi).sort());
// --> [ 'N0000000000000001', 'P0000000000000001' ]
