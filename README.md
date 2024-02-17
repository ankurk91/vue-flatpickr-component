# Vue FlatPickr Component

[![downloads](https://badgen.net/npm/dt/vue-flatpickr-component)](https://npm-stat.com/charts.html?package=vue-flatpickr-component&from=2018-01-01)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/vue-flatpickr-component/badge?style=rounded)](https://www.jsdelivr.com/package/npm/vue-flatpickr-component)
[![npm-version](https://badgen.net/npm/v/vue-flatpickr-component)](https://www.npmjs.com/package/vue-flatpickr-component)
[![github-tag](https://badgen.net/github/tag/ankurk91/vue-flatpickr-component)](https://github.com/ankurk91/vue-flatpickr-component/tags)
[![build](https://github.com/ankurk91/vue-flatpickr-component/workflows/build/badge.svg)](https://github.com/ankurk91/vue-flatpickr-component/actions)
[![codecov](https://codecov.io/gh/ankurk91/vue-flatpickr-component/branch/main/graph/badge.svg)](https://codecov.io/gh/ankurk91/vue-flatpickr-component)
[![license](https://badgen.net/github/license/ankurk91/vue-flatpickr-component)](LICENSE.txt)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)

Vue.js component for [Flatpickr](https://flatpickr.js.org/) date-time picker.

## [Demo](https://ankurk91.github.io/vue-flatpickr-component/) or [JSFiddle](https://jsfiddle.net/ankurk91/63kzdwLx/)

### Version matrix

|Vue.js version| Package version |                                                              Branch |
|:-------------|:---------------:|--------------------------------------------------------------------:| 
| 2.x          |       8.x       | [8.x](https://github.com/ankurk91/vue-flatpickr-component/tree/8.x) |
| 3.x          |      11.x       |                                                            `main` |

## Features

* Reactive `v-model` value
    - You can change flatpickr value programmatically
* Reactive [config](https://flatpickr.js.org/options/) options
    - You can change config options dynamically
    - Component will watch for any changes and redraw itself
* Can emit all possible [events](https://flatpickr.js.org/events/)
* Compatible with [Bootstrap](http://getbootstrap.com/) or any other CSS framework
* Supports [wrapped](https://flatpickr.js.org/examples/#flatpickr--external-elements) mode
* Works with validation libraries

## Installation

```bash
npm install vue-flatpickr-component@^11
```

## Usage

#### Minimal example

```html

<template>
    <flat-pickr v-model="date"/>
</template>

<script setup>
    import {ref} from 'vue';
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';

    const date = ref(null);
</script>
```

#### Detailed example

Using Bootstrap [input group](https://getbootstrap.com/docs/4.6/components/input-group/) and Font Awesome icons

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
                    name="date"/>
                <div class="input-group-append">
                    <button class="btn btn-default" type="button" title="Toggle" data-toggle>
                        <i class="fa fa-calendar"/>
                        <span aria-hidden="true" class="sr-only">Toggle</span>
                    </button>
                    <button class="btn btn-default" type="button" title="Clear" data-clear>
                        <i class="fa fa-times"/>
                        <span aria-hidden="true" class="sr-only">Clear</span>
                    </button>
                </div>
            </div>
        </div>
        <pre>Selected date is - {{date}}</pre>
    </section>
</template>

<script setup>
    import {ref} from 'vue';
    import 'bootstrap/dist/css/bootstrap.css';
    // import this component
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    // theme is optional
    // try more themes at - https://flatpickr.js.org/themes/
    import 'flatpickr/dist/themes/material_blue.css';
    // localization is optional
    import {Hindi} from 'flatpickr/dist/l10n/hi.js';

    const date = ref('2022-10-28');

    // Read more at https://flatpickr.js.org/options/
    const config = ref({
        wrap: true, // set wrap to true only when using 'input-group'
        altFormat: 'M j, Y',
        altInput: true,
        dateFormat: 'Y-m-d',
        locale: Hindi, // locale for this instance only          
    });
</script>
```

## Events

* The component can emit all possible events, you can listen to them in your component

```html

<flat-pickr v-model="date" @on-change="doSomethingOnChange" @on-close="doSomethingOnClose"/>
```

* Event names has been converted to kebab-case.
* You can still pass your callback methods in `:config` like original flatpickr do.

## Available props

The component accepts these props:

| Attribute |                      Type                       |                    Default                     | Description                                                            |
|:----------|:-----------------------------------------------:|:----------------------------------------------:|:-----------------------------------------------------------------------|
| v-model   | String / Date Object / Array / Timestamp / null |                     `null`                     | Set or Get date-picker value (required)                                |
| config    |                     Object                      |               `{ wrap: false }`                | Flatpickr configuration [options](https://flatpickr.js.org/options/)   |
| events    |                      Array                      | Array of sensible [events](./src/events.ts#L2) | Customise the [events](https://flatpickr.js.org/events/) to be emitted |

## Use in browser with CDN 

```html
<!-- Flatpickr related files -->
<link href="https://cdn.jsdelivr.net/npm/flatpickr@4/dist/flatpickr.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/flatpickr@4/dist/flatpickr.min.js"></script>
<!-- Vue.js -->
<script src="https://cdn.jsdelivr.net/npm/vue@3.3"></script>
<!-- Lastly add this package -->
<script src="https://cdn.jsdelivr.net/npm/vue-flatpickr-component@11"></script>
<script>
    const app = Vue.createApp({})
    app.component('flat-pickr', VueFlatpickr.default);
    app.mount("#app");
</script>
```

## Run examples on your localhost

* Clone this repo
* Make sure you have node-js `>=20.11` and [pnpm](https://pnpm.io/) `>=8.x` pre-installed
* Install dependencies `pnpm install`
* Run webpack dev server `npm start`
* This should open the demo page in your default web browser

## Testing

* This package is using [Jest](https://github.com/facebook/jest)
  and [vue-test-utils](https://github.com/vuejs/test-utils) for testing.
* Tests can be found in `__test__` folder.
* Execute tests with this command `npm test`

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## License

[MIT](LICENSE.txt) License
