// Input: arr[] = {1, 9, 3, 10, 4, 20, 2}
// Output: 4
// Explanation: The subsequence 1, 3, 4, 2 is the longest subsequence of consecutive elements

// Input: arr[] = {36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42}
// Output: 5
// Explanation: The subsequence 36, 35, 33, 34, 32 is the longest subsequence of consecutive elements.

// JavaScript program to find longest
// contiguous subsequence

// Returns length of the longest
// contiguous subsequence

function findLongestConsecutiveSubseq(arr, n) {
  let ans = 0;
  let count = 0;

  // sort the array
  arr.sort(function (a, b) {
    return a - b;
  });

  let v = [];
  v.push(arr[0]);

  for (let i = 1; i < n; i++) {
    if (arr[i] != arr[i - 1]) {
      v.push(arr[i]);
    }
  }
  for (let i = 0; i < v.length; i++) {
    if (i > 0 && v[i] === v[i - 1] + 1) {
      count++;
    } else {
      count = 1;
    }
    ans = Math.max(ans, count);
  }
  return ans;
}

let arr = [1, 2, 2, 3];
let n = arr.length;
console.log(findLongestConsecutiveSubseq(arr, n));
