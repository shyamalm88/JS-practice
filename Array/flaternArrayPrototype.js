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

Array.prototype.flatternDepth = function (d) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (d && Array.isArray(this[i])) {
      d--;
      res = res.concat(this[i].flatternDepth(d));
    } else {
      res.push(this[i]);
    }
  }
  return res;
};

console.log([1, 2, [3, 4, 5, [6, 7, [8, 9, 10, [89, 56]]]]].flatternDepth(2));

// console.log([1, 2, [3, 4, 5, [6, 7, [8, 9, 10, [89, 56]]]]].flattern());
