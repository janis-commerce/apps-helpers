/**
 * @function promiseWrapper
 * @param {function} fn
 * @description wrapper to execute promise and return tuple with data and error
 * @returns {array<data, error>}
 * @example
 * import {promiseWrapper} from '@janiscommerce/apps-helpers'
 * const [data, error] = await promiseWrapper(promise())
 */
const promiseWrapper = (promise) =>
	promise.then((data) => [data, null]).catch((error) => Promise.resolve([null, error]));

export default promiseWrapper;
