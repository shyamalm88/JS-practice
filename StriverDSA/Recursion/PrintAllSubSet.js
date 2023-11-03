const PrintAllSubset = (arr) => {
  const result = [];
  helper(0, arr, result, []);
  return result;
};

const helper = (index, arr, result, ds) => {
  if (index == arr.length) {
    result.push(ds);
    return;
  }

  helper(index + 1, arr, result, [...ds, arr[index]]);
  helper(index + 1, arr, result, ds);
};

console.log(PrintAllSubset([3, 1, 2]));
