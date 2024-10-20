import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        keys: string[];
        shouldShowColon?: (key: string) => boolean;
        expandKey?: (key: string) => string;
        defaultExpanded?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        summary: {};
        preview: {
            root: boolean;
        };
        item_key: {
            key: string;
            index: any;
        };
        item_value: {
            key: string;
            index: any;
        };
    };
    exports?: {};
    bindings?: string;
};
export type JsonNestedProps = typeof __propDef.props;
export type JsonNestedEvents = typeof __propDef.events;
export type JsonNestedSlots = typeof __propDef.slots;
export default class JsonNested extends SvelteComponent<JsonNestedProps, JsonNestedEvents, JsonNestedSlots> {
}
export {};
