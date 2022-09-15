import {
  AllowedComponentProps,
  ExtractPropTypes,
  ComponentCustomProps,
  ComponentOptionsMixin,
  DefineComponent,
  PropType,
  VNodeProps,
} from "vue";
import Flatpickr from "flatpickr";

type FlatpickrEvent =
  "onChange"
  | "onClose"
  | "onDayCreate"
  | "onDestroy"
  | "onKeyDown"
  | "onMonthChange"
  | "onOpen"
  | "onParseConfig"
  | "onReady"
  | "onValueUpdate"
  | "onYearChange"
  | "onPreCalendarPosition";

declare const _default: DefineComponent<{
  modelValue: {
    type: PropType<string | number | any[] | Date>;
    default: any;
    required: true;
    validator(value: unknown): boolean;
  };
  config: {
    type: PropType<Flatpickr.Options.Options>;
    default: () => {
      readonly wrap: false;
      readonly defaultDate: any;
    };
  };
  events: {
    type: PropType<FlatpickrEvent[]>;
    default: () => ["onChange", "onClose", "onDestroy", "onMonthChange", "onOpen", "onYearChange"];
  };
  disabled: {
    type: BooleanConstructor;
    default: boolean;
  };
}, unknown, {
  /**
   * The flatpickr instance
   */
  fp: Flatpickr.Instance;
}, {}, {
  /**
   * Get the HTML node where flatpickr to be attached
   * Bind on parent element if wrap is true
   */
  getElem(): Element | null;
  /**
   * Watch for value changed by date-picker itself and notify parent component
   *
   * @param event
   */
  onInput(event: InputEvent): void;
  /**
   * @return HTMLElement
   */
  fpInput(): HTMLInputElement;
  /**
   * Blur event is required by many validation libraries
   *
   * @param event
   */
  onBlur(event: FocusEvent): void;
  /**
   * Flatpickr does not emit input event in some cases
   */
  onClose(selectedDates: Date[], dateStr: string): void;
  /**
   * Watch for the disabled property and sets the value to the real input.
   *
   * @param newState
   */
  watchDisabled(newState: boolean): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, ["blur", "update:modelValue", "on-change", "on-close", "on-destroy", "on-month-change", "on-open", "on-year-change", "on-value-update", "on-day-create", "on-parse-config", "on-ready", "on-pre-calendar-position", "on-key-down"], "blur" | "update:modelValue" | "on-change" | "on-close" | "on-destroy" | "on-month-change" | "on-open" | "on-year-change" | "on-value-update" | "on-day-create" | "on-parse-config" | "on-ready" | "on-pre-calendar-position" | "on-key-down", VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
  modelValue: {
    type: PropType<string | number | any[] | Date>;
    default: any;
    required: true;
    validator(value: unknown): boolean;
  };
  config: {
    type: PropType<Flatpickr.Options.Options>;
    default: () => {
      readonly wrap: false;
      readonly defaultDate: any;
    };
  };
  events: {
    type: PropType<FlatpickrEvent[]>;
    default: () => ["onChange", "onClose", "onDestroy", "onMonthChange", "onOpen", "onYearChange"];
  };
  disabled: {
    type: BooleanConstructor;
    default: boolean;
  };
}>> & {
  onBlur?: (...args: any[]) => any;
  "onUpdate:modelValue"?: (...args: any[]) => any;
  "onOn-change"?: (...args: any[]) => any;
  "onOn-close"?: (...args: any[]) => any;
  "onOn-destroy"?: (...args: any[]) => any;
  "onOn-month-change"?: (...args: any[]) => any;
  "onOn-open"?: (...args: any[]) => any;
  "onOn-year-change"?: (...args: any[]) => any;
  "onOn-value-update"?: (...args: any[]) => any;
  "onOn-day-create"?: (...args: any[]) => any;
  "onOn-parse-config"?: (...args: any[]) => any;
  "onOn-ready"?: (...args: any[]) => any;
  "onOn-pre-calendar-position"?: (...args: any[]) => any;
  "onOn-key-down"?: (...args: any[]) => any;
}, {
  disabled: boolean;
  config: {
    readonly wrap: false;
    readonly defaultDate: any;
  };
  modelValue: string | number | any[] | Date;
  events: FlatpickrEvent[];
}>;

export default _default;
