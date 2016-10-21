define(['exports', './aurelia-plugins-google-recaptcha'], function (exports, _aureliaPluginsGoogleRecaptcha) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaPluginsGoogleRecaptcha).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaPluginsGoogleRecaptcha[key];
      }
    });
  });
});