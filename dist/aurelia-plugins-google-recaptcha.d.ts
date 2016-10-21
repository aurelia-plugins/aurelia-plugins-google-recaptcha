import {
  inject
} from 'aurelia-dependency-injection';
import {
  bindable,
  customElement,
  noView
} from 'aurelia-templating';

// PUBLIC CLASS
export declare class Config {
  
  // CONSTRUCTOR
  constructor();
  
  // PUBLIC METHODS
  get(key?: any): any;
  options(obj?: any): any;
  set(key?: any, value?: any): any;
}

// PUBLIC CLASS

// IMPORTS
// CLASS ATTRIBUTES
export declare class Recaptcha {
  callback: any;
  size: any;
  theme: any;
  type: any;
  
  // CONSTRUCTOR
  constructor(element?: any, config?: any);
  
  // LIFECYCLE HANDLERS
  attached(): any;
}

// IMPORTS
// PUBLIC METHODS
export declare function configure(aurelia?: any, configCallback?: any): any;