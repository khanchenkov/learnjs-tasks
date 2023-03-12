const arr1 = [2, -1, 2, 3, -9, -18, 1];
const arr2 = [2, -1, 2, 3, -9, 20, 1];

const getMaxSubSum = (arr) => {
  let sum = 0;
  const sumarr = [];

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum < 0) {
      sum = 0;
    }
    sumarr.push(sum);
  }

  return Math.max(...sumarr);
};

console.log(getMaxSubSum(arr1)); // 6
console.log(getMaxSubSum(arr2)); // 21
console.log(getMaxSubSum([-1, 2, 3, -9])); //5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); //11
console.log(getMaxSubSum([-2, -1, 1, 2])); //3
console.log(getMaxSubSum([1, 2, 3])); //6
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([-1, -2, -3])); // 0
