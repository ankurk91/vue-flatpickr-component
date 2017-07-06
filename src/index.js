import component from './flatPickr.vue';

const flatPickrPlugin = {
  install: (Vue, options) => {
    Vue.component('flat-pickr', component);
  }
};

export default component;
export {component, flatPickrPlugin};
