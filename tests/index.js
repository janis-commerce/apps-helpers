import assert from 'assert';
import isString from '../lib/isString.js';
import isObject from '../lib/isObject.js';
import isArray from '../lib/isArray.js';
import helper from '../lib/index.js';

describe('helper functions', () => {
	it('asdf', () => {
		assert.deepStrictEqual(helper, { isString, isObject, isArray });
	});
});
