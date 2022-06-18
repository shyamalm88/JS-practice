const threeSum = function (arr, target) {
  const nums = arr.sort((a, b) => {
    return a - b;
  });
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let targetSum = target - arr[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum > targetSum) {
        right--;
      } else if (sum < targetSum) {
        left++;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return result;
};

console.log(threeSum([-1, -2, 5, 9, 0, 0, 1, 2, 3, 4], 6));
