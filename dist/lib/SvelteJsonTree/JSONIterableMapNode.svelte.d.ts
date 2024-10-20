import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: Map<unknown, unknown>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export type JsonIterableMapNodeProps = typeof __propDef.props;
export type JsonIterableMapNodeEvents = typeof __propDef.events;
export type JsonIterableMapNodeSlots = typeof __propDef.slots;
export default class JsonIterableMapNode extends SvelteComponent<JsonIterableMapNodeProps, JsonIterableMapNodeEvents, JsonIterableMapNodeSlots> {
}
export {};
