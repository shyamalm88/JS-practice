const buildHeap = (arr) => {
  const start = Math.floor(arr.length / 2);
  for (let i = start; i >= 0; i--) {
    heapify(arr, i);
  }
  return arr;
};

const heapify = (arr, i) => {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < arr.length && arr[l] < arr[largest]) {
    largest = l;
  }

  if (r < arr.length && arr[r] < arr[largest]) {
    largest = r;
  }

  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, largest);
  }
};

const heapSort = (arr) => {
  // for(let i = arr.length; i> )
};

console.log(buildHeap([1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17]));
