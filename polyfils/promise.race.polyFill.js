Promise.myPromiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      Promise.resolve(p).then(resolve).catch(reject);
    });
  });
};

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.myPromiseRace([promise1, promise2]).then((val) => {
  console.log(val);
});
