const MergeSort = (arr) => {
  const low = 0;
  const high = arr.length - 1;
  return helper(arr, low, high);
};

const helper = (arr, low, high) => {
  if (low === high) {
    return;
  }
  const mid = Math.floor((low + high) / 2);
  helper(arr, low, mid);
  helper(arr, mid + 1, high);
  return merge(arr, low, mid, high);
};

const merge = (arr, low, mid, high) => {
  let left = low;
  let right = mid + 1;
  let temp = [];
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }

  return arr;
};

const arr = [3, 2, 4, 1, 5, 2, 7, 3, 8, 6, 0];
console.log(MergeSort(arr));
