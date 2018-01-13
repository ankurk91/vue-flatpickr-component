import {shallow} from '@vue/test-utils'

import Component from '../src/component.vue';

describe('Flatpickr watchers', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(Component, {
      propsData: {
        value: null,
        config: {}
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
    wrapper = null;
  });

  test('updates input value in DOM on value changed from parent component', () => {
    wrapper.setProps({value: '2019-10-04'});
    expect(wrapper.vm.$el.value).toEqual('2019-10-04');
  });

  test('updates configs runtime', () => {
    wrapper.setProps({config: {time_24hr: true}});
    expect(wrapper.vm.fp.config).toHaveProperty('time_24hr', true);

    wrapper.setProps({config: {time_24hr: false}});
    expect(wrapper.vm.fp.config).toHaveProperty('time_24hr', false);
  });

});
