const arr = [1, 2, 3, 4];

// Array.prototype.myFilter = function (callback) {
//   let result = [];
//   for (let index = 0; index < this.length; index++) {
//     if (callback(this[index], index, this)) {
//       result.push(this[index]);
//     }
//   }
//   return result;
// };

Array.prototype.myFilter = function (callback) {
  let result = [];
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      result.push(this[index]);
    }
  }
  return result;
};

const ab = arr.myFilter((item, index) => {
  return item > 2;
});

console.log(ab);
