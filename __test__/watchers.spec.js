import {mount} from '@vue/test-utils'
import {Hindi as HindiLocale} from 'flatpickr/dist/l10n/hi';
import {english as EnglishLocale} from 'flatpickr/dist/l10n/default.js'

import Component from '../src/component.vue';

describe('Flatpickr watchers', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(Component, {
      propsData: {
        value: null,
        config: {
          locale: HindiLocale
        }
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

  test('updates locale runtime', () => {
    expect(wrapper.vm.fp.config.locale.months.longhand[0]).not.toBe('January');

    wrapper.setProps({config: {locale: EnglishLocale}});
    expect(wrapper.vm.fp.config.locale.months.longhand[0]).toBe('January');
  });

});
