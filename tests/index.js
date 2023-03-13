const assert = require('assert');
const isString = require('../lib/isString');
const isObject = require('../lib/isObject');
const helper = require('../lib');

describe('helper functions', () => {
  it('asdf', () => {
    assert.deepStrictEqual(helper, { isString, isObject });
  });
});
