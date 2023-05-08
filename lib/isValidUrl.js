import isString from './isString.js';

/**
 * @name isValidUrl
 * @param {string} str
 * @description return true if the argument is a valid url
 * @returns {boolean} true or false
 * @example isValidUrl('www.valid-url.com') // true
 * @example isValidUrl('invalid-url.com') // false
 * @example isValidUrl() // false
 */

const isValidUrl = (path = '') => {
	if (!isString(path)) return false;
	const regexRelative = new RegExp('^(http:|www.|https:|//)');
	return regexRelative.test(path);
};

export default isValidUrl;
