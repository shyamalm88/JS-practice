const nextGreaterElement = function (arr) {
  const n = arr.length;
  var s = [];
  let res = new Array(n);
  for (let i = 2 * n - 1; i >= 0; i--) {
    while (s.length != 0 && s[s.length - 1] <= arr[i % n]) {
      s.pop();
    }
    res[i % n] = s.length == 0 ? -1 : s[s.length - 1];
    s.push(arr[i % n]);
  }

  return res;
};

console.log(nextGreaterElement([1, 2, 1]));
