/**
 * @function isString
 * @param {string} - The string to validate.
 * @description If the type of the argument is a string, return true, otherwise return false.
 * @returns {bool}
 * @example
 * import {isString} from '@janiscommerce/apps-helpers'
 * isString('Janis') // true
 */

var isString$1 = function isString(str) {
  return !!(typeof str === 'string');
};
var isString_1 = isString$1;

/**
 * @function isObject
 * @param {object} obj
 * @description return true or false if arg is a valid object
 * @example validateObject('test') // false
 * @returns bool
 * @example
 * import {isObject} from '@janiscommerce/apps-helpers'
 * isObject('Janis') // false
 */

var isObject$1 = function isObject(obj) {
  return !!(obj && obj.constructor === Object);
};
var isObject_1 = isObject$1;

var isString = isString_1;
var isObject = isObject_1;
var lib = {
  isString: isString,
  isObject: isObject
};

export { lib as default };
//# sourceMappingURL=index.mjs.map
