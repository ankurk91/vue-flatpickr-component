<template>

  <input type="text"
         :id="id"
         :class="inputClass"
         :name="name"
         :placeholder="placeholder"
         :required="required"
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
        validate(value) {
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
      placeholder: {
        type: String,
        default: ''
      },
      inputClass: {
        type: [String, Object],
        default: 'form-control input'
      },
      name: {
        type: String,
        default: 'date-time'
      },
      required: {
        type: Boolean,
        default: false
      },
      id: {
        type: String,
      },
    },
    data() {
      return {
        mutableValue: this.value,
        fp: null,
        oldOnChange: null,
      };
    },
    mounted() {
      // Load flatPickr if not loaded yet
      if (!this.fp) {
        // Backup original handler
        this.oldOnChange = this.config.onChange;
        // Hook our handler
        this.config.onChange = this.onChange;

        // Bind on parent element if wrap is true
        let elem = this.config.wrap ? this.$el.parentNode : this.$el;
        this.fp = new Flatpickr(elem, this.config);

      }
    },
    beforeDestroy() {
      // Free up memory
      if (this.fp) {
        this.fp.destroy();
        this.fp = null;
        this.oldOnChange = null;
        this.config.onChange = null
      }
    },
    methods: {
      /**
       * Emit on-change event
       */
      onChange(...args) {
        // Call original handler if registered
        if (typeof this.oldOnChange === 'function') {
          this.oldOnChange(...args);
        }
        this.$emit('onChange', ...args);
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
        this.fp.redraw();
        this.fp.setDate(this.value, true);
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

