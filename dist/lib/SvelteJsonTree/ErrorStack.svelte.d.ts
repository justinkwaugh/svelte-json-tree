import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        stack: string[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export type ErrorStackProps = typeof __propDef.props;
export type ErrorStackEvents = typeof __propDef.events;
export type ErrorStackSlots = typeof __propDef.slots;
export default class ErrorStack extends SvelteComponent<ErrorStackProps, ErrorStackEvents, ErrorStackSlots> {
}
export {};
