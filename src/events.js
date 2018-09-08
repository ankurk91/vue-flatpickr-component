// Events to emit, copied from flatpickr source
const includedEvents = [
  'onChange',
  'onClose',
  'onDestroy',
  'onMonthChange',
  'onOpen',
  'onYearChange',
];

// Let's not emit these events by default
const excludedEvents = [
  'onValueUpdate',
  'onDayCreate',
  'onParseConfig',
  'onReady',
  'onPreCalendarPosition',
  'onKeyDown',
];

export {includedEvents, excludedEvents}
