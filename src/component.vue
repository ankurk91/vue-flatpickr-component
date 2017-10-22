<template>

  <input type="text"
         v-model="mutableValue"
         data-input>

</template>

<script type="text/javascript">
  import Flatpickr from 'flatpickr';
  // You have to import css yourself

  export default {
    name: 'flat-pickr',
    props: {
      value: {
        default: null,
        required: true,
        validator(value) {
          return value === null || value instanceof Date || typeof value === 'string' || value instanceof String || value instanceof Array
        }
      },
      // https://chmln.github.io/flatpickr/options/
      config: {
        type: Object,
        default: () => ({
          wrap: false
        })
      },
    },
    data() {
      return {
        /**
         * Props can not be mutated directly so lets copy to a local property
         */
        mutableValue: this.value,
        /**
         * The flatpickr instance
         */
        fp: null,
        /**
         * config.onChange method backup
         */
        oldOnChange: null,
      };
    },
    mounted() {
      // Load flatPickr only if not loaded yet
      /* istanbul ignore else */
      if (!this.fp) {
        // Backup original handler
        this.oldOnChange = this.config.onChange;
        // Hook our handler
        this.config.onChange = this.onChange;
        // Init flatpickr
        this.fp = new Flatpickr(this.getElem(), this.config);

      }
    },
    beforeDestroy() {
      // Free up memory
      /* istanbul ignore else */
      if (this.fp) {
        this.fp.destroy();
        this.fp = null;
        this.oldOnChange = null;
        this.config.onChange = null
      }
    },
    methods: {
      /**
       * Get the HTML node where to bind the flatpickr
       * Bind on parent element if wrap is true
       */
      getElem() {
        return this.config.wrap ? this.$el.parentNode : this.$el
      },

      /**
       * Emit on-change event
       */
      onChange(...args) {
        // Call original handler if registered
        /* istanbul ignore else */
        if (typeof this.oldOnChange === 'function') {
          this.oldOnChange(...args);
        }
        this.$emit('on-change', ...args);
      }
    },
    watch: {
      /**
       * Watch for any config changes and redraw date-picker
       *
       * @param newConfig Object
       */
      config(newConfig) {
        this.fp.config = Object.assign(this.fp.config, newConfig);
        this.fp.jumpToDate();
        this.fp.redraw();
      },

      /**
       * Watch for value changed by date-picker itself and notify parent component
       *
       * @param newValue
       */
      mutableValue(newValue) {
        this.$emit('input', newValue);
      },

      /**
       * Watch for changes from parent component and update DOM
       *
       * @param newValue
       */
      value(newValue) {
        // Prevent onChange event being triggered multiple times
        if (newValue === this.mutableValue) return;
        // Notify flatpickr instance that there is a change in date
        this.fp && this.fp.setDate(newValue, true);
      }
    },
  };
</script>

