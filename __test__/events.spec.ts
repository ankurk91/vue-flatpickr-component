import {mount} from '@vue/test-utils'
import Flatpicker from 'flatpickr';
import Component from '../src/component';

describe('Flatpickr events', () => {

  let wrapper: any;
  let onChangeStub = jest.fn();

  const globalOnChange = jest.fn();

  Flatpicker.setDefaults({
    onChange: globalOnChange
  });

  beforeEach(() => {
    wrapper = mount(Component, {
      propsData: {
        modelValue: null,
        config: {
          onChange: onChangeStub
        }
      }
    });
  });

  afterEach(() => {
    wrapper.unmount();
    wrapper = null;
    jest.resetAllMocks();
  });

  test('emits input event on value change by user', async () => {
    wrapper.vm.$el.value = '2019-10-04';
    wrapper.find('input').trigger('input');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(["2019-10-04"])
  });

  test('emits on-change event on value change', async () => {
    wrapper.setProps({modelValue: '2017-10-04'});
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()).toHaveProperty('on-change')
  });

  test('emits on-open event on focus', async () => {
    wrapper.trigger('focus');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()).toHaveProperty('on-open')
  });

  test('calls original onChange method on value change', async () => {
    wrapper.setProps({modelValue: '2017-10-04'});
    await wrapper.vm.$nextTick();

    expect(onChangeStub).toHaveBeenCalled();
  });

  test('emits only those are specified via prop', async () => {
    wrapper = mount(Component, {
      propsData: {
        modelValue: null,
        events: ['onChange']
      }
    });

    wrapper.trigger('focus');
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted()['on-open']).toBeFalsy()

    wrapper.setProps({modelValue: '2017-10-04'});
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted()).toHaveProperty('on-change')
  });

  test('does not emit on-change event on mount', () => {
    expect(onChangeStub).not.toHaveBeenCalled();
  });

  test('emits blur event', () => {
    wrapper.setProps({modelValue: '2019-10-04'});
    wrapper.trigger('blur');

    expect(wrapper.emitted().blur).toBeTruthy()
  });

  test('respect global callbacks', async () => {
    wrapper.setProps({modelValue: '2017-10-04'});

    await wrapper.vm.$nextTick();

    expect(globalOnChange).toHaveBeenCalled();
    expect(onChangeStub).toHaveBeenCalled();
  });

});
