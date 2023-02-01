const moveZeros = (arr) => {
  let lastZeroIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0 && lastZeroIndex == -1) {
      lastZeroIndex = i;
    } else if (arr[i] != 0 && lastZeroIndex != -1) {
      [arr[i], arr[lastZeroIndex]] = [arr[lastZeroIndex], arr[i]];
      lastZeroIndex += 1;
    }
  }
  return arr;
};

console.log(moveZeros([0, 0, 1, 0, 0, 3, 12, 0]));
