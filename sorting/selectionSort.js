const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }
  console.log(arr);
};

selectionSort([1, 4, 2, 5, 3, 6, 7, 9, 0]);
