const arr = [1, 2, 3, 4];

Array.prototype.myReducer = function (callback, initialValue, context) {
  let accumulator = initialValue || undefined;

  for (let index = 0; index < this.length; index++) {
    if (accumulator) {
      accumulator = callback.call(
        context,
        accumulator,
        this[index],
        this,
        index
      );
    } else {
      accumulator = this[index];
    }
  }
  return accumulator;
};

const reducedArr = arr.myReducer((acc, item) => {
  return acc + item;
});

console.log(reducedArr);
