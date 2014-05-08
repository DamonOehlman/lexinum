# lexinum

A simple function that is able to convert an integer value into a lexicographically
sortable string.  I wrote this so I could dependably use both positive and negative
values in the keys of [leveldb](https://code.google.com/p/leveldb/) store via
[levelup](https://github.com/rvagg/node-levelup).

__NOTE:__  The technique and algorithm used here is very simple, and for more
advanced cases I would recommend checking out the
[bytewise](https://github.com/deanlandolt/bytewise) module.


[![NPM](https://nodei.co/npm/lexinum.png)](https://nodei.co/npm/lexinum/)

[![Build Status](https://img.shields.io/travis/DamonOehlman/lexinum.svg?branch=master)](https://travis-ci.org/DamonOehlman/lexinum)
![experimental](https://img.shields.io/badge/stability-experimental-red.svg)

## Example Usage

Packing:

```js
var lexi = require('lexinum');

console.log(lexi(1));
// --> P0000000000000001

console.log(lexi(-1));
// --> N0000000000000001

console.log([1, -1].map(lexi).sort());
// --> [ 'N0000000000000001', 'P0000000000000001' ]

```

Unpacking:

```js
var lexi = require('lexinum');

console.log(lexi.unpack('P0000000000000001'));
// --> 1

console.log(lexi.unpack('N0000000000000001'));
// --> -1

console.log([1, -1].map(lexi).sort().map(lexi.unpack));
// --> [ -1, 1 ]

```

## Why

For two reasons:

1. LevelDB keys are lexicographically sorted.
2. Arrays in JS are lexicographically sorted (when the `[].sort` method is used).

## How it works

An integer value is packed using the following logic:

1. If negative, the value is converted to it's absolute value and the prefix
   for our packed string is set to `N` for negative (instead of `P` for positive).

2. The absolute integer value is converted to a string value.

3. This string value is then padded left to the match the string length of the
   maximum value we are catering (2^53).

4. The sign of the integer is prepended to that string with a string ensures
   correct ordering when lexicographically sorted. The `+` and `-` are not
   used because:

   ```js
   console.log(['-', '+'].sort());
   // --> ['+', '-']
   ```

   Instead the characters `N` (negative) and `P` (positive) are used:

It should be noted, that non-numeric values are converted are passed through as is
and float values are floored to integers.

## License(s)

### ISC

Copyright (c) 2014, Damon Oehlman <damon.oehlman@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
