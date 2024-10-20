import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: Record<string, unknown>;
        summary: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export type JsonObjectNodeProps = typeof __propDef.props;
export type JsonObjectNodeEvents = typeof __propDef.events;
export type JsonObjectNodeSlots = typeof __propDef.slots;
export default class JsonObjectNode extends SvelteComponent<JsonObjectNodeProps, JsonObjectNodeEvents, JsonObjectNodeSlots> {
}
export {};
