const test = {
  past: [{ name: "test" }],
  present: [{ name: "testing" }],
};

const clone = function (input) {
  const obj = Array.isArray(input) ? [] : {};
  if (typeof input !== "object" || input === null) {
    return input;
  }
  for (let key in input) {
    obj[key] = clone(input[key]);
  }
  return obj;
};

const a = clone(test);
