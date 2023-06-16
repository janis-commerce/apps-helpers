import { strict as assert } from 'assert';
import isValidFormatPosition from '../lib/isValidFormatPosition.js';

describe('isValidFormatPosition helper', () => {
	it('return false when argument is not a valid position', () => {
		[3, NaN, [], { test: 1 }, null, undefined, { positionId: 12 }, { positionKey: 12 }].forEach(
			(arg) => assert.equal(isValidFormatPosition(arg), false)
		);
	});
	it('return true when argument is a valid position', () => {
		const validPosition = {
			positionId: '632b40c90adf68f197caa91f',
			positionKey: '001-D-01-1'
		};

		const { positionId, positionKey } = validPosition;

		[validPosition, { positionId }, { positionKey }].forEach((arg) =>
			assert.equal(isValidFormatPosition(arg), true)
		);
	});
});
