const threeSum = (numbers, target) => {
  const nums = numbers.sort((a, b) => {
    return a - b;
  });

  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let targetSum = target - nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (right > left) {
      const sum = nums[left] + nums[right];
      if (sum > targetSum) {
        right--;
      } else if (sum < targetSum) {
        left++;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return res;
};
console.log(threeSum([-1, -2, -3, 4, 5, 6, 7, 0, 1, 2, 3], 0));
