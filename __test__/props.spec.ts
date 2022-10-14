import {mount} from '@vue/test-utils'
import Component from '../src/component';

describe('Flatpickr props', () => {

  // Store for future usage
  const props = {
    modelValue: '2017-10-04',
    config: {
      dateFormat: 'Y-m-d'
    }
  };

  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(Component, {
      propsData: props
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('accepts config via prop', () => {
    expect(wrapper.props('config')).toEqual(props.config);
    expect(wrapper.vm.fp.config).toHaveProperty('dateFormat', props.config.dateFormat);
  });

  test('accepts value via prop', () => {
    expect(wrapper.props('modelValue')).toBe(props.modelValue);
  });
});
