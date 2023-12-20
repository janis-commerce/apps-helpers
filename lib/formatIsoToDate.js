import { format } from 'date-fns';
import isValidIsoString from './isValidIsoString.js';

const mapFormatLng = {
	'es-Ar': 'dd/MM/yyyy',
	'en-US': 'MM/dd/yyyy',
	'pt-BR': 'dd/MM/yyyy',
	default: 'dd/MM/yyyy'
};

/**
 * @function formatIsoToDate
 * @description it is a function that receives an ISO string and formats it
 * @param {Object} params - param
 * @param {Date} params.date - iso format. Example: '2022-02-03T17:29:28.637Z'
 * @param {String} params.locale - iso format. Example: 'es-Ar'
 * @param {String} params.customFormat - iso format. Example: 'pp'
 * @returns {string} - returns an formated date. Example: 18/05/23
 */
const formatIsoToDate = (params) => {
	if (!params || !Object.keys(params).length) return '';

	const { date, locale, customFormat } = params;
	const isValidDate = isValidIsoString(date);

	if (!isValidDate) return '';

	const currentDate = new Date(date);
	const selectLocale = mapFormatLng[locale] || mapFormatLng.default;

	if (customFormat && typeof customFormat !== 'string') {
		return format(currentDate, selectLocale);
	}

	const parseLocale = customFormat ?? selectLocale;
	return format(currentDate, parseLocale);
};

export default formatIsoToDate;
