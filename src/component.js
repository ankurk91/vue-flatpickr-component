import Flatpickr from 'flatpickr';
import {excludedEvents, includedEvents} from './events.js';
import {arrayify, camelToKebab, cloneObject, nullify} from './util.js';
// You have to import css yourself
import {h, nextTick} from 'vue';

// Keep a copy of all events for later use
const allEvents = includedEvents.concat(excludedEvents);

// Passing these properties in `set()` method will cause flatpickr to trigger some callbacks
const configCallbacks = ['locale', 'showMonths'];

export default {
  name: 'flat-pickr',
  render() {
    return h('input', {
      type: 'text',
      'data-input': true,
      disabled: this.disabled,
      onInput: this.onInput,
      ref: 'root'
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
    // https://chmln.github.io/flatpickr/options/
    config: {
      type: Object,
      default: () => ({
        wrap: false,
        defaultDate: null
      })
    },
    events: {
      type: Array,
      default: () => includedEvents
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      /**
       * The flatpickr instance
       */
      fp: null
    };
  },
  mounted() {
    // Return early if flatpickr is already loaded
    /* istanbul ignore if */
    if (this.fp) return;

    // Don't mutate original object on parent component
    let safeConfig = cloneObject(this.config);

    this.events.forEach((hook) => {
      // Respect global callbacks registered via setDefault() method
      let globalCallbacks = Flatpickr.defaultConfig[hook] || [];

      // Inject our own method along with user callback
      let localCallback = (...args) => {
        this.$emit(camelToKebab(hook), ...args);
      };

      // Overwrite with merged array
      safeConfig[hook] = arrayify(safeConfig[hook] || []).concat(
        globalCallbacks,
        localCallback
      );
    });

    const onCloseCb = (...args) => {
      this.onClose(...args)
    };
    safeConfig['onClose'] = arrayify(safeConfig['onClose'] || []).concat(onCloseCb)

    // Set initial date without emitting any event
    safeConfig.defaultDate = this.modelValue || safeConfig.defaultDate;

    // Init flatpickr
    this.fp = new Flatpickr(this.getElem(), safeConfig);

    // Attach blur event
    this.fpInput().addEventListener('blur', this.onBlur);

    // Immediate watch will fail before fp is set,
    // so need to start watching after mount
    this.$watch('disabled', this.watchDisabled, {immediate: true});
  },
  methods: {
    /**
     * Get the HTML node where flatpickr to be attached
     * Bind on parent element if wrap is true
     */
    getElem() {
      return this.config.wrap ? this.$refs.root.parentNode : this.$refs.root;
    },

    /**
     * Watch for value changed by date-picker itself and notify parent component
     *
     * @param event
     */
    onInput(event) {
      const input = event.target;
      // Lets wait for DOM to be updated
      nextTick().then(() => {
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
     *
     * @param event
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
     *
     * @param newState
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
     *
     * @param newConfig Object
     */
    config: {
      deep: true,
      handler(newConfig) {
        if (!this.fp) {
          return;
        }

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
            this.fp.set(name, safeConfig[name]);
          }
        });
      }
    },

    /**
     * Watch for changes from parent component and update DOM
     *
     * @param newValue
     */
    modelValue(newValue) {
      // Prevent updates if v-model value is same as input's current value
      if (!this.$refs.root || newValue === nullify(this.$refs.root.value)) return;
      // Make sure we have a flatpickr instance
      this.fp &&
      // Notify flatpickr instance that there is a change in value
      this.fp.setDate(newValue, true);
    }
  },
  /**
   * Free up memory
   */
  beforeUnmount() {
    /* istanbul ignore else */
    if (this.fp) {
      this.fpInput().removeEventListener('blur', this.onBlur);
      this.fp.destroy();
      this.fp = null;
    }
  }
};
