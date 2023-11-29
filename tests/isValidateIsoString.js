import { strict as assert } from 'assert';
import isValidateIsoString from '../lib/isValidateIsoString.js';

describe('isValidateIsoString', () => {
	it('return false when date is invalid isoFormat', () => {
		[NaN, null, '', [1, 2], { test: 1 }].forEach((arg) =>
			assert.equal(isValidateIsoString(arg), false)
		);
	});

	it('return isoFormat string when is valid', () => {
		const isoString = '2022-02-03T17:29:28.637Z';
		assert.equal(isValidateIsoString(isoString), true);
	});
});
