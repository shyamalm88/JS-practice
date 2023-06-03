const combinationSumII = (candidates, target) => {
  const result = [];
  candidates.sort((a, b) => a - b);
  helper(0, candidates, target, result, []);
  return result;
};

const helper = (index, arr, target, result, ds) => {
  if (target === 0) {
    result.push([...ds]);
    return;
  }

  for (let i = index; i < arr.length; i++) {
    if (i > index && arr[i] == arr[i - 1]) continue;
    if (arr[i] > target) break;
    ds.push(arr[i]);
    helper(i + 1, arr, target - arr[i], result, ds);
    ds.pop();
  }
};

const arr = [1, 1, 3, 2, 4, 7, 6];
const target = 7;
console.log(combinationSumII(arr, target));
