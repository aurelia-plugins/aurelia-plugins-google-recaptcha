'use strict';

System.register(['aurelia-pal', './aurelia-plugins-google-recaptcha-config'], function (_export, _context) {
  "use strict";

  var PLATFORM, Config;
  function configure(aurelia, configCallback) {
    var instance = aurelia.container.get(Config);
    if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
    aurelia.globalResources([PLATFORM.moduleName('./aurelia-plugins-google-recaptcha-element')]);
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
    }, function (_aureliaPluginsGoogleRecaptchaConfig) {
      Config = _aureliaPluginsGoogleRecaptchaConfig.Config;
    }],
    execute: function () {}
  };
});