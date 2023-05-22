// Given an array and a value, find if there is a triplet in array whose sum is equal to the given value.
// If there is such a triplet present in array,
// then print the triplet and return true. Else return false.

// Input: array = {12, 3, 4, 1, 6, 9}, sum = 24;
// Output: 12, 3, 9
// Explanation: There is a triplet (12, 3 and 9) present
// in the array whose sum is 24.
// Input: array = {1, 2, 3, 4, 5}, sum = 9
// Output: 5, 3, 1
// Explanation: There is a triplet (5, 3 and 1) present
// in the array whose sum is 9.

function findTriplets(arr, n, sum) {
  for (let i = 0; i < n - 2; i++) {
    let s = new Set();
    let curr_sum = sum - arr[i];

    for (let j = i + 1; j < n; j++) {
      if (s.has(curr_sum - arr[j])) {
        console.log(
          "triplet  = " + arr[i] + ", " + arr[j] + ", " + (curr_sum - arr[j])
        );
        return true;
      }
      s.add(arr[j]);
    }
  }
  return false;
}

let A = [1, 4, 45, 6, 10, 8];

let sum = 22;
let arr_size = A.length;
console.log(findTriplets(A, arr_size, sum));
