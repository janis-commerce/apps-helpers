/**
 * @name isEqualObj
 * @description check if two objects are exactly the same
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 * @example
 * 	// eslint-disable-next-line no-restricted-syntax
 * import {isEqualObj} from '@janiscommerce/apps-helpers'
 * isEqualObj({items: [{id:123}]},{items: [{id: 123, ean: 456}]}) // false
 */
const isEqualObj = (obj1, obj2) => {
	if (obj1 === obj2) {
		return true;
	}

	if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
		return false;
	}

	const keys1 = Object.keys(obj1);
	const keys2 = Object.keys(obj2);

	if (keys1.length !== keys2.length) {
		return false;
	}

	for (const key of keys1) {
		if (!keys2.includes(key) || !isEqualObj(obj1[key], obj2[key])) {
			return false;
		}
	}

	return true;
};

export default isEqualObj;
