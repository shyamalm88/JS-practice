const debounce = (callback, delay) => {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
};

const a = debounce(() => {
  console.log("hi");
}, 1000);
a();
