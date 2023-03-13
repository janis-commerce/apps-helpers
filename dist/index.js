'use strict';

/**
 * @function isString
 * @param {string} - The string to validate.
 * @description If the type of the argument is a string, return true, otherwise return false.
 * @returns {bool}
 * @example
 * import {isString} from '@janiscommerce/apps-helpers'
 * isString('Janis') // true
 */

const isString$1 = str => !!(typeof str === 'string');
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

const isObject$1 = obj => !!(obj && obj.constructor === Object);
var isObject_1 = isObject$1;

const isString = isString_1;
const isObject = isObject_1;
var lib = {
  isString,
  isObject
};

module.exports = lib;
//# sourceMappingURL=index.js.map
