import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export type JsonFunctionNodeProps = typeof __propDef.props;
export type JsonFunctionNodeEvents = typeof __propDef.events;
export type JsonFunctionNodeSlots = typeof __propDef.slots;
export default class JsonFunctionNode extends SvelteComponent<JsonFunctionNodeProps, JsonFunctionNodeEvents, JsonFunctionNodeSlots> {
}
export {};
