const result = [];
const allPermutations = function (str, l, r) {
  if (l == r) {
    result.push(str);
    return str;
  } else {
    for (let i = l; i <= r; i++) {
      str = swap(str, l, i);
      allPermutations(str, l + 1, r);
      str = swap(str, l, i);
    }
  }
  return result;
};

const swap = function (str, i, j) {
  let charArray = str.split("");
  let temp;
  temp = charArray[i];
  charArray[i] = charArray[j];
  charArray[j] = temp;
  return charArray.join("");
};

console.log(allPermutations("ABC", 0, 2));
