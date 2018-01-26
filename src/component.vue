<template>

  <input type="text"
         @input="onInput"
         data-input>

</template>

<script type="text/javascript">
  import Flatpickr from 'flatpickr';
  // You have to import css yourself

  // All available hooks, copied from flatpickr source
  const hooks = [
    'onChange',
    'onClose',
    'onDayCreate',
    'onDestroy',
    'onKeyDown',
    'onMonthChange',
    'onOpen',
    'onParseConfig',
    'onReady',
    'onValueUpdate',
    'onYearChange',
  ];

  const camelToKebab = (string) => {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  };

  const arrayify = (obj) => {
    return obj instanceof Array ? obj : [obj];
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
        default: () => hooks
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
      // Return early if flatPickr is already loaded
      /* istanbul ignore if */
      if (this.fp) return;

      // Inject our method into events array
      this.events.forEach((hook) => {
        this.config[hook] = arrayify(this.config[hook] || []).concat((...args) => {
          this.$emit(camelToKebab(hook), ...args)
        });
      });

      // Set initial date without emitting any event
      this.config.defaultDate = this.value || this.config.defaultDate;

      // Init flatpickr
      this.fp = new Flatpickr(this.getElem(), this.config);
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
          // Workaround: Don't pass hooks to configs again otherwise
          // previously registered hooks will stop working
          hooks.forEach((hook) => {
            delete newConfig[hook];
          });
          this.fp.set(newConfig);
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
