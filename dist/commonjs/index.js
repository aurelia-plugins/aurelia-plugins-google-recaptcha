'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaRecaptcha = require('./aurelia-recaptcha');

Object.keys(_aureliaRecaptcha).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaRecaptcha[key];
    }
  });
});