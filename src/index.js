import component from './component.vue';

const flatPickrPlugin = (Vue, params) => {
  let name = 'flat-pickr';
  if (typeof params === 'string') name = params;

  Vue.component(name, component);
};

component.install = flatPickrPlugin;

export default component;
export {component, flatPickrPlugin};
