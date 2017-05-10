'use strict';

exports.__esModule = true;
exports.configure = configure;

var _aureliaPluginsGoogleRecaptchaConfig = require('./aurelia-plugins-google-recaptcha-config');

function configure(aurelia, configCallback) {
  var instance = aurelia.container.get(_aureliaPluginsGoogleRecaptchaConfig.Config);
  if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
  aurelia.globalResources('./aurelia-plugins-google-recaptcha-element');
}