import { strict as assert } from 'assert';
import debounce from '../lib/debounce.js';

describe('debounce fn', () => {
	describe('return null', () => {
		it('when arg func is invalid', () => {
			[1, [], {}, null, '2', undefined, NaN].forEach((arg) => {
				assert.equal(debounce(arg), null);
			});
		});

		it('when arg milliseconds is invalid', () => {
			[[], {}, null, '2', NaN].forEach((arg) => {
				const func = () => false;
				assert.equal(debounce(func, arg), null);
			});
		});
	});

	describe('execute function', () => {
		it('should call the function after the specified wait time', (done) => {
			let called = false;
			const debouncedFunc = debounce(() => {
				called = true;
			}, 200);

			debouncedFunc();
			assert.equal(called, false);

			setTimeout(() => {
				assert.equal(called, true);
				done();
			}, 300);
		});

		it('should use the last set of arguments when debouncing multiple calls', (done) => {
			let result = null;
			const debouncedFunc = debounce((arg1, arg2) => {
				result = arg1 + arg2;
			}, 200);

			debouncedFunc(2, 3);
			debouncedFunc(4, 5);

			assert.equal(result, null);

			setTimeout(() => {
				assert.equal(result, 9);
				done();
			}, 300);
		});
	});
});
