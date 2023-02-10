let sum = function (a) {
  // this commented out section is only needed if this same function works on different type of parameters passed.
  // if (arguments.length > 1) {
  //   let sum = 0;
  //   for (let i = 0; i < arguments.length; i++) {
  //     sum += arguments[i];
  //   }
  //   return sum;
  // }
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

console.log(sum(5)(4)(3)(2)());
console.log(sum(5, 3));
