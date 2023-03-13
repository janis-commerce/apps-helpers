const assert = require('assert');
const isObject = require('../lib/isObject');

describe('isObject helper', () => {
  it('return false when argument is not a object', () => {
    [3, NaN, [], '', 'Janis', null, undefined].forEach((arg) => assert.equal(isObject(arg), false));
  });
  it('return true when argument is a object', () => {
    assert.equal(isObject({ client: 'Janis' }), true);
  });
});
