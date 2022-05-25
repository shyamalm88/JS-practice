const arr = [1, 2, 3, 4];

Array.prototype.myFind = function (callback) {
  let result;
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      return this[index];
    }
  }
};

const ab = arr.myFind((item, index) => {
  return item > 2;
});

console.log(ab);
