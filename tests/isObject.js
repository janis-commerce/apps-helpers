import { strict as assert } from 'assert';
import isObject from '../lib/isObject.js';

describe('isObject helper', () => {
  it('return false when argument is not a object', () => {
    [3, NaN, [], '', 'Janis', null, undefined].forEach((arg) => assert.equal(isObject(arg), false));
  });
  it('return true when argument is a object', () => {
    assert.equal(isObject({ client: 'Janis' }), true);
  });
});
