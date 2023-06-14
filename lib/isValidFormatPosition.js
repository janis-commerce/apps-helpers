import isObject from './isObject.js';
import isString from './isString.js';
import isNumber from './isNumber.js';

/**
 * @function isValidFormatPosition
 * @param {object} position - position object
 * @description If the position has the valid format required it will return true, otherwise return false.
 * For a position to be valid, you need a positionKey: string | number or a positionId: string
 * @returns {boolean}
 * @example
 * import {isValidFormatPosition} from '@janiscommerce/apps-helpers'
 * isValidFormatPosition({positionKey: '001-D-01-1', positionId: '632b40c90adf68f197caa91f'}) // true
 * isValidFormatPosition({positionKey: '001-D-01-1'}) // true
 * isValidFormatPosition({positionKey: 123}) // true
 * isValidFormatPosition({positionId: '632b40c90adf68f197caa91f'}) // true
 * isValidFormatPosition({}) // false
 */

const isValidFormatPosition = (position) => {
	if (!isObject(position) || !Object.keys(position).length) return false;

	const { positionKey, positionId } = position;

	return isNumber(positionKey) || isString(positionKey) || isString(positionId);
};

export default isValidFormatPosition;
