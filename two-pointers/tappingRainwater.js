const tappingRainWater = (heights) => {
  let leftMaxHeight = 0;
  let rightMaxHeight = 0;
  let result = 0;
  let left = 0;
  let right = heights.length - 1;

  while (left <= right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= leftMaxHeight) {
        leftMaxHeight = heights[left];
      } else {
        console.log("left max", leftMaxHeight);
        console.log("height left", heights[left]);

        result += leftMaxHeight - heights[left];
        console.log("res", result);
      }
      left++;
    } else {
      if (heights[right] >= rightMaxHeight) {
        rightMaxHeight = heights[right];
      } else {
        result += rightMaxHeight - heights[right];
      }
      right--;
    }
  }
  return result;
};

console.log(tappingRainWater([4, 2, 0, 3, 2, 5]));
