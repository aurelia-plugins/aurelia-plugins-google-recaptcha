'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var Config;

  

  return {
    setters: [],
    execute: function () {
      _export('Config', Config = function () {
        function Config() {
          

          this._config = { hl: 'en', siteKey: '' };
        }

        Config.prototype.get = function get(key) {
          return this._config[key];
        };

        Config.prototype.options = function options(obj) {
          Object.assign(this._config, obj);
        };

        Config.prototype.set = function set(key, value) {
          this._config[key] = value;
          return this._config[key];
        };

        return Config;
      }());

      _export('Config', Config);
    }
  };
});