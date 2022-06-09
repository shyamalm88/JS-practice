Promise.myAllSettled = function (promises) {
  let mappedPromises = promises.map((p) => {
    return p
      .then((value) => {
        return {
          status: "fulfilled",
          value,
        };
      })
      .catch((reason) => {
        return {
          status: "rejected",
          reason,
        };
      });
  });
  return Promise.all(mappedPromises);
};

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "two");
});

Promise.myAllSettled([promise1, promise2]).then((val) => {
  console.log(val);
});
