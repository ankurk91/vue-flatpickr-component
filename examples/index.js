'use strict';

import Vue from 'vue';

Vue.config.productionTip = false;

// vee-validate is just for demo
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate, {
  events: 'input|blur'
});

// Just for demo
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App),
  created() {
    console.log('Main app created');
  },
  mounted() {
    console.log('Main app mounted');
  },
});
