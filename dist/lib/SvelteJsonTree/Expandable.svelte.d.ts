import { SvelteComponent } from "svelte";
import { type Writable } from 'svelte/store';
declare const __propDef: {
    props: {
        expanded: Writable<boolean>;
        key: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {};
    bindings?: string;
};
export type ExpandableProps = typeof __propDef.props;
export type ExpandableEvents = typeof __propDef.events;
export type ExpandableSlots = typeof __propDef.slots;
export default class Expandable extends SvelteComponent<ExpandableProps, ExpandableEvents, ExpandableSlots> {
}
export {};
