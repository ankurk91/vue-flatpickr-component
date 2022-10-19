import {mount} from '@vue/test-utils'
import {Hindi as HindiLocale} from 'flatpickr/dist/l10n/hi';
import {english as EnglishLocale} from 'flatpickr/dist/l10n/default'

import Component from '../src/component.js';

describe('Flatpickr watchers', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(Component, {
      propsData: {
        modelValue: null,
        config: {
          locale: HindiLocale
        }
      }
    });
  });

  afterEach(() => {
    wrapper.unmount();
    wrapper = null;
  });

  test('updates input value in DOM on value changed from parent component', async () => {
    wrapper.setProps({value: '2019-10-04'});
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.$el.value).toEqual('2019-10-04');
  });

  test('updates configs runtime', async () => {
    wrapper.setProps({config: {time_24hr: true}});
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.fp.config).toHaveProperty('time_24hr', true);

    wrapper.setProps({config: {time_24hr: false}});
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.fp.config).toHaveProperty('time_24hr', false);
  });

  test('updates locale runtime', async () => {
    expect(wrapper.vm.fp.config.locale.months.longhand[0]).not.toBe('January');

    wrapper.setProps({config: {locale: EnglishLocale}});
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.fp.config.locale.months.longhand[0]).toBe('January');
  });

  test('updates disabled attribute runtime', async () => {
    wrapper.setProps({disabled: false});
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.fpInput().disabled).toBeFalsy();

    wrapper.setProps({disabled: true});
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.fpInput().disabled).toBeTruthy();
  });

});
