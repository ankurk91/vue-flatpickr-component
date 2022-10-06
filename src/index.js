import Component from './component.js';

const Plugin = (app, params) => {
  let name = 'flat-pickr';
  /* istanbul ignore else */
  if (typeof params === 'string') name = params;

  app.component(name, Component);
};

Component.install = Plugin;

export default Component;
