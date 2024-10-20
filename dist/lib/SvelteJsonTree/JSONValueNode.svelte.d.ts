import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: unknown;
        nodeType: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export type JsonValueNodeProps = typeof __propDef.props;
export type JsonValueNodeEvents = typeof __propDef.events;
export type JsonValueNodeSlots = typeof __propDef.slots;
export default class JsonValueNode extends SvelteComponent<JsonValueNodeProps, JsonValueNodeEvents, JsonValueNodeSlots> {
}
export {};
