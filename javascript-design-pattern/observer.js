let Subject = function () {
  this.observers = [];
};

Subject.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
  },
  unsubscribe: function (fn) {
    this.observers.filter((func) => func != fn);
  },
  next: function (message) {
    this.observers.forEach((fn) => {
      fn.call(this, message);
    });
  },
};

let sub1 = new Subject();

let Observer = function (message) {
  console.log("Hi" + message);
};

sub1.subscribe(Observer);

sub1.next(" Hello from next fire");
