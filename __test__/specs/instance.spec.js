import {shallow} from 'vue-test-utils'

import Component from '../../src/component.vue';

describe('Flatpickr component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(Component, {
      attachToDocument: true,
      propsData: {
        value: new Date()
      }
    });
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  });

  test('renders input field', () => {
    expect(wrapper.is('input')).toBe(true);
  });

  test('opens datepicker when focus', () => {
    let input = wrapper.find('input');
    input.trigger('focus');
    expect(input.hasClass('active')).toBe(true);
  });

  test('clean up on destroy', () => {
    wrapper.vm.$destroy();
    expect(wrapper.isEmpty()).toBe(true);
    expect(wrapper.vm.$data.fp).toBe(null);
  });

});
