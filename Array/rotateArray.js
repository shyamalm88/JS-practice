//Given an array, rotate the array to the right by k steps, where k is non-negative.

let rotate = (nums, k) => {
  // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts
  k %= nums.length;
  reverse(0, nums.length - 1, nums);
  reverse(0, k - 1, nums);
  reverse(k, nums.length - 1, nums);
  return nums;
};

reverse = (i, j, nums) => {
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
