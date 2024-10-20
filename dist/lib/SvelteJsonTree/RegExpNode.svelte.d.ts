import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: RegExp;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export type RegExpNodeProps = typeof __propDef.props;
export type RegExpNodeEvents = typeof __propDef.events;
export type RegExpNodeSlots = typeof __propDef.slots;
export default class RegExpNode extends SvelteComponent<RegExpNodeProps, RegExpNodeEvents, RegExpNodeSlots> {
}
export {};
