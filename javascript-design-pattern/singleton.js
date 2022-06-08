class Settings {
  constructor() {
    if (Settings.instance instanceof Settings) {
      return Settings.instance;
    }
    this.settingsObj = {
      background: "#ff000",
      version: Math.floor(Math.random() * 400),
    };

    Object.freeze(this.settingsObj);
    Object.freeze(this);
    Settings.instance = this;
  }

  get(key) {
    return this.settingsObj[key];
  }
}

const s = new Settings();
const a = new Settings();

console.log(s === a);
console.log(s.get("version"));
console.log(a.get("version"));
