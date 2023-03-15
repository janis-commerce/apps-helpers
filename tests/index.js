import assert from 'assert';
import isString from '../lib/isString.js';
import isObject from '../lib/isObject.js';
import isArray from '../lib/isArray.js';
import isFunction from '../lib/isFunction.js';
import isNumber from '../lib/isNumber.js';
import isBoolean from '../lib/isBoolean.js';

import helper from '../lib/index.js';

describe('helper functions', () => {
	it('return methods', () => {
		assert.deepStrictEqual(helper, {
			isString,
			isObject,
			isArray,
			isFunction,
			isNumber,
			isBoolean
		});
	});
});
