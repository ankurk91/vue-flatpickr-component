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
                  <date-picker class="form-control" name="date" :value="date"></date-picker>
                 </div>`,
      data() {
        return {
          date: '2017-10-04'
        }
      }
    });

    let wrapper = new app().$mount();

    let elem = wrapper.$el.firstChild;
    expect(elem.tagName).toBe('INPUT');
    expect(elem.value).toBe('2017-10-04');
    expect(elem.getAttribute('class')).toContain('form-control');
    expect(elem.getAttribute('name')).toBe('date');

  });

});
