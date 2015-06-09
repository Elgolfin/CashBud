Cashbud
=========

A small library providing utility methods to `escape` and `unescape` HTML entities

## Installation

  npm install cashbud --save

## Usage

  var cashbud = require('cashbud')
      escape = cashbud.escape,
      unescape = cashbud.unescape;

  var html = '<h1>Hello World</h1>',
      escaped = escape(html),
      unescaped = unescape(escaped);

  console.log('html', html, 'escaped', escaped, 'unescaped', unescaped);

## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Useful Links
* [http://kripken.github.io/sql.js/GUI/](http://kripken.github.io/sql.js/GUI/)
* [https://github.com/kripken/sql.js](https://github.com/kripken/sql.js)
* [https://github.com/mapbox/node-sqlite3](https://github.com/mapbox/node-sqlite3)

## Release History

* 0.1.0 Initial release