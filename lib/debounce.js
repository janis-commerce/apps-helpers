import isFunction from './isFunction.js';
import isNumber from './isNumber.js';

/**
 * The function debounce is a function that takes two arguments, a function and a number. The function
 * debounce returns a function that will execute the function passed to it after the number of
 * milliseconds passed to it
 * @function debounce
 * @param fn - The function to be debounced.
 * @param [wait=300] - The number of milliseconds to wait before executing the function.
 * @returns A function that will be called after the specified wait time.
 */
const debounce = (fn, wait = 300) => {
	if (!fn || !isFunction(fn)) return null;
	if (!isNumber(wait)) return null;

	let timeout;

	return function (...args) {
		const context = this;

		if (timeout) clearTimeout(timeout);

		timeout = setTimeout(() => {
			timeout = null;
			fn.apply(context, args);
		}, wait);
	};
};

export default debounce;
