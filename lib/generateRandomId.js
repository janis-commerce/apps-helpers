/**
 * @function generateRandomId
 * @description returns a random combination of letters and/or numbers
 * @returns {string}
 * @example
 * import {generateRandomId} from '@janiscommerce/apps-helpers'
 * generateRandomId() // '6kj4nk9c5so'
 */

const generateRandomId = () => Math.random().toString(32).slice(2);

export default generateRandomId;
