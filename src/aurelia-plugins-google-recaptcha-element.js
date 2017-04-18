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
  // PRIVATE PROPERTIES (DI)
  config;
  element;

  // PRIVATE PROPERTIES (CUSTOM)
  scriptPromise = null;

  // BINDABLE PROPERTIES
  @bindable callback;
  @bindable size = 'normal';
  @bindable theme = 'light';
  @bindable type = 'image';
  @bindable widgetId;

  // CONSTRUCTOR
  constructor(element, config) {
    this.config = config;
    this.element = element;
    if (!this.config.get('siteKey')) return console.error('No sitekey has been specified.');
    this.loadApiScript();
  }

  // AURELIA LIFECYCLE METHODS
  bind() {
    this.initialize();
  }

  // PRIVATE METHODS
  async initialize() {
    await this.scriptPromise;
    this.widgetId = window.grecaptcha.render(this.element, { callback: this.callback, sitekey: this.config.get('siteKey'), size: this.size, theme: this.theme, type: this.type });
  }

  loadApiScript() {
    if (this.scriptPromise) return;
    if (window.grecaptcha === undefined) {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = `https://www.google.com/recaptcha/api.js?hl=${this.config.get('hl')}&onload=aureliaPluginsGoogleRecaptchaOnLoad&render=explicit`;
      script.type = 'text/javascript';
      document.head.appendChild(script);
      this.scriptPromise = new Promise((resolve, reject) => {
        window.aureliaPluginsGoogleRecaptchaOnLoad = () => resolve();
        script.onerror = error => reject(error);
      });
    } else if (window.grecaptcha) {
      this.scriptPromise = new Promise(resolve => resolve());
    }
  }
}