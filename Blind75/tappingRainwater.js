const tappingRainWater = (heights) => {
  let left = 0;
  let right = heights.length - 1;
  let maxRightHeight = 0;
  let maxLeftHeight = 0;
  let result = 0;

  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= maxLeftHeight) {
        maxLeftHeight = heights[left];
      } else {
        result += maxLeftHeight - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= maxRightHeight) {
        maxRightHeight = heights[right];
      } else {
        result += maxRightHeight - heights[right];
      }
      right--;
    }
  }
  return result;
};

console.log(tappingRainWater([4, 2, 0, 3, 2, 5]));
