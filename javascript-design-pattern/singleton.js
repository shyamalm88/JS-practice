class Settings {
  constructor() {
    if (Settings.instance instanceof Settings) {
      return Settings.instance;
    }
    this.settingObj = {
      background: "#ff000",
      version: Math.floor(Math.random() * 400),
    };

    Object.freeze(this.settingObj);
    Object.freeze(this);
    Settings.instance = this;
  }

  get(key) {
    return this.settingObj[key];
  }
}

const s = new Settings();
const b = new Settings();

console.log(s === b);
console.log(s.get("version"));
console.log(b.get("version"));
