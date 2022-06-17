const productExceptSelf = function (arr) {
  const output = new Array(arr.length);

  for (let i = 0, tmp = 1; i < arr.length; i++) {
    output[i] = tmp;
    tmp *= arr[i];
  }
  for (let i = arr.length - 1, tmp = 1; i >= 0; i--) {
    output[i] *= tmp;
    tmp *= arr[i];
  }
  return output;
};

console.log(productExceptSelf([1, 2, 3, 4]));
