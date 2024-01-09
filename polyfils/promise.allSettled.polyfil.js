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

// without Promise.all
Promise.myAllSettled2 = (promises) => {
  const results = new Array(promises.length);
  let counter = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          results[index] = { status: "fulfilled", value: res };
        })
        .catch((err) => {
          results[index] = { status: "rejected", reason: err };
        })
        .finally(() => {
          counter++;
          if (counter === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "two");
});

Promise.myAllSettled2([promise1, promise2]).then((val) => {
  console.log(val);
});
