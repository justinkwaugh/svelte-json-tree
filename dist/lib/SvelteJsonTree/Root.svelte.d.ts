import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: unknown;
        shouldShowPreview?: boolean;
        shouldTreatIterableAsObject?: boolean;
        defaultExpandedPaths?: string[];
        defaultExpandedLevel?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export type RootProps = typeof __propDef.props;
export type RootEvents = typeof __propDef.events;
export type RootSlots = typeof __propDef.slots;
export default class Root extends SvelteComponent<RootProps, RootEvents, RootSlots> {
}
export {};
