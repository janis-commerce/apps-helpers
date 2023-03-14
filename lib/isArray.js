/**
 * @function isArray
 * @param {array} arr
 * @description return true or false if arg is a valid array
 * @returns {bool}
 * @example
 * import {isArray} from '@janiscommerce/apps-helpers'
 * isArray(['Janis']) // true
 */
const isArray = (arr) => !!(arr instanceof Array);

module.exports = isArray;
