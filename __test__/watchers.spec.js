import {shallow} from 'vue-test-utils'

import Component from '../src/component.vue';

describe('Flatpickr watchers', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(Component, {
      propsData: {
        value: null,
        config: {
          onChange: () => {
            // shh..
          }
        }
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
    wrapper = null;
  });

  test('emits on-change event on value change', () => {
    wrapper.setProps({value: '2015-10-04'});
    expect(wrapper.emitted()['on-change'].length).toBe(1)
  });

  test('updates input value in DOM on value change', () => {
    wrapper.setProps({value: '2019-10-04'});
    expect(wrapper.vm.$el.value).toEqual('2019-10-04');
  });

  test('updates configs runtime', () => {
    wrapper.setProps({config: {time_24hr: true}});
    expect(wrapper.vm.fp.config).toHaveProperty('time_24hr', true);
  });

});
