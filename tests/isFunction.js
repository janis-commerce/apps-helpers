import { strict as assert } from 'assert';
import isFunction from '../lib/isFunction.js';

describe('isFunction helper', () => {
	it('return false when argument is not a object', () => {
		[3, NaN, {}, '', 'Janis', null, undefined].forEach((arg) =>
			assert.equal(isFunction(arg), false)
		);
	});
	it('return true when argument is a object', () => {
		assert.equal(
			isFunction(() => 'Janis'),
			true
		);
	});
});
