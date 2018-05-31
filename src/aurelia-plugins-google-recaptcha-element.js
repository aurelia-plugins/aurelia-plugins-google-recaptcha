// IMPORTS
import {bindingMode} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection';
import {bindable, customElement, noView} from 'aurelia-templating';

import {Config} from './aurelia-plugins-google-recaptcha-config';


// CLASS ATTRIBUTES
@customElement('aup-google-recaptcha')
@noView()
@inject(Element, Config)


// PUBLIC CLASS
export class Recaptcha {
  // PRIVATE PROPERTIES (DI)
  _config;
  _element;

  // PRIVATE PROPERTIES (CUSTOM)
  _scriptPromise = null;

  // BINDABLE PROPERTIES
  @bindable badge = 'bottomright';
  @bindable callback;
  @bindable expire;
  @bindable size = 'normal';
  @bindable theme = 'light';
  @bindable type = 'image';
  @bindable({ defaultBindingMode: bindingMode.twoWay }) widgetId;

  // CONSTRUCTOR
  constructor(element, config) {
    this._config = config;
    this._element = element;
    if (!this._config.get('siteKey')) return console.error('No sitekey has been specified.');
    this._loadApiScript();
  }

  // LIFECYCLE HANDLERS
  bind() {
    this._initialize();
  }

  // PRIVATE METHODS
  async _initialize() {
    await this._scriptPromise;
    this.widgetId = window.grecaptcha.render(this._element, { badge: this.badge, callback: this.callback, 'expired-callback': this.expire, sitekey: this._config.get('siteKey'), size: this.size, theme: this.theme, type: this.type });
  }

  _loadApiScript() {
    if (this._scriptPromise) return;
    if (window.grecaptcha === undefined) {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = `https://www.google.com/recaptcha/api.js?hl=${this._config.get('hl')}&onload=aureliaPluginsGoogleRecaptchaOnLoad&render=explicit`;
      script.type = 'text/javascript';
      document.head.appendChild(script);
      this._scriptPromise = new Promise((resolve, reject) => {
        window.aureliaPluginsGoogleRecaptchaOnLoad = () => resolve();
        script.onerror = error => reject(error);
      });
    } else if (window.grecaptcha) {
      this._scriptPromise = new Promise(resolve => resolve());
    }
  }
}
