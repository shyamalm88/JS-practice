/**
 * Description
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2] 
Output: 1
Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0
 */

const findMin = (nums) => {
  let low = 0;
  let high = nums.length - 1;
  if (nums[high] >= nums[low]) {
    return nums[low];
  }
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    // console.log(nums[low], nums[middle], nums[high])
    if (nums[middle] < nums[middle - 1]) {
      return nums[middle];
    }
    if (nums[middle + 1] < nums[middle]) {
      return nums[middle + 1];
    }
    if (nums[middle] > nums[0]) {
      low = middle + 1;
    } else if (nums[middle] < nums[nums.length - 1]) {
      high = middle - 1;
    }
  }
};
