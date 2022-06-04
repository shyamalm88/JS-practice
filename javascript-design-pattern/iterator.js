const Iterator = function (items) {
  this.items = items;
  this.index = 0;
};

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length;
  },
  next: function () {
    return this.items[this.index++];
  },
};

const item = [1, 2, 3, 4];

const itr = new Iterator(item);
console.log(itr.hasNext());
