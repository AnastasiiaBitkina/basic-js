const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Invalid argument: Input should be an array.');
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const prev = arr[i - 1];
    const next = arr[i + 1];

    switch (current) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        if (prev !== undefined && prev !== '--discard-next') {
          result.pop();
        }
        break;
      case '--double-next':
        if (next !== undefined) {
          result.push(next);
        }
        break;
      case '--double-prev':
        if (prev !== undefined && prev !== '--discard-next') {
          result.push(prev);
        }
        break;
      default:
        result.push(current);
        break;
    }
  }

  return result;
}

module.exports = {
  transform
};
