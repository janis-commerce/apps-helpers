import { strict as assert } from 'assert';
import isEmptyObject from '../lib/isEmptyObject.js';

describe('isEmptyObject helper', () => {
	it('return false when argument is not a object', () => {
		[3, NaN, [], '', 'Janis', null, undefined].forEach((arg) =>
			assert.equal(isEmptyObject(arg), false)
		);
	});
	it('return true when argument is an empty object', () => {
		assert.equal(isEmptyObject({}), true);
	});
});
