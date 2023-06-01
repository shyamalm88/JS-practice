const SubSequenceWithSumK = (arr, n, k) => {
  return findSubSeqWithSumK(0, arr, n, k, 0);
};

const findSubSeqWithSumK = (index, arr, n, k, sum) => {
  if (index == n) {
    if (sum === k) {
      return 1;
    }
    return 0;
  }
  sum += arr[index];
  let left = findSubSeqWithSumK(index + 1, arr, n, k, sum);
  sum -= arr[index];
  let right = findSubSeqWithSumK(index + 1, arr, n, k, sum);
  return left + right;
};

const arr = [1, 2, 1];
const n = arr.length;
const k = 2;

console.log(SubSequenceWithSumK(arr, n, k));
