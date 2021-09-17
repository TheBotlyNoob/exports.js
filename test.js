const _export = require('exports.js');

_export({ foo: 'bar' });
_export('lorem', 'ipsum');

_export.default('foobar');

module.exports = _export.exports;
