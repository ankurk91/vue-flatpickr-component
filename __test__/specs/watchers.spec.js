import {mount, shallow} from 'vue-test-utils'

import Component from '../../src/component.vue';

describe('Flatpickr watchers', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(Component, {
      attachToDocument: true,
      propsData: {
        value: null,
        config: {
          onChange: () => {
          }
        }
      }
    });
  });

  test('emits change event on value change', () => {
    const stub = jest.fn();
    wrapper.vm.$on('on-change', stub);
    wrapper.setProps({value: '2017-10-04'});
    expect(stub).toHaveBeenCalled();
    stub.mockClear();
  });

  test('update configs runtime', () => {
    wrapper.setProps({config: {time_24hr: true}});
    expect(wrapper.vm.fp.config).toHaveProperty('time_24hr', true);
  });

});
