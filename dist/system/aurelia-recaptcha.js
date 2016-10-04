'use strict';

System.register(['./aurelia-recaptcha-config'], function (_export, _context) {
  "use strict";

  var Config;
  function configure(aurelia, configCallback) {
    var instance = aurelia.container.get(Config);
    if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
    aurelia.globalResources('./aurelia-recaptcha-element');
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaRecaptchaConfig) {
      Config = _aureliaRecaptchaConfig.Config;
    }],
    execute: function () {}
  };
});