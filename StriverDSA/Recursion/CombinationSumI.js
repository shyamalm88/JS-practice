const combinationSum = (candidates, target) => {
  let index = 0;
  let result = [];
  let temp = [];
  function helper(index, target, temp) {
    if (target === 0) {
      result.push([...temp]);
      return;
    }
    if (target < 0) return;

    for (let i = index; i < candidates.length; i++) {
      temp.push(candidates[i]);
      helper(i, target - candidates[i], temp);
      temp.pop();
    }
  }
  helper(index, target, temp);
  return result;
};

const arr = [2, 3, 4, 7, 6];
const target = 7;
console.log(combinationSum(arr, target));
