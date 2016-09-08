# aurelia-recaptcha

A recaptcha plugin for Aurelia.

## Installation

**Webpack/Aurelia CLI**

```shell
npm install aurelia-recaptcha --save
```

**JSPM**

```shell
jspm install aurelia-recaptcha
```

**Bower**

```shell
bower install aurelia-recaptcha
```

## Configuration

Add to `package.json`

```json
  "aurelia": {
    "build": {
      "resources": [
        "aurelia-recaptcha"
      ]
    }
  }
```

Inside of your `main.js` or `main.ts` file simply load the plugin inside of the configure method using `.plugin()`.

```javascript
export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use
    .plugin('aurelia-recaptcha', config => {
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

Once recaptcha is configured, to use it simply add the custom element `<recaptcha></recaptcha>` in your view.

### Get the response

To get the response of the recaptcha, add an eventhandler to `callback.call` of the custom element.

```html
<recaptcha callback.call="recaptcha($event)"></recaptcha>
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

Assuming you have [aurelia-validation](https://github.com/aurelia/validation) correctly configured, the recaptcha can be validated when submitting a form.

```html
<form submit.delegate="submit()">
    <recaptcha callback.call="recaptcha($event)" value.bind="response & validate"></recaptcha>
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
      var errors = await this.validationController.validate();
      if (errors.length) return;
      // Do some magic...
    }
    catch (err) {
      // Error handling...
    }
  }
}
```
