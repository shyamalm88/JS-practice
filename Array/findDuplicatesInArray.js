findDuplicates = (arr) => {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], arr[i]);
    }
  }
  return [...map.values()];
};

console.log(findDuplicates([1, 2, 3, 4, 5, 6, 1]));
