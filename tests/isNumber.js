import { strict as assert } from 'assert';
import isNumber from '../lib/isNumber.js';

describe('isNumber helper', () => {
	it('return false when argument is not a object', () => {
		[() => false, NaN, {}, '', 'Janis', null, undefined].forEach((arg) =>
			assert.equal(isNumber(arg), false)
		);
	});
	it('return true when argument is a object', () => {
		assert.equal(isNumber(7), true);
	});
});
