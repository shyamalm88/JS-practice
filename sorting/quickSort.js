const quickSort = (arr, l, h) => {
  if (l < h) {
    let pivot = partition(arr, l, h);
    quickSort(arr, l, pivot - 1);
    quickSort(arr, pivot + 1, h);
  }
  return arr;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, l, h) => {
  let pivot = arr[h];
  let i = l - 1;

  for (let j = l; j <= h - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, h);
  return i + 1;
};

const arr = [1, 4, 2, 5, 3, 6, 7, 9, 0];
console.log(quickSort(arr, 0, arr.length - 1));
