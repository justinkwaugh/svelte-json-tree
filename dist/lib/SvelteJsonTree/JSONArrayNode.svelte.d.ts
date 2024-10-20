import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: Array<unknown>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export type JsonArrayNodeProps = typeof __propDef.props;
export type JsonArrayNodeEvents = typeof __propDef.events;
export type JsonArrayNodeSlots = typeof __propDef.slots;
export default class JsonArrayNode extends SvelteComponent<JsonArrayNodeProps, JsonArrayNodeEvents, JsonArrayNodeSlots> {
}
export {};
