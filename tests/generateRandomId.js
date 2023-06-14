import { strict as assert } from 'assert';
import generateRandomId from '../lib/generateRandomId.js';

describe('generateRandomId helper', () => {
	it('should return a random string', () => {
		const randomID = generateRandomId();
		assert.equal(typeof randomID, 'string');
	});
});
