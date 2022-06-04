Promise.myPromiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      Promise.resolve(p).then(resolve).catch(reject);
    });
  });
};
