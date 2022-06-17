const maxProduct = function (arr) {
  if (arr == null || arr.length == 0) {
    return 0;
  }
  let max = arr[0],
    min = arr[0],
    result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let temp = max * arr[i];
    max = Math.max(max * arr[i], min * arr[i], arr[i]);
    min = Math.min(temp, min * arr[i], arr[i]);
    if (max > result) {
      result = max;
    }
  }
  return result;
};

console.log(maxProduct([-4, -3, -2]));
