(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("flatpickr"));
	else if(typeof define === 'function' && define.amd)
		define("VueFlatpickr", ["flatpickr"], factory);
	else if(typeof exports === 'object')
		exports["VueFlatpickr"] = factory(require("flatpickr"));
	else
		root["VueFlatpickr"] = factory(root["flatpickr"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/component.vue?vue&type=template&id=6157e8a8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{attrs:{"type":"text","data-input":""},on:{"input":_vm.onInput}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/component.vue?vue&type=template&id=6157e8a8&

// EXTERNAL MODULE: external "flatpickr"
var external_flatpickr_ = __webpack_require__(0);
var external_flatpickr_default = /*#__PURE__*/__webpack_require__.n(external_flatpickr_);

// CONCATENATED MODULE: ./src/events.js
// Events to emit, copied from flatpickr source
var includedEvents = ['onChange', 'onClose', 'onDestroy', 'onMonthChange', 'onOpen', 'onYearChange'];

// Let's not emit these events by default
var excludedEvents = ['onValueUpdate', 'onDayCreate', 'onParseConfig', 'onReady', 'onPreCalendarPosition', 'onKeyDown'];


// CONCATENATED MODULE: ./src/util.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var camelToKebab = function camelToKebab(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

var arrayify = function arrayify(obj) {
  return obj instanceof Array ? obj : [obj];
};

var cloneObject = function cloneObject(obj) {
  return _extends({}, obj);
};


// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/component.vue?vue&type=script&lang=js&
//
//
//
//


// You have to import css yourself




// Keep a copy of all events for later use
var allEvents = includedEvents.concat(excludedEvents);

// Passing these properties in `set()` method will cause flatpickr to trigger some callbacks
var configCallbacks = ['locale', 'showMonths'];

/* harmony default export */ var componentvue_type_script_lang_js_ = ({
  name: 'flat-pickr',
  props: {
    value: {
      default: null,
      required: true,
      validator: function validator(value) {
        return value === null || value instanceof Date || typeof value === 'string' || value instanceof String || value instanceof Array || typeof value === 'number';
      }
    },
    // https://chmln.github.io/flatpickr/options/
    config: {
      type: Object,
      default: function _default() {
        return {
          wrap: false,
          defaultDate: null
        };
      }
    },
    events: {
      type: Array,
      default: function _default() {
        return includedEvents;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      /**
       * The flatpickr instance
       */
      fp: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    // Return early if flatpickr is already loaded
    /* istanbul ignore if */
    if (this.fp) return;

    // Don't mutate original object on parent component
    var safeConfig = cloneObject(this.config);

    // Inject our methods into events array
    this.events.forEach(function (hook) {
      safeConfig[hook] = arrayify(safeConfig[hook] || []).concat(function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this.$emit.apply(_this, [camelToKebab(hook)].concat(args));
      });
    });

    // Set initial date without emitting any event
    safeConfig.defaultDate = this.value || safeConfig.defaultDate;

    // Init flatpickr
    this.fp = new external_flatpickr_default.a(this.getElem(), safeConfig);

    // Attach blur event
    this.fpInput().addEventListener('blur', this.onBlur);
  },

  methods: {
    /**
     * Get the HTML node where flatpickr to be attached
     * Bind on parent element if wrap is true
     */
    getElem: function getElem() {
      return this.config.wrap ? this.$el.parentNode : this.$el;
    },


    /**
     * Watch for value changed by date-picker itself and notify parent component
     *
     * @param event
     */
    onInput: function onInput(event) {
      var _this2 = this;

      // Lets wait for DOM to be updated
      this.$nextTick(function () {
        _this2.$emit('input', event.target.value);
      });
    },


    /**
     * @return HTMLElement
     */
    fpInput: function fpInput() {
      return this.fp.altInput || this.fp.input;
    },


    /**
     * Blur event is required by many validation libraries
     *
     * @param event
     */
    onBlur: function onBlur(event) {
      this.$emit('blur', event.target.value);
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
      handler: function handler(newConfig) {
        var _this3 = this;

        var safeConfig = cloneObject(newConfig);
        // Workaround: Don't pass hooks to configs again otherwise
        // previously registered hooks will stop working
        // Notice: we are looping through all events
        // This also means that new callbacks can not passed once component has been initialized
        allEvents.forEach(function (hook) {
          delete safeConfig[hook];
        });
        this.fp.set(safeConfig);

        // Workaround: Allow to change locale dynamically
        configCallbacks.forEach(function (name) {
          if (typeof safeConfig[name] !== 'undefined') {
            _this3.fp.set(name, safeConfig[name]);
          }
        });
      }
    },
    /**
     * Watch for changes from parent component and update DOM
     *
     * @param newValue
     */
    value: function value(newValue) {
      // Prevent updates if v-model value is same as input's current value
      if (newValue === this.$el.value) return;
      // Make sure we have a flatpickr instance
      this.fp &&
      // Notify flatpickr instance that there is a change in value
      this.fp.setDate(newValue, true);
    },


    /**
     * Watch for the disabled property and sets the value to the binded input.
     *
     * @param newState
     */
    disabled: function disabled(newState) {
      this.fpInput().setAttribute('disabled', newState);
    }
  },

  /**
   * Free up memory
   */
  beforeDestroy: function beforeDestroy() {
    /* istanbul ignore else */
    if (this.fp) {
      this.fpInput().removeEventListener('blur', this.onBlur);
      this.fp.destroy();
      this.fp = null;
    }
  }
});
// CONCATENATED MODULE: ./src/component.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_componentvue_type_script_lang_js_ = (componentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/component.vue





/* normalize component */

var component = normalizeComponent(
  src_componentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "component.vue"
/* harmony default export */ var src_component = (component.exports);
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugin", function() { return src_Plugin; });
/* concated harmony reexport Component */__webpack_require__.d(__webpack_exports__, "Component", function() { return src_component; });


var src_Plugin = function Plugin(Vue, params) {
  var name = 'flat-pickr';
  /* istanbul ignore else */
  if (typeof params === 'string') name = params;

  Vue.component(name, src_component);
};

src_component.install = src_Plugin;

/* harmony default export */ var src = __webpack_exports__["default"] = (src_component);


/***/ })
/******/ ])["default"];
});