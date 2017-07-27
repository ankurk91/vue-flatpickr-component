<template>

  <input type="text"
         class="form-control input"
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
    props: {
      value: {
        default: null,
        required: true,
        validate (value){
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
        default: ''
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
    data () {
      return {
        mutableValue: this.value,
        fp: null
      };
    },
    mounted () {
      // Load flatPickr if not loaded yet
      if (!this.fp) {
        // Bind on parent element if wrap is true
        let elem = this.config.wrap ? this.$el.parentNode : this.$el;
        this.fp = new Flatpickr(elem, this.config);
      }
    },
    beforeDestroy () {
      // Free up memory
      if (this.fp) {
        this.fp.destroy();
        this.fp = null;
      }
    },
    watch: {
      /**
       * Watch for any config changes and redraw date-picker
       *
       * @param newConfig Object
       */
      config (newConfig) {
        this.fp.config = Object.assign(this.fp.config, newConfig);
        this.fp.redraw();
        this.fp.setDate(this.value, true);
      },
      /**
       * Watch for value changed by date-picker itself and notify parent component
       *
       * @param newValue
       */
      mutableValue (newValue) {
        this.$emit('input', newValue);
      },
      /**
       * Watch for changes from parent component and update DOM
       *
       * @param newValue
       */
      value (newValue) {
        this.fp && this.fp.setDate(newValue, true);
      }
    },
  };
</script>

