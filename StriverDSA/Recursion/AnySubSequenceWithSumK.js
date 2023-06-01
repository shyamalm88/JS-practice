const SubSequenceWithSumK = (arr, n, k) => {
  findSubSeqWithSumK(0, arr, n, k, [], 0);
};

const findSubSeqWithSumK = (index, arr, n, k, result, sum) => {
  if (index == n) {
    if (sum === k) {
      console.log(result);
      return true;
    }
    return false;
  }
  sum += arr[index];
  result.push(arr[index]);
  if (findSubSeqWithSumK(index + 1, arr, n, k, result, sum) === true) {
    return true;
  }
  result.pop();
  sum -= arr[index];
  if (findSubSeqWithSumK(index + 1, arr, n, k, result, sum)) {
    return true;
  }
  return false;
};

const arr = [1, 2, 1];
const n = arr.length;
const k = 2;

SubSequenceWithSumK(arr, n, k);
