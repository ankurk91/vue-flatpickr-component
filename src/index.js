import component from './flatPickr.vue';

const flatPickrPlugin = {
  install: function (Vue, options) {
    Vue.component('flat-pickr', component);
  }
};

component.install = flatPickrPlugin.install;

export default component;
export {component, flatPickrPlugin};
