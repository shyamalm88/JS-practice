const arr = [1, 2, 3, 4];

// Array.prototype.myForEach = function (callback) {
//   for (let index = 0; index < this.length; index++) {
//     callback(this[index], index, this);
//   }
// };

Array.prototype.myForEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this);
  }
};

arr.myForEach((item, index) => {
  console.log(item, index);
});
