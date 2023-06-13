import { strict as assert } from 'assert';
import isJSON from '../lib/isJSON.js';

describe('isJSON helper', () => {
	it('return false when param is not a valid JSON', () => {
		[NaN, 3, {}, '', '{asd}', null, undefined, []].forEach((param) =>
			assert.equal(isJSON(param), false)
		);
	});

	it('return true when argument is a function', () => {
		['{"key": "value"}', '{}'].forEach((param) => assert.equal(isJSON(param), true));
	});
});
