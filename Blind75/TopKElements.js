const topKFrequentElement = (arr, k) => {
  const map = {};
  const frequency = [];
  let result = [];
  if (arr.length === 1 || arr.length === 0) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    frequency.push([]);
    if (map[arr[i]]) {
      map[arr[i]] = map[arr[i]] + 1;
    } else {
      map[arr[i]] = 1;
    }
  }
  console.log(map);

  for (const [key, value] of Object.entries(map)) {
    console.log(key, value);
    frequency[value].push(key);
  }
  let tempK = k;
  let end = frequency.length - 1;
  while (tempK && end > 0) {
    let temp = frequency[end];
    if (temp.length) {
      result = [...result, ...temp];
      tempK = tempK - temp.length;
    }
    end--;
  }
  console.log(result);
};

const arr = [1];
const k = 2;

topKFrequentElement(arr, k);
