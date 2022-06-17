const twoSum = function (arr, target) {
  const map = new Map();
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      result.push([i, map.get(arr[i])]);
    } else {
      map.set(target - arr[i], i);
    }
  }
  return result;
};

console.log(twoSum([1, 2, 3, 4, 5, 6, 7], 7));
