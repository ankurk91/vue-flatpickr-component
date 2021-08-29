import Component from './component.js';

const Plugin = (Vue, params) => {
  let name = 'flat-pickr';
  /* istanbul ignore else */
  if (typeof params === 'string') name = params;

  Vue.component(name, Component);
};

Component.install = Plugin;

export default Component;
