findMinimumDistance = (arr) => {
  let map = new Map();
  let currentIndex = 0;
  let prevIndex = 0;
  let minDistance = 10000;
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      currentIndex = i;
      prevIndex = map.get(arr[i]);
      minDistance = Math.min(currentIndex - prevIndex, minDistance);
    } else {
      map.set(arr[i], i);
    }
  }
  return minDistance === 10000 ? -1 : minDistance;
};

console.log(findMinimumDistance([3, 5, 4, 6, 5, 3]));
