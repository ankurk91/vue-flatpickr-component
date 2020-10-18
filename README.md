# Vue FlatPickr Component

[![downloads](https://badgen.net/npm/dt/vue-flatpickr-component)](http://npm-stats.com/~packages/vue-flatpickr-component)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/vue-flatpickr-component/badge?style=rounded)](https://www.jsdelivr.com/package/npm/vue-flatpickr-component)
[![npm-version](https://badgen.net/npm/v/vue-flatpickr-component)](https://www.npmjs.com/package/vue-flatpickr-component)
[![github-tag](https://badgen.net/github/tag/ankurk91/vue-flatpickr-component)](https://github.com/ankurk91/vue-flatpickr-component/)
[![build](https://github.com/ankurk91/vue-flatpickr-component/workflows/build/badge.svg)](https://github.com/ankurk91/vue-flatpickr-component/actions)
[![codecov](https://codecov.io/gh/ankurk91/vue-flatpickr-component/branch/master/graph/badge.svg)](https://codecov.io/gh/ankurk91/vue-flatpickr-component)
[![license](https://badgen.net/github/license/ankurk91/vue-flatpickr-component)](https://yarnpkg.com/en/package/vue-flatpickr-component)

Vue.js component for [Flatpickr](https://flatpickr.js.org/) date-time picker

## [Demo](https://ankurk91.github.io/vue-flatpickr-component/) or [JSFiddle](https://jsfiddle.net/ankurk91/63kzdwLx/)

## Features
* Reactive ``v-model`` value
    - You can change flatpickr value programmatically 
* Reactive [config](https://flatpickr.js.org/options/) options
    - You can change config options dynamically
    - Component will watch for any changes and redraw itself
    - You are suggested to modify config via [Vue.set](https://vuejs.org/v2/api/#Vue-set)
* Can emit all possible [events](https://flatpickr.js.org/events/)
* Compatible with [Bootstrap](http://getbootstrap.com/), [Bulma](http://bulma.io/) or any other CSS framework
* Supports [wrapped](https://flatpickr.js.org/examples/#flatpickr-external-elements) mode
    - Just set ``wrap:true`` in config and component will take care of all
* Works with validation libraries

## Installation
```bash
# yarn
yarn add vue-flatpickr-component@^8

# npm
npm install vue-flatpickr-component@^8
```

## Usage
#### Minimal example
```html
<template>
  <div>
    <flat-pickr v-model="date"></flat-pickr>
  </div>
</template>

<script>
  import flatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';
  
  export default {    
    data () {
      return {
        date: null,       
      }
    },
    components: {
      flatPickr
    }
  }
</script>
```

#### Detailed example
This example is based on Bootstrap 4 [input group](https://getbootstrap.com/docs/4.3/components/input-group/)
```html
<template>
  <section>
    <div class="form-group">
      <label>Select a date</label>
      <div class="input-group">
        <flat-pickr
                v-model="date"
                :config="config"                                                          
                class="form-control" 
                placeholder="Select date"               
                name="date">
        </flat-pickr>
        <div class="input-group-btn">
          <button class="btn btn-default" type="button" title="Toggle" data-toggle>
            <i class="fa fa-calendar">
              <span aria-hidden="true" class="sr-only">Toggle</span>
            </i>
          </button>
          <button class="btn btn-default" type="button" title="Clear" data-clear>
            <i class="fa fa-times">
              <span aria-hidden="true" class="sr-only">Clear</span>
            </i>               
          </button>
        </div>
      </div>
    </div>
    <pre>Selected date is - {{date}}</pre>
  </section>
</template>

<script>
  // bootstrap is just for this example
  import 'bootstrap/dist/css/bootstrap.css';
  // import this component
  import flatPickr from 'vue-flatpickr-component';  
  import 'flatpickr/dist/flatpickr.css';
  // theme is optional
  // try more themes at - https://flatpickr.js.org/themes/
  import 'flatpickr/dist/themes/material_blue.css';
  // localization is optional
  import {Hindi} from 'flatpickr/dist/l10n/hi.js';
  
  export default {
    name: 'yourComponent',
    data () {
      return {
        // Initial value
        date: new Date(),
        // Get more form https://flatpickr.js.org/options/
        config: {
          wrap: true, // set wrap to true only when using 'input-group'
          altFormat: 'M j, Y',
          altInput: true,
          dateFormat: 'Y-m-d',
          locale: Hindi, // locale for this instance only          
        },                
      }
    },
    components: {
      flatPickr
    },    
  }
</script>
```

#### As plugin
```js
  import Vue from 'vue';
  import VueFlatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';
  Vue.use(VueFlatPickr);
```
This will register a global component `<flat-pickr>`

## Events
* The component can emit all possible events, you can listen to them in your component
```html
<flat-pickr v-model="date" @on-change="doSomethingOnChange" @on-close="doSomethingOnClose"></flat-pickr>
```
* Event names has been converted to kebab-case.
* You can still pass your methods in `:config` like original flatpickr do.

## Available props
The component accepts these props:

| Attribute        | Type                                            | Default              | Description      |
| :---             | :---:                                           | :---:                | :---             |
| v-model / value  | String / Date Object / Array / Timestamp / null | `null`               | Set or Get date-picker value (required) |
| config           | Object                                          | `{ wrap:false }`       | Flatpickr configuration [options](https://flatpickr.js.org/options/)|
| events           | Array                                           | Array of sensible events  | Customise the [events](https://flatpickr.js.org/events/) to be emitted|

## Install in non-module environments (without webpack)
```html
<!-- Flatpickr related files -->
<link href="https://cdn.jsdelivr.net/npm/flatpickr@4/dist/flatpickr.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/flatpickr@4/dist/flatpickr.min.js"></script>
<!-- Vue js -->
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
<!-- Lastly add this package -->
<script src="https://cdn.jsdelivr.net/npm/vue-flatpickr-component@8"></script>
<script>
// Initialize as global component
Vue.component('flat-pickr', VueFlatpickr);
</script>
```

## Run examples on your localhost
* Clone this repo
* You should have node-js `10.13.0>=` and yarn `>=1.x` pre-installed
* Install dependencies `yarn install`
* Run webpack dev server `yarn start`
* This should open the demo page at `http://localhost:9000` in your default web browser

## Testing
* This package is using [Jest](https://github.com/facebook/jest) and [vue-test-utils](https://github.com/vuejs/vue-test-utils) for testing.
* Tests can be found in `__test__` folder.
* Execute tests with this command `yarn test`

## Changelog
Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Caveats
* :warning: Don't pass config option as inline literal object to `:config` prop.
```html
<!-- This will cause date picker to freeze -->
<flat-picker v-model="card" :config="{ dateFormat: 'd-m-Y H:i' }"></flat-picker>
```
* Vue.js cannot detect changes when literal object/arrays passed within template, [see](https://github.com/vuejs/vue/issues/4060)

## License
[MIT](LICENSE.txt) License
