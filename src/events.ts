// Events to emit, copied from flatpickr source
import flatpickr from 'flatpickr';
import HookKey = flatpickr.Options.HookKey;

const includedEvents = [
  'onChange',
  'onClose',
  'onDestroy',
  'onMonthChange',
  'onOpen',
  'onYearChange',
] as HookKey[];

// Let's not emit these events by default
const excludedEvents = [
  'onValueUpdate',
  'onDayCreate',
  'onParseConfig',
  'onReady',
  'onPreCalendarPosition',
  'onKeyDown',
] as HookKey[];

export {includedEvents, excludedEvents}
