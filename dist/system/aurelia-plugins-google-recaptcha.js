System.register(['./aurelia-plugins-google-recaptcha-config'], function (_export, _context) {
  "use strict";

  var Config;
  function configure(aurelia, configCallback) {
    const instance = aurelia.container.get(Config);
    if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
    aurelia.globalResources('./aurelia-plugins-google-recaptcha-element');
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaPluginsGoogleRecaptchaConfig) {
      Config = _aureliaPluginsGoogleRecaptchaConfig.Config;
    }],
    execute: function () {}
  };
});