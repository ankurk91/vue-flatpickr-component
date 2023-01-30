import {mount} from '@vue/test-utils'
import Flatpicker from 'flatpickr';
import Component from '../src/component.js';

describe('Flatpickr events', () => {

  let wrapper;
  let onChangeStub = jest.fn();

  const globalOnChange = jest.fn();

  Flatpicker.setDefaults({
    onChange: globalOnChange
  });

  beforeEach(() => {
    wrapper = mount(Component, {
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

  test('emits input event on value change by user', async () => {
    const stub = jest.fn();
    wrapper.vm.$on('input', stub);
    wrapper.vm.$el.value = '2019-10-04';
    wrapper.find('input').trigger('input');
    await wrapper.vm.$nextTick();

    expect(stub).toHaveBeenCalledWith("2019-10-04");
  });

  test('emits on-change event on value change', async () => {
    const stub = jest.fn();
    wrapper.vm.$on('on-change', stub);
    wrapper.setProps({value: '2017-10-04'});

    await wrapper.vm.$nextTick();

    expect(stub).toHaveBeenCalled();
  });

  test('emits on-open event on focus', () => {
    const stub = jest.fn();
    wrapper.vm.$on('on-open', stub);
    wrapper.trigger('click');

    expect(stub).toHaveBeenCalled();
  });

  test('calls original onChange method on value change', async () => {
    wrapper.setProps({value: '2017-10-04'});

    await wrapper.vm.$nextTick();

    expect(onChangeStub).toHaveBeenCalled();
  });

  test('emits only those are specified via prop', async () => {
    wrapper = mount(Component, {
      propsData: {
        value: null,
        events: ['onChange']
      }
    });

    const onOpen = jest.fn();
    wrapper.vm.$on('on-open', onOpen);
    wrapper.trigger('focus');
    await wrapper.vm.$nextTick();

    expect(onOpen).not.toHaveBeenCalled();

    const onChange = jest.fn();
    wrapper.vm.$on('on-change', onChange);
    wrapper.setProps({value: '2017-10-04'});
    await wrapper.vm.$nextTick();

    expect(onChange).toHaveBeenCalled();
  });

  test('does not emit on-change event on mount', () => {
    expect(onChangeStub).not.toHaveBeenCalled();
  });

  test('emits blur event', () => {
    wrapper.setProps({value: '2019-10-04'});
    wrapper.trigger('blur');

    expect(wrapper.emitted().blur).toBeTruthy()
  });

  test('respect global callbacks', async () => {
    wrapper.setProps({value: '2017-10-04'});

    await wrapper.vm.$nextTick();

    expect(globalOnChange).toHaveBeenCalled();
    expect(onChangeStub).toHaveBeenCalled();
  });

});
