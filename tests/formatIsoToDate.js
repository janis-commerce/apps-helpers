import { mock } from 'sinon';
import { strict as assert } from 'assert';
import formatIsoToDate from '../lib/formatIsoToDate.js';

describe('formatIsoToDate', () => {
	describe('it returns empty string when', () => {
		it('params is empty', () => {
			mock(false);
			const params = {};
			assert.deepEqual(formatIsoToDate(params), '');
		});

		it('params.date is not a valid iso string', () => {
			mock(false);
			const params = { date: '' };
			assert.deepEqual(formatIsoToDate(params), '');
		});

		it('params.customFormat is not a valid format', () => {
			const params = {
				date: '2022-02-03T17:29:28.637Z',
				customFormat: { data: 'invalidFormat' }
			};
			mock(params.date);
			assert.deepEqual(formatIsoToDate(params), '');
		});
	});

	describe('it returns an valid format date when', () => {
		it('params.date is valid iso string', () => {
			const params = {
				date: '2022-02-03T17:29:28.637Z'
			};
			mock(params.date);
			assert.deepEqual(formatIsoToDate(params), '03/02/2022');
		});

		it('params.date is valid and receive params.locale', () => {
			const params = {
				date: '2022-02-03T17:29:28.637Z',
				locale: 'en-US'
			};
			mock(params.date);
			assert.equal(formatIsoToDate(params), '02/03/2022');
		});

		it('params.date is valid and params.customFormat is receive', () => {
			const params = {
				date: '2022-02-03T17:29:28.637Z',
				customFormat: 'yyyy'
			};
			mock(params.date);
			assert.equal(formatIsoToDate(params), '2022');
		});
	});
});
