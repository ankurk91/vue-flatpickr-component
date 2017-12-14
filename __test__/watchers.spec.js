import {shallow} from 'vue-test-utils'

import Component from '../src/component.vue';

describe('Flatpickr watchers', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(Component, {
      attachToDocument: true,
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
  });

  test('emits change event on value change', () => {
    const stub = jest.fn();
    wrapper.vm.$on('on-change', stub);
    wrapper.setProps({value: '2017-10-04'});

    expect(stub).toHaveBeenCalled();
    stub.mockClear();
  });

  test('calls original onChange method on value change', () => {
    const spy = jest.spyOn(wrapper.vm, 'oldOnChange');
    wrapper.setProps({value: '2017-10-04'});

    expect(spy).toHaveBeenCalled();
    spy.mockReset();
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
