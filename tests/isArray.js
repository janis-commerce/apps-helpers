import { strict as assert } from 'assert';
import isArray from '../lib/isArray.js';

describe('isArray helper', () => {
	it('return false when argument is not a array', () => {
		[3, NaN, {}, '', 'Janis', null, undefined].forEach((arg) => assert.equal(isArray(arg), false));
	});
	it('return true when argument is a array', () => {
		assert.equal(isArray(['Janis']), true);
	});
});
