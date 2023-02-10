const houseRobII = function (arr) {
  if (arr.length == 1) return arr[0];
  return Math.max(rob0(arr), rob1(arr));
};

const rob0 = function (arr) {
  let preMax = 0;
  let curMax = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = curMax;
    curMax = Math.max(preMax + arr[i], curMax);
    preMax = temp;
  }
  return curMax;
};

const rob1 = function (arr) {
  let preMax = 0;
  let curMax = 0;
  for (let i = 1; i < arr.length; i++) {
    let temp = curMax;
    curMax = Math.max(preMax + arr[i], curMax);
    preMax = temp;
  }
  return curMax;
};
