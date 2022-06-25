const mergeSort = function (arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.splice(0, mid);
  return merge(mergeSort(left), mergeSort(arr));
};

const merge = function (left, right) {
  let res = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  return [...res, ...left, ...right];
};

console.log(mergeSort([2, 4, 1, 3, 6, 5, 7, 9, 0, 8, 1, 2, 6, 4, 3]));
