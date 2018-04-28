<template>

  <input type="text"
         @input="onInput"
         data-input>

</template>

<script>
  import Flatpickr from 'flatpickr';
  // You have to import css yourself

  // Events to emit, copied from flatpickr source
  const includedEvents = [
    'onChange',
    'onClose',
    'onDestroy',
    'onKeyDown',
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
  ];

  // Keep a copy of all events for later use
  const allEvents = includedEvents.concat(excludedEvents);

  // Passing these properties in `set()` method will cause flatpickr to trigger some callbacks
  const configCallbacks = ['locale', 'showMonths'];

  const camelToKebab = (string) => {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  };

  const arrayify = (obj) => {
    return obj instanceof Array ? obj : [obj];
  };

  const cloneObject = (obj) => {
    return Object.assign({}, obj);
  };

  export default {
    name: 'flat-pickr',
    props: {
      value: {
        default: null,
        required: true,
        validator(value) {
          return value === null || value instanceof Date || typeof value === 'string' || value instanceof String || value instanceof Array || typeof value === 'number'
        }
      },
      // https://chmln.github.io/flatpickr/options/
      config: {
        type: Object,
        default: () => ({
          wrap: false,
          defaultDate: null,
        })
      },
      events: {
        type: Array,
        default: () => includedEvents
      }
    },
    data() {
      return {
        /**
         * The flatpickr instance
         */
        fp: null,
      };
    },
    mounted() {
      // Return early if flatpickr is already loaded
      /* istanbul ignore if */
      if (this.fp) return;

      // Don't mutate original object on parent component
      let safeConfig = cloneObject(this.config);

      // Inject our methods into events array
      this.events.forEach((hook) => {
        safeConfig[hook] = arrayify(safeConfig[hook] || []).concat((...args) => {
          this.$emit(camelToKebab(hook), ...args)
        });
      });

      // Set initial date without emitting any event
      safeConfig.defaultDate = this.value || safeConfig.defaultDate;

      // Init flatpickr
      this.fp = new Flatpickr(this.getElem(), safeConfig);
    },
    methods: {
      /**
       * Get the HTML node where flatpickr to be attached
       * Bind on parent element if wrap is true
       */
      getElem() {
        return this.config.wrap ? this.$el.parentNode : this.$el
      },

      /**
       * Watch for value changed by date-picker itself and notify parent component
       *
       * @param event
       */
      onInput(event) {
        this.$emit('input', event.target.value);
      },
    },
    watch: {
      /**
       * Watch for any config changes and redraw date-picker
       *
       * @param newConfig Object
       */
      config: {
        deep: true,
        handler(newConfig) {
          let safeConfig = cloneObject(newConfig);
          // Workaround: Don't pass hooks to configs again otherwise
          // previously registered hooks will stop working
          // Notice: we are looping through all events
          // This also means that new callbacks can not passed once component has been initialized
          allEvents.forEach((hook) => {
            delete safeConfig[hook];
          });
          this.fp.set(safeConfig);

          // Workaround: Allow to change locale dynamically
          configCallbacks.forEach((name) => {
            if (typeof safeConfig[name] !== 'undefined') {
              this.fp.set(name, safeConfig[name])
            }
          });
        }
      },
      /**
       * Watch for changes from parent component and update DOM
       *
       * @param newValue
       */
      value(newValue) {
        // Prevent updates if v-model value is same as input's current value
        if (newValue === this.$el.value) return;
        // Make sure we have a flatpickr instance
        this.fp &&
        // Notify flatpickr instance that there is a change in value
        this.fp.setDate(newValue, true);
      }
    },
    /**
     * Free up memory
     */
    beforeDestroy() {
      /* istanbul ignore else */
      if (this.fp) {
        this.fp.destroy();
        this.fp = null;
      }
    },
  };
</script>
