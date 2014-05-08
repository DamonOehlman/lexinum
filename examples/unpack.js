var lexi = require('..');

console.log(lexi.unpack('P0000000000000001'));
// --> 1

console.log(lexi.unpack('N0000000000000001'));
// --> -1

console.log([1, -1].map(lexi).sort().map(lexi.unpack));
// --> [ -1, 1 ]
