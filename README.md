# Vue-flatPickr

> Vue JS v2.x component for [Flatpickr](https://chmln.github.io/flatpickr/) date-time picker

[![downloads](https://img.shields.io/npm/dt/vue-flatpickr-component.svg)](https://www.npmjs.com/package/vue-flatpickr-component)
[![version](https://img.shields.io/npm/v/vue-flatpickr-component.svg)](https://www.npmjs.com/package/vue-flatpickr-component)
[![license](https://img.shields.io/github/license/ankurk91/vue-flatpickr-component.svg)]()

### Installation
```bash
npm install vue-flatpickr-component --save
```

### Usage
**Minimal example**
```html
<template>
  <section>
    <flat-pickr v-model="date"></flat-pickr>
  </section>
</template>

<script type="text/javascript">
  import flatPickr from 'vue-flatpickr-component';
 
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

**Detailed example**
* This example is based on Bootstrap 3 [input group](http://getbootstrap.com/components/#input-groups)
```html
<template>
  <section>
    <div class="form-group">
      <label>Select a date</label>
      <div class="input-group">
        <flat-pickr
                v-model="date"
                placeholder="Select date"
                :config="config"
                :required="true"
                input-class="date-input"
                input-name="date">
        </flat-pickr>
        <div class="input-group-btn">
          <button class="btn btn-default" type="button" title="Toggle" data-toggle>
            <i class="glyphicon glyphicon-calendar"><span aria-hidden="true" class="sr-only">Toggle</span></i>
          </button>
        </div>
      </div>
    </div>
    <pre>Selected date is - {{date}}</pre>
  </section>
</template>

<script type="text/javascript">
  import flatPickr from 'vue-flatpickr-component';
  import 'bootstrap/dist/css/bootstrap.css';
  
  // Theme is optional
  import 'flatpickr/dist/themes/material_blue.css';
  // Locale is optional
  const Hindi = require("flatpickr/dist/l10n/hi.js").hi;
  
  export default {
    name: 'yourComponent',
    data () {
      return {
        // Initial value
        date: '2018-02-02',
        // Get more form https://chmln.github.io/flatpickr/options/
        config: {
          wrap: true,
          altFormat: 'M	j, Y',
          altInput: true,
          dateFormat: "Y-m-d",
          locale: Hindi, // locale for this instance only
          // You can add hooks
          onChange: this.onChange,
        },                
      }
    },
    components: {
      flatPickr
    },
    methods: {
      onChange (selectedDates, dateStr, instance) {
        console.log('Date was changed');
      }
    }
  }
</script>
```

### Props
The component accepts these props

| Attribute    | Type               | Description |
| :---         |     :---:          | :---            |
| v-model      | String (required)  | Set, Get date-picker value |
| config       | Object             | Flatpickr configuration [options](https://chmln.github.io/flatpickr/options/)|
| placeholder  | String             | Set placeholder to input |
| input-class   | String OR Object  | Add CSS class to input  |
| input-name    | String             | Set input field name  |
| required     | Boolean            | Make input field required |

### Install without webpack (module bundler)
* Include required files
```html
<!-- Bootstrap is optional -->
<link rel="stylesheet" href="/bootstrap.min.css">
<!-- Flatpickr related files -->
<link rel="stylesheet" href="/flatpickr.min.css">
<script src="/flatpickr.min.js"></script>
<!-- Vue js -->
<script src="/vue.min.js"></script>
<!-- Lastly add this package -->
<script src="/vue-flatpickr.min.js"></script>
```
* Initialize as global component
```js
Vue.component('flat-pickr', VueFlatpickr.default);
```
* Use the component anywhere in your app
```html
<main id="app">
  <div class="form-group">
    <label>Select date</label>
    <flat-pickr v-model="date"></flat-pickr>
  </div>
</main>
<script>
  new Vue({
    el: '#app',
    data: {
      date: null
    }
  });
</script>
```

### @todo
- [x] Make ``wrap`` optional
- [ ] Add more examples, bulma ?

### Run demo on localhost
* Clone this repo
* Install dependencies
``
npm install
``
* Run webpack dev server
``
npm run dev
``
* This should open the demo page at ``http://localhost:9000``

### License
[MIT](LICENSE.txt) License
