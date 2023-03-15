/**
 * @function isRequired
 * @param {string} param - name of the param that is required
 * @description throw error with required param
 * @returns {Error}
 * @example
 * import {isRequired} from '@janiscommerce/apps-helpers'
 * const promise = async (arg = isRequired('arg')) => {
 * 	return arg
 * }
 *
 * promise() // Error: 'arg is required'
 */

const isRequired = (param = 'param') => {
	throw new Error(`${param} is required`);
};

export default isRequired;
