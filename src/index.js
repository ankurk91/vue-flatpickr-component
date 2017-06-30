import component from './flatPickr.vue';

const plugin = {
  install: (Vue, options) => {
    Vue.component('flat-pickr', component);
    require('flatpickr/dist/flatpickr.css');
  }
};

export default component;
export {component, plugin};
