const sum = function (a) {
  return function (b) {
    if (!b) {
      return a;
    }
    return sum(a + b);
  };
};
console.log(sum(3)(4)(6)(10)());
