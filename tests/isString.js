import { strict as assert } from 'assert';
import isString from '../lib/isString.js';

describe('isString helper', () => {
	it('return false when argument is not a string', () => {
		[3, NaN, [], { test: 1 }, null, undefined].forEach((arg) => assert.equal(isString(arg), false));
	});
	it('return true when argument is a string', () => {
		assert.equal(isString('2'), true);
	});
});
