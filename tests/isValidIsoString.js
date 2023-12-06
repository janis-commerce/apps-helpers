import { strict as assert } from 'assert';
import isValidIsoString from '../lib/isValidIsoString.js';

describe('isValidIsoString', () => {
	it('return false when date is invalid isoFormat', () => {
		[NaN, null, '', [1, 2], { test: 1 }].forEach((arg) =>
			assert.equal(isValidIsoString(arg), false)
		);
	});

	it('return isoFormat string when is valid', () => {
		const isoString = '2022-02-03T17:29:28.637Z';
		assert.equal(isValidIsoString(isoString), true);
	});
});
