class LRU {
  constructor(max = 5) {
    this.max = max;
    this.cache = new Map();
  }

  get(key) {
    const item = this.cache.get(key);
    if (item) {
      this.cache.delete(key);
      this.cache.set(key, item);
    }
    return item;
  }
  set(key, value) {
    if (this.cache.get(key)) {
      this.cache.delete(key);
    } else if (this.cache.size === this.max) {
      this.cache.delete(this.first());
    }
    this.cache.set(key, value);
  }

  first() {
    return this.cache.keys().next().value;
  }
}

const cache = new LRU(3);

cache.set("name", "Arghya");
cache.set("age", 34);
cache.set("language", "bengali");
console.log(cache.cache);
cache.get("name");
cache.set("occupation", "developer");
console.log(cache.cache);
