# lexinum

A simple function that is able to convert an integer value into a lexicographically
sortable string.


[![NPM](https://nodei.co/npm/lexinum.png)](https://nodei.co/npm/lexinum/)

[![Build Status](https://img.shields.io/travis/DamonOehlman/lexinum.svg?branch=master)](https://travis-ci.org/DamonOehlman/lexinum)
![experimental](https://img.shields.io/badge/stability-experimental-red.svg)

## Example Usage

```js
var lexi = require('lexinum');

console.log(lexi(1));
// --> P0000000000000001

console.log(lexi(-1));
// --> N0000000000000001

console.log([1, -1].map(lexi).sort());
// --> [ 'N0000000000000001', 'P0000000000000001' ]

```

## How it works

To be completed.

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
