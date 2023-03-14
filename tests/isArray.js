const assert = require('assert');
const isArray = require('../lib/isArray');

describe('isArray helper', () => {
  it('return false when argument is not a object', () => {
    [3, NaN, {}, '', 'Janis', null, undefined].forEach((arg) => assert.equal(isArray(arg), false));
  });
  it('return true when argument is a object', () => {
    assert.equal(isArray(['Janis']), true);
  });
});
