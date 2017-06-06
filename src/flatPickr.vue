<template>
  <div class="input-group control has-addons" data-wrap="true">
    <input type="text"
           class="form-control flatpickr-input"
           :class="inputClass"
           :name="inputName"
           :placeholder="placeholder"
           :required="required"
           v-model="mutableValue"
           data-input/>
    <slot>
      <div class="input-group-btn">
        <button class="btn btn-default" type="button" title="Toggle" data-toggle>
          <i class="glyphicon glyphicon-calendar"><span aria-hidden="true" class="sr-only">Toggle</span></i>
        </button>
      </div>
    </slot>
  </div>
</template>

<script type="text/javascript">
  import Flatpickr from 'flatpickr';
  import 'flatpickr/dist/flatpickr.css';

  export default {
    props: {
      value: {
        type: [String, null],
        value: null,
        required: true
      },
      // https://chmln.github.io/flatpickr/options/
      config: {
        type: Object,
        default: () => ({
          wrap: true
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
        this.instance = new Flatpickr(this.$el, this.config);
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
