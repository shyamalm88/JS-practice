const maxArea = function (height) {
  if (height.length == 2) {
    return Math.min(height[0], height[1]);
  }

  let start = 0;
  let end = height.length - 1;
  let area = 0;
  let maxAreaContainer = 0;

  while (start < end) {
    area = (end - start) * Math.min(height[start], height[end]);

    if (area > maxAreaContainer) {
      maxAreaContainer = area;
    }

    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }
  return maxAreaContainer;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
