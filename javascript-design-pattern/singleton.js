//pure js
var Singleton = (function () {
  var instance;

  return {
    getInstance: function () {
      if (!instance) {
        instance = new Object("I am the instance");
      }
      return instance;
    },
  };
})();

var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();

console.log("Same instance? " + (instance1 === instance2));
