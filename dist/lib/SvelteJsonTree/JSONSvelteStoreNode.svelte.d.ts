import { SvelteComponent } from "svelte";
import type { Writable, Readable } from 'svelte/store';
declare const __propDef: {
    props: {
        value: Writable<unknown> | Readable<unknown>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export type JsonSvelteStoreNodeProps = typeof __propDef.props;
export type JsonSvelteStoreNodeEvents = typeof __propDef.events;
export type JsonSvelteStoreNodeSlots = typeof __propDef.slots;
export default class JsonSvelteStoreNode extends SvelteComponent<JsonSvelteStoreNodeProps, JsonSvelteStoreNodeEvents, JsonSvelteStoreNodeSlots> {
}
export {};
