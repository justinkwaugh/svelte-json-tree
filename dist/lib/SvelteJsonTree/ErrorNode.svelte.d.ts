import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: Error;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export type ErrorNodeProps = typeof __propDef.props;
export type ErrorNodeEvents = typeof __propDef.events;
export type ErrorNodeSlots = typeof __propDef.slots;
export default class ErrorNode extends SvelteComponent<ErrorNodeProps, ErrorNodeEvents, ErrorNodeSlots> {
}
export {};
