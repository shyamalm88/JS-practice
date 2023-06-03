const SubsetSum = (arr, n) => {
  const result = [];
  helper(0, arr, n, 0, result);
  return result.sort((a, b) => a - b);
};

const helper = (index, arr, n, sum, result) => {
  if (index == n) {
    result.push(sum);
    return;
  }
  helper(index + 1, arr, n, sum + arr[index], result);
  helper(index + 1, arr, n, sum, result);
};

const arr = [3, 1, 2];
const n = arr.length;

console.log(SubsetSum(arr, n));
