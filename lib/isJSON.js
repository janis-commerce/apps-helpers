import isObject from './isObject.js';

/**
 * @function isJSON
 * @param {string} param
 * @description return true or false if arg is a valid JSON
 * @returns {bool}
 * @example
 * import {isJSON} from '@janiscommerce/apps-helpers'
 * isJSON('{"key": "value"}') // true
 */
const isJSON = (param) => {
	try {
		const jsonObj = JSON.parse(param);
		return isObject(jsonObj);
	} catch (e) {
		return false;
	}
};

export default isJSON;
