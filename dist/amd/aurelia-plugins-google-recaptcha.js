define(['exports', './aurelia-plugins-google-recaptcha-config'], function (exports, _aureliaPluginsGoogleRecaptchaConfig) {
  'use strict';

  exports.__esModule = true;
  exports.configure = configure;
  function configure(aurelia, configCallback) {
    const instance = aurelia.container.get(_aureliaPluginsGoogleRecaptchaConfig.Config);
    if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
    aurelia.globalResources('./aurelia-plugins-google-recaptcha-element');
  }
});