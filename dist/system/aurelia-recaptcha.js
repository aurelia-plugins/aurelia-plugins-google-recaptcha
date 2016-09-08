'use strict';

System.register(['./aurelia-recaptcha-config', './aurelia-recaptcha-class'], function (_export, _context) {
  "use strict";

  var Config, Recaptcha;
  function configure(aurelia, configCallback) {
    var instance = aurelia.container.get(Config);
    if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
    aurelia.globalResources('./aurelia-recaptcha-class');
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaRecaptchaConfig) {
      Config = _aureliaRecaptchaConfig.Config;
    }, function (_aureliaRecaptchaClass) {
      Recaptcha = _aureliaRecaptchaClass.Recaptcha;
    }],
    execute: function () {
      _export('Config', Config);

      _export('Recaptcha', Recaptcha);
    }
  };
});