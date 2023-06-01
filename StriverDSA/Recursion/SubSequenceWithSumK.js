const SubSequenceWithSumK = (arr, n, k) => {
  findSubSeqWithSumK(0, arr, n, k, [], 0);
};

const findSubSeqWithSumK = (index, arr, n, k, result, sum) => {
  if (index == n) {
    if (sum === k) {
      console.log(result);
    }
    return;
  }
  sum += arr[index];
  result.push(arr[index]);
  findSubSeqWithSumK(index + 1, arr, n, k, result, sum);
  result.pop();
  sum -= arr[index];
  findSubSeqWithSumK(index + 1, arr, n, k, result, sum);
};

const arr = [1, 2, 1];
const n = arr.length;
const k = 2;

SubSequenceWithSumK(arr, n, k);
