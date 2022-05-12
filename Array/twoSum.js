const twoSum = (arr, target) => {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(target - arr[i])) {
      return [arr[map.get(target - arr[i])], arr[i]];
    }
    map.set(arr[i], i);
  }
  console.log(map);
  return [];
};

console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 11));
