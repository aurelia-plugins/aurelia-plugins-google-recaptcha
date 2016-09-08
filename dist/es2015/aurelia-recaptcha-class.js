var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import { inject } from 'aurelia-dependency-injection';
import { bindable, noView } from 'aurelia-templating';

import { Config } from './aurelia-recaptcha-config';

export let Recaptcha = (_dec = noView(), _dec2 = inject(Element, Config), _dec(_class = _dec2(_class = (_class2 = class Recaptcha {
  constructor(element, config) {
    this._scriptPromise = null;

    _initDefineProp(this, 'callback', _descriptor, this);

    _initDefineProp(this, 'size', _descriptor2, this);

    _initDefineProp(this, 'theme', _descriptor3, this);

    _initDefineProp(this, 'type', _descriptor4, this);

    this._element = element;
    this._config = config;

    if (!this._config.get('siteKey')) console.error('No sitekey has been specified.');

    this._loadApiScript();
  }

  attached() {
    var _this = this;

    return _asyncToGenerator(function* () {
      yield _this._scriptPromise;
      window.grecaptcha.render(_this._element, { callback: _this.callback, sitekey: _this._config.get('siteKey'), size: _this.size, theme: _this.theme, type: _this.type });
    })();
  }

  _loadApiScript() {
    if (this._scriptPromise) return this._scriptPromise;

    if (window.grecaptcha === undefined) {
      let script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = 'https://www.google.com/recaptcha/api.js?onload=aureliaRecaptchaOnLoadCallback&render=explicit&hl=' + this._config.get('hl');
      script.type = 'text/javascript';
      document.head.appendChild(script);

      this._scriptPromise = new Promise((resolve, reject) => {
        window.aureliaRecaptchaOnLoadCallback = () => {
          resolve();
        };
        script.onerror = error => {
          reject(error);
        };
      });
      return this._scriptPromise;
    }

    if (window.grecaptcha) {
      this._scriptPromise = new Promise(resolve => {
        resolve();
      });
      return this._scriptPromise;
    }

    return false;
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'callback', [bindable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'size', [bindable], {
  enumerable: true,
  initializer: function () {
    return 'normal';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'theme', [bindable], {
  enumerable: true,
  initializer: function () {
    return 'light';
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'type', [bindable], {
  enumerable: true,
  initializer: function () {
    return 'image';
  }
})), _class2)) || _class) || _class);