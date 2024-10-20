import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: Iterable<unknown>;
        nodeType: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export type JsonIterableArrayNodeProps = typeof __propDef.props;
export type JsonIterableArrayNodeEvents = typeof __propDef.events;
export type JsonIterableArrayNodeSlots = typeof __propDef.slots;
export default class JsonIterableArrayNode extends SvelteComponent<JsonIterableArrayNodeProps, JsonIterableArrayNodeEvents, JsonIterableArrayNodeSlots> {
}
export {};
