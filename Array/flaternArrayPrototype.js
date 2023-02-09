Array.prototype.flattern = function () {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      res = res.concat(this[i].flattern());
    } else {
      res.push(this[i]);
    }
  }
  return res;
};

console.log([1, 2, [3, 4, 5, [6, 7, [8, 9, 10, [89, 56]]]]].flattern());
