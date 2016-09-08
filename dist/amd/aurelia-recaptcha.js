define(['exports', './aurelia-recaptcha-config', './aurelia-recaptcha-class'], function (exports, _aureliaRecaptchaConfig, _aureliaRecaptchaClass) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Recaptcha = exports.Config = undefined;
  exports.configure = configure;
  function configure(aurelia, configCallback) {
    var instance = aurelia.container.get(_aureliaRecaptchaConfig.Config);
    if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
    aurelia.globalResources('./aurelia-recaptcha-class');
  }

  exports.Config = _aureliaRecaptchaConfig.Config;
  exports.Recaptcha = _aureliaRecaptchaClass.Recaptcha;
});