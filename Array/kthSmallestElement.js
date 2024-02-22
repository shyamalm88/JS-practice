// Given an array arr[] of size N and a number K, where K is smaller than the size of the array. Find the K’th smallest element in the given array. Given that all array elements are distinct.

// Examples:

// Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 3
// Output: 7

// Input: arr[] = {7, 10, 4, 3, 20, 7, 15}, K = 4
// Output: 10

const findKthSmallestElement = (arr, k) => {
  let maxElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  let freq = new Array(maxElement + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]]++;
  }

  let count = 0;
  for (let i = 0; i < freq.length; i++) {
    if (freq[i] != 0) {
      count += freq[i];
      if (count > k) {
        console.log(i);
        return i;
      }
    }
  }
};

findKthSmallestElement([7, 10, 4, 3, 20, 7, 15], 4);
