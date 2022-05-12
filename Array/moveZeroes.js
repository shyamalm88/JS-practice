const moveZeros = (arr) => {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] != 0) {
      arr[i] = arr[j];
      i++;
    }
  }
  for (let k = i; k < arr.length; k++) {
    arr[k] = 0;
  }
  // console.log(arr);
};

moveZeros([0, 1, 2, 0, 3, 4, 0, 5, 0, 0]);
