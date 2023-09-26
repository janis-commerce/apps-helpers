import { strict as assert } from 'assert';
import getHeaders from '../lib/getHeaders.js';

const baseHeaders = {
	'content-Type': 'application/json',
	'janis-api-key': 'Bearer'
};

describe('getHeaders helper', () => {
	describe('Params', () => {
		it('should return only baseHeaders if no params are passed', () => {
			assert.deepEqual(getHeaders(1, 1, 1), baseHeaders);
		});

		it('should include custom client header', () => {
			const params = {
				client: 'my-client'
			};
			const expectedHeaders = {
				...baseHeaders,
				'janis-client': 'my-client'
			};
			assert.deepEqual(getHeaders(params), expectedHeaders);
		});

		it('should include custom access token header', () => {
			const params = {
				accessToken: 'my-access-token'
			};
			const expectedHeaders = {
				...baseHeaders,
				'janis-api-secret': 'my-access-token'
			};
			assert.deepEqual(getHeaders(params), expectedHeaders);
		});

		it('should include page and page size headers', () => {
			const params = {
				page: 1,
				pageSize: 10
			};
			const expectedHeaders = {
				...baseHeaders,
				'x-janis-page': 1,
				'x-janis-page-size': 10
			};
			assert.deepEqual(getHeaders(params), expectedHeaders);
		});

		it('should include getTotals header', () => {
			const params = {
				getTotals: true
			};
			const expectedHeaders = {
				...baseHeaders,
				'x-janis-totals': true
			};
			assert.deepEqual(getHeaders(params), expectedHeaders);
		});

		it('should include getOnlyTotals header', () => {
			const params = {
				getOnlyTotals: true
			};
			const expectedHeaders = {
				...baseHeaders,
				'x-janis-only-totals': true
			};
			assert.deepEqual(getHeaders(params), expectedHeaders);
		});
	});

	describe('CustomHeaders', () => {
		it('should include all custom headers', () => {
			const params = {
				client: 'my-client',
				accessToken: 'my-access-token',
				page: 1,
				pageSize: 10,
				getTotals: true,
				getOnlyTotals: true
			};
			const customHeaders = {
				'custom-header-1': 'value-1',
				'custom-header-2': 'value-2'
			};
			const expectedHeaders = {
				...baseHeaders,
				'janis-client': 'my-client',
				'janis-api-secret': 'my-access-token',
				'x-janis-page': 1,
				'x-janis-page-size': 10,
				'x-janis-totals': true,
				'x-janis-only-totals': true,
				'custom-header-1': 'value-1',
				'custom-header-2': 'value-2'
			};
			assert.deepEqual(getHeaders(params, {}, customHeaders), expectedHeaders);
		});
	});

	describe('DeviceHeaders', () => {
		it('should handle empty device data headers and custom headers', () => {
			const params = {
				client: 'my-client'
			};
			const expectedHeaders = {
				...baseHeaders,
				'janis-client': 'my-client'
			};
			assert.deepEqual(getHeaders(params, {}, {}), expectedHeaders);
		});

		it('should include user-agent header with valid deviceDataHeaders', () => {
			const deviceDataHeaders = {
				'janis-app-name': 'MyApp',
				'janis-app-version': '1.0.0',
				'janis-app-device-os-name': 'iOS',
				'janis-app-device-os-version': '14.5',
				'janis-app-device-name': 'iPhone 12',
				'janis-app-device-id': '123456789'
			};
			const expectedUserAgent = 'MyApp/1.0.0 (iOS 14.5; iPhone 12; 123456789)';
			const headers = getHeaders({}, deviceDataHeaders);
			assert.equal(headers['user-agent'], expectedUserAgent);
		});

		it('should not include user-agent header with empty deviceDataHeaders', () => {
			const deviceDataHeaders = {};
			const headers = getHeaders({}, deviceDataHeaders);
			assert.deepEqual(headers['user-agent'], undefined);
		});
	});
});
