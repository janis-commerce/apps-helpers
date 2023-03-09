/**
 * If the type of the argument is a string, return true, otherwise return false.
 * @param {string} str - The string to validate.
 * @returns bool
 * @example isString('Janis') // true
 */
const isString = (str) => !!(typeof str === 'string');

module.exports = isString;
