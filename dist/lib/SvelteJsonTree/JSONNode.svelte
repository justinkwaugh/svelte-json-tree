<script>import JSONObjectNode from "./JSONObjectNode.svelte";
import JSONArrayNode from "./JSONArrayNode.svelte";
import JSONIterableArrayNode from "./JSONIterableArrayNode.svelte";
import JSONIterableMapNode from "./JSONIterableMapNode.svelte";
import JSONValueNode from "./JSONValueNode.svelte";
import ErrorNode from "./ErrorNode.svelte";
import objType from "./utils/objType";
import { writable } from "svelte/store";
import JsonStringNode from "./JSONStringNode.svelte";
import JsonFunctionNode from "./JSONFunctionNode.svelte";
import JsonSvelteStoreNode from "./JSONSvelteStoreNode.svelte";
import TypedArrayNode from "./TypedArrayNode.svelte";
import RegExpNode from "./RegExpNode.svelte";
import { useState } from "./utils/context";
export let value;
const nodeType = writable();
const { shouldTreatIterableAsObject } = useState();
$:
  $nodeType = objType(value, shouldTreatIterableAsObject);
$:
  [componentType, props] = getComponentAndProps($nodeType, value);
function getComponentAndProps(nodeType2, value2) {
  switch (nodeType2) {
    case "Object":
      if (typeof value2.subscribe === "function")
        return [JsonSvelteStoreNode];
      return [JSONObjectNode];
    case "Error":
      return [ErrorNode];
    case "Array":
      return [JSONArrayNode];
    case "Map":
      return [JSONIterableMapNode];
    case "Iterable":
    case "Set":
      return [JSONIterableArrayNode, { nodeType: nodeType2 }];
    case "Number":
      return [JSONValueNode, { nodeType: nodeType2 }];
    case "String":
      return [JsonStringNode];
    case "Boolean":
      return [JSONValueNode, { nodeType: nodeType2, value: value2 ? "true" : "false" }];
    case "Date":
      return [JSONValueNode, { nodeType: nodeType2, value: value2.toISOString() }];
    case "Null":
      return [JSONValueNode, { nodeType: nodeType2, value: "null" }];
    case "Undefined":
      return [JSONValueNode, { nodeType: nodeType2, value: "undefined" }];
    case "Function":
    case "AsyncFunction":
    case "AsyncGeneratorFunction":
    case "GeneratorFunction":
      return [JsonFunctionNode];
    case "Symbol":
      return [JSONValueNode, { nodeType: nodeType2, value: value2.toString() }];
    case "BigInt":
      return [JSONValueNode, { nodeType: nodeType2, value: String(value2) + "n" }];
    case "ArrayBuffer":
      return [JSONValueNode, { nodeType: nodeType2, value: `ArrayBuffer(${value2.byteLength})` }];
    case "BigInt64Array":
    case "BigUint64Array":
    case "Float32Array":
    case "Float64Array":
    case "Int8Array":
    case "Int16Array":
    case "Int32Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Uint16Array":
    case "Uint32Array":
      return [TypedArrayNode, { nodeType: nodeType2 }];
    case "RegExp":
      return [RegExpNode];
    default:
      return [JSONObjectNode, { summary: nodeType2 }];
  }
}
</script>

<svelte:component this={componentType} {value} {...props} />
