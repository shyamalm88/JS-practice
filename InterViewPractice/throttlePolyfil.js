const throttle = function (callback, delay) {
  let flag = true;
  return function () {
    let context = -this;
    let args = arguments;
    if (flag) {
      callback.apply(context, args);
      flag = false;
      setTimeout(() => {
        flay = true;
      }, delay);
    }
  };
};
