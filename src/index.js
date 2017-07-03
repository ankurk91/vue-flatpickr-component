import component from './flatPickr.vue';

const flatPickrPlugin = {
  install: (Vue, options) => {
    Vue.component('flat-pickr', component);
    require('flatpickr/dist/flatpickr.css');
  }
};

export default component;
export {component, flatPickrPlugin};
