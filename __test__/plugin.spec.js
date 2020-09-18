import Component from '../src/index';
import {mount} from '@vue/test-utils';

describe('Flatpickr global component', () => {

  test('works as plugin', () => {

    let app = {
      template: `
        <div id="app">
        <date-picker class="form-control" name="date" v-model="date"></date-picker>
        </div>`,
      data() {
        return {
          date: '2017-10-04'
        }
      }
    };

    let wrapper = mount(app, {
      global: {
        components: {
          datePicker: Component
        }
      }
    });

    expect(wrapper.findComponent(Component)).toBeTruthy();

    let input = wrapper.getComponent(Component);
    expect(input.find('input')).toBeTruthy();
    expect(input.vm.$el.value).toBe('2017-10-04');
    expect(input.classes()).toContain('form-control');
    expect(input.attributes('name')).toBe('date');

    wrapper.unmount();
  });

});
