import assert from 'assert';
import isString from '../lib/isString.js';
import isObject from '../lib/isObject.js';
import isArray from '../lib/isArray.js';
import isFunction from '../lib/isFunction.js';
import isNumber from '../lib/isNumber.js';
import isBoolean from '../lib/isBoolean.js';
import promiseWrapper from '../lib/promiseWrapper.js';
import isRequired from '../lib/isRequired.js';
import isValidUrl from '../lib/isValidUrl.js';
import debounce from '../lib/debounce.js';
import generateRandomId from '../lib/generateRandomId.js';
import isJSON from '../lib/isJSON.js';
import isValidFormatPosition from '../lib/isValidFormatPosition.js';
import getHeaders from '../lib/getHeaders.js';
import isValidateIsoString from '../lib/isValidateIsoString.js';
import formatIsoToDate from '../lib/formatIsoToDate.js';

import helper from '../lib/index.js';

describe('helper functions', () => {
	it('return methods', () => {
		assert.deepStrictEqual(helper, {
			isString,
			isObject,
			isArray,
			isFunction,
			isNumber,
			isBoolean,
			promiseWrapper,
			isRequired,
			isValidUrl,
			debounce,
			generateRandomId,
			isJSON,
			isValidFormatPosition,
			getHeaders,
			isValidateIsoString,
			formatIsoToDate
		});
	});
});
