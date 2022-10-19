import {mount} from '@vue/test-utils'
import Component from '../src/component';

describe('Flatpickr component instance', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(Component, {
      propsData: {
        modelValue: new Date()
      }
    });
  });

  test('renders input field', () => {
    expect(wrapper.find('input').exists()).toBe(true);
  });

  test('opens datepicker when focus', () => {
    wrapper.trigger('focus');
    expect(wrapper.classes()).toContain('active');
  });

});
