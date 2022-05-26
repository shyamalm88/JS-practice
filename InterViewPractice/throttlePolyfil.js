const throttle = function (callback, delay) {
  let flag = true;
  let context = this;
  let args = arguments;
  return function () {
    if (flag) {
      callback.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};
