<script>import JSONNested from "./JSONNested.svelte";
import JSONNode from "./JSONNode.svelte";
import JsonObjectNode from "./JSONObjectNode.svelte";
export let value;
$:
  str = toString(value);
$:
  ctx = parseFunction(str);
function parseFunction(str2) {
  const match = str2.match(/^(?:(async)\s+)?(?:function)?(\*)?\s*([^(]+)?(\([^)]*\))\s*(=>)?/);
  const isAsync = match?.[1];
  const isGenerator = match?.[2];
  const fnName = match?.[3];
  const args = match?.[4];
  const isArrow = match?.[5];
  const classMatch = str2.match(/^class\s+([^\s]+)/);
  const isClass = classMatch?.[1];
  return {
    args,
    isAsync,
    isGenerator,
    fnName,
    isArrow,
    isClass
  };
}
function getPreview1({ isGenerator, isAsync, isClass }) {
  if (isClass)
    return `class ${isClass}`;
  return (isAsync ? "async " : "") + "\u0192" + (isGenerator ? "*" : "");
}
function getPreview2({ isAsync, isArrow, fnName, args }) {
  return (isArrow && isAsync ? "async" : "") + " " + (fnName ?? "") + args + (isArrow ? " => \u2026" : "");
}
const FUNCTION = "[[Function]]";
const PROTO = "[[Prototype]]";
function getValue(key) {
  if (key === PROTO)
    return value.__proto__;
  return value[key];
}
function filterKeys(key) {
  if (key === FUNCTION)
    return true;
  return getValue(key);
}
function toString(value2) {
  try {
    return value2.toString();
  } catch {
    switch (value2.constructor.name) {
      case "AsyncFunction":
        return "async function () {}";
      case "AsyncGeneratorFunction":
        return "async function * () {}";
      case "GeneratorFunction:":
        return "function * () {}";
      default:
        return "function () {}";
    }
  }
}
$:
  keys = ["length", "name", "prototype", FUNCTION, PROTO].filter(filterKeys);
</script>

<JSONNested {keys}>
  <svelte:fragment slot="summary"><span class="i">ƒ</span></svelte:fragment>
  <svelte:fragment slot="preview"
    >{#if !ctx.isArrow}<span class="fn i">{getPreview1(ctx)}</span>{/if}{#if !ctx.isClass}<span class="i">{getPreview2(ctx)}</span
      >{/if}</svelte:fragment
  >
  <svelte:fragment slot="item_key" let:key
    ><span class={key === FUNCTION || key === PROTO ? 'internal' : 'property'}>{key}</span></svelte:fragment
  >
  <svelte:fragment slot="item_value" let:key
    >{#if key === FUNCTION}<span class="i">{str}</span>{:else if key === 'prototype'}<JsonObjectNode
        value={getValue(key)}
      />{:else}<JSONNode value={getValue(key)} />{/if}</svelte:fragment
  >
</JSONNested>

<style>
  .i {
    font-style: italic;
  }
  .fn,
  .i {
    color: var(--function-color);
  }
</style>
