import { strict as assert } from 'assert';
import isValidUrl from '../lib/isValidUrl.js';

describe('isValidUrl helper', () => {
	it('return false when argument is not a number', () => {
		[() => false, NaN, {}, '', 'Janis', null, undefined].forEach((arg) =>
			assert.equal(isValidUrl(arg), false)
		);
	});
	it('return true when argument is a number', () => {
		['http:testUrl', 'https:testUrl', 'www.testUrl', '//testUrl'].forEach((arg) =>
			assert.equal(isValidUrl(arg), true)
		);
	});
});
