declare module "events" {
    export const includedEvents: string[];
    export const excludedEvents: string[];
}
declare module "util" {
    export function camelToKebab(string: any): any;
    export function arrayify(obj: any): any[];
    export function cloneObject(obj: any): any;
}
declare module "component" {
    namespace _default {
        const name: string;
        function render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        function render(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
        namespace props {
            namespace modelValue {
                const _default: any;
                export { _default as default };
                export const required: boolean;
                export function validator(value: any): boolean;
                export function validator(value: any): boolean;
            }
            namespace config {
                export const type: ObjectConstructor;
                function _default_1(): {
                    wrap: boolean;
                    defaultDate: any;
                };
                export { _default_1 as default };
            }
            namespace events {
                const type_1: ArrayConstructor;
                export { type_1 as type };
                function _default_2(): string[];
                export { _default_2 as default };
            }
            namespace disabled {
                const type_2: BooleanConstructor;
                export { type_2 as type };
                const _default_3: boolean;
                export { _default_3 as default };
            }
        }
        function data(): {
            /**
             * The flatpickr instance
             */
            fp: any;
        };
        function data(): {
            /**
             * The flatpickr instance
             */
            fp: any;
        };
        function mounted(): void;
        function mounted(): void;
        namespace methods {
            /**
             * Get the HTML node where flatpickr to be attached
             * Bind on parent element if wrap is true
             */
            function getElem(): any;
            /**
             * Get the HTML node where flatpickr to be attached
             * Bind on parent element if wrap is true
             */
            function getElem(): any;
            /**
             * Watch for value changed by date-picker itself and notify parent component
             *
             * @param event
             */
            function onInput(event: any): void;
            /**
             * Watch for value changed by date-picker itself and notify parent component
             *
             * @param event
             */
            function onInput(event: any): void;
            /**
             * @return HTMLElement
             */
            function fpInput(): any;
            /**
             * @return HTMLElement
             */
            function fpInput(): any;
            /**
             * Blur event is required by many validation libraries
             *
             * @param event
             */
            function onBlur(event: any): void;
            /**
             * Blur event is required by many validation libraries
             *
             * @param event
             */
            function onBlur(event: any): void;
            /**
             * Flatpickr does not emit input event in some cases
             */
            function onClose(selectedDates: any, dateStr: any): void;
            /**
             * Flatpickr does not emit input event in some cases
             */
            function onClose(selectedDates: any, dateStr: any): void;
            /**
             * Watch for the disabled property and sets the value to the real input.
             *
             * @param newState
             */
            function watchDisabled(newState: any): void;
            /**
             * Watch for the disabled property and sets the value to the real input.
             *
             * @param newState
             */
            function watchDisabled(newState: any): void;
        }
        namespace watch {
            export namespace config_1 {
                const deep: boolean;
                function handler(newConfig: any): void;
                function handler(newConfig: any): void;
            }
            export { config_1 as config };
            /**
             * Watch for changes from parent component and update DOM
             *
             * @param newValue
             */
            export function modelValue(newValue: any): void;
            /**
             * Watch for changes from parent component and update DOM
             *
             * @param newValue
             */
            export function modelValue(newValue: any): void;
        }
        /**
         * Free up memory
         */
        function beforeUnmount(): void;
        /**
         * Free up memory
         */
        function beforeUnmount(): void;
    }
    export default _default;
}
declare module "index" {
    export default Component;
    import Component from "component.js";
    export function Plugin(Vue: any, params: any): void;
    export { Component };
}
