const quickSort = function (arr, l, h) {
  if (arr.length < 2) {
    return arr;
  }
  if (l < h) {
    let j = partition(arr, l, h);
    quickSort(arr, l, j - 1);
    quickSort(arr, j + 1, h);
  }

  return arr;
};

const swap = function (arr, i, j) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
};

const partition = function (arr, l, h) {
  let pivot = arr[h];
  let i = l - 1;
  for (let j = l; j <= h - 1; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, h);
  return i + 1;
};

const arr = [2, 1, 3, 2, 4, 6, 5, 7, 8, 3, 0, 2];
console.log(quickSort(arr, 0, arr.length - 1));
