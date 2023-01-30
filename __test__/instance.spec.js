import {mount} from '@vue/test-utils'

import Component from '../src/component.js';

describe('Flatpickr component instance', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(Component, {
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
    wrapper.trigger('click');
    expect(wrapper.classes()).toContain('active');
  });

  test('clean up on destroy', () => {
    wrapper.destroy();

    expect(wrapper.vm.$data.fp).toBe(null);
  });

});
