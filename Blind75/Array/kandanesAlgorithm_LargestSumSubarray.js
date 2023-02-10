const largestSumSubArray = (arr) => {
  let maxSum = arr[0];
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
};

console.log(largestSumSubArray([1, 2, -2, 1]));
