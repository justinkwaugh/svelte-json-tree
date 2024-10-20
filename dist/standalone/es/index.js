var mt = Object.defineProperty;
var $t = (l, t, n) => t in l ? mt(l, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : l[t] = n;
var de = (l, t, n) => ($t(l, typeof t != "symbol" ? t + "" : t, n), n);
function O() {
}
function $e(l, t) {
  for (const n in t)
    l[n] = t[n];
  return (
    /** @type {T & S} */
    l
  );
}
function nt(l) {
  return l();
}
function we() {
  return /* @__PURE__ */ Object.create(null);
}
function ue(l) {
  l.forEach(nt);
}
function rt(l) {
  return typeof l == "function";
}
function C(l, t) {
  return l != l ? t == t : l !== t || l && typeof l == "object" || typeof l == "function";
}
function gt(l) {
  return Object.keys(l).length === 0;
}
function he(l, ...t) {
  if (l == null) {
    for (const e of t)
      e(void 0);
    return O;
  }
  const n = l.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Y(l, t, n) {
  l.$$.on_destroy.push(he(t, n));
}
function U(l, t, n, e) {
  if (l) {
    const r = lt(l, t, n, e);
    return l[0](r);
  }
}
function lt(l, t, n, e) {
  return l[1] && e ? $e(n.ctx.slice(), l[1](e(t))) : n.ctx;
}
function G(l, t, n, e) {
  if (l[2] && e) {
    const r = l[2](e(n));
    if (t.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const s = [], o = Math.max(t.dirty.length, r.length);
      for (let u = 0; u < o; u += 1)
        s[u] = t.dirty[u] | r[u];
      return s;
    }
    return t.dirty | r;
  }
  return t.dirty;
}
function V(l, t, n, e, r, s) {
  if (r) {
    const o = lt(t, n, e, s);
    l.p(o, r);
  }
}
function D(l) {
  if (l.ctx.length > 32) {
    const t = [], n = l.ctx.length / 32;
    for (let e = 0; e < n; e++)
      t[e] = -1;
    return t;
  }
  return -1;
}
function je(l) {
  return l ?? "";
}
function x(l, t, n) {
  return l.set(n), t;
}
function v(l, t) {
  l.appendChild(t);
}
function J(l, t, n) {
  const e = vt(l);
  if (!e.getElementById(t)) {
    const r = b("style");
    r.id = t, r.textContent = n, bt(e, r);
  }
}
function vt(l) {
  if (!l)
    return document;
  const t = l.getRootNode ? l.getRootNode() : l.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : l.ownerDocument;
}
function bt(l, t) {
  return v(
    /** @type {Document} */
    l.head || l,
    t
  ), t.sheet;
}
function $(l, t, n) {
  l.insertBefore(t, n || null);
}
function m(l) {
  l.parentNode && l.parentNode.removeChild(l);
}
function ye(l, t) {
  for (let n = 0; n < l.length; n += 1)
    l[n] && l[n].d(t);
}
function b(l) {
  return document.createElement(l);
}
function h(l) {
  return document.createTextNode(l);
}
function L() {
  return h(" ");
}
function I() {
  return h("");
}
function te(l, t, n, e) {
  return l.addEventListener(t, n, e), () => l.removeEventListener(t, n, e);
}
function st(l) {
  return function(t) {
    return t.stopPropagation(), l.call(this, t);
  };
}
function g(l, t, n) {
  n == null ? l.removeAttribute(t) : l.getAttribute(t) !== n && l.setAttribute(t, n);
}
function ht(l) {
  return Array.from(l.childNodes);
}
function N(l, t) {
  t = "" + t, l.data !== t && (l.data = /** @type {string} */
  t);
}
function W(l, t, n) {
  l.classList.toggle(t, !!n);
}
function Se(l, t) {
  return new l(t);
}
let le;
function re(l) {
  le = l;
}
function ke() {
  if (!le)
    throw new Error("Function called outside component initialization");
  return le;
}
function yt(l) {
  ke().$$.on_mount.push(l);
}
function kt(l, t) {
  return ke().$$.context.set(l, t), t;
}
function wt(l) {
  return ke().$$.context.get(l);
}
const H = [], Ne = [];
let Q = [];
const Ee = [], jt = /* @__PURE__ */ Promise.resolve();
let ge = !1;
function St() {
  ge || (ge = !0, jt.then(ot));
}
function ve(l) {
  Q.push(l);
}
const me = /* @__PURE__ */ new Set();
let X = 0;
function ot() {
  if (X !== 0)
    return;
  const l = le;
  do {
    try {
      for (; X < H.length; ) {
        const t = H[X];
        X++, re(t), Nt(t.$$);
      }
    } catch (t) {
      throw H.length = 0, X = 0, t;
    }
    for (re(null), H.length = 0, X = 0; Ne.length; )
      Ne.pop()();
    for (let t = 0; t < Q.length; t += 1) {
      const n = Q[t];
      me.has(n) || (me.add(n), n());
    }
    Q.length = 0;
  } while (H.length);
  for (; Ee.length; )
    Ee.pop()();
  ge = !1, me.clear(), re(l);
}
function Nt(l) {
  if (l.fragment !== null) {
    l.update(), ue(l.before_update);
    const t = l.dirty;
    l.dirty = [-1], l.fragment && l.fragment.p(l.ctx, t), l.after_update.forEach(ve);
  }
}
function Et(l) {
  const t = [], n = [];
  Q.forEach((e) => l.indexOf(e) === -1 ? t.push(e) : n.push(e)), n.forEach((e) => e()), Q = t;
}
const fe = /* @__PURE__ */ new Set();
let z;
function q() {
  z = {
    r: 0,
    c: [],
    p: z
    // parent group
  };
}
function B() {
  z.r || ue(z.c), z = z.p;
}
function p(l, t) {
  l && l.i && (fe.delete(l), l.i(t));
}
function d(l, t, n, e) {
  if (l && l.o) {
    if (fe.has(l))
      return;
    fe.add(l), z.c.push(() => {
      fe.delete(l), e && (n && l.d(1), e());
    }), l.o(t);
  } else
    e && e();
}
function ee(l) {
  return (l == null ? void 0 : l.length) !== void 0 ? l : Array.from(l);
}
function Ae(l, t) {
  const n = {}, e = {}, r = { $$scope: 1 };
  let s = l.length;
  for (; s--; ) {
    const o = l[s], u = t[s];
    if (u) {
      for (const i in o)
        i in u || (e[i] = 1);
      for (const i in u)
        r[i] || (n[i] = u[i], r[i] = 1);
      l[s] = u;
    } else
      for (const i in o)
        r[i] = 1;
  }
  for (const o in e)
    o in n || (n[o] = void 0);
  return n;
}
function Oe(l) {
  return typeof l == "object" && l !== null ? l : {};
}
function j(l) {
  l && l.c();
}
function y(l, t, n) {
  const { fragment: e, after_update: r } = l.$$;
  e && e.m(t, n), ve(() => {
    const s = l.$$.on_mount.map(nt).filter(rt);
    l.$$.on_destroy ? l.$$.on_destroy.push(...s) : ue(s), l.$$.on_mount = [];
  }), r.forEach(ve);
}
function k(l, t) {
  const n = l.$$;
  n.fragment !== null && (Et(n.after_update), ue(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function At(l, t) {
  l.$$.dirty[0] === -1 && (H.push(l), St(), l.$$.dirty.fill(0)), l.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function T(l, t, n, e, r, s, o = null, u = [-1]) {
  const i = le;
  re(l);
  const a = l.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: O,
    not_equal: r,
    bound: we(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (i ? i.$$.context : [])),
    // everything else
    callbacks: we(),
    dirty: u,
    skip_bound: !1,
    root: t.target || i.$$.root
  };
  o && o(a.root);
  let f = !1;
  if (a.ctx = n ? n(l, t.props || {}, (c, _, ...w) => {
    const S = w.length ? w[0] : _;
    return a.ctx && r(a.ctx[c], a.ctx[c] = S) && (!a.skip_bound && a.bound[c] && a.bound[c](S), f && At(l, c)), _;
  }) : [], a.update(), f = !0, ue(a.before_update), a.fragment = e ? e(a.ctx) : !1, t.target) {
    if (t.hydrate) {
      const c = ht(t.target);
      a.fragment && a.fragment.l(c), c.forEach(m);
    } else
      a.fragment && a.fragment.c();
    t.intro && p(l.$$.fragment), y(l, t.target, t.anchor), ot();
  }
  re(i);
}
class P {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    de(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    de(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    k(this, 1), this.$destroy = O;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!rt(n))
      return O;
    const e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return e.push(n), () => {
      const r = e.indexOf(n);
      r !== -1 && e.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !gt(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Ot = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ot);
const Ce = {};
function K(l, t) {
  const n = wt(Ce), e = typeof l == "function" ? l(n) : l, r = { ...n, ...e };
  return t != null && t.expandable && (r.isParentExpanded = r.expanded), kt(Ce, r), n;
}
function Ct(l) {
  J(l, "svelte-1qd6nto", ".container.svelte-1qd6nto{display:inline-block;transform:translate(calc(0px - var(--li-identation)), -50%);position:absolute;top:50%;padding-right:100%}.arrow.svelte-1qd6nto{transform-origin:25% 50%;position:relative;line-height:1.1em;font-size:0.75em;margin-left:0;transition:150ms;color:var(--arrow-color);user-select:none;font-family:'Courier New', Courier, monospace;display:block}.expanded.svelte-1qd6nto{transform:rotateZ(90deg) translateX(-3px)}");
}
function Te(l) {
  let t, n, e, r;
  return {
    c() {
      t = b("span"), n = b("span"), n.textContent = "▶", g(n, "class", "arrow svelte-1qd6nto"), W(
        n,
        "expanded",
        /*$expanded*/
        l[2]
      ), g(t, "class", "container svelte-1qd6nto");
    },
    m(s, o) {
      $(s, t, o), v(t, n), e || (r = te(
        t,
        "click",
        /*click_handler*/
        l[4]
      ), e = !0);
    },
    p(s, o) {
      o & /*$expanded*/
      4 && W(
        n,
        "expanded",
        /*$expanded*/
        s[2]
      );
    },
    d(s) {
      s && m(t), e = !1, r();
    }
  };
}
function Tt(l) {
  let t, n = (
    /*$expandable*/
    l[1] && Te(l)
  );
  return {
    c() {
      n && n.c(), t = I();
    },
    m(e, r) {
      n && n.m(e, r), $(e, t, r);
    },
    p(e, [r]) {
      /*$expandable*/
      e[1] ? n ? n.p(e, r) : (n = Te(e), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: O,
    o: O,
    d(e) {
      e && m(t), n && n.d(e);
    }
  };
}
function Pt(l, t, n) {
  let e, r, s = O, o = () => (s(), s = he(a, (c) => n(2, r = c)), a);
  l.$$.on_destroy.push(() => s());
  const { expanded: u, expandable: i } = K();
  Y(l, i, (c) => n(1, e = c));
  let { expanded: a = u } = t;
  o();
  const f = (c) => {
    c.stopPropagation(), x(a, r = !r, r);
  };
  return l.$$set = (c) => {
    "expanded" in c && o(n(0, a = c.expanded));
  }, [a, e, r, i, f];
}
class it extends P {
  constructor(t) {
    super(), T(this, t, Pt, Tt, C, { expanded: 0 }, Ct);
  }
}
const Z = [];
function Mt(l, t) {
  return {
    subscribe: ae(l, t).subscribe
  };
}
function ae(l, t = O) {
  let n;
  const e = /* @__PURE__ */ new Set();
  function r(u) {
    if (C(l, u) && (l = u, n)) {
      const i = !Z.length;
      for (const a of e)
        a[1](), Z.push(a, l);
      if (i) {
        for (let a = 0; a < Z.length; a += 2)
          Z[a][0](Z[a + 1]);
        Z.length = 0;
      }
    }
  }
  function s(u) {
    r(u(l));
  }
  function o(u, i = O) {
    const a = [u, i];
    return e.add(a), e.size === 1 && (n = t(r, s) || O), u(l), () => {
      e.delete(a), e.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: s, subscribe: o };
}
function It(l) {
  let t;
  const n = (
    /*#slots*/
    l[1].default
  ), e = U(
    n,
    l,
    /*$$scope*/
    l[0],
    null
  );
  return {
    c() {
      e && e.c();
    },
    m(r, s) {
      e && e.m(r, s), t = !0;
    },
    p(r, [s]) {
      e && e.p && (!t || s & /*$$scope*/
      1) && V(
        e,
        n,
        r,
        /*$$scope*/
        r[0],
        t ? G(
          n,
          /*$$scope*/
          r[0],
          s,
          null
        ) : D(
          /*$$scope*/
          r[0]
        ),
        null
      );
    },
    i(r) {
      t || (p(e, r), t = !0);
    },
    o(r) {
      d(e, r), t = !1;
    },
    d(r) {
      e && e.d(r);
    }
  };
}
function qt(l, t, n) {
  let { $$slots: e = {}, $$scope: r } = t;
  return K({ displayMode: "summary" }), l.$$set = (s) => {
    "$$scope" in s && n(0, r = s.$$scope);
  }, [r, e];
}
class Bt extends P {
  constructor(t) {
    super(), T(this, t, qt, It, C, {});
  }
}
function Ft(l) {
  let t;
  const n = (
    /*#slots*/
    l[3].default
  ), e = U(
    n,
    l,
    /*$$scope*/
    l[2],
    null
  );
  return {
    c() {
      e && e.c();
    },
    m(r, s) {
      e && e.m(r, s), t = !0;
    },
    p(r, [s]) {
      e && e.p && (!t || s & /*$$scope*/
      4) && V(
        e,
        n,
        r,
        /*$$scope*/
        r[2],
        t ? G(
          n,
          /*$$scope*/
          r[2],
          s,
          null
        ) : D(
          /*$$scope*/
          r[2]
        ),
        null
      );
    },
    i(r) {
      t || (p(e, r), t = !0);
    },
    o(r) {
      d(e, r), t = !1;
    },
    d(r) {
      e && e.d(r);
    }
  };
}
function Kt(l, t, n) {
  let { $$slots: e = {}, $$scope: r } = t, { expanded: s } = t, { key: o } = t;
  const u = ae(!1);
  return K(({ keyPath: i, level: a }) => (o !== "[[Entries]]" && (i = [...i, o], a = a + 1), { keyPath: i, level: a, expanded: s, expandable: u })), l.$$set = (i) => {
    "expanded" in i && n(0, s = i.expanded), "key" in i && n(1, o = i.key), "$$scope" in i && n(2, r = i.$$scope);
  }, [s, o, r, e];
}
class ut extends P {
  constructor(t) {
    super(), T(this, t, Kt, Ft, C, { expanded: 0, key: 1 });
  }
}
function Lt(l) {
  J(l, "svelte-19drypg", ".root.svelte-19drypg{display:inline-block;position:relative}.indent.svelte-19drypg{padding-left:var(--li-identation)}.label.svelte-19drypg{position:relative}");
}
function Pe(l, t, n) {
  const e = l.slice();
  return e[19] = t[n], e[21] = n, e;
}
const Jt = (l) => ({ key: l & /*keys*/
1 }), Me = (l) => ({
  key: (
    /*key*/
    l[19]
  ),
  index: (
    /*index*/
    l[21]
  )
}), Rt = (l) => ({ key: l & /*keys*/
1 }), Ie = (l) => ({
  key: (
    /*key*/
    l[19]
  ),
  index: (
    /*index*/
    l[21]
  )
}), zt = (l) => ({}), qe = (l) => ({ root: (
  /*root*/
  l[6]
) }), Ut = (l) => ({}), Be = (l) => ({});
function Gt(l) {
  let t, n, e, r, s, o, u, i, a = (
    /*root*/
    l[6] && Dt(l)
  );
  e = new Bt({
    props: {
      $$slots: { default: [Wt] },
      $$scope: { ctx: l }
    }
  });
  let f = (
    /*$expanded*/
    l[4] && Fe(l)
  );
  return {
    c() {
      t = b("span"), a && a.c(), n = L(), j(e.$$.fragment), r = L(), f && f.c(), s = I(), g(t, "class", "root svelte-19drypg");
    },
    m(c, _) {
      $(c, t, _), a && a.m(t, null), v(t, n), y(e, t, null), $(c, r, _), f && f.m(c, _), $(c, s, _), o = !0, u || (i = te(
        t,
        "click",
        /*toggleExpand*/
        l[9]
      ), u = !0);
    },
    p(c, _) {
      /*root*/
      c[6] && a.p(c, _);
      const w = {};
      _ & /*$$scope*/
      8192 && (w.$$scope = { dirty: _, ctx: c }), e.$set(w), /*$expanded*/
      c[4] ? f ? (f.p(c, _), _ & /*$expanded*/
      16 && p(f, 1)) : (f = Fe(c), f.c(), p(f, 1), f.m(s.parentNode, s)) : f && (q(), d(f, 1, 1, () => {
        f = null;
      }), B());
    },
    i(c) {
      o || (p(a), p(e.$$.fragment, c), p(f), o = !0);
    },
    o(c) {
      d(a), d(e.$$.fragment, c), d(f), o = !1;
    },
    d(c) {
      c && (m(t), m(r), m(s)), a && a.d(), k(e), f && f.d(c), u = !1, i();
    }
  };
}
function Vt(l) {
  let t;
  const n = (
    /*#slots*/
    l[11].summary
  ), e = U(
    n,
    l,
    /*$$scope*/
    l[13],
    Be
  );
  return {
    c() {
      e && e.c();
    },
    m(r, s) {
      e && e.m(r, s), t = !0;
    },
    p(r, s) {
      e && e.p && (!t || s & /*$$scope*/
      8192) && V(
        e,
        n,
        r,
        /*$$scope*/
        r[13],
        t ? G(
          n,
          /*$$scope*/
          r[13],
          s,
          Ut
        ) : D(
          /*$$scope*/
          r[13]
        ),
        Be
      );
    },
    i(r) {
      t || (p(e, r), t = !0);
    },
    o(r) {
      d(e, r), t = !1;
    },
    d(r) {
      e && e.d(r);
    }
  };
}
function Dt(l) {
  let t, n;
  return t = new it({ props: { expanded: (
    /*expanded*/
    l[7]
  ) } }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p: O,
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function Wt(l) {
  let t;
  const n = (
    /*#slots*/
    l[11].preview
  ), e = U(
    n,
    l,
    /*$$scope*/
    l[13],
    qe
  );
  return {
    c() {
      e && e.c();
    },
    m(r, s) {
      e && e.m(r, s), t = !0;
    },
    p(r, s) {
      e && e.p && (!t || s & /*$$scope*/
      8192) && V(
        e,
        n,
        r,
        /*$$scope*/
        r[13],
        t ? G(
          n,
          /*$$scope*/
          r[13],
          s,
          zt
        ) : D(
          /*$$scope*/
          r[13]
        ),
        qe
      );
    },
    i(r) {
      t || (p(e, r), t = !0);
    },
    o(r) {
      d(e, r), t = !1;
    },
    d(r) {
      e && e.d(r);
    }
  };
}
function Fe(l) {
  let t, n, e, r, s = ee(
    /*keys*/
    l[0]
  ), o = [];
  for (let i = 0; i < s.length; i += 1)
    o[i] = Le(Pe(l, s, i));
  const u = (i) => d(o[i], 1, 1, () => {
    o[i] = null;
  });
  return {
    c() {
      t = b("ul");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
    },
    m(i, a) {
      $(i, t, a);
      for (let f = 0; f < o.length; f += 1)
        o[f] && o[f].m(t, null);
      n = !0, e || (r = te(t, "click", st(
        /*toggleExpand*/
        l[9]
      )), e = !0);
    },
    p(i, a) {
      if (a & /*$expanded, expandKey, keys, child_expanded, $$scope, shouldShowColon*/
      8223) {
        s = ee(
          /*keys*/
          i[0]
        );
        let f;
        for (f = 0; f < s.length; f += 1) {
          const c = Pe(i, s, f);
          o[f] ? (o[f].p(c, a), p(o[f], 1)) : (o[f] = Le(c), o[f].c(), p(o[f], 1), o[f].m(t, null));
        }
        for (q(), f = s.length; f < o.length; f += 1)
          u(f);
        B();
      }
    },
    i(i) {
      if (!n) {
        for (let a = 0; a < s.length; a += 1)
          p(o[a]);
        n = !0;
      }
    },
    o(i) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        d(o[a]);
      n = !1;
    },
    d(i) {
      i && m(t), ye(o, i), e = !1, r();
    }
  };
}
function Ke(l) {
  let t;
  return {
    c() {
      t = b("span"), t.textContent = ": ", g(t, "class", "operator");
    },
    m(n, e) {
      $(n, t, e);
    },
    d(n) {
      n && m(t);
    }
  };
}
function Xt(l) {
  let t, n, e = !/*shouldShowColon*/
  l[1] || /*shouldShowColon*/
  l[1](
    /*key*/
    l[19]
  ), r, s, o, u;
  n = new it({});
  const i = (
    /*#slots*/
    l[11].item_key
  ), a = U(
    i,
    l,
    /*$$scope*/
    l[13],
    Ie
  );
  let f = e && Ke();
  function c() {
    return (
      /*click_handler*/
      l[12](
        /*index*/
        l[21]
      )
    );
  }
  const _ = (
    /*#slots*/
    l[11].item_value
  ), w = U(
    _,
    l,
    /*$$scope*/
    l[13],
    Me
  );
  return {
    c() {
      t = b("span"), j(n.$$.fragment), a && a.c(), f && f.c(), r = L(), w && w.c(), g(t, "class", "label svelte-19drypg");
    },
    m(S, M) {
      $(S, t, M), y(n, t, null), a && a.m(t, null), f && f.m(t, null), v(t, r), w && w.m(S, M), s = !0, o || (u = te(t, "click", c), o = !0);
    },
    p(S, M) {
      l = S, a && a.p && (!s || M & /*$$scope, keys*/
      8193) && V(
        a,
        i,
        l,
        /*$$scope*/
        l[13],
        s ? G(
          i,
          /*$$scope*/
          l[13],
          M,
          Rt
        ) : D(
          /*$$scope*/
          l[13]
        ),
        Ie
      ), M & /*shouldShowColon, keys*/
      3 && (e = !/*shouldShowColon*/
      l[1] || /*shouldShowColon*/
      l[1](
        /*key*/
        l[19]
      )), e ? f || (f = Ke(), f.c(), f.m(t, r)) : f && (f.d(1), f = null), w && w.p && (!s || M & /*$$scope, keys*/
      8193) && V(
        w,
        _,
        l,
        /*$$scope*/
        l[13],
        s ? G(
          _,
          /*$$scope*/
          l[13],
          M,
          Jt
        ) : D(
          /*$$scope*/
          l[13]
        ),
        Me
      );
    },
    i(S) {
      s || (p(n.$$.fragment, S), p(a, S), p(w, S), s = !0);
    },
    o(S) {
      d(n.$$.fragment, S), d(a, S), d(w, S), s = !1;
    },
    d(S) {
      S && m(t), k(n), a && a.d(S), f && f.d(), w && w.d(S), o = !1, u();
    }
  };
}
function Le(l) {
  let t, n, e, r, s, o;
  return n = new ut({
    props: {
      key: (
        /*expandKey*/
        l[2](
          /*key*/
          l[19]
        )
      ),
      expanded: (
        /*child_expanded*/
        l[3][
          /*index*/
          l[21]
        ]
      ),
      $$slots: { default: [Xt] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      t = b("li"), j(n.$$.fragment), e = L(), g(t, "class", "svelte-19drypg"), W(
        t,
        "indent",
        /*$expanded*/
        l[4]
      );
    },
    m(u, i) {
      $(u, t, i), y(n, t, null), v(t, e), r = !0, s || (o = te(t, "click", st(Ht)), s = !0);
    },
    p(u, i) {
      const a = {};
      i & /*expandKey, keys*/
      5 && (a.key = /*expandKey*/
      u[2](
        /*key*/
        u[19]
      )), i & /*child_expanded*/
      8 && (a.expanded = /*child_expanded*/
      u[3][
        /*index*/
        u[21]
      ]), i & /*$$scope, keys, child_expanded, shouldShowColon*/
      8203 && (a.$$scope = { dirty: i, ctx: u }), n.$set(a), (!r || i & /*$expanded*/
      16) && W(
        t,
        "indent",
        /*$expanded*/
        u[4]
      );
    },
    i(u) {
      r || (p(n.$$.fragment, u), r = !0);
    },
    o(u) {
      d(n.$$.fragment, u), r = !1;
    },
    d(u) {
      u && m(t), k(n), s = !1, o();
    }
  };
}
function Zt(l) {
  let t, n, e, r;
  const s = [Vt, Gt], o = [];
  function u(i, a) {
    return (
      /*displayMode*/
      i[5] === "summary" ? 0 : 1
    );
  }
  return t = u(l), n = o[t] = s[t](l), {
    c() {
      n.c(), e = I();
    },
    m(i, a) {
      o[t].m(i, a), $(i, e, a), r = !0;
    },
    p(i, [a]) {
      n.p(i, a);
    },
    i(i) {
      r || (p(n), r = !0);
    },
    o(i) {
      d(n), r = !1;
    },
    d(i) {
      i && m(e), o[t].d(i);
    }
  };
}
const Ht = () => {
};
function Qt(l, t, n) {
  let e, r, s, { $$slots: o = {}, $$scope: u } = t, { keys: i } = t, { shouldShowColon: a = void 0 } = t, { expandKey: f = (A) => A } = t, { defaultExpanded: c = !1 } = t;
  const { isParentExpanded: _, displayMode: w, root: S, expanded: M, expandable: _e, keyPath: at, level: ft, shouldExpandNode: ct } = K({ root: !1 }, { expandable: !0 });
  if (Y(l, M, (A) => n(4, r = A)), Y(l, _e, (A) => n(14, s = A)), x(_e, s = !0, s), w !== "summary") {
    if (!c) {
      const A = ct({ keyPath: at, level: ft });
      A !== void 0 && (c = A);
    }
    yt(() => _.subscribe((A) => {
      A ? M.set(c) : M.set(!1);
    }));
  }
  function pt() {
    x(M, r = !r, r);
  }
  const _t = (A) => e[A].update((dt) => !dt);
  return l.$$set = (A) => {
    "keys" in A && n(0, i = A.keys), "shouldShowColon" in A && n(1, a = A.shouldShowColon), "expandKey" in A && n(2, f = A.expandKey), "defaultExpanded" in A && n(10, c = A.defaultExpanded), "$$scope" in A && n(13, u = A.$$scope);
  }, l.$$.update = () => {
    l.$$.dirty & /*keys*/
    1 && n(3, e = i.map(() => ae(!1)));
  }, [
    i,
    a,
    f,
    e,
    r,
    w,
    S,
    M,
    _e,
    pt,
    c,
    o,
    _t,
    u
  ];
}
class F extends P {
  constructor(t) {
    super(), T(
      this,
      t,
      Qt,
      Zt,
      C,
      {
        keys: 0,
        shouldShowColon: 1,
        expandKey: 2,
        defaultExpanded: 10
      },
      Lt
    );
  }
}
function Yt(l) {
  J(l, "svelte-150ffaa", ".comma.svelte-150ffaa{margin-left:-0.5em;margin-right:0.5em}");
}
function Je(l, t, n) {
  const e = l.slice();
  return e[9] = t[n], e[11] = n, e;
}
const xt = (l) => ({ item: l & /*list*/
1 }), Re = (l) => ({
  item: (
    /*item*/
    l[9]
  ),
  index: (
    /*index*/
    l[11]
  )
});
function ze(l) {
  let t, n, e, r, s, o = (
    /*prefix*/
    l[3] && Ue(l)
  ), u = ee(
    /*list*/
    l[0]
  ), i = [];
  for (let _ = 0; _ < u.length; _ += 1)
    i[_] = De(Je(l, u, _));
  const a = (_) => d(i[_], 1, 1, () => {
    i[_] = null;
  });
  let f = (
    /*hasMore*/
    l[1] && We()
  ), c = (
    /*postfix*/
    l[4] && Xe(l)
  );
  return {
    c() {
      o && o.c(), t = L();
      for (let _ = 0; _ < i.length; _ += 1)
        i[_].c();
      n = L(), f && f.c(), e = L(), c && c.c(), r = I();
    },
    m(_, w) {
      o && o.m(_, w), $(_, t, w);
      for (let S = 0; S < i.length; S += 1)
        i[S] && i[S].m(_, w);
      $(_, n, w), f && f.m(_, w), $(_, e, w), c && c.m(_, w), $(_, r, w), s = !0;
    },
    p(_, w) {
      if (/*prefix*/
      _[3] ? o ? o.p(_, w) : (o = Ue(_), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), w & /*list, $$scope*/
      129) {
        u = ee(
          /*list*/
          _[0]
        );
        let S;
        for (S = 0; S < u.length; S += 1) {
          const M = Je(_, u, S);
          i[S] ? (i[S].p(M, w), p(i[S], 1)) : (i[S] = De(M), i[S].c(), p(i[S], 1), i[S].m(n.parentNode, n));
        }
        for (q(), S = u.length; S < i.length; S += 1)
          a(S);
        B();
      }
      /*hasMore*/
      _[1] ? f || (f = We(), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null), /*postfix*/
      _[4] ? c ? c.p(_, w) : (c = Xe(_), c.c(), c.m(r.parentNode, r)) : c && (c.d(1), c = null);
    },
    i(_) {
      if (!s) {
        for (let w = 0; w < u.length; w += 1)
          p(i[w]);
        s = !0;
      }
    },
    o(_) {
      i = i.filter(Boolean);
      for (let w = 0; w < i.length; w += 1)
        d(i[w]);
      s = !1;
    },
    d(_) {
      _ && (m(t), m(n), m(e), m(r)), o && o.d(_), ye(i, _), f && f.d(_), c && c.d(_);
    }
  };
}
function Ue(l) {
  let t, n, e = (
    /*label*/
    l[2] && Ge(l)
  );
  return {
    c() {
      e && e.c(), t = b("span"), n = h(
        /*prefix*/
        l[3]
      ), g(t, "class", "operator");
    },
    m(r, s) {
      e && e.m(r, s), $(r, t, s), v(t, n);
    },
    p(r, s) {
      /*label*/
      r[2] ? e ? e.p(r, s) : (e = Ge(r), e.c(), e.m(t.parentNode, t)) : e && (e.d(1), e = null), s & /*prefix*/
      8 && N(
        n,
        /*prefix*/
        r[3]
      );
    },
    d(r) {
      r && m(t), e && e.d(r);
    }
  };
}
function Ge(l) {
  let t, n;
  return {
    c() {
      t = b("span"), n = h(
        /*label*/
        l[2]
      ), g(t, "class", "label");
    },
    m(e, r) {
      $(e, t, r), v(t, n);
    },
    p(e, r) {
      r & /*label*/
      4 && N(
        n,
        /*label*/
        e[2]
      );
    },
    d(e) {
      e && m(t);
    }
  };
}
function Ve(l) {
  let t;
  return {
    c() {
      t = b("span"), t.textContent = ",", g(t, "class", "comma operator svelte-150ffaa");
    },
    m(n, e) {
      $(n, t, e);
    },
    d(n) {
      n && m(t);
    }
  };
}
function De(l) {
  let t, n, e;
  const r = (
    /*#slots*/
    l[8].item
  ), s = U(
    r,
    l,
    /*$$scope*/
    l[7],
    Re
  );
  let o = (
    /*index*/
    l[11] < /*list*/
    l[0].length - 1 && Ve()
  );
  return {
    c() {
      s && s.c(), t = L(), o && o.c(), n = I();
    },
    m(u, i) {
      s && s.m(u, i), $(u, t, i), o && o.m(u, i), $(u, n, i), e = !0;
    },
    p(u, i) {
      s && s.p && (!e || i & /*$$scope, list*/
      129) && V(
        s,
        r,
        u,
        /*$$scope*/
        u[7],
        e ? G(
          r,
          /*$$scope*/
          u[7],
          i,
          xt
        ) : D(
          /*$$scope*/
          u[7]
        ),
        Re
      ), /*index*/
      u[11] < /*list*/
      u[0].length - 1 ? o || (o = Ve(), o.c(), o.m(n.parentNode, n)) : o && (o.d(1), o = null);
    },
    i(u) {
      e || (p(s, u), e = !0);
    },
    o(u) {
      d(s, u), e = !1;
    },
    d(u) {
      u && (m(t), m(n)), s && s.d(u), o && o.d(u);
    }
  };
}
function We(l) {
  let t, n, e;
  return {
    c() {
      t = b("span"), t.textContent = ",", n = L(), e = b("span"), e.textContent = "…", g(t, "class", "comma operator svelte-150ffaa"), g(e, "class", "operator");
    },
    m(r, s) {
      $(r, t, s), $(r, n, s), $(r, e, s);
    },
    d(r) {
      r && (m(t), m(n), m(e));
    }
  };
}
function Xe(l) {
  let t, n;
  return {
    c() {
      t = b("span"), n = h(
        /*postfix*/
        l[4]
      ), g(t, "class", "operator");
    },
    m(e, r) {
      $(e, t, r), v(t, n);
    },
    p(e, r) {
      r & /*postfix*/
      16 && N(
        n,
        /*postfix*/
        e[4]
      );
    },
    d(e) {
      e && m(t);
    }
  };
}
function en(l) {
  let t, n, e = (
    /*root*/
    (l[5] || /*showPreview*/
    l[6]) && ze(l)
  );
  return {
    c() {
      e && e.c(), t = I();
    },
    m(r, s) {
      e && e.m(r, s), $(r, t, s), n = !0;
    },
    p(r, [s]) {
      /*root*/
      r[5] || /*showPreview*/
      r[6] ? e ? (e.p(r, s), s & /*root*/
      32 && p(e, 1)) : (e = ze(r), e.c(), p(e, 1), e.m(t.parentNode, t)) : e && (q(), d(e, 1, 1, () => {
        e = null;
      }), B());
    },
    i(r) {
      n || (p(e), n = !0);
    },
    o(r) {
      d(e), n = !1;
    },
    d(r) {
      r && m(t), e && e.d(r);
    }
  };
}
function tn(l, t, n) {
  let { $$slots: e = {}, $$scope: r } = t, { list: s } = t, { hasMore: o } = t, { label: u = void 0 } = t, { prefix: i = void 0 } = t, { postfix: a = void 0 } = t, { root: f = !1 } = t;
  const { showPreview: c } = K();
  return l.$$set = (_) => {
    "list" in _ && n(0, s = _.list), "hasMore" in _ && n(1, o = _.hasMore), "label" in _ && n(2, u = _.label), "prefix" in _ && n(3, i = _.prefix), "postfix" in _ && n(4, a = _.postfix), "root" in _ && n(5, f = _.root), "$$scope" in _ && n(7, r = _.$$scope);
  }, [s, o, u, i, a, f, c, r, e];
}
class ne extends P {
  constructor(t) {
    super(), T(
      this,
      t,
      tn,
      en,
      C,
      {
        list: 0,
        hasMore: 1,
        label: 2,
        prefix: 3,
        postfix: 4,
        root: 5
      },
      Yt
    );
  }
}
function nn(l) {
  let t, n = (
    /*summary*/
    (l[1] ?? "{…}") + ""
  ), e;
  return {
    c() {
      t = b("span"), e = h(n), g(t, "class", "label");
    },
    m(r, s) {
      $(r, t, s), v(t, e);
    },
    p(r, s) {
      s & /*summary*/
      2 && n !== (n = /*summary*/
      (r[1] ?? "{…}") + "") && N(e, n);
    },
    d(r) {
      r && m(t);
    }
  };
}
function rn(l) {
  let t, n = (
    /*item*/
    l[6] + ""
  ), e, r, s, o;
  return s = new E({
    props: { value: (
      /*value*/
      l[0][
        /*item*/
        l[6]
      ]
    ) }
  }), {
    c() {
      t = b("span"), e = h(n), r = b("span"), r.textContent = ": ", j(s.$$.fragment), g(t, "class", "property"), g(r, "class", "operator");
    },
    m(u, i) {
      $(u, t, i), v(t, e), $(u, r, i), y(s, u, i), o = !0;
    },
    p(u, i) {
      (!o || i & /*item*/
      64) && n !== (n = /*item*/
      u[6] + "") && N(e, n);
      const a = {};
      i & /*value, item*/
      65 && (a.value = /*value*/
      u[0][
        /*item*/
        u[6]
      ]), s.$set(a);
    },
    i(u) {
      o || (p(s.$$.fragment, u), o = !0);
    },
    o(u) {
      d(s.$$.fragment, u), o = !1;
    },
    d(u) {
      u && (m(t), m(r)), k(s, u);
    }
  };
}
function ln(l) {
  let t, n;
  return t = new ne({
    props: {
      list: (
        /*previewKeys*/
        l[3]
      ),
      hasMore: (
        /*previewKeys*/
        l[3].length < /*keys*/
        l[2].length
      ),
      prefix: (
        /*summary*/
        l[1] ? `${/*summary*/
        l[1]} {` : "{"
      ),
      postfix: "}",
      root: (
        /*root*/
        l[5]
      ),
      $$slots: {
        item: [
          rn,
          ({ item: e }) => ({ 6: e }),
          ({ item: e }) => e ? 64 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*previewKeys*/
      8 && (s.list = /*previewKeys*/
      e[3]), r & /*previewKeys, keys*/
      12 && (s.hasMore = /*previewKeys*/
      e[3].length < /*keys*/
      e[2].length), r & /*summary*/
      2 && (s.prefix = /*summary*/
      e[1] ? `${/*summary*/
      e[1]} {` : "{"), r & /*root*/
      32 && (s.root = /*root*/
      e[5]), r & /*$$scope, value, item*/
      193 && (s.$$scope = { dirty: r, ctx: e }), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function sn(l) {
  let t, n = (
    /*key*/
    l[4] + ""
  ), e;
  return {
    c() {
      t = b("span"), e = h(n), g(t, "class", "property");
    },
    m(r, s) {
      $(r, t, s), v(t, e);
    },
    p(r, s) {
      s & /*key*/
      16 && n !== (n = /*key*/
      r[4] + "") && N(e, n);
    },
    d(r) {
      r && m(t);
    }
  };
}
function on(l) {
  let t, n;
  return t = new E({
    props: { value: (
      /*value*/
      l[0][
        /*key*/
        l[4]
      ]
    ) }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*value, key*/
      17 && (s.value = /*value*/
      e[0][
        /*key*/
        e[4]
      ]), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function un(l) {
  let t, n;
  return t = new F({
    props: {
      keys: (
        /*keys*/
        l[2]
      ),
      $$slots: {
        item_value: [
          on,
          ({ key: e }) => ({ 4: e }),
          ({ key: e }) => e ? 16 : 0
        ],
        item_key: [
          sn,
          ({ key: e }) => ({ 4: e }),
          ({ key: e }) => e ? 16 : 0
        ],
        preview: [
          ln,
          ({ root: e }) => ({ 5: e }),
          ({ root: e }) => e ? 32 : 0
        ],
        summary: [nn]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, [r]) {
      const s = {};
      r & /*keys*/
      4 && (s.keys = /*keys*/
      e[2]), r & /*$$scope, value, key, previewKeys, keys, summary, root*/
      191 && (s.$$scope = { dirty: r, ctx: e }), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function an(l, t, n) {
  let e, r, { value: s } = t, { summary: o } = t;
  return l.$$set = (u) => {
    "value" in u && n(0, s = u.value), "summary" in u && n(1, o = u.summary);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    1 && n(2, e = Object.getOwnPropertyNames(s)), l.$$.dirty & /*keys*/
    4 && n(3, r = e.slice(0, 5));
  }, [s, o, e, r];
}
class be extends P {
  constructor(t) {
    super(), T(this, t, an, un, C, { value: 0, summary: 1 });
  }
}
function fn(l) {
  let t, n, e = (
    /*value*/
    l[0].length + ""
  ), r, s;
  return {
    c() {
      t = b("span"), n = h("Array("), r = h(e), s = h(")"), g(t, "class", "label");
    },
    m(o, u) {
      $(o, t, u), v(t, n), v(t, r), v(t, s);
    },
    p(o, u) {
      u & /*value*/
      1 && e !== (e = /*value*/
      o[0].length + "") && N(r, e);
    },
    d(o) {
      o && m(t);
    }
  };
}
function cn(l) {
  let t, n;
  return t = new E({ props: { value: (
    /*item*/
    l[5]
  ) } }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*item*/
      32 && (s.value = /*item*/
      e[5]), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function pn(l) {
  let t, n;
  return t = new ne({
    props: {
      list: (
        /*preview*/
        l[1]
      ),
      hasMore: (
        /*preview*/
        l[1].length < /*value*/
        l[0].length
      ),
      label: "(" + /*value*/
      l[0].length + ") ",
      prefix: "[",
      postfix: "]",
      root: (
        /*root*/
        l[4]
      ),
      $$slots: {
        item: [
          cn,
          ({ item: e }) => ({ 5: e }),
          ({ item: e }) => e ? 32 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*preview*/
      2 && (s.list = /*preview*/
      e[1]), r & /*preview, value*/
      3 && (s.hasMore = /*preview*/
      e[1].length < /*value*/
      e[0].length), r & /*value*/
      1 && (s.label = "(" + /*value*/
      e[0].length + ") "), r & /*root*/
      16 && (s.root = /*root*/
      e[4]), r & /*$$scope, item*/
      96 && (s.$$scope = { dirty: r, ctx: e }), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function _n(l) {
  let t, n = String(
    /*key*/
    l[3]
  ) + "", e;
  return {
    c() {
      t = b("span"), e = h(n), g(t, "class", "property");
    },
    m(r, s) {
      $(r, t, s), v(t, e);
    },
    p(r, s) {
      s & /*key*/
      8 && n !== (n = String(
        /*key*/
        r[3]
      ) + "") && N(e, n);
    },
    d(r) {
      r && m(t);
    }
  };
}
function dn(l) {
  let t, n;
  return t = new E({
    props: { value: (
      /*value*/
      l[0][
        /*key*/
        l[3]
      ]
    ) }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*value, key*/
      9 && (s.value = /*value*/
      e[0][
        /*key*/
        e[3]
      ]), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function mn(l) {
  let t, n;
  return t = new F({
    props: {
      keys: (
        /*keys*/
        l[2]
      ),
      $$slots: {
        item_value: [
          dn,
          ({ key: e }) => ({ 3: e }),
          ({ key: e }) => e ? 8 : 0
        ],
        item_key: [
          _n,
          ({ key: e }) => ({ 3: e }),
          ({ key: e }) => e ? 8 : 0
        ],
        preview: [
          pn,
          ({ root: e }) => ({ 4: e }),
          ({ root: e }) => e ? 16 : 0
        ],
        summary: [fn]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, [r]) {
      const s = {};
      r & /*keys*/
      4 && (s.keys = /*keys*/
      e[2]), r & /*$$scope, value, key, preview, root*/
      91 && (s.$$scope = { dirty: r, ctx: e }), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function $n(l, t, n) {
  let e, r, { value: s } = t;
  return l.$$set = (o) => {
    "value" in o && n(0, s = o.value);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    1 && n(2, e = Object.getOwnPropertyNames(s)), l.$$.dirty & /*value*/
    1 && n(1, r = s.slice(0, 5));
  }, [s, r, e];
}
class gn extends P {
  constructor(t) {
    super(), T(this, t, $n, mn, C, { value: 0 });
  }
}
function vn(l) {
  let t, n, e, r = (
    /*indexes*/
    l[3].length + ""
  ), s, o;
  return {
    c() {
      t = b("span"), n = h(
        /*nodeType*/
        l[1]
      ), e = h("("), s = h(r), o = h(")"), g(t, "class", "label");
    },
    m(u, i) {
      $(u, t, i), v(t, n), v(t, e), v(t, s), v(t, o);
    },
    p(u, i) {
      i & /*nodeType*/
      2 && N(
        n,
        /*nodeType*/
        u[1]
      ), i & /*indexes*/
      8 && r !== (r = /*indexes*/
      u[3].length + "") && N(s, r);
    },
    d(u) {
      u && m(t);
    }
  };
}
function bn(l) {
  let t, n;
  return t = new E({ props: { value: (
    /*item*/
    l[9]
  ) } }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*item*/
      512 && (s.value = /*item*/
      e[9]), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function hn(l) {
  let t, n;
  return t = new ne({
    props: {
      list: (
        /*previewItems*/
        l[4]
      ),
      hasMore: (
        /*previewItems*/
        l[4].length < /*items*/
        l[2].length
      ),
      label: `${/*nodeType*/
      l[1]}(${/*indexes*/
      l[3].length}) `,
      prefix: "{",
      postfix: "}",
      root: (
        /*root*/
        l[8]
      ),
      $$slots: {
        item: [
          bn,
          ({ item: e }) => ({ 9: e }),
          ({ item: e }) => e ? 512 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*previewItems*/
      16 && (s.list = /*previewItems*/
      e[4]), r & /*previewItems, items*/
      20 && (s.hasMore = /*previewItems*/
      e[4].length < /*items*/
      e[2].length), r & /*nodeType, indexes*/
      10 && (s.label = `${/*nodeType*/
      e[1]}(${/*indexes*/
      e[3].length}) `), r & /*root*/
      256 && (s.root = /*root*/
      e[8]), r & /*$$scope, item*/
      1536 && (s.$$scope = { dirty: r, ctx: e }), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function yn(l) {
  let t, n = (
    /*key*/
    l[6] + ""
  ), e, r;
  return {
    c() {
      t = b("span"), e = h(n), g(t, "class", r = /*key*/
      l[6] === se ? "internal" : "property");
    },
    m(s, o) {
      $(s, t, o), v(t, e);
    },
    p(s, o) {
      o & /*key*/
      64 && n !== (n = /*key*/
      s[6] + "") && N(e, n), o & /*key*/
      64 && r !== (r = /*key*/
      s[6] === se ? "internal" : "property") && g(t, "class", r);
    },
    d(s) {
      s && m(t);
    }
  };
}
function kn(l) {
  let t, n;
  return t = new E({
    props: { value: (
      /*value*/
      l[0][
        /*key*/
        l[6]
      ]
    ) }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*value, key*/
      65 && (s.value = /*value*/
      e[0][
        /*key*/
        e[6]
      ]), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function wn(l) {
  let t, n;
  return t = new F({
    props: {
      keys: (
        /*indexes*/
        l[3]
      ),
      defaultExpanded: !0,
      $$slots: {
        item_value: [
          Sn,
          ({ key: e }) => ({ 7: e }),
          ({ key: e }) => e ? 128 : 0
        ],
        item_key: [
          jn,
          ({ key: e }) => ({ 7: e }),
          ({ key: e }) => e ? 128 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*indexes*/
      8 && (s.keys = /*indexes*/
      e[3]), r & /*$$scope, items, index*/
      1156 && (s.$$scope = { dirty: r, ctx: e }), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function jn(l) {
  let t, n = (
    /*index*/
    l[7] + ""
  ), e;
  return {
    c() {
      t = b("span"), e = h(n), g(t, "class", "property");
    },
    m(r, s) {
      $(r, t, s), v(t, e);
    },
    p(r, s) {
      s & /*index*/
      128 && n !== (n = /*index*/
      r[7] + "") && N(e, n);
    },
    d(r) {
      r && m(t);
    }
  };
}
function Sn(l) {
  let t, n;
  return t = new E({
    props: {
      value: (
        /*items*/
        l[2][
          /*index*/
          l[7]
        ]
      )
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*items, index*/
      132 && (s.value = /*items*/
      e[2][
        /*index*/
        e[7]
      ]), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function Nn(l) {
  let t, n, e, r;
  const s = [wn, kn], o = [];
  function u(i, a) {
    return (
      /*key*/
      i[6] === se ? 0 : 1
    );
  }
  return t = u(l), n = o[t] = s[t](l), {
    c() {
      n.c(), e = I();
    },
    m(i, a) {
      o[t].m(i, a), $(i, e, a), r = !0;
    },
    p(i, a) {
      let f = t;
      t = u(i), t === f ? o[t].p(i, a) : (q(), d(o[f], 1, 1, () => {
        o[f] = null;
      }), B(), n = o[t], n ? n.p(i, a) : (n = o[t] = s[t](i), n.c()), p(n, 1), n.m(e.parentNode, e));
    },
    i(i) {
      r || (p(n), r = !0);
    },
    o(i) {
      d(n), r = !1;
    },
    d(i) {
      i && m(e), o[t].d(i);
    }
  };
}
function En(l) {
  let t, n;
  return t = new F({
    props: {
      keys: [se, "size"],
      shouldShowColon: (
        /*func*/
        l[5]
      ),
      $$slots: {
        item_value: [
          Nn,
          ({ key: e }) => ({ 6: e }),
          ({ key: e }) => e ? 64 : 0
        ],
        item_key: [
          yn,
          ({ key: e }) => ({ 6: e }),
          ({ key: e }) => e ? 64 : 0
        ],
        preview: [
          hn,
          ({ root: e }) => ({ 8: e }),
          ({ root: e }) => e ? 256 : 0
        ],
        summary: [vn]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, [r]) {
      const s = {};
      r & /*$$scope, indexes, items, key, value, previewItems, nodeType, root*/
      1375 && (s.$$scope = { dirty: r, ctx: e }), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
const se = "[[Entries]]";
function An(l, t, n) {
  let e, { value: r } = t, { nodeType: s } = t, o = [], u = [];
  const i = (a) => a !== se;
  return l.$$set = (a) => {
    "value" in a && n(0, r = a.value), "nodeType" in a && n(1, s = a.nodeType);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*value*/
    1) {
      let a = [], f = [], c = 0;
      for (const _ of r)
        a.push(c++), f.push(_);
      n(3, o = a), n(2, u = f);
    }
    l.$$.dirty & /*items*/
    4 && n(4, e = u.slice(0, 5));
  }, [r, s, u, o, e, i];
}
class On extends P {
  constructor(t) {
    super(), T(this, t, An, En, C, { value: 0, nodeType: 1 });
  }
}
function Cn(l) {
  let t, n, e = (
    /*keys*/
    l[2].length + ""
  ), r, s;
  return {
    c() {
      t = b("span"), n = h("Map("), r = h(e), s = h(")"), g(t, "color", "label");
    },
    m(o, u) {
      $(o, t, u), v(t, n), v(t, r), v(t, s);
    },
    p(o, u) {
      u & /*keys*/
      4 && e !== (e = /*keys*/
      o[2].length + "") && N(r, e);
    },
    d(o) {
      o && m(t);
    }
  };
}
function Tn(l) {
  let t, n, e, r;
  return t = new E({ props: { value: (
    /*item*/
    l[11]
  ) } }), e = new E({
    props: {
      value: (
        /*value*/
        l[0].get(
          /*item*/
          l[11]
        )
      )
    }
  }), {
    c() {
      j(t.$$.fragment), n = b("span"), n.textContent = " => ", j(e.$$.fragment), g(n, "class", "operator");
    },
    m(s, o) {
      y(t, s, o), $(s, n, o), y(e, s, o), r = !0;
    },
    p(s, o) {
      const u = {};
      o & /*item*/
      2048 && (u.value = /*item*/
      s[11]), t.$set(u);
      const i = {};
      o & /*value, item*/
      2049 && (i.value = /*value*/
      s[0].get(
        /*item*/
        s[11]
      )), e.$set(i);
    },
    i(s) {
      r || (p(t.$$.fragment, s), p(e.$$.fragment, s), r = !0);
    },
    o(s) {
      d(t.$$.fragment, s), d(e.$$.fragment, s), r = !1;
    },
    d(s) {
      s && m(n), k(t, s), k(e, s);
    }
  };
}
function Pn(l) {
  let t, n;
  return t = new ne({
    props: {
      list: (
        /*previewKeys*/
        l[4]
      ),
      hasMore: (
        /*previewKeys*/
        l[4].length < /*value*/
        l[0].size
      ),
      label: `Map(${/*keys*/
      l[2].length}) `,
      prefix: "{",
      postfix: "}",
      root: (
        /*root*/
        l[10]
      ),
      $$slots: {
        item: [
          Tn,
          ({ item: e }) => ({ 11: e }),
          ({ item: e }) => e ? 2048 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*previewKeys*/
      16 && (s.list = /*previewKeys*/
      e[4]), r & /*previewKeys, value*/
      17 && (s.hasMore = /*previewKeys*/
      e[4].length < /*value*/
      e[0].size), r & /*keys*/
      4 && (s.label = `Map(${/*keys*/
      e[2].length}) `), r & /*root*/
      1024 && (s.root = /*root*/
      e[10]), r & /*$$scope, value, item*/
      6145 && (s.$$scope = { dirty: r, ctx: e }), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function Mn(l) {
  let t, n = (
    /*key*/
    l[7] + ""
  ), e, r;
  return {
    c() {
      t = b("span"), e = h(n), g(t, "class", r = /*key*/
      l[7] === oe ? "internal" : "property");
    },
    m(s, o) {
      $(s, t, o), v(t, e);
    },
    p(s, o) {
      o & /*key*/
      128 && n !== (n = /*key*/
      s[7] + "") && N(e, n), o & /*key*/
      128 && r !== (r = /*key*/
      s[7] === oe ? "internal" : "property") && g(t, "class", r);
    },
    d(s) {
      s && m(t);
    }
  };
}
function In(l) {
  let t, n;
  return t = new E({
    props: { value: (
      /*value*/
      l[0][
        /*key*/
        l[7]
      ]
    ) }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*value, key*/
      129 && (s.value = /*value*/
      e[0][
        /*key*/
        e[7]
      ]), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function qn(l) {
  let t, n;
  return t = new F({
    props: {
      keys: (
        /*indexes*/
        l[1]
      ),
      expandKey: (
        /*func*/
        l[5]
      ),
      defaultExpanded: !0,
      $$slots: {
        item_value: [
          Jn,
          ({ key: e }) => ({ 8: e }),
          ({ key: e }) => e ? 256 : 0
        ],
        item_key: [
          Bn,
          ({ key: e }) => ({ 8: e }),
          ({ key: e }) => e ? 256 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*indexes*/
      2 && (s.keys = /*indexes*/
      e[1]), r & /*keys*/
      4 && (s.expandKey = /*func*/
      e[5]), r & /*$$scope, keys, index, values*/
      4364 && (s.$$scope = { dirty: r, ctx: e }), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function Bn(l) {
  let t, n = (
    /*index*/
    l[8] + ""
  ), e;
  return {
    c() {
      t = b("span"), e = h(n), g(t, "class", "property");
    },
    m(r, s) {
      $(r, t, s), v(t, e);
    },
    p(r, s) {
      s & /*index*/
      256 && n !== (n = /*index*/
      r[8] + "") && N(e, n);
    },
    d(r) {
      r && m(t);
    }
  };
}
function Fn(l) {
  let t, n, e, r, s, o;
  return n = new E({
    props: { value: (
      /*keys*/
      l[2][
        /*index*/
        l[8]
      ]
    ) }
  }), r = new E({
    props: {
      value: (
        /*values*/
        l[3][
          /*index*/
          l[8]
        ]
      )
    }
  }), {
    c() {
      t = b("span"), t.textContent = "{ ", j(n.$$.fragment), e = b("span"), e.textContent = " => ", j(r.$$.fragment), s = b("span"), s.textContent = " }", g(t, "class", "operator"), g(e, "class", "operator"), g(s, "class", "operator");
    },
    m(u, i) {
      $(u, t, i), y(n, u, i), $(u, e, i), y(r, u, i), $(u, s, i), o = !0;
    },
    p(u, i) {
      const a = {};
      i & /*keys, index*/
      260 && (a.value = /*keys*/
      u[2][
        /*index*/
        u[8]
      ]), n.$set(a);
      const f = {};
      i & /*values, index*/
      264 && (f.value = /*values*/
      u[3][
        /*index*/
        u[8]
      ]), r.$set(f);
    },
    i(u) {
      o || (p(n.$$.fragment, u), p(r.$$.fragment, u), o = !0);
    },
    o(u) {
      d(n.$$.fragment, u), d(r.$$.fragment, u), o = !1;
    },
    d(u) {
      u && (m(t), m(e), m(s)), k(n, u), k(r, u);
    }
  };
}
function Kn(l) {
  let t, n = (
    /*name*/
    l[9] + ""
  ), e;
  return {
    c() {
      t = b("span"), e = h(n), g(t, "class", "property");
    },
    m(r, s) {
      $(r, t, s), v(t, e);
    },
    p(r, s) {
      s & /*name*/
      512 && n !== (n = /*name*/
      r[9] + "") && N(e, n);
    },
    d(r) {
      r && m(t);
    }
  };
}
function Ln(l) {
  let t, n;
  return t = new E({
    props: {
      value: (
        /*name*/
        l[9] === "key" ? (
          /*keys*/
          l[2][
            /*index*/
            l[8]
          ]
        ) : (
          /*values*/
          l[3][
            /*index*/
            l[8]
          ]
        )
      )
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*name, keys, index, values*/
      780 && (s.value = /*name*/
      e[9] === "key" ? (
        /*keys*/
        e[2][
          /*index*/
          e[8]
        ]
      ) : (
        /*values*/
        e[3][
          /*index*/
          e[8]
        ]
      )), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function Jn(l) {
  let t, n;
  return t = new F({
    props: {
      keys: ["key", "value"],
      $$slots: {
        item_value: [
          Ln,
          ({ key: e }) => ({ 9: e }),
          ({ key: e }) => e ? 512 : 0
        ],
        item_key: [
          Kn,
          ({ key: e }) => ({ 9: e }),
          ({ key: e }) => e ? 512 : 0
        ],
        preview: [Fn]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*$$scope, name, keys, index, values*/
      4876 && (s.$$scope = { dirty: r, ctx: e }), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function Rn(l) {
  let t, n, e, r;
  const s = [qn, In], o = [];
  function u(i, a) {
    return (
      /*key*/
      i[7] === oe ? 0 : 1
    );
  }
  return t = u(l), n = o[t] = s[t](l), {
    c() {
      n.c(), e = I();
    },
    m(i, a) {
      o[t].m(i, a), $(i, e, a), r = !0;
    },
    p(i, a) {
      let f = t;
      t = u(i), t === f ? o[t].p(i, a) : (q(), d(o[f], 1, 1, () => {
        o[f] = null;
      }), B(), n = o[t], n ? n.p(i, a) : (n = o[t] = s[t](i), n.c()), p(n, 1), n.m(e.parentNode, e));
    },
    i(i) {
      r || (p(n), r = !0);
    },
    o(i) {
      d(n), r = !1;
    },
    d(i) {
      i && m(e), o[t].d(i);
    }
  };
}
function zn(l) {
  let t, n;
  return t = new F({
    props: {
      keys: [oe, "size"],
      shouldShowColon: (
        /*func_1*/
        l[6]
      ),
      $$slots: {
        item_value: [
          Rn,
          ({ key: e }) => ({ 7: e }),
          ({ key: e }) => e ? 128 : 0
        ],
        item_key: [
          Mn,
          ({ key: e }) => ({ 7: e }),
          ({ key: e }) => e ? 128 : 0
        ],
        preview: [
          Pn,
          ({ root: e }) => ({ 10: e }),
          ({ root: e }) => e ? 1024 : 0
        ],
        summary: [Cn]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, [r]) {
      const s = {};
      r & /*$$scope, indexes, keys, values, key, value, previewKeys, root*/
      5279 && (s.$$scope = { dirty: r, ctx: e }), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
const oe = "[[Entries]]";
function Un(l, t, n) {
  let e, { value: r } = t;
  K();
  let s = [], o = [], u = [];
  const i = (f) => o[f], a = (f) => f !== oe;
  return l.$$set = (f) => {
    "value" in f && n(0, r = f.value);
  }, l.$$.update = () => {
    if (l.$$.dirty & /*value*/
    1) {
      let f = [], c = [], _ = [], w = 0;
      for (const S of r)
        f.push(w++), c.push(S[0]), _.push(S[1]);
      n(1, s = f), n(2, o = c), n(3, u = _);
    }
    l.$$.dirty & /*value*/
    1 && n(4, e = Array.from(r.keys()).slice(0, 5));
  }, [r, s, o, u, e, i, a];
}
class Gn extends P {
  constructor(t) {
    super(), T(this, t, Un, zn, C, { value: 0 });
  }
}
function Vn(l) {
  J(l, "svelte-l95iub", ".Date.svelte-l95iub{color:var(--date-color)}.BigInt.svelte-l95iub{color:var(--number-color)}.Number.svelte-l95iub{color:var(--number-color)}.Boolean.svelte-l95iub{color:var(--boolean-color)}.Null.svelte-l95iub{color:var(--null-color)}.Undefined.svelte-l95iub{color:var(--undefined-color)}.Symbol.svelte-l95iub{color:var(--symbol-color)}");
}
function Dn(l) {
  let t, n, e;
  return {
    c() {
      t = b("span"), n = h(
        /*value*/
        l[0]
      ), g(t, "class", e = je(
        /*nodeType*/
        l[1]
      ) + " svelte-l95iub");
    },
    m(r, s) {
      $(r, t, s), v(t, n);
    },
    p(r, [s]) {
      s & /*value*/
      1 && N(
        n,
        /*value*/
        r[0]
      ), s & /*nodeType*/
      2 && e !== (e = je(
        /*nodeType*/
        r[1]
      ) + " svelte-l95iub") && g(t, "class", e);
    },
    i: O,
    o: O,
    d(r) {
      r && m(t);
    }
  };
}
function Wn(l, t, n) {
  let { value: e, nodeType: r } = t;
  return l.$$set = (s) => {
    "value" in s && n(0, e = s.value), "nodeType" in s && n(1, r = s.nodeType);
  }, [e, r];
}
class R extends P {
  constructor(t) {
    super(), T(this, t, Wn, Dn, C, { value: 0, nodeType: 1 }, Vn);
  }
}
function Xn(l) {
  J(l, "svelte-1u08yw6", ".indent.svelte-1u08yw6{padding-left:var(--li-identation)}");
}
function Ze(l, t, n) {
  const e = l.slice();
  e[6] = t[n], e[9] = n;
  const r = (
    /*index*/
    e[9] < /*stack*/
    e[0].length - 1
  );
  return e[7] = r, e;
}
function Zn(l) {
  let t, n, e;
  return n = new E({
    props: { value: (
      /*stack*/
      l[0][0] + "…"
    ) }
  }), {
    c() {
      t = b("span"), j(n.$$.fragment);
    },
    m(r, s) {
      $(r, t, s), y(n, t, null), e = !0;
    },
    p(r, s) {
      const o = {};
      s & /*stack*/
      1 && (o.value = /*stack*/
      r[0][0] + "…"), n.$set(o);
    },
    i(r) {
      e || (p(n.$$.fragment, r), e = !0);
    },
    o(r) {
      d(n.$$.fragment, r), e = !1;
    },
    d(r) {
      r && m(t), k(n);
    }
  };
}
function Hn(l) {
  let t, n, e = ee(
    /*stack*/
    l[0]
  ), r = [];
  for (let o = 0; o < e.length; o += 1)
    r[o] = He(Ze(l, e, o));
  const s = (o) => d(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      t = I();
    },
    m(o, u) {
      for (let i = 0; i < r.length; i += 1)
        r[i] && r[i].m(o, u);
      $(o, t, u), n = !0;
    },
    p(o, u) {
      if (u & /*stack*/
      1) {
        e = ee(
          /*stack*/
          o[0]
        );
        let i;
        for (i = 0; i < e.length; i += 1) {
          const a = Ze(o, e, i);
          r[i] ? (r[i].p(a, u), p(r[i], 1)) : (r[i] = He(a), r[i].c(), p(r[i], 1), r[i].m(t.parentNode, t));
        }
        for (q(), i = e.length; i < r.length; i += 1)
          s(i);
        B();
      }
    },
    i(o) {
      if (!n) {
        for (let u = 0; u < e.length; u += 1)
          p(r[u]);
        n = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let u = 0; u < r.length; u += 1)
        d(r[u]);
      n = !1;
    },
    d(o) {
      o && m(t), ye(r, o);
    }
  };
}
function He(l) {
  let t, n, e, r = (
    /*appendNewLine*/
    l[7] ? " +" : ""
  ), s, o, u;
  return n = new E({
    props: {
      value: (
        /*line*/
        l[6] + /*appendNewLine*/
        (l[7] ? "\\n" : "")
      )
    }
  }), {
    c() {
      t = b("span"), j(n.$$.fragment), e = b("span"), s = h(r), o = b("br"), g(e, "class", "operator"), g(t, "class", "svelte-1u08yw6"), W(
        t,
        "indent",
        /*index*/
        l[9] > 0
      );
    },
    m(i, a) {
      $(i, t, a), y(n, t, null), v(t, e), v(e, s), $(i, o, a), u = !0;
    },
    p(i, a) {
      const f = {};
      a & /*stack*/
      1 && (f.value = /*line*/
      i[6] + /*appendNewLine*/
      (i[7] ? "\\n" : "")), n.$set(f), (!u || a & /*stack*/
      1) && r !== (r = /*appendNewLine*/
      i[7] ? " +" : "") && N(s, r);
    },
    i(i) {
      u || (p(n.$$.fragment, i), u = !0);
    },
    o(i) {
      d(n.$$.fragment, i), u = !1;
    },
    d(i) {
      i && (m(t), m(o)), k(n);
    }
  };
}
function Qn(l) {
  let t, n, e, r, s, o;
  const u = [Hn, Zn], i = [];
  function a(f, c) {
    return (
      /*$expanded*/
      f[1] ? 0 : 1
    );
  }
  return n = a(l), e = i[n] = u[n](l), {
    c() {
      t = b("span"), e.c();
    },
    m(f, c) {
      $(f, t, c), i[n].m(t, null), r = !0, s || (o = te(
        t,
        "click",
        /*click_handler*/
        l[4]
      ), s = !0);
    },
    p(f, [c]) {
      let _ = n;
      n = a(f), n === _ ? i[n].p(f, c) : (q(), d(i[_], 1, 1, () => {
        i[_] = null;
      }), B(), e = i[n], e ? e.p(f, c) : (e = i[n] = u[n](f), e.c()), p(e, 1), e.m(t, null));
    },
    i(f) {
      r || (p(e), r = !0);
    },
    o(f) {
      d(e), r = !1;
    },
    d(f) {
      f && m(t), i[n].d(), s = !1, o();
    }
  };
}
function Yn(l, t, n) {
  let e, r, { stack: s } = t;
  const { expanded: o, expandable: u } = K();
  Y(l, o, (a) => n(1, r = a)), Y(l, u, (a) => n(5, e = a)), x(u, e = !0, e);
  const i = () => x(o, r = !r, r);
  return l.$$set = (a) => {
    "stack" in a && n(0, s = a.stack);
  }, [s, r, o, u, i];
}
class xn extends P {
  constructor(t) {
    super(), T(this, t, Yn, Qn, C, { stack: 0 }, Xn);
  }
}
function er(l) {
  let t, n, e = String(
    /*value*/
    l[0].message
  ) + "", r;
  return {
    c() {
      t = b("span"), n = h("Error: "), r = h(e), g(t, "class", "label");
    },
    m(s, o) {
      $(s, t, o), v(t, n), v(t, r);
    },
    p(s, o) {
      o & /*value*/
      1 && e !== (e = String(
        /*value*/
        s[0].message
      ) + "") && N(r, e);
    },
    d(s) {
      s && m(t);
    }
  };
}
function tr(l) {
  let t, n, e = String(
    /*value*/
    l[0].message
  ) + "", r;
  return {
    c() {
      t = b("span"), n = h("Error: "), r = h(e), g(t, "class", "label");
    },
    m(s, o) {
      $(s, t, o), v(t, n), v(t, r);
    },
    p(s, o) {
      o & /*value*/
      1 && e !== (e = String(
        /*value*/
        s[0].message
      ) + "") && N(r, e);
    },
    d(s) {
      s && m(t);
    }
  };
}
function nr(l) {
  let t, n = (
    /*key*/
    l[2] + ""
  ), e;
  return {
    c() {
      t = b("span"), e = h(n), g(t, "class", "property");
    },
    m(r, s) {
      $(r, t, s), v(t, e);
    },
    p(r, s) {
      s & /*key*/
      4 && n !== (n = /*key*/
      r[2] + "") && N(e, n);
    },
    d(r) {
      r && m(t);
    }
  };
}
function rr(l) {
  let t, n;
  return t = new E({
    props: { value: (
      /*value*/
      l[0][
        /*key*/
        l[2]
      ]
    ) }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*value, key*/
      5 && (s.value = /*value*/
      e[0][
        /*key*/
        e[2]
      ]), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function lr(l) {
  let t, n;
  return t = new xn({ props: { stack: (
    /*stack*/
    l[1]
  ) } }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*stack*/
      2 && (s.stack = /*stack*/
      e[1]), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function sr(l) {
  let t, n, e, r;
  const s = [lr, rr], o = [];
  function u(i, a) {
    return (
      /*key*/
      i[2] === "stack" ? 0 : 1
    );
  }
  return t = u(l), n = o[t] = s[t](l), {
    c() {
      n.c(), e = I();
    },
    m(i, a) {
      o[t].m(i, a), $(i, e, a), r = !0;
    },
    p(i, a) {
      let f = t;
      t = u(i), t === f ? o[t].p(i, a) : (q(), d(o[f], 1, 1, () => {
        o[f] = null;
      }), B(), n = o[t], n ? n.p(i, a) : (n = o[t] = s[t](i), n.c()), p(n, 1), n.m(e.parentNode, e));
    },
    i(i) {
      r || (p(n), r = !0);
    },
    o(i) {
      d(n), r = !1;
    },
    d(i) {
      i && m(e), o[t].d(i);
    }
  };
}
function or(l) {
  let t, n;
  return t = new F({
    props: {
      keys: ["message", "stack"],
      $$slots: {
        item_value: [
          sr,
          ({ key: e }) => ({ 2: e }),
          ({ key: e }) => e ? 4 : 0
        ],
        item_key: [
          nr,
          ({ key: e }) => ({ 2: e }),
          ({ key: e }) => e ? 4 : 0
        ],
        preview: [tr],
        summary: [er]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, [r]) {
      const s = {};
      r & /*$$scope, stack, key, value*/
      15 && (s.$$scope = { dirty: r, ctx: e }), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function ir(l, t, n) {
  let e, { value: r } = t;
  return l.$$set = (s) => {
    "value" in s && n(0, r = s.value);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    1 && n(1, e = r.stack.split(`
`));
  }, [r, e];
}
class ur extends P {
  constructor(t) {
    super(), T(this, t, ir, or, C, { value: 0 });
  }
}
function ar(l, t) {
  const n = Object.prototype.toString.call(l).slice(8, -1);
  return n === "Object" ? !t && typeof l[Symbol.iterator] == "function" ? "Iterable" : l.constructor.name : n;
}
function fr(l) {
  J(l, "svelte-1fvwa9c", "span.svelte-1fvwa9c{color:var(--string-color);word-break:break-all;word-wrap:break-word}");
}
function cr(l) {
  let t, n, e, r;
  return {
    c() {
      t = b("span"), n = h('"'), e = h(
        /*serialised*/
        l[0]
      ), r = h('"'), g(t, "class", "svelte-1fvwa9c");
    },
    m(s, o) {
      $(s, t, o), v(t, n), v(t, e), v(t, r);
    },
    p(s, o) {
      o & /*serialised*/
      1 && N(
        e,
        /*serialised*/
        s[0]
      );
    },
    d(s) {
      s && m(t);
    }
  };
}
function pr(l) {
  let t, n, e = (
    /*serialised*/
    l[0].slice(0, 30) + /*serialised*/
    (l[0].length > 30 ? "…" : "")
  ), r, s;
  return {
    c() {
      t = b("span"), n = h('"'), r = h(e), s = h('"'), g(t, "class", "svelte-1fvwa9c");
    },
    m(o, u) {
      $(o, t, u), v(t, n), v(t, r), v(t, s);
    },
    p(o, u) {
      u & /*serialised*/
      1 && e !== (e = /*serialised*/
      o[0].slice(0, 30) + /*serialised*/
      (o[0].length > 30 ? "…" : "")) && N(r, e);
    },
    d(o) {
      o && m(t);
    }
  };
}
function _r(l) {
  let t;
  function n(s, o) {
    return (
      /*displayMode*/
      s[1] === "summary" ? pr : cr
    );
  }
  let r = n(l)(l);
  return {
    c() {
      r.c(), t = I();
    },
    m(s, o) {
      r.m(s, o), $(s, t, o);
    },
    p(s, [o]) {
      r.p(s, o);
    },
    i: O,
    o: O,
    d(s) {
      s && m(t), r.d(s);
    }
  };
}
function dr(l, t, n) {
  let e, { value: r } = t;
  const s = { "\n": "\\n", "	": "\\t", "\r": "\\r" }, { displayMode: o } = K();
  return l.$$set = (u) => {
    "value" in u && n(2, r = u.value);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    4 && n(0, e = r.replace(/[\n\t\r]/g, (u) => s[u]));
  }, [e, o, r];
}
class mr extends P {
  constructor(t) {
    super(), T(this, t, dr, _r, C, { value: 2 }, fr);
  }
}
function $r(l) {
  J(l, "svelte-1eamqdt", ".i.svelte-1eamqdt{font-style:italic}.fn.svelte-1eamqdt,.i.svelte-1eamqdt{color:var(--function-color)}");
}
function gr(l) {
  let t;
  return {
    c() {
      t = b("span"), t.textContent = "ƒ", g(t, "class", "i svelte-1eamqdt");
    },
    m(n, e) {
      $(n, t, e);
    },
    p: O,
    d(n) {
      n && m(t);
    }
  };
}
function Qe(l) {
  let t, n = xe(
    /*ctx*/
    l[2]
  ) + "", e;
  return {
    c() {
      t = b("span"), e = h(n), g(t, "class", "fn i svelte-1eamqdt");
    },
    m(r, s) {
      $(r, t, s), v(t, e);
    },
    p(r, s) {
      s & /*ctx*/
      4 && n !== (n = xe(
        /*ctx*/
        r[2]
      ) + "") && N(e, n);
    },
    d(r) {
      r && m(t);
    }
  };
}
function Ye(l) {
  let t, n = et(
    /*ctx*/
    l[2]
  ) + "", e;
  return {
    c() {
      t = b("span"), e = h(n), g(t, "class", "i svelte-1eamqdt");
    },
    m(r, s) {
      $(r, t, s), v(t, e);
    },
    p(r, s) {
      s & /*ctx*/
      4 && n !== (n = et(
        /*ctx*/
        r[2]
      ) + "") && N(e, n);
    },
    d(r) {
      r && m(t);
    }
  };
}
function vr(l) {
  let t, n, e = !/*ctx*/
  l[2].isArrow && Qe(l), r = !/*ctx*/
  l[2].isClass && Ye(l);
  return {
    c() {
      e && e.c(), t = I(), r && r.c(), n = I();
    },
    m(s, o) {
      e && e.m(s, o), $(s, t, o), r && r.m(s, o), $(s, n, o);
    },
    p(s, o) {
      /*ctx*/
      s[2].isArrow ? e && (e.d(1), e = null) : e ? e.p(s, o) : (e = Qe(s), e.c(), e.m(t.parentNode, t)), /*ctx*/
      s[2].isClass ? r && (r.d(1), r = null) : r ? r.p(s, o) : (r = Ye(s), r.c(), r.m(n.parentNode, n));
    },
    d(s) {
      s && (m(t), m(n)), e && e.d(s), r && r.d(s);
    }
  };
}
function br(l) {
  let t, n = (
    /*key*/
    l[6] + ""
  ), e, r;
  return {
    c() {
      t = b("span"), e = h(n), g(t, "class", r = /*key*/
      l[6] === ie || /*key*/
      l[6] === ce ? "internal" : "property");
    },
    m(s, o) {
      $(s, t, o), v(t, e);
    },
    p(s, o) {
      o & /*key*/
      64 && n !== (n = /*key*/
      s[6] + "") && N(e, n), o & /*key*/
      64 && r !== (r = /*key*/
      s[6] === ie || /*key*/
      s[6] === ce ? "internal" : "property") && g(t, "class", r);
    },
    d(s) {
      s && m(t);
    }
  };
}
function hr(l) {
  let t, n;
  return t = new E({
    props: {
      value: (
        /*getValue*/
        l[3](
          /*key*/
          l[6]
        )
      )
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*key*/
      64 && (s.value = /*getValue*/
      e[3](
        /*key*/
        e[6]
      )), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function yr(l) {
  let t, n;
  return t = new be({
    props: {
      value: (
        /*getValue*/
        l[3](
          /*key*/
          l[6]
        )
      )
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*key*/
      64 && (s.value = /*getValue*/
      e[3](
        /*key*/
        e[6]
      )), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function kr(l) {
  let t, n;
  return {
    c() {
      t = b("span"), n = h(
        /*str*/
        l[0]
      ), g(t, "class", "i svelte-1eamqdt");
    },
    m(e, r) {
      $(e, t, r), v(t, n);
    },
    p(e, r) {
      r & /*str*/
      1 && N(
        n,
        /*str*/
        e[0]
      );
    },
    i: O,
    o: O,
    d(e) {
      e && m(t);
    }
  };
}
function wr(l) {
  let t, n, e, r;
  const s = [kr, yr, hr], o = [];
  function u(i, a) {
    return (
      /*key*/
      i[6] === ie ? 0 : (
        /*key*/
        i[6] === "prototype" ? 1 : 2
      )
    );
  }
  return t = u(l), n = o[t] = s[t](l), {
    c() {
      n.c(), e = I();
    },
    m(i, a) {
      o[t].m(i, a), $(i, e, a), r = !0;
    },
    p(i, a) {
      let f = t;
      t = u(i), t === f ? o[t].p(i, a) : (q(), d(o[f], 1, 1, () => {
        o[f] = null;
      }), B(), n = o[t], n ? n.p(i, a) : (n = o[t] = s[t](i), n.c()), p(n, 1), n.m(e.parentNode, e));
    },
    i(i) {
      r || (p(n), r = !0);
    },
    o(i) {
      d(n), r = !1;
    },
    d(i) {
      i && m(e), o[t].d(i);
    }
  };
}
function jr(l) {
  let t, n;
  return t = new F({
    props: {
      keys: (
        /*keys*/
        l[1]
      ),
      $$slots: {
        item_value: [
          wr,
          ({ key: e }) => ({ 6: e }),
          ({ key: e }) => e ? 64 : 0
        ],
        item_key: [
          br,
          ({ key: e }) => ({ 6: e }),
          ({ key: e }) => e ? 64 : 0
        ],
        preview: [vr],
        summary: [gr]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, [r]) {
      const s = {};
      r & /*keys*/
      2 && (s.keys = /*keys*/
      e[1]), r & /*$$scope, str, key, ctx*/
      197 && (s.$$scope = { dirty: r, ctx: e }), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
const ie = "[[Function]]", ce = "[[Prototype]]";
function Sr(l) {
  const t = l.match(/^(?:(async)\s+)?(?:function)?(\*)?\s*([^(]+)?(\([^)]*\))\s*(=>)?/), n = t == null ? void 0 : t[1], e = t == null ? void 0 : t[2], r = t == null ? void 0 : t[3], s = t == null ? void 0 : t[4], o = t == null ? void 0 : t[5], u = l.match(/^class\s+([^\s]+)/), i = u == null ? void 0 : u[1];
  return {
    args: s,
    isAsync: n,
    isGenerator: e,
    fnName: r,
    isArrow: o,
    isClass: i
  };
}
function xe({ isGenerator: l, isAsync: t, isClass: n }) {
  return n ? `class ${n}` : (t ? "async " : "") + "ƒ" + (l ? "*" : "");
}
function et({ isAsync: l, isArrow: t, fnName: n, args: e }) {
  return (t && l ? "async" : "") + " " + (n ?? "") + e + (t ? " => …" : "");
}
function Nr(l) {
  try {
    return l.toString();
  } catch {
    switch (l.constructor.name) {
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
function Er(l, t, n) {
  let e, r, s, { value: o } = t;
  function u(a) {
    return a === ce ? o.__proto__ : o[a];
  }
  function i(a) {
    return a === ie ? !0 : u(a);
  }
  return l.$$set = (a) => {
    "value" in a && n(4, o = a.value);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    16 && n(0, e = Nr(o)), l.$$.dirty & /*str*/
    1 && n(2, r = Sr(e));
  }, n(1, s = ["length", "name", "prototype", ie, ce].filter(i)), [e, s, r, u, o];
}
class Ar extends P {
  constructor(t) {
    super(), T(this, t, Er, jr, C, { value: 4 }, $r);
  }
}
function Or(l) {
  let t, n = (
    /*isWritableStore*/
    l[3] ? "writable(" : "readable("
  ), e, r, s = ")", o, u;
  return r = new E({ props: { value: (
    /*storeValue*/
    l[2]
  ) } }), {
    c() {
      t = b("span"), e = h(n), j(r.$$.fragment), o = h(s), g(t, "class", "label");
    },
    m(i, a) {
      $(i, t, a), v(t, e), y(r, t, null), v(t, o), u = !0;
    },
    p(i, a) {
      (!u || a & /*isWritableStore*/
      8) && n !== (n = /*isWritableStore*/
      i[3] ? "writable(" : "readable(") && N(e, n);
      const f = {};
      a & /*storeValue*/
      4 && (f.value = /*storeValue*/
      i[2]), r.$set(f);
    },
    i(i) {
      u || (p(r.$$.fragment, i), u = !0);
    },
    o(i) {
      d(r.$$.fragment, i), u = !1;
    },
    d(i) {
      i && m(t), k(r);
    }
  };
}
function Cr(l) {
  let t, n = (
    /*item*/
    l[10] + ""
  ), e, r, s, o;
  return s = new E({
    props: {
      value: (
        /*value*/
        l[0][
          /*item*/
          l[10]
        ]
      )
    }
  }), {
    c() {
      t = b("span"), e = h(n), r = b("span"), r.textContent = ": ", j(s.$$.fragment), g(t, "class", "property"), g(r, "class", "operator");
    },
    m(u, i) {
      $(u, t, i), v(t, e), $(u, r, i), y(s, u, i), o = !0;
    },
    p(u, i) {
      (!o || i & /*item*/
      1024) && n !== (n = /*item*/
      u[10] + "") && N(e, n);
      const a = {};
      i & /*value, item*/
      1025 && (a.value = /*value*/
      u[0][
        /*item*/
        u[10]
      ]), s.$set(a);
    },
    i(u) {
      o || (p(s.$$.fragment, u), o = !0);
    },
    o(u) {
      d(s.$$.fragment, u), o = !1;
    },
    d(u) {
      u && (m(t), m(r)), k(s, u);
    }
  };
}
function Tr(l) {
  let t, n;
  return t = new ne({
    props: {
      list: (
        /*previewKeys*/
        l[4]
      ),
      hasMore: (
        /*previewKeys*/
        l[4].length < /*objectKeys*/
        l[1].length
      ),
      prefix: "{",
      postfix: "}",
      root: (
        /*root*/
        l[9]
      ),
      $$slots: {
        item: [
          Cr,
          ({ item: e }) => ({ 10: e }),
          ({ item: e }) => e ? 1024 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*previewKeys*/
      16 && (s.list = /*previewKeys*/
      e[4]), r & /*previewKeys, objectKeys*/
      18 && (s.hasMore = /*previewKeys*/
      e[4].length < /*objectKeys*/
      e[1].length), r & /*root*/
      512 && (s.root = /*root*/
      e[9]), r & /*$$scope, value, item*/
      3073 && (s.$$scope = { dirty: r, ctx: e }), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function Pr(l) {
  let t, n = (
    /*key*/
    l[8] + ""
  ), e, r;
  return {
    c() {
      t = b("span"), e = h(n), g(t, "class", r = /*key*/
      l[8] === pe ? "internal" : "property");
    },
    m(s, o) {
      $(s, t, o), v(t, e);
    },
    p(s, o) {
      o & /*key*/
      256 && n !== (n = /*key*/
      s[8] + "") && N(e, n), o & /*key*/
      256 && r !== (r = /*key*/
      s[8] === pe ? "internal" : "property") && g(t, "class", r);
    },
    d(s) {
      s && m(t);
    }
  };
}
function Mr(l) {
  let t, n;
  return t = new E({
    props: {
      value: (
        /*getValue*/
        l[6](
          /*key*/
          l[8]
        )
      )
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*key*/
      256 && (s.value = /*getValue*/
      e[6](
        /*key*/
        e[8]
      )), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function Ir(l) {
  let t, n;
  return t = new F({
    props: {
      keys: (
        /*keys*/
        l[5]
      ),
      $$slots: {
        item_value: [
          Mr,
          ({ key: e }) => ({ 8: e }),
          ({ key: e }) => e ? 256 : 0
        ],
        item_key: [
          Pr,
          ({ key: e }) => ({ 8: e }),
          ({ key: e }) => e ? 256 : 0
        ],
        preview: [
          Tr,
          ({ root: e }) => ({ 9: e }),
          ({ root: e }) => e ? 512 : 0
        ],
        summary: [Or]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, [r]) {
      const s = {};
      r & /*keys*/
      32 && (s.keys = /*keys*/
      e[5]), r & /*$$scope, key, previewKeys, objectKeys, root, value, storeValue, isWritableStore*/
      2847 && (s.$$scope = { dirty: r, ctx: e }), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
const pe = "$value";
function qr(l, t, n) {
  let e, r, s, o, u, i, a = O, f = () => (a(), a = he(c, (w) => n(7, i = w)), c);
  l.$$.on_destroy.push(() => a());
  let { value: c } = t;
  f();
  function _(w) {
    return w === pe ? o : c[w];
  }
  return l.$$set = (w) => {
    "value" in w && f(n(0, c = w.value));
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    1 && n(1, e = Object.getOwnPropertyNames(c)), l.$$.dirty & /*objectKeys*/
    2 && n(5, r = [pe, ...e]), l.$$.dirty & /*objectKeys*/
    2 && n(4, s = e.slice(0, 5)), l.$$.dirty & /*$value*/
    128 && n(2, o = i), l.$$.dirty & /*value*/
    1 && n(3, u = typeof c.set == "function");
  }, [
    c,
    e,
    o,
    u,
    s,
    r,
    _,
    i
  ];
}
class Br extends P {
  constructor(t) {
    super(), T(this, t, qr, Ir, C, { value: 0 });
  }
}
function Fr(l) {
  let t, n, e, r = (
    /*value*/
    l[0].length + ""
  ), s, o;
  return {
    c() {
      t = b("span"), n = h(
        /*nodeType*/
        l[1]
      ), e = h("("), s = h(r), o = h(")"), g(t, "class", "label");
    },
    m(u, i) {
      $(u, t, i), v(t, n), v(t, e), v(t, s), v(t, o);
    },
    p(u, i) {
      i & /*nodeType*/
      2 && N(
        n,
        /*nodeType*/
        u[1]
      ), i & /*value*/
      1 && r !== (r = /*value*/
      u[0].length + "") && N(s, r);
    },
    d(u) {
      u && m(t);
    }
  };
}
function Kr(l) {
  let t, n;
  return t = new E({ props: { value: (
    /*item*/
    l[8]
  ) } }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*item*/
      256 && (s.value = /*item*/
      e[8]), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function Lr(l) {
  let t, n;
  return t = new ne({
    props: {
      list: (
        /*preview*/
        l[2]
      ),
      hasMore: (
        /*preview*/
        l[2].length < /*value*/
        l[0].length
      ),
      label: (
        /*nodeType*/
        l[1] + "(" + /*value*/
        l[0].length + ") "
      ),
      prefix: "[",
      postfix: "]",
      root: (
        /*root*/
        l[7]
      ),
      $$slots: {
        item: [
          Kr,
          ({ item: e }) => ({ 8: e }),
          ({ item: e }) => e ? 256 : 0
        ]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*preview*/
      4 && (s.list = /*preview*/
      e[2]), r & /*preview, value*/
      5 && (s.hasMore = /*preview*/
      e[2].length < /*value*/
      e[0].length), r & /*nodeType, value*/
      3 && (s.label = /*nodeType*/
      e[1] + "(" + /*value*/
      e[0].length + ") "), r & /*root*/
      128 && (s.root = /*root*/
      e[7]), r & /*$$scope, item*/
      768 && (s.$$scope = { dirty: r, ctx: e }), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function Jr(l) {
  let t, n = String(
    /*key*/
    l[6]
  ) + "", e, r;
  return {
    c() {
      t = b("span"), e = h(n), g(t, "class", r = /*internalKeys*/
      l[4].includes(
        /*key*/
        l[6]
      ) ? "internal" : "property");
    },
    m(s, o) {
      $(s, t, o), v(t, e);
    },
    p(s, o) {
      o & /*key*/
      64 && n !== (n = String(
        /*key*/
        s[6]
      ) + "") && N(e, n), o & /*key*/
      64 && r !== (r = /*internalKeys*/
      s[4].includes(
        /*key*/
        s[6]
      ) ? "internal" : "property") && g(t, "class", r);
    },
    d(s) {
      s && m(t);
    }
  };
}
function Rr(l) {
  let t, n;
  return t = new E({
    props: {
      value: (
        /*getValue*/
        l[5](
          /*key*/
          l[6]
        )
      )
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*key*/
      64 && (s.value = /*getValue*/
      e[5](
        /*key*/
        e[6]
      )), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function zr(l) {
  let t, n;
  return t = new F({
    props: {
      keys: (
        /*keys*/
        l[3]
      ),
      $$slots: {
        item_value: [
          Rr,
          ({ key: e }) => ({ 6: e }),
          ({ key: e }) => e ? 64 : 0
        ],
        item_key: [
          Jr,
          ({ key: e }) => ({ 6: e }),
          ({ key: e }) => e ? 64 : 0
        ],
        preview: [
          Lr,
          ({ root: e }) => ({ 7: e }),
          ({ root: e }) => e ? 128 : 0
        ],
        summary: [Fr]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, [r]) {
      const s = {};
      r & /*keys*/
      8 && (s.keys = /*keys*/
      e[3]), r & /*$$scope, key, preview, value, nodeType, root*/
      711 && (s.$$scope = { dirty: r, ctx: e }), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
const tt = "Symbol(Symbol.toStringTag)";
function Ur(l, t, n) {
  let e, r, { value: s } = t, { nodeType: o } = t;
  const u = ["buffer", "byteLength", "byteOffset", "length", tt];
  function i(a) {
    return a === tt ? s[Symbol.toStringTag] : s[a];
  }
  return l.$$set = (a) => {
    "value" in a && n(0, s = a.value), "nodeType" in a && n(1, o = a.nodeType);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    1 && n(3, e = [...Object.getOwnPropertyNames(s), ...u]), l.$$.dirty & /*value*/
    1 && n(2, r = s.slice(0, 5));
  }, [s, o, r, e, u, i];
}
class Gr extends P {
  constructor(t) {
    super(), T(this, t, Ur, zr, C, { value: 0, nodeType: 1 });
  }
}
function Vr(l) {
  J(l, "svelte-17k1wqt", ".regex.svelte-17k1wqt{color:var(--regex-color)}");
}
function Dr(l) {
  let t, n;
  return {
    c() {
      t = b("span"), n = h(
        /*str*/
        l[1]
      ), g(t, "class", "regex svelte-17k1wqt");
    },
    m(e, r) {
      $(e, t, r), v(t, n);
    },
    p(e, r) {
      r & /*str*/
      2 && N(
        n,
        /*str*/
        e[1]
      );
    },
    d(e) {
      e && m(t);
    }
  };
}
function Wr(l) {
  let t, n;
  return {
    c() {
      t = b("span"), n = h(
        /*str*/
        l[1]
      ), g(t, "class", "regex svelte-17k1wqt");
    },
    m(e, r) {
      $(e, t, r), v(t, n);
    },
    p(e, r) {
      r & /*str*/
      2 && N(
        n,
        /*str*/
        e[1]
      );
    },
    d(e) {
      e && m(t);
    }
  };
}
function Xr(l) {
  let t, n = String(
    /*key*/
    l[3]
  ) + "", e;
  return {
    c() {
      t = b("span"), e = h(n), g(t, "class", "internal");
    },
    m(r, s) {
      $(r, t, s), v(t, e);
    },
    p(r, s) {
      s & /*key*/
      8 && n !== (n = String(
        /*key*/
        r[3]
      ) + "") && N(e, n);
    },
    d(r) {
      r && m(t);
    }
  };
}
function Zr(l) {
  let t, n;
  return t = new E({
    props: { value: (
      /*value*/
      l[0][
        /*key*/
        l[3]
      ]
    ) }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*value, key*/
      9 && (s.value = /*value*/
      e[0][
        /*key*/
        e[3]
      ]), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function Hr(l) {
  let t, n;
  return t = new F({
    props: {
      keys: (
        /*keys*/
        l[2]
      ),
      $$slots: {
        item_value: [
          Zr,
          ({ key: e }) => ({ 3: e }),
          ({ key: e }) => e ? 8 : 0
        ],
        item_key: [
          Xr,
          ({ key: e }) => ({ 3: e }),
          ({ key: e }) => e ? 8 : 0
        ],
        preview: [Wr],
        summary: [Dr]
      },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, [r]) {
      const s = {};
      r & /*$$scope, value, key, str*/
      27 && (s.$$scope = { dirty: r, ctx: e }), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function Qr(l, t, n) {
  let e, { value: r } = t;
  const s = [
    "lastIndex",
    "dotAll",
    "flags",
    "global",
    "hasIndices",
    "ignoreCase",
    "multiline",
    "source",
    "sticky",
    "unicode"
  ];
  return l.$$set = (o) => {
    "value" in o && n(0, r = o.value);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    1 && n(1, e = r.toString());
  }, [r, e, s];
}
class Yr extends P {
  constructor(t) {
    super(), T(this, t, Qr, Hr, C, { value: 0 }, Vr);
  }
}
function xr(l) {
  let t, n, e;
  const r = [
    { value: (
      /*value*/
      l[0]
    ) },
    /*props*/
    l[1]
  ];
  var s = (
    /*componentType*/
    l[2]
  );
  function o(u, i) {
    let a = {};
    for (let f = 0; f < r.length; f += 1)
      a = $e(a, r[f]);
    return i !== void 0 && i & /*value, props*/
    3 && (a = $e(a, Ae(r, [
      i & /*value*/
      1 && { value: (
        /*value*/
        u[0]
      ) },
      i & /*props*/
      2 && Oe(
        /*props*/
        u[1]
      )
    ]))), { props: a };
  }
  return s && (t = Se(s, o(l))), {
    c() {
      t && j(t.$$.fragment), n = I();
    },
    m(u, i) {
      t && y(t, u, i), $(u, n, i), e = !0;
    },
    p(u, [i]) {
      if (i & /*componentType*/
      4 && s !== (s = /*componentType*/
      u[2])) {
        if (t) {
          q();
          const a = t;
          d(a.$$.fragment, 1, 0, () => {
            k(a, 1);
          }), B();
        }
        s ? (t = Se(s, o(u, i)), j(t.$$.fragment), p(t.$$.fragment, 1), y(t, n.parentNode, n)) : t = null;
      } else if (s) {
        const a = i & /*value, props*/
        3 ? Ae(r, [
          i & /*value*/
          1 && { value: (
            /*value*/
            u[0]
          ) },
          i & /*props*/
          2 && Oe(
            /*props*/
            u[1]
          )
        ]) : {};
        t.$set(a);
      }
    },
    i(u) {
      e || (t && p(t.$$.fragment, u), e = !0);
    },
    o(u) {
      t && d(t.$$.fragment, u), e = !1;
    },
    d(u) {
      u && m(n), t && k(t, u);
    }
  };
}
function el(l, t, n) {
  let e, r, s, { value: o } = t;
  const u = ae();
  Y(l, u, (f) => n(4, s = f));
  const { shouldTreatIterableAsObject: i } = K();
  function a(f, c) {
    switch (f) {
      case "Object":
        return typeof c.subscribe == "function" ? [Br] : [be];
      case "Error":
        return [ur];
      case "Array":
        return [gn];
      case "Map":
        return [Gn];
      case "Iterable":
      case "Set":
        return [On, { nodeType: f }];
      case "Number":
        return [R, { nodeType: f }];
      case "String":
        return [mr];
      case "Boolean":
        return [
          R,
          {
            nodeType: f,
            value: c ? "true" : "false"
          }
        ];
      case "Date":
        return [
          R,
          {
            nodeType: f,
            value: c.toISOString()
          }
        ];
      case "Null":
        return [R, { nodeType: f, value: "null" }];
      case "Undefined":
        return [R, { nodeType: f, value: "undefined" }];
      case "Function":
      case "AsyncFunction":
      case "AsyncGeneratorFunction":
      case "GeneratorFunction":
        return [Ar];
      case "Symbol":
        return [
          R,
          {
            nodeType: f,
            value: c.toString()
          }
        ];
      case "BigInt":
        return [
          R,
          {
            nodeType: f,
            value: String(c) + "n"
          }
        ];
      case "ArrayBuffer":
        return [
          R,
          {
            nodeType: f,
            value: `ArrayBuffer(${c.byteLength})`
          }
        ];
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
        return [Gr, { nodeType: f }];
      case "RegExp":
        return [Yr];
      default:
        return [be, { summary: f }];
    }
  }
  return l.$$set = (f) => {
    "value" in f && n(0, o = f.value);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    1 && x(u, s = ar(o, i), s), l.$$.dirty & /*$nodeType, value*/
    17 && n(2, [e, r] = a(s, o), e, (n(1, r), n(4, s), n(0, o)));
  }, [o, r, e, u, s];
}
class E extends P {
  constructor(t) {
    super(), T(this, t, el, xr, C, { value: 0 });
  }
}
function tl({ defaultExpandedPaths: l, defaultExpandedLevel: t }) {
  const n = l.map((r) => r.split("."));
  function e(r) {
    e:
      for (const s of n) {
        if (r.length > s.length)
          continue;
        const o = Math.min(r.length, s.length);
        for (let u = 0; u < o; u++)
          if (s[u] !== "*" && s[u] !== String(r[u]))
            continue e;
        return !0;
      }
    return !1;
  }
  return function({ keyPath: r, level: s }) {
    return s <= t || e(r);
  };
}
function nl(l) {
  J(l, "svelte-nh86pb", "div.svelte-nh86pb{--string-color:var(--json-tree-string-color, #cb3f41);--symbol-color:var(--json-tree-symbol-color, #cb3f41);--boolean-color:var(--json-tree-boolean-color, #112aa7);--function-color:var(--json-tree-function-color, #112aa7);--number-color:var(--json-tree-number-color, #3029cf);--label-color:var(--json-tree-label-color, #871d8f);--property-color:var(--json-tree-property-color, #000000);--arrow-color:var(--json-tree-arrow-color, #727272);--operator-color:var(--json-tree-operator-color, #727272);--null-color:var(--json-tree-null-color, #8d8d8d);--undefined-color:var(--json-tree-undefined-color, #8d8d8d);--date-color:var(--json-tree-date-color, #8d8d8d);--internal-color:var(--json-tree-internal-color, grey);--regex-color:var(--json-tree-regex-color, var(--string-color));--li-identation:var(--json-tree-li-indentation, 1em);--li-line-height:var(--json-tree-li-line-height, 1.3);font-size:var(--json-tree-font-size, 12px);font-family:var(--json-tree-font-family, 'Courier New', Courier, monospace)}div.svelte-nh86pb li{line-height:var(--li-line-height);display:var(--li-display, list-item);list-style:none}div.svelte-nh86pb,div.svelte-nh86pb ul{padding:0;margin:0}.expandable.svelte-nh86pb{margin-left:var(--li-identation)}div.svelte-nh86pb{cursor:default}div.svelte-nh86pb .label{color:var(--label-color)}div.svelte-nh86pb .property{color:var(--property-color)}div.svelte-nh86pb .internal{color:var(--internal-color)}div.svelte-nh86pb .operator{color:var(--operator-color)}span.svelte-nh86pb{white-space:pre-wrap}");
}
function rl(l) {
  let t, n;
  return t = new E({ props: { value: (
    /*value*/
    l[0]
  ) } }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*value*/
      1 && (s.value = /*value*/
      e[0]), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function ll(l) {
  let t, n;
  return {
    c() {
      t = b("span"), n = h(
        /*value*/
        l[0]
      ), g(t, "class", "svelte-nh86pb");
    },
    m(e, r) {
      $(e, t, r), v(t, n);
    },
    p(e, r) {
      r & /*value*/
      1 && N(
        n,
        /*value*/
        e[0]
      );
    },
    i: O,
    o: O,
    d(e) {
      e && m(t);
    }
  };
}
function sl(l) {
  let t, n;
  return t = new ut({
    props: {
      key: "$",
      expanded: (
        /*expanded*/
        l[2]
      ),
      $$slots: { default: [ol] },
      $$scope: { ctx: l }
    }
  }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*$$scope, value*/
      257 && (s.$$scope = { dirty: r, ctx: e }), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function ol(l) {
  let t, n;
  return t = new E({ props: { value: (
    /*value*/
    l[0]
  ) } }), {
    c() {
      j(t.$$.fragment);
    },
    m(e, r) {
      y(t, e, r), n = !0;
    },
    p(e, r) {
      const s = {};
      r & /*value*/
      1 && (s.value = /*value*/
      e[0]), t.$set(s);
    },
    i(e) {
      n || (p(t.$$.fragment, e), n = !0);
    },
    o(e) {
      d(t.$$.fragment, e), n = !1;
    },
    d(e) {
      k(t, e);
    }
  };
}
function il(l) {
  let t, n, e, r;
  const s = [sl, ll, rl], o = [];
  function u(i, a) {
    return (
      /*expandable*/
      i[1] ? 0 : typeof /*value*/
      i[0] == "string" ? 1 : 2
    );
  }
  return n = u(l), e = o[n] = s[n](l), {
    c() {
      t = b("div"), e.c(), g(t, "class", "svelte-nh86pb"), W(
        t,
        "expandable",
        /*expandable*/
        l[1]
      );
    },
    m(i, a) {
      $(i, t, a), o[n].m(t, null), r = !0;
    },
    p(i, [a]) {
      let f = n;
      n = u(i), n === f ? o[n].p(i, a) : (q(), d(o[f], 1, 1, () => {
        o[f] = null;
      }), B(), e = o[n], e ? e.p(i, a) : (e = o[n] = s[n](i), e.c()), p(e, 1), e.m(t, null)), (!r || a & /*expandable*/
      2) && W(
        t,
        "expandable",
        /*expandable*/
        i[1]
      );
    },
    i(i) {
      r || (p(e), r = !0);
    },
    o(i) {
      d(e), r = !1;
    },
    d(i) {
      i && m(t), o[n].d();
    }
  };
}
function ul(l, t, n) {
  let e, r, { value: s } = t, { shouldShowPreview: o = !0 } = t, { shouldTreatIterableAsObject: u = !1 } = t, { defaultExpandedPaths: i = [] } = t, { defaultExpandedLevel: a = 0 } = t;
  const f = ae(!0);
  return K({
    expanded: f,
    isParentExpanded: Mt(!0),
    root: !0,
    shouldExpandNode: (c) => r(c),
    level: 0,
    keyPath: [],
    showPreview: o,
    shouldTreatIterableAsObject: u
  }), l.$$set = (c) => {
    "value" in c && n(0, s = c.value), "shouldShowPreview" in c && n(3, o = c.shouldShowPreview), "shouldTreatIterableAsObject" in c && n(4, u = c.shouldTreatIterableAsObject), "defaultExpandedPaths" in c && n(5, i = c.defaultExpandedPaths), "defaultExpandedLevel" in c && n(6, a = c.defaultExpandedLevel);
  }, l.$$.update = () => {
    l.$$.dirty & /*value*/
    1 && n(1, e = s && typeof s == "object"), l.$$.dirty & /*defaultExpandedPaths, defaultExpandedLevel*/
    96 && (r = tl({
      defaultExpandedPaths: i,
      defaultExpandedLevel: a
    }));
  }, [
    s,
    e,
    f,
    o,
    u,
    i,
    a
  ];
}
class fl extends P {
  constructor(t) {
    super(), T(
      this,
      t,
      ul,
      il,
      C,
      {
        value: 0,
        shouldShowPreview: 3,
        shouldTreatIterableAsObject: 4,
        defaultExpandedPaths: 5,
        defaultExpandedLevel: 6
      },
      nl
    );
  }
}
export {
  fl as default
};
