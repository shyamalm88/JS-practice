const arr = [1, 2, 3, 4];

Array.prototype.myReducer = function (callback, initialValue, context) {
  let accumulator = initialValue || undefined;
  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      accumulator = callback.call(context, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

const reducedArr = arr.myReducer((acc, item) => {
  return acc + item;
});

console.log(reducedArr);
