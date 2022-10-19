import flatpickr from 'flatpickr';
import {defineComponent, h} from 'vue';
import {excludedEvents, includedEvents} from './events';
import {arrayify, camelToKebab, nullify} from './util';

// Keep a copy of all events for later use
const allEvents = includedEvents.concat(excludedEvents);

// Passing these properties in `fp.set()` method will cause flatpickr to trigger some callbacks
const configCallbacks = ['locale', 'showMonths'];

export default defineComponent({
  name: 'FlatPickr',
  compatConfig: {
    MODE: 3,
  },
  render() {
    return h('input', {
      type: 'text',
      'data-input': true,
      disabled: this.disabled,
      onInput: this.onInput,
    });
  },
  emits: [
    'blur',
    'update:modelValue',
  ].concat(allEvents.map(camelToKebab)),
  props: {
    modelValue: {
      default: null,
      required: true,
      validator(value) {
        return (
          value === null ||
          value instanceof Date ||
          typeof value === 'string' ||
          value instanceof String ||
          value instanceof Array ||
          typeof value === 'number'
        );
      }
    },
    // https://flatpickr.js.org/options/
    config: {
      type: Object,
      default: () => ({
        defaultDate: null,
        wrap: false,
      })
    },
    events: {
      type: Array,
      default: () => includedEvents
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  fp: null, // non-reactive
  mounted() {
    // Return early if flatpickr is already loaded
    /* istanbul ignore if */
    if (this.fp) return;

    // Init flatpickr
    this.fp = flatpickr(this.getElem(), this.prepareConfig());

    // Attach blur event
    this.fpInput().addEventListener('blur', this.onBlur);

    // Immediate watch will fail before fp is set,
    // so we need to start watching after mount
    this.$watch('disabled', this.watchDisabled, {
      immediate: true
    });
  },
  methods: {
    prepareConfig() {
      // Don't mutate original object on parent component
      let safeConfig = {...this.config};

      this.events.forEach((hook) => {
        // Respect global callbacks registered via setDefault() method
        let globalCallbacks = flatpickr.defaultConfig[hook] || [];

        // Inject our own method along with user's callbacks
        let localCallback = (...args) => {
          this.$emit(camelToKebab(hook), ...args);
        };

        // Overwrite with merged array
        safeConfig[hook] = arrayify(safeConfig[hook] || []).concat(
          globalCallbacks,
          localCallback
        );
      });

      const onCloseCb = this.onClose.bind(this);
      safeConfig['onClose'] = arrayify(safeConfig['onClose'] || []).concat(onCloseCb)

      // Set initial date without emitting any event
      safeConfig.defaultDate = this.modelValue || safeConfig.defaultDate;

      return safeConfig;
    },
    /**
     * Get the HTML node where flatpickr to be attached
     * Bind on parent element if wrap is true
     */
    getElem() {
      return this.config.wrap ? this.$el.parentNode : this.$el;
    },

    /**
     * Watch for value changed by date-picker itself and notify parent component
     */
    onInput(event) {
      const input = event.target;
      // Let's wait for DOM to be updated
      this.$nextTick(() => {
        this.$emit('update:modelValue', nullify(input.value));
      });
    },

    /**
     * @return HTMLElement
     */
    fpInput() {
      return this.fp.altInput || this.fp.input;
    },

    /**
     * Blur event is required by many validation libraries
     */
    onBlur(event) {
      this.$emit('blur', nullify(event.target.value));
    },

    /**
     * Flatpickr does not emit input event in some cases
     */
    onClose(selectedDates, dateStr) {
      this.$emit('update:modelValue', dateStr);
    },

    /**
     * Watch for the disabled property and sets the value to the real input.
     */
    watchDisabled(newState) {
      if (newState) {
        this.fpInput().setAttribute('disabled', newState);
      } else {
        this.fpInput().removeAttribute('disabled');
      }
    }
  },
  watch: {
    /**
     * Watch for any config changes and redraw date-picker
     */
    config: {
      deep: true,
      handler(newConfig) {
        if (!this.fp) return;

        let safeConfig = {...newConfig};
        // Workaround: Don't pass hooks to configs again otherwise
        // previously registered hooks will stop working
        // Notice: we are looping through all events
        // This also means that new callbacks can not be passed once component has been initialized
        allEvents.forEach((hook) => {
          delete safeConfig[hook];
        });
        this.fp.set(safeConfig);

        // Workaround: Allow to change locale dynamically
        configCallbacks.forEach((name) => {
          if (typeof safeConfig[name] !== 'undefined') {
            this.fp.set(name, safeConfig[name]);
          }
        });
      }
    },

    /**
     * Watch for changes from parent component and update DOM
     */
    modelValue(newValue) {
      // Prevent updates if v-model value is same as input's current value
      if (!this.$el || newValue === nullify(this.$el.value)) return;
      // Make sure we have a flatpickr instance
      this.fp &&
      // Notify flatpickr instance that there is a change in value
      this.fp.setDate(newValue, true);
    }
  },
  beforeUnmount() {
    /* istanbul ignore else */
    if (!this.fp) return;

    this.fpInput().removeEventListener('blur', this.onBlur);
    this.fp.destroy();
    this.fp = null;
  }
});
