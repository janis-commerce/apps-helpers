/**
 * @function isString
 * @param {string} str - String to validate.
 * @description If the type of the argument is a string, return true, otherwise return false.
 * @returns {bool}
 * @example
 * import {isString} from '@janiscommerce/apps-helpers'
 * isString('Janis') // true
 */

const isString = (str) => !!(typeof str === 'string');

module.exports = isString;
