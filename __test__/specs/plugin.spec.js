import Plugin from '../../src/index';
// Lets import full build
import Vue from 'vue/dist/vue.common';

Vue.config.productionTip = false;

describe('Flatpickr global component', () => {

  // Make a copy of local vue
  let localVue = Vue.extend();
  // Define a global component
  localVue.use(Plugin, 'date-picker');

  test('works as plugin', () => {

    let app = localVue.extend({
      template: `<div id="app">
                  <date-picker class="date-picker" :value="date"></date-picker>
                 </div>`,
      data() {
        return {
          date: '2017-10-04'
        }
      }
    });

    let wrapper = new app().$mount();

    expect(wrapper.$el.firstChild.tagName).toBe('INPUT');
    expect(wrapper.$el.firstChild.value).toBe('2017-10-04');

  });

});
