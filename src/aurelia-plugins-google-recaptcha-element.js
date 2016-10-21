// IMPORTS
import {inject} from 'aurelia-dependency-injection';
import {bindable, customElement, noView} from 'aurelia-templating';

import {Config} from './aurelia-plugins-google-recaptcha-config';


// CLASS ATTRIBUTES
@customElement('aup-google-recaptcha')
@noView()
@inject(Element, Config)


// PUBLIC CLASS
export class Recaptcha {
  // PRIVATE PROPERTIES
  _config;
  _element;
  _scriptPromise = null;

  // BINDABLE PROPERTIES
  @bindable callback;
  @bindable size = 'normal';
  @bindable theme = 'light';
  @bindable type = 'image';

  // CONSTRUCTOR
  constructor(element, config) {
    this._config = config;
    this._element = element;

    if (!this._config.get('siteKey')) return console.error('No sitekey has been specified.');

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
      var script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = `https://www.google.com/recaptcha/api.js?hl=${this._config.get('hl')}&onload=aureliaPluginsGoogleRecaptchaOnLoadCallback&render=explicit`;
      script.type = 'text/javascript';
      document.head.appendChild(script);

      this._scriptPromise = new Promise((resolve, reject) => {
        window.aureliaPluginsGoogleRecaptchaOnLoadCallback = () => { resolve(); };
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
