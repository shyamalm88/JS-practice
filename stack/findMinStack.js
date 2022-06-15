const stack = [];
let min = 0;
const getMax = function () {
  if (stack.length === 0) {
    return 0;
  } else {
    return min;
  }
};

const pop = function () {
  if (stack.length === 0) {
    return;
  }
  let x = stack[stack.length - 1];
  stack.pop();

  if (x < min) {
    min = 2 * min - x;
  }
};

const push = function (value) {
  if (stack.length === 0) {
    stack.push(value);
    min = value;
    return;
  }
  if (value < min) {
    stack.push(2 * value - min);
    min = value;
  } else {
    stack.push(value);
  }
};

push(3);
push(5);
console.log(getMax());
push(7);
push(19);
push(2);
console.log(getMax());
pop();
push(0);
console.log(getMax());
pop();
