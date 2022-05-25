function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}
const myPromiseAll = (promises) => {
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      p.then((res) => {
        result.push(res);
        if (index === promises.length - 1) {
          resolve(result);
        }
      }).catch((err) => reject(err));
    });
  });
};

myPromiseAll([showText("Hi", 1000), Promise.resolve("Hello")])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.log(err));
