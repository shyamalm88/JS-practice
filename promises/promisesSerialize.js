function doSomethingAsync(i) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(i);
      resolve();
    }, 1000);
  });
}

let vals = [1, 2, 3];
let chain = Promise.resolve();
for (let val of vals) {
  chain = chain.then(() => doSomethingAsync(val));
}
chain.then(() => console.log("complete"));
