// PUBLIC CLASS
export class Config {
  // PRIVATE PROPERTIES
  config;

  // CONSTRUCTOR
  constructor() {
    this.config = { hl: 'en', siteKey: '' };
  }

  // PUBLIC METHODS
  get(key) {
    return this.config[key];
  }

  options(obj) {
    Object.assign(this.config, obj);
  }

  set(key, value) {
    this.config[key] = value;
    return this.config[key];
  }
}