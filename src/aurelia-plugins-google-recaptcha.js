// IMPORTS
import {PLATFORM} from 'aurelia-pal';

import {Config} from './aurelia-plugins-google-recaptcha-config';


// PUBLIC METHODS
export function configure(aurelia, configCallback) {
  const instance = aurelia.container.get(Config);
  if (configCallback !== undefined && typeof(configCallback) === 'function')
    configCallback(instance);
  aurelia.globalResources([PLATFORM.moduleName('./aurelia-plugins-google-recaptcha-element')]);
}