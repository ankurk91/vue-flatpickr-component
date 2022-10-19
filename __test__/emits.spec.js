import Component from '../src/component';
import {includedEvents} from '../src/events';
import {camelToKebab} from "../src/util";

describe('Flatpickr emits', () => {

  test('emits contains all events that are emitted in the component', async () => {
    const eventEmittedInComponent = ['blur', 'update:modelValue'];

    expect(Component.emits).toEqual(expect.arrayContaining(eventEmittedInComponent));
  });

  test('emits contains all events that are emitted from flatpicker and included by default', async () => {
    const includedEventsInKebabCase = includedEvents.map(camelToKebab)

    expect(Component.emits).toEqual(expect.arrayContaining(includedEventsInKebabCase));
  });

});
