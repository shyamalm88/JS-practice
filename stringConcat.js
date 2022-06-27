const stringConcatinate = function (str1, str2) {
  if (!str1.length) return str2;
  if (!str2.length) return str1;
  let a = str1.split("");
  let b = str2.split("");
  let i = 0;
  let j = a.length - 1;
  if (a.length > b.length) {
    j = b.length - 1;
  }
  let res = [];
  while (i <= j) {
    res.push(a[i]);
    res.push(b[i]);
    i++;
  }
  if (a.length > b.length) {
    for (let k = i; k < a.length; k++) {
      res.push(a[k]);
    }
  } else {
    for (let k = i; k < b.length; k++) {
      res.push(b[k]);
    }
  }
  return res.join("");
};

console.log(stringConcatinate("abc", "qwerty"));
