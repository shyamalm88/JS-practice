// Input:  arr[] = {1, 5, 7, -1}, sum = 6
// Output:  2
// Explanation: Pairs with sum 6 are (1, 5) and (7, -1).

// Input:  arr[] = {1, 5, 7, -1, 5}, sum = 6
// Output:  3
// Explanation: Pairs with sum 6 are (1, 5), (7, -1) & (1, 5).

function getPairCount(arr, n, k) {
  let count = 0;
  let map = new Map();
  for (let i = 0; i < n; i++) {
    if (map.has(k - arr[i])) {
      count += map.get(k - arr[i]);
    }
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  return count;
}

var arr = [1, 5, 7, -1, 5];
var n = arr.length;
var sum = 6;

console.log(getPairCount(arr, n, sum));
