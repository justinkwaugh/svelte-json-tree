import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export type JsonStringNodeProps = typeof __propDef.props;
export type JsonStringNodeEvents = typeof __propDef.events;
export type JsonStringNodeSlots = typeof __propDef.slots;
export default class JsonStringNode extends SvelteComponent<JsonStringNodeProps, JsonStringNodeEvents, JsonStringNodeSlots> {
}
export {};
