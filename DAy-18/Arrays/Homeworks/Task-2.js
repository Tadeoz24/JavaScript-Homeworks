function reverse(array) {
  if (!Array.isArray(array[0])) {
    throw new TypeError("first parameter should be array");
  }
  if (arr.length === 0) {
    throw new TypeError("this array is empty");
  }

  let reversedNumbers = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedNumbers.push(array[i]);
  }

  return reversedNumbers;
}

const arr = [[0], 1, 2, 3];

console.log(reverse(arr));
