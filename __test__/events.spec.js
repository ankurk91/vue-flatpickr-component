import {shallow} from 'vue-test-utils'

import Component from '../src/component.vue';

describe('Flatpickr events', () => {

  let wrapper;
  let onChangeStub = jest.fn();

  beforeEach(() => {
    wrapper = shallow(Component, {
      propsData: {
        value: null,
        config: {
          onChange: onChangeStub
        }
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
    wrapper = null;
    jest.resetAllMocks();
  });

  test('emits change event on value change', () => {
    const stub = jest.fn();
    wrapper.vm.$on('on-change', stub);
    wrapper.setProps({value: '2017-10-04'});

    expect(stub).toHaveBeenCalled();
  });

  test('emits open event on focus', () => {
    const stub = jest.fn();
    wrapper.vm.$on('on-open', stub);
    wrapper.trigger('focus');

    expect(stub).toHaveBeenCalled();
  });

  test('calls original onChange method on value change', () => {
    wrapper.setProps({value: '2017-10-04'});

    expect(onChangeStub).toHaveBeenCalled();
  });


});
