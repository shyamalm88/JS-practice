const arr = [1, 2, 3, 4];

Array.prototype.myMap = function (callback) {
  let result = [];
  for (let index = 0; index < this.length; index++) {
    result.push(callback(this[index], index, this));
  }
  return result;
};

const ab = arr.myMap((item, index) => {
  return item * item;
});

console.log(ab);
