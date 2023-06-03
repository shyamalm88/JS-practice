const combinationSum = (candidates, target) => {
  let index = 0;
  let result = [];
  let temp = [];

  helper(index, target, candidates, result, temp);
  return result;
};

const helper = (index, target, candidates, result, temp) => {
  if (target === 0) {
    result.push([...temp]);
    return;
  }
  if (target < 0) return;

  for (let i = index; i < candidates.length; i++) {
    temp.push(candidates[i]);
    helper(i, target - candidates[i], candidates, result, temp);
    temp.pop();
  }
};

const arr = [2, 3, 4, 7, 6];
const target = 7;
console.log(combinationSum(arr, target));
