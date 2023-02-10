/**
 * Description
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
 */

const findKthLargest = function (nums, k) {
  const swap = (a, b) => {
    const temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  };
  const partition = (lo, hi) => {
    let i = lo;
    let j = hi + 1;
    const v = nums[lo];
    while (true) {
      while (nums[++i] > v) {
        if (i === hi) {
          break;
        }
      }
      while (nums[--j] < v) {
        if (j === lo) {
          break;
        }
      }
      if (i >= j) {
        break;
      }
      swap(i, j);
    }
    swap(lo, j);
    return j;
  };
  const select = (lo, hi) => {
    const pivot = partition(lo, hi);
    if (pivot === k - 1) {
      return nums[pivot];
    } else if (pivot < k - 1) {
      return select(pivot + 1, hi);
    } else {
      return select(lo, pivot - 1);
    }
  };
  return select(0, nums.length - 1);
};
