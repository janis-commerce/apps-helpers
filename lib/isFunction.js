/**
 * @function isFunction
 * @param {isFunction} fn
 * @description return true or false if arg is a valid function
 * @returns {bool}
 * @example
 * import {isFunction} from '@janiscommerce/apps-helpers'
 * isFunction(() => true) // true
 */
const isFunction = (fn) => !!({}.toString.call(fn) === '[object Function]');

module.export = isFunction;
