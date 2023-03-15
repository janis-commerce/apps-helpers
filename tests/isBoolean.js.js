import { strict as assert } from 'assert';
import isBoolean from '../lib/isBoolean.js';

describe('isBoolean helper', () => {
	it('return false when argument is not a object', () => {
		[() => false, NaN, {}, '', 'Janis', null, undefined].forEach((arg) =>
			assert.equal(isBoolean(arg), false)
		);
	});
	it('return true when argument is a object', () => {
		assert.equal(isBoolean(false), true);
	});
});
