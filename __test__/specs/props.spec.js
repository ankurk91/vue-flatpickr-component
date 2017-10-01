import {mount, shallow} from 'vue-test-utils'

import Component from '../../src/component.vue';

describe('Flatpickr props', () => {

  // Store for future usage
  const props = {
    value: '2017-10-04',
    inputClass: 'input-field',
    placeholder: 'select-a-date',
    name: 'dob',
    id: 'dob-field',
    config: {
      dateFormat: 'Y-m-d'
    }
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(Component, {
      propsData: props
    });
  });

  test('accepts css class via prop', () => {
    expect(wrapper.hasProp('inputClass', props.inputClass)).toBe(true);
    expect(wrapper.hasClass(props.inputClass)).toBe(true);
  });

  test('accepts input name via prop', () => {
    expect(wrapper.hasProp('name', props.name)).toBe(true);
    expect(wrapper.hasAttribute('name', props.name)).toBe(true);
  });

  test('accepts input id via prop', () => {
    expect(wrapper.hasProp('id', props.id)).toBe(true);
    expect(wrapper.hasAttribute('id', props.id)).toBe(true);
  });

  test('accepts input placeholder via prop', () => {
    expect(wrapper.hasProp('placeholder', props.placeholder)).toBe(true);
    expect(wrapper.hasAttribute('placeholder', props.placeholder)).toBe(true);
  });

  test('accepts config via prop', () => {
    expect(wrapper.hasProp('config', props.config)).toBe(true);
    // fp contains the flatpickr instance
    expect(wrapper.vm.fp.config).toHaveProperty('dateFormat', props.config.dateFormat);
  });

  test('accepts value via prop', () => {
    expect(wrapper.hasProp('value', props.value)).toBe(true);
  });

  test('validates v-model', () => {
    let vModel = wrapper.vm.$options.props.value;

    expect(vModel.validator(false)).toBe(false);
    expect(vModel.validator(undefined)).toBe(false);
    expect(vModel.validator(new Date())).toBe(true);
    expect(vModel.validator(null)).toBe(true);
    expect(vModel.validator('2017-12-12')).toBe(true);
    expect(vModel.validator(['2017-12-12'])).toBe(true);

  });

});
