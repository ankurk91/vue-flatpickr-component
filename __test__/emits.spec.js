import Component from '../src/component.js';
import {includedEvents} from '../src/events.js';

describe('Flatpickr emits', () => {

  test('emits contains all events that are emited in the component', async () => {
    const eventEmittedInComponent = ['blur', 'update:modelValue'];

    expect(Component.emits).toEqual(expect.arrayContaining(eventEmittedInComponent));
  });

  test('emits contains all events that are emited from flatpicker and included by default', async () => {
    const includedEventsInKebabCase = includedEvents.map(event => event.replace(/([A-Z])/g, "-$1").toLowerCase())

    expect(Component.emits).toEqual(expect.arrayContaining(includedEventsInKebabCase));
  });

});
