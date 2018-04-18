define(['exports', 'aurelia-pal', './aurelia-plugins-google-recaptcha-config'], function (exports, _aureliaPal, _aureliaPluginsGoogleRecaptchaConfig) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(aurelia, configCallback) {
    var instance = aurelia.container.get(_aureliaPluginsGoogleRecaptchaConfig.Config);
    if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
    aurelia.globalResources([_aureliaPal.PLATFORM.moduleName('./aurelia-plugins-google-recaptcha-element')]);
  }
});