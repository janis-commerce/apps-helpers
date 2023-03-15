/**
 * @function isBoolean
 * @param {boolean} fn
 * @description return true or false if arg is a valid boolean
 * @returns {bool}
 * @example
 * import {isBoolean} from '@janiscommerce/apps-helpers'
 * isBoolean((true) // true
 */
const isBoolean = (bool) => typeof bool === 'boolean';

export default isBoolean;
