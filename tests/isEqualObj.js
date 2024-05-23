import { strict as assert } from 'assert';
import isEqualObj from '../lib/isEqualObj.js';

describe('isEqualObj helper', () => {
	const pkg = {
		referenceId: 'DQHGCV',
		ean: 'VDUKEWJ4Q74CZ',
		location: {
			warehouseId: '631fb04e450dd98b3f6239f8',
			position: ''
		},
		orderItems: [
			{
				id: 'D35EC44C6F30423FAE23F695395622E1-01',
				quantity: 1
			}
		],
		packageId: '632352cc73c66d293681092b',
		packageTypeId: '619e874473710f000802e835'
	};

	describe('return true', () => {
		it('refer to the same object', () => {
			const copy = pkg;
			const isEqual = isEqualObj(pkg, copy);

			assert.equal(isEqual, true);
		});

		it('they are the same', () => {
			const copy = { ...pkg };
			const isEqual = isEqualObj(pkg, copy);

			assert.equal(isEqual, true);
		});
	});

	describe('return false', () => {
		it('firts arg is not objects', () => {
			[undefined, true, 1, 'abc', null].forEach((invalidObject) => {
				assert.equal(isEqualObj(invalidObject, pkg), false);
				assert.equal(isEqualObj(pkg, invalidObject), false);
			});
		});

		it('they do not have the same number of keys', () => {
			// eslint-disable-next-line no-unused-vars
			const { ean, ...res } = pkg;
			const isEqual = isEqualObj(pkg, { ...res });

			assert.equal(isEqual, false);
		});

		it('some value changes', () => {
			// eslint-disable-next-line no-unused-vars
			const { orderItems, ...res } = pkg;
			const item = {
				id: 'D35EC44C6F30423FAE23F695395622E1-01',
				quantity: 2
			};

			const isEqual = isEqualObj(pkg, { ...res, orderItems: [item] });

			assert.equal(isEqual, false);
		});
	});
});
