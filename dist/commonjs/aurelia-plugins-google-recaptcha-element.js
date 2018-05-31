'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Recaptcha = undefined;

var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaPluginsGoogleRecaptchaConfig = require('./aurelia-plugins-google-recaptcha-config');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Recaptcha = exports.Recaptcha = (_dec = (0, _aureliaTemplating.customElement)('aup-google-recaptcha'), _dec2 = (0, _aureliaTemplating.noView)(), _dec3 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaPluginsGoogleRecaptchaConfig.Config), _dec4 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
  function Recaptcha(element, config) {
    _classCallCheck(this, Recaptcha);

    this._scriptPromise = null;

    _initDefineProp(this, 'badge', _descriptor, this);

    _initDefineProp(this, 'callback', _descriptor2, this);

    _initDefineProp(this, 'expire', _descriptor3, this);

    _initDefineProp(this, 'size', _descriptor4, this);

    _initDefineProp(this, 'theme', _descriptor5, this);

    _initDefineProp(this, 'type', _descriptor6, this);

    _initDefineProp(this, 'widgetId', _descriptor7, this);

    this._config = config;
    this._element = element;
    if (!this._config.get('siteKey')) return console.error('No sitekey has been specified.');
    this._loadApiScript();
  }

  Recaptcha.prototype.bind = function bind() {
    this._initialize();
  };

  Recaptcha.prototype._initialize = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this._scriptPromise;

            case 2:
              this.widgetId = window.grecaptcha.render(this._element, { badge: this.badge, callback: this.callback, 'expired-callback': this.expire, sitekey: this._config.get('siteKey'), size: this.size, theme: this.theme, type: this.type });

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function _initialize() {
      return _ref.apply(this, arguments);
    }

    return _initialize;
  }();

  Recaptcha.prototype._loadApiScript = function _loadApiScript() {
    if (this._scriptPromise) return;
    if (window.grecaptcha === undefined) {
      var script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = 'https://www.google.com/recaptcha/api.js?hl=' + this._config.get('hl') + '&onload=aureliaPluginsGoogleRecaptchaOnLoad&render=explicit';
      script.type = 'text/javascript';
      document.head.appendChild(script);
      this._scriptPromise = new Promise(function (resolve, reject) {
        window.aureliaPluginsGoogleRecaptchaOnLoad = function () {
          return resolve();
        };
        script.onerror = function (error) {
          return reject(error);
        };
      });
    } else if (window.grecaptcha) {
      this._scriptPromise = new Promise(function (resolve) {
        return resolve();
      });
    }
  };

  return Recaptcha;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'badge', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 'bottomright';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'callback', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'expire', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'size', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 'normal';
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'theme', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 'light';
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'type', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 'image';
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'widgetId', [_dec4], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);