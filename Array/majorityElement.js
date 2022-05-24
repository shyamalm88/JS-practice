const majorityElement = (arr) => {
  let majorityIndex = 0;
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[majorityIndex]) {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      majorityIndex = i;
      count = 1;
    }
  }
  let a = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[majorityIndex]) {
      a++;
    }
  }
  if (a > Math.floor(arr.length / 2)) {
    return arr[majorityIndex];
  } else {
    return -1;
  }
};

console.log(majorityElement([1, 1, 1, 1, 2, 2]));
