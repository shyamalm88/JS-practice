const Subject = function () {
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
    this.observers.forEach((func) => {
      func.call(this, message);
    });
  },
};

function Observer(message) {
  console.log(message);
}

const sub1 = new Subject();
sub1.subscribe(Observer);

sub1.next("Hi Hello");
