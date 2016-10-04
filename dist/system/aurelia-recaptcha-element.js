'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating', './aurelia-recaptcha-config'], function (_export, _context) {
  "use strict";

  var inject, bindable, customElement, noView, Config, _typeof, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, Recaptcha;

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              return step("next", value);
            }, function (err) {
              return step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

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

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customElement = _aureliaTemplating.customElement;
      noView = _aureliaTemplating.noView;
    }, function (_aureliaRecaptchaConfig) {
      Config = _aureliaRecaptchaConfig.Config;
    }],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };

      _export('Recaptcha', Recaptcha = (_dec = customElement('recaptcha'), _dec2 = noView(), _dec3 = inject(Element, Config), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
        function Recaptcha(element, config) {
          

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

        Recaptcha.prototype.attached = function () {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this._scriptPromise;

                  case 2:
                    window.grecaptcha.render(this._element, { callback: this.callback, sitekey: this._config.get('siteKey'), size: this.size, theme: this.theme, type: this.type });

                  case 3:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee, this);
          }));

          function attached() {
            return _ref.apply(this, arguments);
          }

          return attached;
        }();

        Recaptcha.prototype._loadApiScript = function _loadApiScript() {
          var _this = this;

          if (this._scriptPromise) return this._scriptPromise;

          if (window.grecaptcha === undefined) {
            var _ret = function () {
              var script = document.createElement('script');
              script.async = true;
              script.defer = true;
              script.src = 'https://www.google.com/recaptcha/api.js?onload=aureliaRecaptchaOnLoadCallback&render=explicit&hl=' + _this._config.get('hl');
              script.type = 'text/javascript';
              document.head.appendChild(script);

              _this._scriptPromise = new Promise(function (resolve, reject) {
                window.aureliaRecaptchaOnLoadCallback = function () {
                  resolve();
                };
                script.onerror = function (error) {
                  reject(error);
                };
              });
              return {
                v: _this._scriptPromise
              };
            }();

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
          }

          if (window.grecaptcha) {
            this._scriptPromise = new Promise(function (resolve) {
              resolve();
            });
            return this._scriptPromise;
          }

          return false;
        };

        return Recaptcha;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'callback', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'size', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 'normal';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'theme', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 'light';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'type', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 'image';
        }
      })), _class2)) || _class) || _class) || _class));

      _export('Recaptcha', Recaptcha);
    }
  };
});