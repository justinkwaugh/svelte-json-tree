import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | BigInt64Array | BigUint64Array;
        nodeType: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {};
    bindings?: string;
};
export type TypedArrayNodeProps = typeof __propDef.props;
export type TypedArrayNodeEvents = typeof __propDef.events;
export type TypedArrayNodeSlots = typeof __propDef.slots;
export default class TypedArrayNode extends SvelteComponent<TypedArrayNodeProps, TypedArrayNodeEvents, TypedArrayNodeSlots> {
}
export {};
