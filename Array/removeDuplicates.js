const arr = [1, 1, 2];

const removeDuplicates = (nums) => {
  let slow = 0;
  let fast = 1;
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      fast++;
    } else {
      fast++;
    }
  }
  return slow + 1;
};

console.log(removeDuplicates(arr));
