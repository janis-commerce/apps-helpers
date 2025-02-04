import { strict as assert } from 'assert';
import isEmptyArray from '../lib/isEmptyArray.js';

describe('isEmptyArray helper', () => {
	it('return false when argument is not a array', () => {
		[3, NaN, {}, '', 'Janis', null, undefined].forEach((arg) =>
			assert.equal(isEmptyArray(arg), false)
		);
	});
	it('return true when argument is an empty array', () => {
		assert.equal(isEmptyArray([]), true);
	});
});
