import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        list: Array<unknown> | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | BigInt64Array | BigUint64Array;
        hasMore: boolean;
        label?: string;
        prefix?: string;
        postfix?: string;
        root?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        item: {
            item: unknown;
            index: any;
        };
    };
    exports?: {};
    bindings?: string;
};
export type PreviewListProps = typeof __propDef.props;
export type PreviewListEvents = typeof __propDef.events;
export type PreviewListSlots = typeof __propDef.slots;
export default class PreviewList extends SvelteComponent<PreviewListProps, PreviewListEvents, PreviewListSlots> {
}
export {};
