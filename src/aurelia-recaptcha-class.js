// IMPORTS
import {inject} from 'aurelia-dependency-injection';
import {bindable, noView} from 'aurelia-templating';

import {Config} from './aurelia-recaptcha-config';


// CLASS ATTRIBUTES
@noView()
@inject(Element, Config)


// PUBLIC CLASS
export class Recaptcha {
  // PRIVATE PROPERTIES
  _config;
  _element;
  _scriptPromise = null;

  // PUBLIC PROPERTIES
  @bindable callback;
  @bindable size = 'normal';
  @bindable theme = 'light';
  @bindable type = 'image';

  // CONSTRUCTOR
  constructor(element, config) {
    this._element = element;
    this._config = config;

    if (!this._config.get('siteKey')) console.error('No sitekey has been specified.');

    this._loadApiScript();
  }

  // LIFECYCLE HANDLERS
  async attached() {
    await this._scriptPromise;
    window.grecaptcha.render(this._element, { callback: this.callback, sitekey: this._config.get('siteKey'), size: this.size, theme: this.theme, type: this.type });
  }

  // PRIVATE METHODS
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
        window.aureliaRecaptchaOnLoadCallback = () => { resolve(); };
        script.onerror = error => { reject(error); };
      });
      return this._scriptPromise;
    }

    if (window.grecaptcha) {
      this._scriptPromise = new Promise(resolve => { resolve(); });
      return this._scriptPromise;
    }

    return false;
  }
}
