import { strict as assert } from 'assert';
import isRequired from '../lib/isRequired.js';

describe('isRequired helper', () => {
	it('throw error when arg is not defined', async () => {
		const fnFake = (arg = isRequired('arg')) => arg;
		await assert.rejects(async () => fnFake(), { message: 'arg is required' });
	});

	it('do not execute fn when arg is defined', async () => {
		const fnFake = (arg = isRequired('arg')) => arg;
		await assert.equal(fnFake('Janis'), 'Janis');
	});
});
