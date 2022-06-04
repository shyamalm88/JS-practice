const CustomApi = function (coin) {
  this.getApi = function (coin) {
    console.log("calling api");
    switch (coin) {
      case "Bitcoin":
        return "$8500";
      case "Ethereum":
        return "$1500";
      case "Dodge":
        return "$700";
    }
  };
};

const CustomApiProxy = function (coin) {
  const api = new CustomApi(coin);
  const cache = {};
  return {
    getApi: function (coin) {
      if (!cache[coin]) {
        cache[coin] = api.getApi(coin);
        return cache[coin];
      } else {
        return cache[coin];
      }
    },
  };
};

const custProx = new CustomApiProxy();
console.log(custProx.getApi("Bitcoin"));
console.log(custProx.getApi("Ethereum"));
console.log(custProx.getApi("Dodge"));
console.log(custProx.getApi("Bitcoin"));
console.log(custProx.getApi("Ethereum"));
console.log(custProx.getApi("Dodge"));
console.log(custProx.getApi("Bitcoin"));
console.log(custProx.getApi("Ethereum"));
console.log(custProx.getApi("Dodge"));
