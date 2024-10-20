import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        expanded?: import("svelte/store").Writable<boolean>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export type JsonArrowProps = typeof __propDef.props;
export type JsonArrowEvents = typeof __propDef.events;
export type JsonArrowSlots = typeof __propDef.slots;
export default class JsonArrow extends SvelteComponent<JsonArrowProps, JsonArrowEvents, JsonArrowSlots> {
}
export {};
