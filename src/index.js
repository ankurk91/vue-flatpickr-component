import component from './component.vue';

const flatPickrPlugin = {
  install: function (Vue, params) {
    let name = 'flat-pickr';
    if (typeof params === 'string') name = params;

    Vue.component(name, component);
  }
};

component.install = flatPickrPlugin.install;

export default component;
export {component, flatPickrPlugin};
