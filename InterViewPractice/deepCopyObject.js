const test = {
  past: [{ name: "test" }],
  present: [{ name: "testing" }],
};

// const clone = (input) => {
//   const obj = Array.isArray(input) ? [] : {};
//   if (typeof input !== "object") {
//     return input;
//   }
//   for (let key in input) {
//     obj[key] = input[key];
//   }
//   return obj;
// };

const clone = function (input) {
  const obj = Array.isArray(input) ? [] : {};
  if (typeof input !== "object") {
    return input;
  }
  for (let key in input) {
    obj[key] = input[key];
  }
  return obj;
};

const a = clone(test);
