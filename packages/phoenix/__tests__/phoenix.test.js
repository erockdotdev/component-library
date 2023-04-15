'use strict';

const phoenix = require('..');
const assert = require('assert').strict;

assert.strictEqual(phoenix(), 'Hello from phoenix');
console.info('phoenix tests passed');
