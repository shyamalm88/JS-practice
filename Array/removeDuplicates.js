const arr = [1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 22];

const removeDuplicatesInSortedArray = (nums) => {
  let j = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[j] = nums[i];
      j++;
    }
  }
  nums[j] = nums[nums.length - 1];
  return nums.splice(0, j + 1);
};

console.log(removeDuplicatesInSortedArray(arr));
