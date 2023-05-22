// Javascript program for the above approach

function findMajority(arr) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      let count = map.get(arr[i]) + 1;
      if (count > arr.length / 2) {
        return arr[i];
      } else {
        map.set(arr[i], count);
      }
    } else {
      map.set(arr[i], 1);
    }
  }
  document.write(" No Majority element");
}

// Driver Code
let a = [2, 2, 2, 2, 5, 5, 2, 3, 3];

findMajority(a);
