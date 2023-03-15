import { strict as assert } from 'assert';
import promiseWrapper from '../lib/promiseWrapper.js';

describe('promiseWrapper helper', () => {
	it('return error when function throw error', async () => {
		const prom = await promiseWrapper(Promise.reject('arg is not valid'));
		await assert.deepEqual(prom, [null, 'arg is not valid']);
	});

	it('return data when function is resolved', async () => {
		const prom = await promiseWrapper(Promise.resolve({ client: 'Janis' }));
		await assert.deepEqual(prom, [{ client: 'Janis' }, null]);
	});
});
