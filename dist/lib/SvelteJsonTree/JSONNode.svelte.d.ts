import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: unknown;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export type JsonNodeProps = typeof __propDef.props;
export type JsonNodeEvents = typeof __propDef.events;
export type JsonNodeSlots = typeof __propDef.slots;
export default class JsonNode extends SvelteComponent<JsonNodeProps, JsonNodeEvents, JsonNodeSlots> {
}
export {};
