class LRU {
  constructor(max = 5) {
    this.max = max;
    this.cache = new Map();
  }

  get(key) {
    const item = this.cache.has(key);
    if (item) {
      this.cache.delete(key);
      this.cache.set(key, value);
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
    console.log(this.cache.keys().next());
    return this.cache.keys().next().value;
  }
}

const cache = new LRU(3);

cache.set("name", "Arghya");
cache.set("age", 34);
cache.set("language", "bengali");
console.log(cache.cache);
cache.set("occupation", "developer");
console.log(cache.cache);
