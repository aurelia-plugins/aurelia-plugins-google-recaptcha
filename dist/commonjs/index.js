'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaPluginsGoogleRecaptcha = require('./aurelia-plugins-google-recaptcha');

Object.keys(_aureliaPluginsGoogleRecaptcha).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaPluginsGoogleRecaptcha[key];
    }
  });
});