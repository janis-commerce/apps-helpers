/**
 * @function isObject
 * @param {object} obj
 * @description return true or false if arg is a valid object
 * @example validateObject('test') // false
 * @returns {bool}
 * @example
 * import {isObject} from '@janiscommerce/apps-helpers'
 * isObject('Janis') // false
 */
const isObject = (obj) => !!(obj && obj.constructor === Object);

module.exports = isObject;
