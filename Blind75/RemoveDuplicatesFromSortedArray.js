const removeDup = (arr, indx) => {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }
  let i = indx;

  if (i < arr.length) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
    } else {
      i++;
    }
    return removeDup(arr, i);
  }
  return arr;
};

const arr = [
  1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6,
  6, 6, 7, 8,
];
console.log(removeDup(arr, 0));
