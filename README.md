# Vue-flatPickr

> Vue JS v2.x component for [Flatpickr](https://chmln.github.io/flatpickr/) date-time picker

[![license](https://img.shields.io/github/license/ankurk91/vue-flatpickr-component.svg)]()

### Installation
```bash
# todo - publish on npm
npm install https://github.com/ankurk91/vue-flatpickr-component.git --save
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
        date: '',       
      }
    },
    components: {
      flatPickr
    }
  }
</script>
```

**Detailed example**
* By-default the component is based on Bootstrap 3 [input group](http://getbootstrap.com/components/#input-groups)
```html
<template>
  <section>
    <div class="form-group">
      <label>Select a date</label>
      <flat-pickr
              v-model="date"
              placeholder="Select date"
              :config="config"
              :required="true"
              input-class="date-input"
              input-name="date">
      </flat-pickr>
    </div>
    <pre>Selected date is - {{date}}</pre>
  </section>
</template>

<script type="text/javascript">
  import flatPickr from 'vue-flatpickr-component';

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
<link rel="stylesheet" href="/flatpickr.min.css">
<link rel="stylesheet" href="/bootstrap.min.css">

<script src="/vue.min.js"></script>
<script src="/flatpickr.min.js"></script>
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
      date: '2018-01-01'
    }
  });
</script>
```

### todo
- [ ] Make ``wrap`` optional
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
MIT License
