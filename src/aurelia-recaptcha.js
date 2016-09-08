// IMPORTS
import {Config} from './aurelia-recaptcha-config';
import {Recaptcha} from './aurelia-recaptcha-class';


// PUBLIC METHODS
export function configure(aurelia, configCallback) {
  var instance = aurelia.container.get(Config);
  if (configCallback !== undefined && typeof(configCallback) === 'function')
    configCallback(instance);
  aurelia.globalResources('./aurelia-recaptcha-class');
}


// PUBLIC CLASSES
export {Config};
export {Recaptcha};
