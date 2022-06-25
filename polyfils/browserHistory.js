class BrowserHistory {
  constructor(url) {
    this.history = [];
    this.pointer = 0;
    if (url !== undefined) {
      this.history.push(url);
    }
  }

  visit(url) {
    this.history.length = this.pointer + 1;
    this.history.push(url);
    this.pointer++;
  }

  // go to the previously visited website url
  back() {
    this.pointer = Math.max(0, --this.pointer);
  }

  // go to next visited website url
  forward() {
    this.pointer = Math.min(this.history.length - 1, ++this.pointer);
  }
}
