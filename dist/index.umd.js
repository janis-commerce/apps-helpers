(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.main = factory());
})(this, (function () { 'use strict';

  /**
   * @function isString
   * @param {string} str - String to validate.
   * @description If the type of the argument is a string, return true, otherwise return false.
   * @returns {bool}
   * @example
   * import {isString} from '@janiscommerce/apps-helpers'
   * isString('Janis') // true
   */

  var isString = function isString(str) {
    return !!(typeof str === 'string');
  };

  /**
   * @function isObject
   * @param {object} obj
   * @description return true or false if arg is a valid object
   * @returns {bool}
   * @example
   * import {isObject} from '@janiscommerce/apps-helpers'
   * isObject('Janis') // false
   */
  var isObject = function isObject(obj) {
    return !!(obj && obj.constructor === Object);
  };

  /**
   * @function isArray
   * @param {array} arr
   * @description return true or false if arg is a valid array
   * @returns {bool}
   * @example
   * import {isArray} from '@janiscommerce/apps-helpers'
   * isArray(['Janis']) // true
   */
  var isArray = function isArray(arr) {
    return !!(arr instanceof Array);
  };

  var index = {
    isString: isString,
    isObject: isObject,
    isArray: isArray
  };

  return index;

}));
//# sourceMappingURL=index.umd.js.map
