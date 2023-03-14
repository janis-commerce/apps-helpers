const isNumber = (num) => typeof num === 'number' && !Number.isNaN(Number(num));

export default isNumber;
