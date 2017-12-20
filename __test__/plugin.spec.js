import Component from '../src/index';
import {mount, createLocalVue} from 'vue-test-utils';

describe('Flatpickr global component', () => {

  // Make a copy of local vue
  let localVue = createLocalVue();
  // Define a global component
  localVue.use(Component, 'date-picker');

  test('works as plugin', () => {

    let app = localVue.component('app', {
      template: `<div id="app">
                  <date-picker class="form-control" name="date" v-model="date"></date-picker>
                 </div>`,
      data() {
        return {
          date: '2017-10-04'
        }
      }
    });

    let wrapper = mount(app, {
      localVue
    });

    expect(wrapper.contains(Component)).toBe(true);

    let input = wrapper.find(Component);
    expect(input.is('input')).toBe(true);
    expect(input.vm.$el.value).toBe('2017-10-04');
    expect(input.classes()).toContain('form-control');
    expect(input.vm.$el.getAttribute('name')).toBe('date');

    wrapper.destroy();
  });

});
