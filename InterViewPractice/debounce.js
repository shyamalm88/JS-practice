const debounce = function (callback, delay) {
  let that = this;
  let args = arguments;
  return function () {
    clearTimeout(timer);
    let timer = setTimeout(() => {
      callback.apply(that, args);
    }, delay);
  };
};
