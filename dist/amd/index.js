define(['exports', './aurelia-recaptcha'], function (exports, _aureliaRecaptcha) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaRecaptcha).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaRecaptcha[key];
      }
    });
  });
});