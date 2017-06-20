<template>

  <input type="text"
         class="form-control input"
         :class="inputClass"
         :name="inputName"
         :placeholder="placeholder"
         :required="required"
         v-model="mutableValue"
         data-input>

</template>

<script type="text/javascript">
  import Flatpickr from 'flatpickr';
  // You have to configure webpack to load css
  import 'flatpickr/dist/flatpickr.css';

  export default {
    props: {
      value: {
        // Don't validate
        default: null,
        required: true
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
        default: 'Pick a date'
      },
      inputClass: {
        type: [String, Object],
        default: ''
      },
      inputName: {
        type: String,
        default: 'date'
      },
      required: {
        type: Boolean,
        default: false
      }
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
       * @param newConfig
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
      mutableValue (newValue){
        this.$emit('input', newValue);
      },
      /**
       * Watch for changes from parent component and update DOM
       *
       * @param newValue
       */
      value (newValue){
        this.fp && this.fp.setDate(newValue, true);
      }
    },
  };
</script>

