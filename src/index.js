import component from './flatPickr.vue';

const flatPickrPlugin = {
  install: (Vue, options) => {
    Vue.component('flat-pickr', component);
  }
};

component.install = flatPickrPlugin.install;

export default component;
export {component, flatPickrPlugin};
