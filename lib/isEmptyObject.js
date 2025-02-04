import isObject from './isObject.js';

/**
 * @function isEmptyObject
 * @param {object} obj
 * @description return true or false if arg is a valid object and has or not keys
 * @returns {bool}
 * @example
 * import {isEmptyObject} from '@janiscommerce/apps-helpers'
 * isEmptyObject('Janis') // false
 */

const isEmptyObject = (obj) => isObject(obj) && !Object.keys(obj).length;

export default isEmptyObject;
