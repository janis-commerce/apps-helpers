import isString from './isString.js';

/**
 * @name isValidIsoString
 * @description validate if a ISO string is valid or not
 * @param {Date} date date in ISO format
 * @returns {boolean} returns true if the date passed as an argument is valid
 */
const isValidIsoString = (iso) => {
	if (!iso || !isString(iso)) return false;

	const regexIsoFormat =
		/^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/;

	return regexIsoFormat.test(iso);
};

export default isValidIsoString;
