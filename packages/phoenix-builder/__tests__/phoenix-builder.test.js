'use strict';

const phoenixBuilder = require('..');
const assert = require('assert').strict;

assert.strictEqual(phoenixBuilder(), 'Hello from phoenixBuilder');
console.info('phoenixBuilder tests passed');
