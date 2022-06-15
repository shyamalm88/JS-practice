const stack = [];
let max = 0;
const getMax = function () {
  if (stack.length === 0) {
    return 0;
  } else {
    return max;
  }
};

const pop = function () {
  if (stack.length === 0) {
    return;
  }
  let x = stack[stack.length - 1];
  stack.pop();

  if (x > max) {
    max = 2 * max - x;
  }
};

const push = function (value) {
  if (stack.length === 0) {
    stack.push(value);
    max = value;
    return;
  }
  if (value > max) {
    stack.push(2 * value - max);
    max = value;
  } else {
    stack.push(value);
  }
};

push(3);
push(5);
console.log(getMax());
push(7);
push(19);
console.log(getMax());
pop();
console.log(getMax());
pop();
