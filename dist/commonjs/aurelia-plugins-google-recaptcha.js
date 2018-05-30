'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

var _aureliaPal = require('aurelia-pal');

var _aureliaPluginsGoogleRecaptchaConfig = require('./aurelia-plugins-google-recaptcha-config');

function configure(aurelia, configCallback) {
  var instance = aurelia.container.get(_aureliaPluginsGoogleRecaptchaConfig.Config);
  if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
  aurelia.globalResources([_aureliaPal.PLATFORM.moduleName('./aurelia-plugins-google-recaptcha-element')]);
}