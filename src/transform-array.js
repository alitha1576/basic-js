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
    return '\'arr\' parameter must be an instance of the Array!';
  }

  if (arr.length === 0) {
    return [];
  }

  const transformedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (i + 1 < arr.length) {
        i++;
      }
    } else if (arr[i] === '--discard-prev') {
      if (i > 0 && arr[i - 2] !== '--discard-next') {
        transformedArray.pop();
      }
    } else if (arr[i] === '--double-next') {
      if (i + 1 < arr.length) {
        transformedArray.push(arr[i + 1]);
      }
    } else if (arr[i] === '--double-prev') {
      if (i > 0 && arr[i - 2] !== '--discard-next') {
        transformedArray.push(arr[i - 1]);
      }
    } else {
      transformedArray.push(arr[i]);
    }
  }

  return transformedArray;
}

module.exports = {
  transform
};