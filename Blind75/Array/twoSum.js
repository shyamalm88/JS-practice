const twoSum = function (arr, target) {
  let map = new Map();
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      results.push([map.get(arr[i]), i]);
    } else {
      map.set(target - arr[i], i);
    }
  }
  return results;
};

console.log(twoSum([1, 2, 3, 4, 5, 6, 7], 7));
