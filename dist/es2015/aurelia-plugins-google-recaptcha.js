
import { Config } from './aurelia-plugins-google-recaptcha-config';

export function configure(aurelia, configCallback) {
  let instance = aurelia.container.get(Config);
  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(instance);
  }

  aurelia.globalResources('./aurelia-plugins-google-recaptcha-element');
}