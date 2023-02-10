/**
 * Description
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 */

const maxProduct = (nums = []) => {
  if (nums.length === 0) {
    return 0;
  }
  let prevMax = nums[0];
  let prevMin = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const currentMax = Math.max(nums[i], prevMax * nums[i], prevMin * nums[i]);
    const currentMin = Math.min(nums[i], prevMax * nums[i], prevMin * nums[i]);
    prevMax = currentMax;
    prevMin = currentMin;
    if (prevMax > max) {
      max = prevMax;
    }
  }
  return max;
};
