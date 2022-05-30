const debounce = function (callback, delay) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
};

let a = debounce((args) => {
  console.log(args);
}, 100);
a("hi");
