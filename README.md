# aurelia-plugins-google-recaptcha

A Google Recaptcha plugin for Aurelia.

## Installation

**Webpack/Aurelia CLI**

```shell
npm install aurelia-plugins-google-recaptcha --save
```

Add `node_modules/babel-polyfill/dist/polyfill.min.js` to the prepend list in `aurelia.json`. Do not forgot to add `babel-polyfill` to the dependencies in `package.json`.

**JSPM**

```shell
jspm install aurelia-plugins-google-recaptcha
```

**Bower**

```shell
bower install aurelia-plugins-google-recaptcha
```

## Configuration

Inside of your `main.js` or `main.ts` file simply load the plugin inside of the configure method using `.plugin()`.

```javascript
export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use
    .plugin('aurelia-plugins-google-recaptcha', config => {
      config.options({
        hl: 'en', //see https://developers.google.com/recaptcha/docs/language
        siteKey: '6LcddxgTAAAAAMmkEMa1Vrp6TNcZG8kMMkcn-VCK' //see https://www.google.com/recaptcha/admin#createsite
      });
    });

    await aurelia.start();
    aurelia.setRoot('app');
}
```

## Usage

Once Google Recaptcha is configured, to use it simply add the custom element `<aup-google-recaptcha></aup-google-recaptcha>` in your view.

### Get the response

To get the response of the recaptcha, add an event handler to `callback.call` of the custom element.

```html
<aup-google-recaptcha callback.call="recaptcha($event)"></aup-google-recaptcha>
```

```javascript
export class App {
  response = '';

  constructor() {}

  recaptcha(response) { 
    this.response = response;
  }
}
````

### Validation

Assuming you have [aurelia-validation](https://github.com/aurelia/validation) correctly configured, the Google Recaptcha can be validated when submitting a form.

```html
<form submit.delegate="submit()">
  <aup-google-recaptcha callback.call="recaptcha($event)" value.bind="response & validate"></aup-google-recaptcha>
  <button type="submit">Submit</button>
</form>
```

```javascript
import {inject, NewInstance} from 'aurelia-framework';
import {ValidationController, ValidationRules} from 'aurelia-validation';
import {ValidationRenderer} from './validationRenderer';

@inject(NewInstance.of(ValidationController))
export class App {
  response = '';
  
  constructor(validationController) {
    this.validationController = validationController;
    ValidationRules
      .ensure('response')
        .required().withMessage('Please verify the recaptcha.')
    this.validationController.addRenderer(new ValidationRenderer());
  }
  
  recaptcha(response) {
    this.response = response;
  }
  
  async submit() {
    try {
      const errors = await this.validationController.validate();
      if (!errors.valid) return;
      // Do some magic...
    }
    catch (err) {
      // Error handling...
    }
  }
}
```

### Invisible Recaptcha

To use the Invisible Recaptcha, first make sure you have an appropriate siteKey defined in your config. Set the `size` property to `invisible`. You can also set the `badge` property. Use the `window.grecaptcha.execute()` method to invoke the Google Recaptcha and get a response back in the defined callback. To make sure that the Recaptcha will fire again after a first submit, capture the `widgetId` from the Recaptcha and use it with the `window.grecaptcha.execute(widgetId)` method.

```html
<form submit.delegate="submit()">
  <aup-google-recaptcha callback.call="recaptcha($event)" size="invisible" widget-id.bind="widgetId"></aup-google-recaptcha>
  <button type="submit">Submit</button>
</form>
```

```javascript
export class App {
  response = '';
  widgetId;

  recaptcha(response) {
    this.response = response;
  }

  submit() {
    window.grecaptcha.execute(this.widgetId);
  }
}
```