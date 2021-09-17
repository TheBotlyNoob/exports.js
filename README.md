# Exports.JS

> ES6 `export` and `export default` in CommonJS

## Usage

```js
// code-placeholders.js
const _export = require('exports.js');

_export({ foo: 'bar' });
_export('lorem', 'ipsum');

_export.default('foobar');

module.exports = _export.exports;

/**************************************/

// index.JS

const placeholders = require('./code-placeholders.js');

console.log(placeholders.toString()); // foobar

console.log(placeholders.foo); // bar

console.log(placeholders.lorem); // ipsum
```
