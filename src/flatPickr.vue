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
  import 'flatpickr/dist/flatpickr.css';

  export default {
    props: {
      value: {
        // Don't validate
        value: null,
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
        instance: null
      };
    },
    mounted () {
      // Load date-picker
      if (!this.instance) {
        // Bind on parent element if wrap is true
        let elem = this.config.wrap ? this.$el.parentNode : this.$el;
        this.instance = new Flatpickr(elem, this.config);
      }
    },
    beforeDestroy () {
      // Free up memory
      if (this.instance) {
        this.instance.destroy();
        this.instance = null;
      }
    },
    watch: {
      config (newConfig) {
        this.instance.config = Object.assign(this.instance.config, newConfig);
        this.instance.redraw();
        this.instance.setDate(this.value, true);
      },
      mutableValue (newValue){
        this.$emit('input', newValue);
      },
      value (newValue){
        this.instance.setDate(newValue, true);
      }
    },
  };
</script>

<style scoped>
  /* Any scoped css may go here*/
</style>
