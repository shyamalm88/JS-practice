const undefinedToNull = (arg) => {
  if (typeof arg != "object" || arg != null) {
    return arg;
  }
  for (let [key, value] of Object.entries(arg)) {
    if (value === undefined) {
      arg[key] = null;
    } else {
      arg[key] = undefinedToNull(value);
    }
  }
  return arg;
};
