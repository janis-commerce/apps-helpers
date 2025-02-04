import isArray from './isArray.js';

/**
 * @function isEmptyArray
 * @param {array} arr
 * @description return true or false if arg is a valid array and has length
 * @returns {bool}
 * @example
 * import {isEmptyArray} from '@janiscommerce/apps-helpers'
 * isEmptyArray(['Janis']) // false
 */
const isEmptyArray = (array) => isArray(array) && !array.length;

export default isEmptyArray;
