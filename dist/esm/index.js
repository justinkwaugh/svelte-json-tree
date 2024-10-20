import { SvelteComponent as O, init as T, safe_not_equal as C, append_styles as U, empty as I, insert as d, noop as M, detach as $, component_subscribe as W, element as b, attr as g, toggle_class as R, append as v, listen as H, subscribe as Ke, set_store_value as X, create_slot as z, update_slot_base as G, get_all_dirty_from_scope as V, get_slot_changes as D, transition_in as p, transition_out as _, space as J, create_component as h, mount_component as y, group_outros as q, check_outros as B, destroy_component as w, ensure_array_like as Z, stop_propagation as Je, destroy_each as oe, text as k, set_data as N, null_to_empty as ae, construct_svelte_component as ie, get_spread_update as ue, get_spread_object as fe, assign as ce } from "svelte/internal";
import { getContext as Xe, setContext as Ze, onMount as He } from "svelte";
import { writable as re, readable as Qe } from "svelte/store";
const Ye = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ye);
const pe = {};
function K(s, t) {
  const r = Xe(pe), e = typeof s == "function" ? s(r) : s, n = { ...r, ...e };
  return t != null && t.expandable && (n.isParentExpanded = n.expanded), Ze(pe, n), r;
}
function xe(s) {
  U(s, "svelte-1qd6nto", ".container.svelte-1qd6nto{display:inline-block;transform:translate(calc(0px - var(--li-identation)), -50%);position:absolute;top:50%;padding-right:100%}.arrow.svelte-1qd6nto{transform-origin:25% 50%;position:relative;line-height:1.1em;font-size:0.75em;margin-left:0;transition:150ms;color:var(--arrow-color);user-select:none;font-family:'Courier New', Courier, monospace;display:block}.expanded.svelte-1qd6nto{transform:rotateZ(90deg) translateX(-3px)}");
}
function _e(s) {
  let t, r, e, n;
  return {
    c() {
      t = b("span"), r = b("span"), r.textContent = "▶", g(r, "class", "arrow svelte-1qd6nto"), R(
        r,
        "expanded",
        /*$expanded*/
        s[2]
      ), g(t, "class", "container svelte-1qd6nto");
    },
    m(l, o) {
      d(l, t, o), v(t, r), e || (n = H(
        t,
        "click",
        /*click_handler*/
        s[4]
      ), e = !0);
    },
    p(l, o) {
      o & /*$expanded*/
      4 && R(
        r,
        "expanded",
        /*$expanded*/
        l[2]
      );
    },
    d(l) {
      l && $(t), e = !1, n();
    }
  };
}
function et(s) {
  let t, r = (
    /*$expandable*/
    s[1] && _e(s)
  );
  return {
    c() {
      r && r.c(), t = I();
    },
    m(e, n) {
      r && r.m(e, n), d(e, t, n);
    },
    p(e, [n]) {
      /*$expandable*/
      e[1] ? r ? r.p(e, n) : (r = _e(e), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null);
    },
    i: M,
    o: M,
    d(e) {
      e && $(t), r && r.d(e);
    }
  };
}
function tt(s, t, r) {
  let e, n, l = M, o = () => (l(), l = Ke(u, (c) => r(2, n = c)), u);
  s.$$.on_destroy.push(() => l());
  const { expanded: i, expandable: a } = K();
  W(s, a, (c) => r(1, e = c));
  let { expanded: u = i } = t;
  o();
  const f = (c) => {
    c.stopPropagation(), X(u, n = !n, n);
  };
  return s.$$set = (c) => {
    "expanded" in c && o(r(0, u = c.expanded));
  }, [u, e, n, a, f];
}
class Ue extends O {
  constructor(t) {
    super(), T(this, t, tt, et, C, { expanded: 0 }, xe);
  }
}
function nt(s) {
  let t;
  const r = (
    /*#slots*/
    s[1].default
  ), e = z(
    r,
    s,
    /*$$scope*/
    s[0],
    null
  );
  return {
    c() {
      e && e.c();
    },
    m(n, l) {
      e && e.m(n, l), t = !0;
    },
    p(n, [l]) {
      e && e.p && (!t || l & /*$$scope*/
      1) && G(
        e,
        r,
        n,
        /*$$scope*/
        n[0],
        t ? D(
          r,
          /*$$scope*/
          n[0],
          l,
          null
        ) : V(
          /*$$scope*/
          n[0]
        ),
        null
      );
    },
    i(n) {
      t || (p(e, n), t = !0);
    },
    o(n) {
      _(e, n), t = !1;
    },
    d(n) {
      e && e.d(n);
    }
  };
}
function rt(s, t, r) {
  let { $$slots: e = {}, $$scope: n } = t;
  return K({ displayMode: "summary" }), s.$$set = (l) => {
    "$$scope" in l && r(0, n = l.$$scope);
  }, [n, e];
}
class lt extends O {
  constructor(t) {
    super(), T(this, t, rt, nt, C, {});
  }
}
function st(s) {
  let t;
  const r = (
    /*#slots*/
    s[3].default
  ), e = z(
    r,
    s,
    /*$$scope*/
    s[2],
    null
  );
  return {
    c() {
      e && e.c();
    },
    m(n, l) {
      e && e.m(n, l), t = !0;
    },
    p(n, [l]) {
      e && e.p && (!t || l & /*$$scope*/
      4) && G(
        e,
        r,
        n,
        /*$$scope*/
        n[2],
        t ? D(
          r,
          /*$$scope*/
          n[2],
          l,
          null
        ) : V(
          /*$$scope*/
          n[2]
        ),
        null
      );
    },
    i(n) {
      t || (p(e, n), t = !0);
    },
    o(n) {
      _(e, n), t = !1;
    },
    d(n) {
      e && e.d(n);
    }
  };
}
function ot(s, t, r) {
  let { $$slots: e = {}, $$scope: n } = t, { expanded: l } = t, { key: o } = t;
  const i = re(!1);
  return K(({ keyPath: a, level: u }) => (o !== "[[Entries]]" && (a = [...a, o], u = u + 1), { keyPath: a, level: u, expanded: l, expandable: i })), s.$$set = (a) => {
    "expanded" in a && r(0, l = a.expanded), "key" in a && r(1, o = a.key), "$$scope" in a && r(2, n = a.$$scope);
  }, [l, o, n, e];
}
class Le extends O {
  constructor(t) {
    super(), T(this, t, ot, st, C, { expanded: 0, key: 1 });
  }
}
function at(s) {
  U(s, "svelte-19drypg", ".root.svelte-19drypg{display:inline-block;position:relative}.indent.svelte-19drypg{padding-left:var(--li-identation)}.label.svelte-19drypg{position:relative}");
}
function me(s, t, r) {
  const e = s.slice();
  return e[19] = t[r], e[21] = r, e;
}
const it = (s) => ({ key: s & /*keys*/
1 }), de = (s) => ({
  key: (
    /*key*/
    s[19]
  ),
  index: (
    /*index*/
    s[21]
  )
}), ut = (s) => ({ key: s & /*keys*/
1 }), $e = (s) => ({
  key: (
    /*key*/
    s[19]
  ),
  index: (
    /*index*/
    s[21]
  )
}), ft = (s) => ({}), ge = (s) => ({ root: (
  /*root*/
  s[6]
) }), ct = (s) => ({}), ve = (s) => ({});
function pt(s) {
  let t, r, e, n, l, o, i, a, u = (
    /*root*/
    s[6] && mt(s)
  );
  e = new lt({
    props: {
      $$slots: { default: [dt] },
      $$scope: { ctx: s }
    }
  });
  let f = (
    /*$expanded*/
    s[4] && be(s)
  );
  return {
    c() {
      t = b("span"), u && u.c(), r = J(), h(e.$$.fragment), n = J(), f && f.c(), l = I(), g(t, "class", "root svelte-19drypg");
    },
    m(c, m) {
      d(c, t, m), u && u.m(t, null), v(t, r), y(e, t, null), d(c, n, m), f && f.m(c, m), d(c, l, m), o = !0, i || (a = H(
        t,
        "click",
        /*toggleExpand*/
        s[9]
      ), i = !0);
    },
    p(c, m) {
      /*root*/
      c[6] && u.p(c, m);
      const j = {};
      m & /*$$scope*/
      8192 && (j.$$scope = { dirty: m, ctx: c }), e.$set(j), /*$expanded*/
      c[4] ? f ? (f.p(c, m), m & /*$expanded*/
      16 && p(f, 1)) : (f = be(c), f.c(), p(f, 1), f.m(l.parentNode, l)) : f && (q(), _(f, 1, 1, () => {
        f = null;
      }), B());
    },
    i(c) {
      o || (p(u), p(e.$$.fragment, c), p(f), o = !0);
    },
    o(c) {
      _(u), _(e.$$.fragment, c), _(f), o = !1;
    },
    d(c) {
      c && ($(t), $(n), $(l)), u && u.d(), w(e), f && f.d(c), i = !1, a();
    }
  };
}
function _t(s) {
  let t;
  const r = (
    /*#slots*/
    s[11].summary
  ), e = z(
    r,
    s,
    /*$$scope*/
    s[13],
    ve
  );
  return {
    c() {
      e && e.c();
    },
    m(n, l) {
      e && e.m(n, l), t = !0;
    },
    p(n, l) {
      e && e.p && (!t || l & /*$$scope*/
      8192) && G(
        e,
        r,
        n,
        /*$$scope*/
        n[13],
        t ? D(
          r,
          /*$$scope*/
          n[13],
          l,
          ct
        ) : V(
          /*$$scope*/
          n[13]
        ),
        ve
      );
    },
    i(n) {
      t || (p(e, n), t = !0);
    },
    o(n) {
      _(e, n), t = !1;
    },
    d(n) {
      e && e.d(n);
    }
  };
}
function mt(s) {
  let t, r;
  return t = new Ue({ props: { expanded: (
    /*expanded*/
    s[7]
  ) } }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p: M,
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function dt(s) {
  let t;
  const r = (
    /*#slots*/
    s[11].preview
  ), e = z(
    r,
    s,
    /*$$scope*/
    s[13],
    ge
  );
  return {
    c() {
      e && e.c();
    },
    m(n, l) {
      e && e.m(n, l), t = !0;
    },
    p(n, l) {
      e && e.p && (!t || l & /*$$scope*/
      8192) && G(
        e,
        r,
        n,
        /*$$scope*/
        n[13],
        t ? D(
          r,
          /*$$scope*/
          n[13],
          l,
          ft
        ) : V(
          /*$$scope*/
          n[13]
        ),
        ge
      );
    },
    i(n) {
      t || (p(e, n), t = !0);
    },
    o(n) {
      _(e, n), t = !1;
    },
    d(n) {
      e && e.d(n);
    }
  };
}
function be(s) {
  let t, r, e, n, l = Z(
    /*keys*/
    s[0]
  ), o = [];
  for (let a = 0; a < l.length; a += 1)
    o[a] = he(me(s, l, a));
  const i = (a) => _(o[a], 1, 1, () => {
    o[a] = null;
  });
  return {
    c() {
      t = b("ul");
      for (let a = 0; a < o.length; a += 1)
        o[a].c();
    },
    m(a, u) {
      d(a, t, u);
      for (let f = 0; f < o.length; f += 1)
        o[f] && o[f].m(t, null);
      r = !0, e || (n = H(t, "click", Je(
        /*toggleExpand*/
        s[9]
      )), e = !0);
    },
    p(a, u) {
      if (u & /*$expanded, expandKey, keys, child_expanded, $$scope, shouldShowColon*/
      8223) {
        l = Z(
          /*keys*/
          a[0]
        );
        let f;
        for (f = 0; f < l.length; f += 1) {
          const c = me(a, l, f);
          o[f] ? (o[f].p(c, u), p(o[f], 1)) : (o[f] = he(c), o[f].c(), p(o[f], 1), o[f].m(t, null));
        }
        for (q(), f = l.length; f < o.length; f += 1)
          i(f);
        B();
      }
    },
    i(a) {
      if (!r) {
        for (let u = 0; u < l.length; u += 1)
          p(o[u]);
        r = !0;
      }
    },
    o(a) {
      o = o.filter(Boolean);
      for (let u = 0; u < o.length; u += 1)
        _(o[u]);
      r = !1;
    },
    d(a) {
      a && $(t), oe(o, a), e = !1, n();
    }
  };
}
function ke(s) {
  let t;
  return {
    c() {
      t = b("span"), t.textContent = ": ", g(t, "class", "operator");
    },
    m(r, e) {
      d(r, t, e);
    },
    d(r) {
      r && $(t);
    }
  };
}
function $t(s) {
  let t, r, e = !/*shouldShowColon*/
  s[1] || /*shouldShowColon*/
  s[1](
    /*key*/
    s[19]
  ), n, l, o, i;
  r = new Ue({});
  const a = (
    /*#slots*/
    s[11].item_key
  ), u = z(
    a,
    s,
    /*$$scope*/
    s[13],
    $e
  );
  let f = e && ke();
  function c() {
    return (
      /*click_handler*/
      s[12](
        /*index*/
        s[21]
      )
    );
  }
  const m = (
    /*#slots*/
    s[11].item_value
  ), j = z(
    m,
    s,
    /*$$scope*/
    s[13],
    de
  );
  return {
    c() {
      t = b("span"), h(r.$$.fragment), u && u.c(), f && f.c(), n = J(), j && j.c(), g(t, "class", "label svelte-19drypg");
    },
    m(S, P) {
      d(S, t, P), y(r, t, null), u && u.m(t, null), f && f.m(t, null), v(t, n), j && j.m(S, P), l = !0, o || (i = H(t, "click", c), o = !0);
    },
    p(S, P) {
      s = S, u && u.p && (!l || P & /*$$scope, keys*/
      8193) && G(
        u,
        a,
        s,
        /*$$scope*/
        s[13],
        l ? D(
          a,
          /*$$scope*/
          s[13],
          P,
          ut
        ) : V(
          /*$$scope*/
          s[13]
        ),
        $e
      ), P & /*shouldShowColon, keys*/
      3 && (e = !/*shouldShowColon*/
      s[1] || /*shouldShowColon*/
      s[1](
        /*key*/
        s[19]
      )), e ? f || (f = ke(), f.c(), f.m(t, n)) : f && (f.d(1), f = null), j && j.p && (!l || P & /*$$scope, keys*/
      8193) && G(
        j,
        m,
        s,
        /*$$scope*/
        s[13],
        l ? D(
          m,
          /*$$scope*/
          s[13],
          P,
          it
        ) : V(
          /*$$scope*/
          s[13]
        ),
        de
      );
    },
    i(S) {
      l || (p(r.$$.fragment, S), p(u, S), p(j, S), l = !0);
    },
    o(S) {
      _(r.$$.fragment, S), _(u, S), _(j, S), l = !1;
    },
    d(S) {
      S && $(t), w(r), u && u.d(S), f && f.d(), j && j.d(S), o = !1, i();
    }
  };
}
function he(s) {
  let t, r, e, n, l, o;
  return r = new Le({
    props: {
      key: (
        /*expandKey*/
        s[2](
          /*key*/
          s[19]
        )
      ),
      expanded: (
        /*child_expanded*/
        s[3][
          /*index*/
          s[21]
        ]
      ),
      $$slots: { default: [$t] },
      $$scope: { ctx: s }
    }
  }), {
    c() {
      t = b("li"), h(r.$$.fragment), e = J(), g(t, "class", "svelte-19drypg"), R(
        t,
        "indent",
        /*$expanded*/
        s[4]
      );
    },
    m(i, a) {
      d(i, t, a), y(r, t, null), v(t, e), n = !0, l || (o = H(t, "click", Je(vt)), l = !0);
    },
    p(i, a) {
      const u = {};
      a & /*expandKey, keys*/
      5 && (u.key = /*expandKey*/
      i[2](
        /*key*/
        i[19]
      )), a & /*child_expanded*/
      8 && (u.expanded = /*child_expanded*/
      i[3][
        /*index*/
        i[21]
      ]), a & /*$$scope, keys, child_expanded, shouldShowColon*/
      8203 && (u.$$scope = { dirty: a, ctx: i }), r.$set(u), (!n || a & /*$expanded*/
      16) && R(
        t,
        "indent",
        /*$expanded*/
        i[4]
      );
    },
    i(i) {
      n || (p(r.$$.fragment, i), n = !0);
    },
    o(i) {
      _(r.$$.fragment, i), n = !1;
    },
    d(i) {
      i && $(t), w(r), l = !1, o();
    }
  };
}
function gt(s) {
  let t, r, e, n;
  const l = [_t, pt], o = [];
  function i(a, u) {
    return (
      /*displayMode*/
      a[5] === "summary" ? 0 : 1
    );
  }
  return t = i(s), r = o[t] = l[t](s), {
    c() {
      r.c(), e = I();
    },
    m(a, u) {
      o[t].m(a, u), d(a, e, u), n = !0;
    },
    p(a, [u]) {
      r.p(a, u);
    },
    i(a) {
      n || (p(r), n = !0);
    },
    o(a) {
      _(r), n = !1;
    },
    d(a) {
      a && $(e), o[t].d(a);
    }
  };
}
const vt = () => {
};
function bt(s, t, r) {
  let e, n, l, { $$slots: o = {}, $$scope: i } = t, { keys: a } = t, { shouldShowColon: u = void 0 } = t, { expandKey: f = (A) => A } = t, { defaultExpanded: c = !1 } = t;
  const { isParentExpanded: m, displayMode: j, root: S, expanded: P, expandable: le, keyPath: Re, level: ze, shouldExpandNode: Ge } = K({ root: !1 }, { expandable: !0 });
  if (W(s, P, (A) => r(4, n = A)), W(s, le, (A) => r(14, l = A)), X(le, l = !0, l), j !== "summary") {
    if (!c) {
      const A = Ge({ keyPath: Re, level: ze });
      A !== void 0 && (c = A);
    }
    He(() => m.subscribe((A) => {
      A ? P.set(c) : P.set(!1);
    }));
  }
  function Ve() {
    X(P, n = !n, n);
  }
  const De = (A) => e[A].update((We) => !We);
  return s.$$set = (A) => {
    "keys" in A && r(0, a = A.keys), "shouldShowColon" in A && r(1, u = A.shouldShowColon), "expandKey" in A && r(2, f = A.expandKey), "defaultExpanded" in A && r(10, c = A.defaultExpanded), "$$scope" in A && r(13, i = A.$$scope);
  }, s.$$.update = () => {
    s.$$.dirty & /*keys*/
    1 && r(3, e = a.map(() => re(!1)));
  }, [
    a,
    u,
    f,
    e,
    n,
    j,
    S,
    P,
    le,
    Ve,
    c,
    o,
    De,
    i
  ];
}
class F extends O {
  constructor(t) {
    super(), T(
      this,
      t,
      bt,
      gt,
      C,
      {
        keys: 0,
        shouldShowColon: 1,
        expandKey: 2,
        defaultExpanded: 10
      },
      at
    );
  }
}
function kt(s) {
  U(s, "svelte-150ffaa", ".comma.svelte-150ffaa{margin-left:-0.5em;margin-right:0.5em}");
}
function ye(s, t, r) {
  const e = s.slice();
  return e[9] = t[r], e[11] = r, e;
}
const ht = (s) => ({ item: s & /*list*/
1 }), we = (s) => ({
  item: (
    /*item*/
    s[9]
  ),
  index: (
    /*index*/
    s[11]
  )
});
function je(s) {
  let t, r, e, n, l, o = (
    /*prefix*/
    s[3] && Se(s)
  ), i = Z(
    /*list*/
    s[0]
  ), a = [];
  for (let m = 0; m < i.length; m += 1)
    a[m] = Ae(ye(s, i, m));
  const u = (m) => _(a[m], 1, 1, () => {
    a[m] = null;
  });
  let f = (
    /*hasMore*/
    s[1] && Oe()
  ), c = (
    /*postfix*/
    s[4] && Te(s)
  );
  return {
    c() {
      o && o.c(), t = J();
      for (let m = 0; m < a.length; m += 1)
        a[m].c();
      r = J(), f && f.c(), e = J(), c && c.c(), n = I();
    },
    m(m, j) {
      o && o.m(m, j), d(m, t, j);
      for (let S = 0; S < a.length; S += 1)
        a[S] && a[S].m(m, j);
      d(m, r, j), f && f.m(m, j), d(m, e, j), c && c.m(m, j), d(m, n, j), l = !0;
    },
    p(m, j) {
      if (/*prefix*/
      m[3] ? o ? o.p(m, j) : (o = Se(m), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), j & /*list, $$scope*/
      129) {
        i = Z(
          /*list*/
          m[0]
        );
        let S;
        for (S = 0; S < i.length; S += 1) {
          const P = ye(m, i, S);
          a[S] ? (a[S].p(P, j), p(a[S], 1)) : (a[S] = Ae(P), a[S].c(), p(a[S], 1), a[S].m(r.parentNode, r));
        }
        for (q(), S = i.length; S < a.length; S += 1)
          u(S);
        B();
      }
      /*hasMore*/
      m[1] ? f || (f = Oe(), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null), /*postfix*/
      m[4] ? c ? c.p(m, j) : (c = Te(m), c.c(), c.m(n.parentNode, n)) : c && (c.d(1), c = null);
    },
    i(m) {
      if (!l) {
        for (let j = 0; j < i.length; j += 1)
          p(a[j]);
        l = !0;
      }
    },
    o(m) {
      a = a.filter(Boolean);
      for (let j = 0; j < a.length; j += 1)
        _(a[j]);
      l = !1;
    },
    d(m) {
      m && ($(t), $(r), $(e), $(n)), o && o.d(m), oe(a, m), f && f.d(m), c && c.d(m);
    }
  };
}
function Se(s) {
  let t, r, e = (
    /*label*/
    s[2] && Ne(s)
  );
  return {
    c() {
      e && e.c(), t = b("span"), r = k(
        /*prefix*/
        s[3]
      ), g(t, "class", "operator");
    },
    m(n, l) {
      e && e.m(n, l), d(n, t, l), v(t, r);
    },
    p(n, l) {
      /*label*/
      n[2] ? e ? e.p(n, l) : (e = Ne(n), e.c(), e.m(t.parentNode, t)) : e && (e.d(1), e = null), l & /*prefix*/
      8 && N(
        r,
        /*prefix*/
        n[3]
      );
    },
    d(n) {
      n && $(t), e && e.d(n);
    }
  };
}
function Ne(s) {
  let t, r;
  return {
    c() {
      t = b("span"), r = k(
        /*label*/
        s[2]
      ), g(t, "class", "label");
    },
    m(e, n) {
      d(e, t, n), v(t, r);
    },
    p(e, n) {
      n & /*label*/
      4 && N(
        r,
        /*label*/
        e[2]
      );
    },
    d(e) {
      e && $(t);
    }
  };
}
function Ee(s) {
  let t;
  return {
    c() {
      t = b("span"), t.textContent = ",", g(t, "class", "comma operator svelte-150ffaa");
    },
    m(r, e) {
      d(r, t, e);
    },
    d(r) {
      r && $(t);
    }
  };
}
function Ae(s) {
  let t, r, e;
  const n = (
    /*#slots*/
    s[8].item
  ), l = z(
    n,
    s,
    /*$$scope*/
    s[7],
    we
  );
  let o = (
    /*index*/
    s[11] < /*list*/
    s[0].length - 1 && Ee()
  );
  return {
    c() {
      l && l.c(), t = J(), o && o.c(), r = I();
    },
    m(i, a) {
      l && l.m(i, a), d(i, t, a), o && o.m(i, a), d(i, r, a), e = !0;
    },
    p(i, a) {
      l && l.p && (!e || a & /*$$scope, list*/
      129) && G(
        l,
        n,
        i,
        /*$$scope*/
        i[7],
        e ? D(
          n,
          /*$$scope*/
          i[7],
          a,
          ht
        ) : V(
          /*$$scope*/
          i[7]
        ),
        we
      ), /*index*/
      i[11] < /*list*/
      i[0].length - 1 ? o || (o = Ee(), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
    },
    i(i) {
      e || (p(l, i), e = !0);
    },
    o(i) {
      _(l, i), e = !1;
    },
    d(i) {
      i && ($(t), $(r)), l && l.d(i), o && o.d(i);
    }
  };
}
function Oe(s) {
  let t, r, e;
  return {
    c() {
      t = b("span"), t.textContent = ",", r = J(), e = b("span"), e.textContent = "…", g(t, "class", "comma operator svelte-150ffaa"), g(e, "class", "operator");
    },
    m(n, l) {
      d(n, t, l), d(n, r, l), d(n, e, l);
    },
    d(n) {
      n && ($(t), $(r), $(e));
    }
  };
}
function Te(s) {
  let t, r;
  return {
    c() {
      t = b("span"), r = k(
        /*postfix*/
        s[4]
      ), g(t, "class", "operator");
    },
    m(e, n) {
      d(e, t, n), v(t, r);
    },
    p(e, n) {
      n & /*postfix*/
      16 && N(
        r,
        /*postfix*/
        e[4]
      );
    },
    d(e) {
      e && $(t);
    }
  };
}
function yt(s) {
  let t, r, e = (
    /*root*/
    (s[5] || /*showPreview*/
    s[6]) && je(s)
  );
  return {
    c() {
      e && e.c(), t = I();
    },
    m(n, l) {
      e && e.m(n, l), d(n, t, l), r = !0;
    },
    p(n, [l]) {
      /*root*/
      n[5] || /*showPreview*/
      n[6] ? e ? (e.p(n, l), l & /*root*/
      32 && p(e, 1)) : (e = je(n), e.c(), p(e, 1), e.m(t.parentNode, t)) : e && (q(), _(e, 1, 1, () => {
        e = null;
      }), B());
    },
    i(n) {
      r || (p(e), r = !0);
    },
    o(n) {
      _(e), r = !1;
    },
    d(n) {
      n && $(t), e && e.d(n);
    }
  };
}
function wt(s, t, r) {
  let { $$slots: e = {}, $$scope: n } = t, { list: l } = t, { hasMore: o } = t, { label: i = void 0 } = t, { prefix: a = void 0 } = t, { postfix: u = void 0 } = t, { root: f = !1 } = t;
  const { showPreview: c } = K();
  return s.$$set = (m) => {
    "list" in m && r(0, l = m.list), "hasMore" in m && r(1, o = m.hasMore), "label" in m && r(2, i = m.label), "prefix" in m && r(3, a = m.prefix), "postfix" in m && r(4, u = m.postfix), "root" in m && r(5, f = m.root), "$$scope" in m && r(7, n = m.$$scope);
  }, [l, o, i, a, u, f, c, n, e];
}
class Q extends O {
  constructor(t) {
    super(), T(
      this,
      t,
      wt,
      yt,
      C,
      {
        list: 0,
        hasMore: 1,
        label: 2,
        prefix: 3,
        postfix: 4,
        root: 5
      },
      kt
    );
  }
}
function jt(s) {
  let t, r = (
    /*summary*/
    (s[1] ?? "{…}") + ""
  ), e;
  return {
    c() {
      t = b("span"), e = k(r), g(t, "class", "label");
    },
    m(n, l) {
      d(n, t, l), v(t, e);
    },
    p(n, l) {
      l & /*summary*/
      2 && r !== (r = /*summary*/
      (n[1] ?? "{…}") + "") && N(e, r);
    },
    d(n) {
      n && $(t);
    }
  };
}
function St(s) {
  let t, r = (
    /*item*/
    s[6] + ""
  ), e, n, l, o;
  return l = new E({
    props: { value: (
      /*value*/
      s[0][
        /*item*/
        s[6]
      ]
    ) }
  }), {
    c() {
      t = b("span"), e = k(r), n = b("span"), n.textContent = ": ", h(l.$$.fragment), g(t, "class", "property"), g(n, "class", "operator");
    },
    m(i, a) {
      d(i, t, a), v(t, e), d(i, n, a), y(l, i, a), o = !0;
    },
    p(i, a) {
      (!o || a & /*item*/
      64) && r !== (r = /*item*/
      i[6] + "") && N(e, r);
      const u = {};
      a & /*value, item*/
      65 && (u.value = /*value*/
      i[0][
        /*item*/
        i[6]
      ]), l.$set(u);
    },
    i(i) {
      o || (p(l.$$.fragment, i), o = !0);
    },
    o(i) {
      _(l.$$.fragment, i), o = !1;
    },
    d(i) {
      i && ($(t), $(n)), w(l, i);
    }
  };
}
function Nt(s) {
  let t, r;
  return t = new Q({
    props: {
      list: (
        /*previewKeys*/
        s[3]
      ),
      hasMore: (
        /*previewKeys*/
        s[3].length < /*keys*/
        s[2].length
      ),
      prefix: (
        /*summary*/
        s[1] ? `${/*summary*/
        s[1]} {` : "{"
      ),
      postfix: "}",
      root: (
        /*root*/
        s[5]
      ),
      $$slots: {
        item: [
          St,
          ({ item: e }) => ({ 6: e }),
          ({ item: e }) => e ? 64 : 0
        ]
      },
      $$scope: { ctx: s }
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*previewKeys*/
      8 && (l.list = /*previewKeys*/
      e[3]), n & /*previewKeys, keys*/
      12 && (l.hasMore = /*previewKeys*/
      e[3].length < /*keys*/
      e[2].length), n & /*summary*/
      2 && (l.prefix = /*summary*/
      e[1] ? `${/*summary*/
      e[1]} {` : "{"), n & /*root*/
      32 && (l.root = /*root*/
      e[5]), n & /*$$scope, value, item*/
      193 && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function Et(s) {
  let t, r = (
    /*key*/
    s[4] + ""
  ), e;
  return {
    c() {
      t = b("span"), e = k(r), g(t, "class", "property");
    },
    m(n, l) {
      d(n, t, l), v(t, e);
    },
    p(n, l) {
      l & /*key*/
      16 && r !== (r = /*key*/
      n[4] + "") && N(e, r);
    },
    d(n) {
      n && $(t);
    }
  };
}
function At(s) {
  let t, r;
  return t = new E({
    props: { value: (
      /*value*/
      s[0][
        /*key*/
        s[4]
      ]
    ) }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*value, key*/
      17 && (l.value = /*value*/
      e[0][
        /*key*/
        e[4]
      ]), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function Ot(s) {
  let t, r;
  return t = new F({
    props: {
      keys: (
        /*keys*/
        s[2]
      ),
      $$slots: {
        item_value: [
          At,
          ({ key: e }) => ({ 4: e }),
          ({ key: e }) => e ? 16 : 0
        ],
        item_key: [
          Et,
          ({ key: e }) => ({ 4: e }),
          ({ key: e }) => e ? 16 : 0
        ],
        preview: [
          Nt,
          ({ root: e }) => ({ 5: e }),
          ({ root: e }) => e ? 32 : 0
        ],
        summary: [jt]
      },
      $$scope: { ctx: s }
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, [n]) {
      const l = {};
      n & /*keys*/
      4 && (l.keys = /*keys*/
      e[2]), n & /*$$scope, value, key, previewKeys, keys, summary, root*/
      191 && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function Tt(s, t, r) {
  let e, n, { value: l } = t, { summary: o } = t;
  return s.$$set = (i) => {
    "value" in i && r(0, l = i.value), "summary" in i && r(1, o = i.summary);
  }, s.$$.update = () => {
    s.$$.dirty & /*value*/
    1 && r(2, e = Object.getOwnPropertyNames(l)), s.$$.dirty & /*keys*/
    4 && r(3, n = e.slice(0, 5));
  }, [l, o, e, n];
}
class se extends O {
  constructor(t) {
    super(), T(this, t, Tt, Ot, C, { value: 0, summary: 1 });
  }
}
function Ct(s) {
  let t, r, e = (
    /*value*/
    s[0].length + ""
  ), n, l;
  return {
    c() {
      t = b("span"), r = k("Array("), n = k(e), l = k(")"), g(t, "class", "label");
    },
    m(o, i) {
      d(o, t, i), v(t, r), v(t, n), v(t, l);
    },
    p(o, i) {
      i & /*value*/
      1 && e !== (e = /*value*/
      o[0].length + "") && N(n, e);
    },
    d(o) {
      o && $(t);
    }
  };
}
function Pt(s) {
  let t, r;
  return t = new E({ props: { value: (
    /*item*/
    s[5]
  ) } }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*item*/
      32 && (l.value = /*item*/
      e[5]), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function It(s) {
  let t, r;
  return t = new Q({
    props: {
      list: (
        /*preview*/
        s[1]
      ),
      hasMore: (
        /*preview*/
        s[1].length < /*value*/
        s[0].length
      ),
      label: "(" + /*value*/
      s[0].length + ") ",
      prefix: "[",
      postfix: "]",
      root: (
        /*root*/
        s[4]
      ),
      $$slots: {
        item: [
          Pt,
          ({ item: e }) => ({ 5: e }),
          ({ item: e }) => e ? 32 : 0
        ]
      },
      $$scope: { ctx: s }
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*preview*/
      2 && (l.list = /*preview*/
      e[1]), n & /*preview, value*/
      3 && (l.hasMore = /*preview*/
      e[1].length < /*value*/
      e[0].length), n & /*value*/
      1 && (l.label = "(" + /*value*/
      e[0].length + ") "), n & /*root*/
      16 && (l.root = /*root*/
      e[4]), n & /*$$scope, item*/
      96 && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function Mt(s) {
  let t, r = String(
    /*key*/
    s[3]
  ) + "", e;
  return {
    c() {
      t = b("span"), e = k(r), g(t, "class", "property");
    },
    m(n, l) {
      d(n, t, l), v(t, e);
    },
    p(n, l) {
      l & /*key*/
      8 && r !== (r = String(
        /*key*/
        n[3]
      ) + "") && N(e, r);
    },
    d(n) {
      n && $(t);
    }
  };
}
function qt(s) {
  let t, r;
  return t = new E({
    props: { value: (
      /*value*/
      s[0][
        /*key*/
        s[3]
      ]
    ) }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*value, key*/
      9 && (l.value = /*value*/
      e[0][
        /*key*/
        e[3]
      ]), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function Bt(s) {
  let t, r;
  return t = new F({
    props: {
      keys: (
        /*keys*/
        s[2]
      ),
      $$slots: {
        item_value: [
          qt,
          ({ key: e }) => ({ 3: e }),
          ({ key: e }) => e ? 8 : 0
        ],
        item_key: [
          Mt,
          ({ key: e }) => ({ 3: e }),
          ({ key: e }) => e ? 8 : 0
        ],
        preview: [
          It,
          ({ root: e }) => ({ 4: e }),
          ({ root: e }) => e ? 16 : 0
        ],
        summary: [Ct]
      },
      $$scope: { ctx: s }
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, [n]) {
      const l = {};
      n & /*keys*/
      4 && (l.keys = /*keys*/
      e[2]), n & /*$$scope, value, key, preview, root*/
      91 && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function Ft(s, t, r) {
  let e, n, { value: l } = t;
  return s.$$set = (o) => {
    "value" in o && r(0, l = o.value);
  }, s.$$.update = () => {
    s.$$.dirty & /*value*/
    1 && r(2, e = Object.getOwnPropertyNames(l)), s.$$.dirty & /*value*/
    1 && r(1, n = l.slice(0, 5));
  }, [l, n, e];
}
class Kt extends O {
  constructor(t) {
    super(), T(this, t, Ft, Bt, C, { value: 0 });
  }
}
function Jt(s) {
  let t, r, e, n = (
    /*indexes*/
    s[3].length + ""
  ), l, o;
  return {
    c() {
      t = b("span"), r = k(
        /*nodeType*/
        s[1]
      ), e = k("("), l = k(n), o = k(")"), g(t, "class", "label");
    },
    m(i, a) {
      d(i, t, a), v(t, r), v(t, e), v(t, l), v(t, o);
    },
    p(i, a) {
      a & /*nodeType*/
      2 && N(
        r,
        /*nodeType*/
        i[1]
      ), a & /*indexes*/
      8 && n !== (n = /*indexes*/
      i[3].length + "") && N(l, n);
    },
    d(i) {
      i && $(t);
    }
  };
}
function Ut(s) {
  let t, r;
  return t = new E({ props: { value: (
    /*item*/
    s[9]
  ) } }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*item*/
      512 && (l.value = /*item*/
      e[9]), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function Lt(s) {
  let t, r;
  return t = new Q({
    props: {
      list: (
        /*previewItems*/
        s[4]
      ),
      hasMore: (
        /*previewItems*/
        s[4].length < /*items*/
        s[2].length
      ),
      label: `${/*nodeType*/
      s[1]}(${/*indexes*/
      s[3].length}) `,
      prefix: "{",
      postfix: "}",
      root: (
        /*root*/
        s[8]
      ),
      $$slots: {
        item: [
          Ut,
          ({ item: e }) => ({ 9: e }),
          ({ item: e }) => e ? 512 : 0
        ]
      },
      $$scope: { ctx: s }
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*previewItems*/
      16 && (l.list = /*previewItems*/
      e[4]), n & /*previewItems, items*/
      20 && (l.hasMore = /*previewItems*/
      e[4].length < /*items*/
      e[2].length), n & /*nodeType, indexes*/
      10 && (l.label = `${/*nodeType*/
      e[1]}(${/*indexes*/
      e[3].length}) `), n & /*root*/
      256 && (l.root = /*root*/
      e[8]), n & /*$$scope, item*/
      1536 && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function Rt(s) {
  let t, r = (
    /*key*/
    s[6] + ""
  ), e, n;
  return {
    c() {
      t = b("span"), e = k(r), g(t, "class", n = /*key*/
      s[6] === Y ? "internal" : "property");
    },
    m(l, o) {
      d(l, t, o), v(t, e);
    },
    p(l, o) {
      o & /*key*/
      64 && r !== (r = /*key*/
      l[6] + "") && N(e, r), o & /*key*/
      64 && n !== (n = /*key*/
      l[6] === Y ? "internal" : "property") && g(t, "class", n);
    },
    d(l) {
      l && $(t);
    }
  };
}
function zt(s) {
  let t, r;
  return t = new E({
    props: { value: (
      /*value*/
      s[0][
        /*key*/
        s[6]
      ]
    ) }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*value, key*/
      65 && (l.value = /*value*/
      e[0][
        /*key*/
        e[6]
      ]), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function Gt(s) {
  let t, r;
  return t = new F({
    props: {
      keys: (
        /*indexes*/
        s[3]
      ),
      defaultExpanded: !0,
      $$slots: {
        item_value: [
          Dt,
          ({ key: e }) => ({ 7: e }),
          ({ key: e }) => e ? 128 : 0
        ],
        item_key: [
          Vt,
          ({ key: e }) => ({ 7: e }),
          ({ key: e }) => e ? 128 : 0
        ]
      },
      $$scope: { ctx: s }
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*indexes*/
      8 && (l.keys = /*indexes*/
      e[3]), n & /*$$scope, items, index*/
      1156 && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function Vt(s) {
  let t, r = (
    /*index*/
    s[7] + ""
  ), e;
  return {
    c() {
      t = b("span"), e = k(r), g(t, "class", "property");
    },
    m(n, l) {
      d(n, t, l), v(t, e);
    },
    p(n, l) {
      l & /*index*/
      128 && r !== (r = /*index*/
      n[7] + "") && N(e, r);
    },
    d(n) {
      n && $(t);
    }
  };
}
function Dt(s) {
  let t, r;
  return t = new E({
    props: {
      value: (
        /*items*/
        s[2][
          /*index*/
          s[7]
        ]
      )
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*items, index*/
      132 && (l.value = /*items*/
      e[2][
        /*index*/
        e[7]
      ]), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function Wt(s) {
  let t, r, e, n;
  const l = [Gt, zt], o = [];
  function i(a, u) {
    return (
      /*key*/
      a[6] === Y ? 0 : 1
    );
  }
  return t = i(s), r = o[t] = l[t](s), {
    c() {
      r.c(), e = I();
    },
    m(a, u) {
      o[t].m(a, u), d(a, e, u), n = !0;
    },
    p(a, u) {
      let f = t;
      t = i(a), t === f ? o[t].p(a, u) : (q(), _(o[f], 1, 1, () => {
        o[f] = null;
      }), B(), r = o[t], r ? r.p(a, u) : (r = o[t] = l[t](a), r.c()), p(r, 1), r.m(e.parentNode, e));
    },
    i(a) {
      n || (p(r), n = !0);
    },
    o(a) {
      _(r), n = !1;
    },
    d(a) {
      a && $(e), o[t].d(a);
    }
  };
}
function Xt(s) {
  let t, r;
  return t = new F({
    props: {
      keys: [Y, "size"],
      shouldShowColon: (
        /*func*/
        s[5]
      ),
      $$slots: {
        item_value: [
          Wt,
          ({ key: e }) => ({ 6: e }),
          ({ key: e }) => e ? 64 : 0
        ],
        item_key: [
          Rt,
          ({ key: e }) => ({ 6: e }),
          ({ key: e }) => e ? 64 : 0
        ],
        preview: [
          Lt,
          ({ root: e }) => ({ 8: e }),
          ({ root: e }) => e ? 256 : 0
        ],
        summary: [Jt]
      },
      $$scope: { ctx: s }
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, [n]) {
      const l = {};
      n & /*$$scope, indexes, items, key, value, previewItems, nodeType, root*/
      1375 && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
const Y = "[[Entries]]";
function Zt(s, t, r) {
  let e, { value: n } = t, { nodeType: l } = t, o = [], i = [];
  const a = (u) => u !== Y;
  return s.$$set = (u) => {
    "value" in u && r(0, n = u.value), "nodeType" in u && r(1, l = u.nodeType);
  }, s.$$.update = () => {
    if (s.$$.dirty & /*value*/
    1) {
      let u = [], f = [], c = 0;
      for (const m of n)
        u.push(c++), f.push(m);
      r(3, o = u), r(2, i = f);
    }
    s.$$.dirty & /*items*/
    4 && r(4, e = i.slice(0, 5));
  }, [n, l, i, o, e, a];
}
class Ht extends O {
  constructor(t) {
    super(), T(this, t, Zt, Xt, C, { value: 0, nodeType: 1 });
  }
}
function Qt(s) {
  let t, r, e = (
    /*keys*/
    s[2].length + ""
  ), n, l;
  return {
    c() {
      t = b("span"), r = k("Map("), n = k(e), l = k(")"), g(t, "color", "label");
    },
    m(o, i) {
      d(o, t, i), v(t, r), v(t, n), v(t, l);
    },
    p(o, i) {
      i & /*keys*/
      4 && e !== (e = /*keys*/
      o[2].length + "") && N(n, e);
    },
    d(o) {
      o && $(t);
    }
  };
}
function Yt(s) {
  let t, r, e, n;
  return t = new E({ props: { value: (
    /*item*/
    s[11]
  ) } }), e = new E({
    props: {
      value: (
        /*value*/
        s[0].get(
          /*item*/
          s[11]
        )
      )
    }
  }), {
    c() {
      h(t.$$.fragment), r = b("span"), r.textContent = " => ", h(e.$$.fragment), g(r, "class", "operator");
    },
    m(l, o) {
      y(t, l, o), d(l, r, o), y(e, l, o), n = !0;
    },
    p(l, o) {
      const i = {};
      o & /*item*/
      2048 && (i.value = /*item*/
      l[11]), t.$set(i);
      const a = {};
      o & /*value, item*/
      2049 && (a.value = /*value*/
      l[0].get(
        /*item*/
        l[11]
      )), e.$set(a);
    },
    i(l) {
      n || (p(t.$$.fragment, l), p(e.$$.fragment, l), n = !0);
    },
    o(l) {
      _(t.$$.fragment, l), _(e.$$.fragment, l), n = !1;
    },
    d(l) {
      l && $(r), w(t, l), w(e, l);
    }
  };
}
function xt(s) {
  let t, r;
  return t = new Q({
    props: {
      list: (
        /*previewKeys*/
        s[4]
      ),
      hasMore: (
        /*previewKeys*/
        s[4].length < /*value*/
        s[0].size
      ),
      label: `Map(${/*keys*/
      s[2].length}) `,
      prefix: "{",
      postfix: "}",
      root: (
        /*root*/
        s[10]
      ),
      $$slots: {
        item: [
          Yt,
          ({ item: e }) => ({ 11: e }),
          ({ item: e }) => e ? 2048 : 0
        ]
      },
      $$scope: { ctx: s }
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*previewKeys*/
      16 && (l.list = /*previewKeys*/
      e[4]), n & /*previewKeys, value*/
      17 && (l.hasMore = /*previewKeys*/
      e[4].length < /*value*/
      e[0].size), n & /*keys*/
      4 && (l.label = `Map(${/*keys*/
      e[2].length}) `), n & /*root*/
      1024 && (l.root = /*root*/
      e[10]), n & /*$$scope, value, item*/
      6145 && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function en(s) {
  let t, r = (
    /*key*/
    s[7] + ""
  ), e, n;
  return {
    c() {
      t = b("span"), e = k(r), g(t, "class", n = /*key*/
      s[7] === x ? "internal" : "property");
    },
    m(l, o) {
      d(l, t, o), v(t, e);
    },
    p(l, o) {
      o & /*key*/
      128 && r !== (r = /*key*/
      l[7] + "") && N(e, r), o & /*key*/
      128 && n !== (n = /*key*/
      l[7] === x ? "internal" : "property") && g(t, "class", n);
    },
    d(l) {
      l && $(t);
    }
  };
}
function tn(s) {
  let t, r;
  return t = new E({
    props: { value: (
      /*value*/
      s[0][
        /*key*/
        s[7]
      ]
    ) }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*value, key*/
      129 && (l.value = /*value*/
      e[0][
        /*key*/
        e[7]
      ]), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function nn(s) {
  let t, r;
  return t = new F({
    props: {
      keys: (
        /*indexes*/
        s[1]
      ),
      expandKey: (
        /*func*/
        s[5]
      ),
      defaultExpanded: !0,
      $$slots: {
        item_value: [
          an,
          ({ key: e }) => ({ 8: e }),
          ({ key: e }) => e ? 256 : 0
        ],
        item_key: [
          rn,
          ({ key: e }) => ({ 8: e }),
          ({ key: e }) => e ? 256 : 0
        ]
      },
      $$scope: { ctx: s }
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*indexes*/
      2 && (l.keys = /*indexes*/
      e[1]), n & /*keys*/
      4 && (l.expandKey = /*func*/
      e[5]), n & /*$$scope, keys, index, values*/
      4364 && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function rn(s) {
  let t, r = (
    /*index*/
    s[8] + ""
  ), e;
  return {
    c() {
      t = b("span"), e = k(r), g(t, "class", "property");
    },
    m(n, l) {
      d(n, t, l), v(t, e);
    },
    p(n, l) {
      l & /*index*/
      256 && r !== (r = /*index*/
      n[8] + "") && N(e, r);
    },
    d(n) {
      n && $(t);
    }
  };
}
function ln(s) {
  let t, r, e, n, l, o;
  return r = new E({
    props: { value: (
      /*keys*/
      s[2][
        /*index*/
        s[8]
      ]
    ) }
  }), n = new E({
    props: {
      value: (
        /*values*/
        s[3][
          /*index*/
          s[8]
        ]
      )
    }
  }), {
    c() {
      t = b("span"), t.textContent = "{ ", h(r.$$.fragment), e = b("span"), e.textContent = " => ", h(n.$$.fragment), l = b("span"), l.textContent = " }", g(t, "class", "operator"), g(e, "class", "operator"), g(l, "class", "operator");
    },
    m(i, a) {
      d(i, t, a), y(r, i, a), d(i, e, a), y(n, i, a), d(i, l, a), o = !0;
    },
    p(i, a) {
      const u = {};
      a & /*keys, index*/
      260 && (u.value = /*keys*/
      i[2][
        /*index*/
        i[8]
      ]), r.$set(u);
      const f = {};
      a & /*values, index*/
      264 && (f.value = /*values*/
      i[3][
        /*index*/
        i[8]
      ]), n.$set(f);
    },
    i(i) {
      o || (p(r.$$.fragment, i), p(n.$$.fragment, i), o = !0);
    },
    o(i) {
      _(r.$$.fragment, i), _(n.$$.fragment, i), o = !1;
    },
    d(i) {
      i && ($(t), $(e), $(l)), w(r, i), w(n, i);
    }
  };
}
function sn(s) {
  let t, r = (
    /*name*/
    s[9] + ""
  ), e;
  return {
    c() {
      t = b("span"), e = k(r), g(t, "class", "property");
    },
    m(n, l) {
      d(n, t, l), v(t, e);
    },
    p(n, l) {
      l & /*name*/
      512 && r !== (r = /*name*/
      n[9] + "") && N(e, r);
    },
    d(n) {
      n && $(t);
    }
  };
}
function on(s) {
  let t, r;
  return t = new E({
    props: {
      value: (
        /*name*/
        s[9] === "key" ? (
          /*keys*/
          s[2][
            /*index*/
            s[8]
          ]
        ) : (
          /*values*/
          s[3][
            /*index*/
            s[8]
          ]
        )
      )
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*name, keys, index, values*/
      780 && (l.value = /*name*/
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
      )), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function an(s) {
  let t, r;
  return t = new F({
    props: {
      keys: ["key", "value"],
      $$slots: {
        item_value: [
          on,
          ({ key: e }) => ({ 9: e }),
          ({ key: e }) => e ? 512 : 0
        ],
        item_key: [
          sn,
          ({ key: e }) => ({ 9: e }),
          ({ key: e }) => e ? 512 : 0
        ],
        preview: [ln]
      },
      $$scope: { ctx: s }
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*$$scope, name, keys, index, values*/
      4876 && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function un(s) {
  let t, r, e, n;
  const l = [nn, tn], o = [];
  function i(a, u) {
    return (
      /*key*/
      a[7] === x ? 0 : 1
    );
  }
  return t = i(s), r = o[t] = l[t](s), {
    c() {
      r.c(), e = I();
    },
    m(a, u) {
      o[t].m(a, u), d(a, e, u), n = !0;
    },
    p(a, u) {
      let f = t;
      t = i(a), t === f ? o[t].p(a, u) : (q(), _(o[f], 1, 1, () => {
        o[f] = null;
      }), B(), r = o[t], r ? r.p(a, u) : (r = o[t] = l[t](a), r.c()), p(r, 1), r.m(e.parentNode, e));
    },
    i(a) {
      n || (p(r), n = !0);
    },
    o(a) {
      _(r), n = !1;
    },
    d(a) {
      a && $(e), o[t].d(a);
    }
  };
}
function fn(s) {
  let t, r;
  return t = new F({
    props: {
      keys: [x, "size"],
      shouldShowColon: (
        /*func_1*/
        s[6]
      ),
      $$slots: {
        item_value: [
          un,
          ({ key: e }) => ({ 7: e }),
          ({ key: e }) => e ? 128 : 0
        ],
        item_key: [
          en,
          ({ key: e }) => ({ 7: e }),
          ({ key: e }) => e ? 128 : 0
        ],
        preview: [
          xt,
          ({ root: e }) => ({ 10: e }),
          ({ root: e }) => e ? 1024 : 0
        ],
        summary: [Qt]
      },
      $$scope: { ctx: s }
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, [n]) {
      const l = {};
      n & /*$$scope, indexes, keys, values, key, value, previewKeys, root*/
      5279 && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
const x = "[[Entries]]";
function cn(s, t, r) {
  let e, { value: n } = t;
  K();
  let l = [], o = [], i = [];
  const a = (f) => o[f], u = (f) => f !== x;
  return s.$$set = (f) => {
    "value" in f && r(0, n = f.value);
  }, s.$$.update = () => {
    if (s.$$.dirty & /*value*/
    1) {
      let f = [], c = [], m = [], j = 0;
      for (const S of n)
        f.push(j++), c.push(S[0]), m.push(S[1]);
      r(1, l = f), r(2, o = c), r(3, i = m);
    }
    s.$$.dirty & /*value*/
    1 && r(4, e = Array.from(n.keys()).slice(0, 5));
  }, [n, l, o, i, e, a, u];
}
class pn extends O {
  constructor(t) {
    super(), T(this, t, cn, fn, C, { value: 0 });
  }
}
function _n(s) {
  U(s, "svelte-l95iub", ".Date.svelte-l95iub{color:var(--date-color)}.BigInt.svelte-l95iub{color:var(--number-color)}.Number.svelte-l95iub{color:var(--number-color)}.Boolean.svelte-l95iub{color:var(--boolean-color)}.Null.svelte-l95iub{color:var(--null-color)}.Undefined.svelte-l95iub{color:var(--undefined-color)}.Symbol.svelte-l95iub{color:var(--symbol-color)}");
}
function mn(s) {
  let t, r, e;
  return {
    c() {
      t = b("span"), r = k(
        /*value*/
        s[0]
      ), g(t, "class", e = ae(
        /*nodeType*/
        s[1]
      ) + " svelte-l95iub");
    },
    m(n, l) {
      d(n, t, l), v(t, r);
    },
    p(n, [l]) {
      l & /*value*/
      1 && N(
        r,
        /*value*/
        n[0]
      ), l & /*nodeType*/
      2 && e !== (e = ae(
        /*nodeType*/
        n[1]
      ) + " svelte-l95iub") && g(t, "class", e);
    },
    i: M,
    o: M,
    d(n) {
      n && $(t);
    }
  };
}
function dn(s, t, r) {
  let { value: e, nodeType: n } = t;
  return s.$$set = (l) => {
    "value" in l && r(0, e = l.value), "nodeType" in l && r(1, n = l.nodeType);
  }, [e, n];
}
class L extends O {
  constructor(t) {
    super(), T(this, t, dn, mn, C, { value: 0, nodeType: 1 }, _n);
  }
}
function $n(s) {
  U(s, "svelte-1u08yw6", ".indent.svelte-1u08yw6{padding-left:var(--li-identation)}");
}
function Ce(s, t, r) {
  const e = s.slice();
  e[6] = t[r], e[9] = r;
  const n = (
    /*index*/
    e[9] < /*stack*/
    e[0].length - 1
  );
  return e[7] = n, e;
}
function gn(s) {
  let t, r, e;
  return r = new E({
    props: { value: (
      /*stack*/
      s[0][0] + "…"
    ) }
  }), {
    c() {
      t = b("span"), h(r.$$.fragment);
    },
    m(n, l) {
      d(n, t, l), y(r, t, null), e = !0;
    },
    p(n, l) {
      const o = {};
      l & /*stack*/
      1 && (o.value = /*stack*/
      n[0][0] + "…"), r.$set(o);
    },
    i(n) {
      e || (p(r.$$.fragment, n), e = !0);
    },
    o(n) {
      _(r.$$.fragment, n), e = !1;
    },
    d(n) {
      n && $(t), w(r);
    }
  };
}
function vn(s) {
  let t, r, e = Z(
    /*stack*/
    s[0]
  ), n = [];
  for (let o = 0; o < e.length; o += 1)
    n[o] = Pe(Ce(s, e, o));
  const l = (o) => _(n[o], 1, 1, () => {
    n[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      t = I();
    },
    m(o, i) {
      for (let a = 0; a < n.length; a += 1)
        n[a] && n[a].m(o, i);
      d(o, t, i), r = !0;
    },
    p(o, i) {
      if (i & /*stack*/
      1) {
        e = Z(
          /*stack*/
          o[0]
        );
        let a;
        for (a = 0; a < e.length; a += 1) {
          const u = Ce(o, e, a);
          n[a] ? (n[a].p(u, i), p(n[a], 1)) : (n[a] = Pe(u), n[a].c(), p(n[a], 1), n[a].m(t.parentNode, t));
        }
        for (q(), a = e.length; a < n.length; a += 1)
          l(a);
        B();
      }
    },
    i(o) {
      if (!r) {
        for (let i = 0; i < e.length; i += 1)
          p(n[i]);
        r = !0;
      }
    },
    o(o) {
      n = n.filter(Boolean);
      for (let i = 0; i < n.length; i += 1)
        _(n[i]);
      r = !1;
    },
    d(o) {
      o && $(t), oe(n, o);
    }
  };
}
function Pe(s) {
  let t, r, e, n = (
    /*appendNewLine*/
    s[7] ? " +" : ""
  ), l, o, i;
  return r = new E({
    props: {
      value: (
        /*line*/
        s[6] + /*appendNewLine*/
        (s[7] ? "\\n" : "")
      )
    }
  }), {
    c() {
      t = b("span"), h(r.$$.fragment), e = b("span"), l = k(n), o = b("br"), g(e, "class", "operator"), g(t, "class", "svelte-1u08yw6"), R(
        t,
        "indent",
        /*index*/
        s[9] > 0
      );
    },
    m(a, u) {
      d(a, t, u), y(r, t, null), v(t, e), v(e, l), d(a, o, u), i = !0;
    },
    p(a, u) {
      const f = {};
      u & /*stack*/
      1 && (f.value = /*line*/
      a[6] + /*appendNewLine*/
      (a[7] ? "\\n" : "")), r.$set(f), (!i || u & /*stack*/
      1) && n !== (n = /*appendNewLine*/
      a[7] ? " +" : "") && N(l, n);
    },
    i(a) {
      i || (p(r.$$.fragment, a), i = !0);
    },
    o(a) {
      _(r.$$.fragment, a), i = !1;
    },
    d(a) {
      a && ($(t), $(o)), w(r);
    }
  };
}
function bn(s) {
  let t, r, e, n, l, o;
  const i = [vn, gn], a = [];
  function u(f, c) {
    return (
      /*$expanded*/
      f[1] ? 0 : 1
    );
  }
  return r = u(s), e = a[r] = i[r](s), {
    c() {
      t = b("span"), e.c();
    },
    m(f, c) {
      d(f, t, c), a[r].m(t, null), n = !0, l || (o = H(
        t,
        "click",
        /*click_handler*/
        s[4]
      ), l = !0);
    },
    p(f, [c]) {
      let m = r;
      r = u(f), r === m ? a[r].p(f, c) : (q(), _(a[m], 1, 1, () => {
        a[m] = null;
      }), B(), e = a[r], e ? e.p(f, c) : (e = a[r] = i[r](f), e.c()), p(e, 1), e.m(t, null));
    },
    i(f) {
      n || (p(e), n = !0);
    },
    o(f) {
      _(e), n = !1;
    },
    d(f) {
      f && $(t), a[r].d(), l = !1, o();
    }
  };
}
function kn(s, t, r) {
  let e, n, { stack: l } = t;
  const { expanded: o, expandable: i } = K();
  W(s, o, (u) => r(1, n = u)), W(s, i, (u) => r(5, e = u)), X(i, e = !0, e);
  const a = () => X(o, n = !n, n);
  return s.$$set = (u) => {
    "stack" in u && r(0, l = u.stack);
  }, [l, n, o, i, a];
}
class hn extends O {
  constructor(t) {
    super(), T(this, t, kn, bn, C, { stack: 0 }, $n);
  }
}
function yn(s) {
  let t, r, e = String(
    /*value*/
    s[0].message
  ) + "", n;
  return {
    c() {
      t = b("span"), r = k("Error: "), n = k(e), g(t, "class", "label");
    },
    m(l, o) {
      d(l, t, o), v(t, r), v(t, n);
    },
    p(l, o) {
      o & /*value*/
      1 && e !== (e = String(
        /*value*/
        l[0].message
      ) + "") && N(n, e);
    },
    d(l) {
      l && $(t);
    }
  };
}
function wn(s) {
  let t, r, e = String(
    /*value*/
    s[0].message
  ) + "", n;
  return {
    c() {
      t = b("span"), r = k("Error: "), n = k(e), g(t, "class", "label");
    },
    m(l, o) {
      d(l, t, o), v(t, r), v(t, n);
    },
    p(l, o) {
      o & /*value*/
      1 && e !== (e = String(
        /*value*/
        l[0].message
      ) + "") && N(n, e);
    },
    d(l) {
      l && $(t);
    }
  };
}
function jn(s) {
  let t, r = (
    /*key*/
    s[2] + ""
  ), e;
  return {
    c() {
      t = b("span"), e = k(r), g(t, "class", "property");
    },
    m(n, l) {
      d(n, t, l), v(t, e);
    },
    p(n, l) {
      l & /*key*/
      4 && r !== (r = /*key*/
      n[2] + "") && N(e, r);
    },
    d(n) {
      n && $(t);
    }
  };
}
function Sn(s) {
  let t, r;
  return t = new E({
    props: { value: (
      /*value*/
      s[0][
        /*key*/
        s[2]
      ]
    ) }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*value, key*/
      5 && (l.value = /*value*/
      e[0][
        /*key*/
        e[2]
      ]), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function Nn(s) {
  let t, r;
  return t = new hn({ props: { stack: (
    /*stack*/
    s[1]
  ) } }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*stack*/
      2 && (l.stack = /*stack*/
      e[1]), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function En(s) {
  let t, r, e, n;
  const l = [Nn, Sn], o = [];
  function i(a, u) {
    return (
      /*key*/
      a[2] === "stack" ? 0 : 1
    );
  }
  return t = i(s), r = o[t] = l[t](s), {
    c() {
      r.c(), e = I();
    },
    m(a, u) {
      o[t].m(a, u), d(a, e, u), n = !0;
    },
    p(a, u) {
      let f = t;
      t = i(a), t === f ? o[t].p(a, u) : (q(), _(o[f], 1, 1, () => {
        o[f] = null;
      }), B(), r = o[t], r ? r.p(a, u) : (r = o[t] = l[t](a), r.c()), p(r, 1), r.m(e.parentNode, e));
    },
    i(a) {
      n || (p(r), n = !0);
    },
    o(a) {
      _(r), n = !1;
    },
    d(a) {
      a && $(e), o[t].d(a);
    }
  };
}
function An(s) {
  let t, r;
  return t = new F({
    props: {
      keys: ["message", "stack"],
      $$slots: {
        item_value: [
          En,
          ({ key: e }) => ({ 2: e }),
          ({ key: e }) => e ? 4 : 0
        ],
        item_key: [
          jn,
          ({ key: e }) => ({ 2: e }),
          ({ key: e }) => e ? 4 : 0
        ],
        preview: [wn],
        summary: [yn]
      },
      $$scope: { ctx: s }
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, [n]) {
      const l = {};
      n & /*$$scope, stack, key, value*/
      15 && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function On(s, t, r) {
  let e, { value: n } = t;
  return s.$$set = (l) => {
    "value" in l && r(0, n = l.value);
  }, s.$$.update = () => {
    s.$$.dirty & /*value*/
    1 && r(1, e = n.stack.split(`
`));
  }, [n, e];
}
class Tn extends O {
  constructor(t) {
    super(), T(this, t, On, An, C, { value: 0 });
  }
}
function Cn(s, t) {
  const r = Object.prototype.toString.call(s).slice(8, -1);
  return r === "Object" ? !t && typeof s[Symbol.iterator] == "function" ? "Iterable" : s.constructor.name : r;
}
function Pn(s) {
  U(s, "svelte-1fvwa9c", "span.svelte-1fvwa9c{color:var(--string-color);word-break:break-all;word-wrap:break-word}");
}
function In(s) {
  let t, r, e, n;
  return {
    c() {
      t = b("span"), r = k('"'), e = k(
        /*serialised*/
        s[0]
      ), n = k('"'), g(t, "class", "svelte-1fvwa9c");
    },
    m(l, o) {
      d(l, t, o), v(t, r), v(t, e), v(t, n);
    },
    p(l, o) {
      o & /*serialised*/
      1 && N(
        e,
        /*serialised*/
        l[0]
      );
    },
    d(l) {
      l && $(t);
    }
  };
}
function Mn(s) {
  let t, r, e = (
    /*serialised*/
    s[0].slice(0, 30) + /*serialised*/
    (s[0].length > 30 ? "…" : "")
  ), n, l;
  return {
    c() {
      t = b("span"), r = k('"'), n = k(e), l = k('"'), g(t, "class", "svelte-1fvwa9c");
    },
    m(o, i) {
      d(o, t, i), v(t, r), v(t, n), v(t, l);
    },
    p(o, i) {
      i & /*serialised*/
      1 && e !== (e = /*serialised*/
      o[0].slice(0, 30) + /*serialised*/
      (o[0].length > 30 ? "…" : "")) && N(n, e);
    },
    d(o) {
      o && $(t);
    }
  };
}
function qn(s) {
  let t;
  function r(l, o) {
    return (
      /*displayMode*/
      l[1] === "summary" ? Mn : In
    );
  }
  let n = r(s)(s);
  return {
    c() {
      n.c(), t = I();
    },
    m(l, o) {
      n.m(l, o), d(l, t, o);
    },
    p(l, [o]) {
      n.p(l, o);
    },
    i: M,
    o: M,
    d(l) {
      l && $(t), n.d(l);
    }
  };
}
function Bn(s, t, r) {
  let e, { value: n } = t;
  const l = { "\n": "\\n", "	": "\\t", "\r": "\\r" }, { displayMode: o } = K();
  return s.$$set = (i) => {
    "value" in i && r(2, n = i.value);
  }, s.$$.update = () => {
    s.$$.dirty & /*value*/
    4 && r(0, e = n.replace(/[\n\t\r]/g, (i) => l[i]));
  }, [e, o, n];
}
class Fn extends O {
  constructor(t) {
    super(), T(this, t, Bn, qn, C, { value: 2 }, Pn);
  }
}
function Kn(s) {
  U(s, "svelte-1eamqdt", ".i.svelte-1eamqdt{font-style:italic}.fn.svelte-1eamqdt,.i.svelte-1eamqdt{color:var(--function-color)}");
}
function Jn(s) {
  let t;
  return {
    c() {
      t = b("span"), t.textContent = "ƒ", g(t, "class", "i svelte-1eamqdt");
    },
    m(r, e) {
      d(r, t, e);
    },
    p: M,
    d(r) {
      r && $(t);
    }
  };
}
function Ie(s) {
  let t, r = qe(
    /*ctx*/
    s[2]
  ) + "", e;
  return {
    c() {
      t = b("span"), e = k(r), g(t, "class", "fn i svelte-1eamqdt");
    },
    m(n, l) {
      d(n, t, l), v(t, e);
    },
    p(n, l) {
      l & /*ctx*/
      4 && r !== (r = qe(
        /*ctx*/
        n[2]
      ) + "") && N(e, r);
    },
    d(n) {
      n && $(t);
    }
  };
}
function Me(s) {
  let t, r = Be(
    /*ctx*/
    s[2]
  ) + "", e;
  return {
    c() {
      t = b("span"), e = k(r), g(t, "class", "i svelte-1eamqdt");
    },
    m(n, l) {
      d(n, t, l), v(t, e);
    },
    p(n, l) {
      l & /*ctx*/
      4 && r !== (r = Be(
        /*ctx*/
        n[2]
      ) + "") && N(e, r);
    },
    d(n) {
      n && $(t);
    }
  };
}
function Un(s) {
  let t, r, e = !/*ctx*/
  s[2].isArrow && Ie(s), n = !/*ctx*/
  s[2].isClass && Me(s);
  return {
    c() {
      e && e.c(), t = I(), n && n.c(), r = I();
    },
    m(l, o) {
      e && e.m(l, o), d(l, t, o), n && n.m(l, o), d(l, r, o);
    },
    p(l, o) {
      /*ctx*/
      l[2].isArrow ? e && (e.d(1), e = null) : e ? e.p(l, o) : (e = Ie(l), e.c(), e.m(t.parentNode, t)), /*ctx*/
      l[2].isClass ? n && (n.d(1), n = null) : n ? n.p(l, o) : (n = Me(l), n.c(), n.m(r.parentNode, r));
    },
    d(l) {
      l && ($(t), $(r)), e && e.d(l), n && n.d(l);
    }
  };
}
function Ln(s) {
  let t, r = (
    /*key*/
    s[6] + ""
  ), e, n;
  return {
    c() {
      t = b("span"), e = k(r), g(t, "class", n = /*key*/
      s[6] === ee || /*key*/
      s[6] === te ? "internal" : "property");
    },
    m(l, o) {
      d(l, t, o), v(t, e);
    },
    p(l, o) {
      o & /*key*/
      64 && r !== (r = /*key*/
      l[6] + "") && N(e, r), o & /*key*/
      64 && n !== (n = /*key*/
      l[6] === ee || /*key*/
      l[6] === te ? "internal" : "property") && g(t, "class", n);
    },
    d(l) {
      l && $(t);
    }
  };
}
function Rn(s) {
  let t, r;
  return t = new E({
    props: {
      value: (
        /*getValue*/
        s[3](
          /*key*/
          s[6]
        )
      )
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*key*/
      64 && (l.value = /*getValue*/
      e[3](
        /*key*/
        e[6]
      )), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function zn(s) {
  let t, r;
  return t = new se({
    props: {
      value: (
        /*getValue*/
        s[3](
          /*key*/
          s[6]
        )
      )
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*key*/
      64 && (l.value = /*getValue*/
      e[3](
        /*key*/
        e[6]
      )), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function Gn(s) {
  let t, r;
  return {
    c() {
      t = b("span"), r = k(
        /*str*/
        s[0]
      ), g(t, "class", "i svelte-1eamqdt");
    },
    m(e, n) {
      d(e, t, n), v(t, r);
    },
    p(e, n) {
      n & /*str*/
      1 && N(
        r,
        /*str*/
        e[0]
      );
    },
    i: M,
    o: M,
    d(e) {
      e && $(t);
    }
  };
}
function Vn(s) {
  let t, r, e, n;
  const l = [Gn, zn, Rn], o = [];
  function i(a, u) {
    return (
      /*key*/
      a[6] === ee ? 0 : (
        /*key*/
        a[6] === "prototype" ? 1 : 2
      )
    );
  }
  return t = i(s), r = o[t] = l[t](s), {
    c() {
      r.c(), e = I();
    },
    m(a, u) {
      o[t].m(a, u), d(a, e, u), n = !0;
    },
    p(a, u) {
      let f = t;
      t = i(a), t === f ? o[t].p(a, u) : (q(), _(o[f], 1, 1, () => {
        o[f] = null;
      }), B(), r = o[t], r ? r.p(a, u) : (r = o[t] = l[t](a), r.c()), p(r, 1), r.m(e.parentNode, e));
    },
    i(a) {
      n || (p(r), n = !0);
    },
    o(a) {
      _(r), n = !1;
    },
    d(a) {
      a && $(e), o[t].d(a);
    }
  };
}
function Dn(s) {
  let t, r;
  return t = new F({
    props: {
      keys: (
        /*keys*/
        s[1]
      ),
      $$slots: {
        item_value: [
          Vn,
          ({ key: e }) => ({ 6: e }),
          ({ key: e }) => e ? 64 : 0
        ],
        item_key: [
          Ln,
          ({ key: e }) => ({ 6: e }),
          ({ key: e }) => e ? 64 : 0
        ],
        preview: [Un],
        summary: [Jn]
      },
      $$scope: { ctx: s }
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, [n]) {
      const l = {};
      n & /*keys*/
      2 && (l.keys = /*keys*/
      e[1]), n & /*$$scope, str, key, ctx*/
      197 && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
const ee = "[[Function]]", te = "[[Prototype]]";
function Wn(s) {
  const t = s.match(/^(?:(async)\s+)?(?:function)?(\*)?\s*([^(]+)?(\([^)]*\))\s*(=>)?/), r = t == null ? void 0 : t[1], e = t == null ? void 0 : t[2], n = t == null ? void 0 : t[3], l = t == null ? void 0 : t[4], o = t == null ? void 0 : t[5], i = s.match(/^class\s+([^\s]+)/), a = i == null ? void 0 : i[1];
  return {
    args: l,
    isAsync: r,
    isGenerator: e,
    fnName: n,
    isArrow: o,
    isClass: a
  };
}
function qe({ isGenerator: s, isAsync: t, isClass: r }) {
  return r ? `class ${r}` : (t ? "async " : "") + "ƒ" + (s ? "*" : "");
}
function Be({ isAsync: s, isArrow: t, fnName: r, args: e }) {
  return (t && s ? "async" : "") + " " + (r ?? "") + e + (t ? " => …" : "");
}
function Xn(s) {
  try {
    return s.toString();
  } catch {
    switch (s.constructor.name) {
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
function Zn(s, t, r) {
  let e, n, l, { value: o } = t;
  function i(u) {
    return u === te ? o.__proto__ : o[u];
  }
  function a(u) {
    return u === ee ? !0 : i(u);
  }
  return s.$$set = (u) => {
    "value" in u && r(4, o = u.value);
  }, s.$$.update = () => {
    s.$$.dirty & /*value*/
    16 && r(0, e = Xn(o)), s.$$.dirty & /*str*/
    1 && r(2, n = Wn(e));
  }, r(1, l = ["length", "name", "prototype", ee, te].filter(a)), [e, l, n, i, o];
}
class Hn extends O {
  constructor(t) {
    super(), T(this, t, Zn, Dn, C, { value: 4 }, Kn);
  }
}
function Qn(s) {
  let t, r = (
    /*isWritableStore*/
    s[3] ? "writable(" : "readable("
  ), e, n, l = ")", o, i;
  return n = new E({ props: { value: (
    /*storeValue*/
    s[2]
  ) } }), {
    c() {
      t = b("span"), e = k(r), h(n.$$.fragment), o = k(l), g(t, "class", "label");
    },
    m(a, u) {
      d(a, t, u), v(t, e), y(n, t, null), v(t, o), i = !0;
    },
    p(a, u) {
      (!i || u & /*isWritableStore*/
      8) && r !== (r = /*isWritableStore*/
      a[3] ? "writable(" : "readable(") && N(e, r);
      const f = {};
      u & /*storeValue*/
      4 && (f.value = /*storeValue*/
      a[2]), n.$set(f);
    },
    i(a) {
      i || (p(n.$$.fragment, a), i = !0);
    },
    o(a) {
      _(n.$$.fragment, a), i = !1;
    },
    d(a) {
      a && $(t), w(n);
    }
  };
}
function Yn(s) {
  let t, r = (
    /*item*/
    s[10] + ""
  ), e, n, l, o;
  return l = new E({
    props: {
      value: (
        /*value*/
        s[0][
          /*item*/
          s[10]
        ]
      )
    }
  }), {
    c() {
      t = b("span"), e = k(r), n = b("span"), n.textContent = ": ", h(l.$$.fragment), g(t, "class", "property"), g(n, "class", "operator");
    },
    m(i, a) {
      d(i, t, a), v(t, e), d(i, n, a), y(l, i, a), o = !0;
    },
    p(i, a) {
      (!o || a & /*item*/
      1024) && r !== (r = /*item*/
      i[10] + "") && N(e, r);
      const u = {};
      a & /*value, item*/
      1025 && (u.value = /*value*/
      i[0][
        /*item*/
        i[10]
      ]), l.$set(u);
    },
    i(i) {
      o || (p(l.$$.fragment, i), o = !0);
    },
    o(i) {
      _(l.$$.fragment, i), o = !1;
    },
    d(i) {
      i && ($(t), $(n)), w(l, i);
    }
  };
}
function xn(s) {
  let t, r;
  return t = new Q({
    props: {
      list: (
        /*previewKeys*/
        s[4]
      ),
      hasMore: (
        /*previewKeys*/
        s[4].length < /*objectKeys*/
        s[1].length
      ),
      prefix: "{",
      postfix: "}",
      root: (
        /*root*/
        s[9]
      ),
      $$slots: {
        item: [
          Yn,
          ({ item: e }) => ({ 10: e }),
          ({ item: e }) => e ? 1024 : 0
        ]
      },
      $$scope: { ctx: s }
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*previewKeys*/
      16 && (l.list = /*previewKeys*/
      e[4]), n & /*previewKeys, objectKeys*/
      18 && (l.hasMore = /*previewKeys*/
      e[4].length < /*objectKeys*/
      e[1].length), n & /*root*/
      512 && (l.root = /*root*/
      e[9]), n & /*$$scope, value, item*/
      3073 && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function er(s) {
  let t, r = (
    /*key*/
    s[8] + ""
  ), e, n;
  return {
    c() {
      t = b("span"), e = k(r), g(t, "class", n = /*key*/
      s[8] === ne ? "internal" : "property");
    },
    m(l, o) {
      d(l, t, o), v(t, e);
    },
    p(l, o) {
      o & /*key*/
      256 && r !== (r = /*key*/
      l[8] + "") && N(e, r), o & /*key*/
      256 && n !== (n = /*key*/
      l[8] === ne ? "internal" : "property") && g(t, "class", n);
    },
    d(l) {
      l && $(t);
    }
  };
}
function tr(s) {
  let t, r;
  return t = new E({
    props: {
      value: (
        /*getValue*/
        s[6](
          /*key*/
          s[8]
        )
      )
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*key*/
      256 && (l.value = /*getValue*/
      e[6](
        /*key*/
        e[8]
      )), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function nr(s) {
  let t, r;
  return t = new F({
    props: {
      keys: (
        /*keys*/
        s[5]
      ),
      $$slots: {
        item_value: [
          tr,
          ({ key: e }) => ({ 8: e }),
          ({ key: e }) => e ? 256 : 0
        ],
        item_key: [
          er,
          ({ key: e }) => ({ 8: e }),
          ({ key: e }) => e ? 256 : 0
        ],
        preview: [
          xn,
          ({ root: e }) => ({ 9: e }),
          ({ root: e }) => e ? 512 : 0
        ],
        summary: [Qn]
      },
      $$scope: { ctx: s }
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, [n]) {
      const l = {};
      n & /*keys*/
      32 && (l.keys = /*keys*/
      e[5]), n & /*$$scope, key, previewKeys, objectKeys, root, value, storeValue, isWritableStore*/
      2847 && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
const ne = "$value";
function rr(s, t, r) {
  let e, n, l, o, i, a, u = M, f = () => (u(), u = Ke(c, (j) => r(7, a = j)), c);
  s.$$.on_destroy.push(() => u());
  let { value: c } = t;
  f();
  function m(j) {
    return j === ne ? o : c[j];
  }
  return s.$$set = (j) => {
    "value" in j && f(r(0, c = j.value));
  }, s.$$.update = () => {
    s.$$.dirty & /*value*/
    1 && r(1, e = Object.getOwnPropertyNames(c)), s.$$.dirty & /*objectKeys*/
    2 && r(5, n = [ne, ...e]), s.$$.dirty & /*objectKeys*/
    2 && r(4, l = e.slice(0, 5)), s.$$.dirty & /*$value*/
    128 && r(2, o = a), s.$$.dirty & /*value*/
    1 && r(3, i = typeof c.set == "function");
  }, [
    c,
    e,
    o,
    i,
    l,
    n,
    m,
    a
  ];
}
class lr extends O {
  constructor(t) {
    super(), T(this, t, rr, nr, C, { value: 0 });
  }
}
function sr(s) {
  let t, r, e, n = (
    /*value*/
    s[0].length + ""
  ), l, o;
  return {
    c() {
      t = b("span"), r = k(
        /*nodeType*/
        s[1]
      ), e = k("("), l = k(n), o = k(")"), g(t, "class", "label");
    },
    m(i, a) {
      d(i, t, a), v(t, r), v(t, e), v(t, l), v(t, o);
    },
    p(i, a) {
      a & /*nodeType*/
      2 && N(
        r,
        /*nodeType*/
        i[1]
      ), a & /*value*/
      1 && n !== (n = /*value*/
      i[0].length + "") && N(l, n);
    },
    d(i) {
      i && $(t);
    }
  };
}
function or(s) {
  let t, r;
  return t = new E({ props: { value: (
    /*item*/
    s[8]
  ) } }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*item*/
      256 && (l.value = /*item*/
      e[8]), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function ar(s) {
  let t, r;
  return t = new Q({
    props: {
      list: (
        /*preview*/
        s[2]
      ),
      hasMore: (
        /*preview*/
        s[2].length < /*value*/
        s[0].length
      ),
      label: (
        /*nodeType*/
        s[1] + "(" + /*value*/
        s[0].length + ") "
      ),
      prefix: "[",
      postfix: "]",
      root: (
        /*root*/
        s[7]
      ),
      $$slots: {
        item: [
          or,
          ({ item: e }) => ({ 8: e }),
          ({ item: e }) => e ? 256 : 0
        ]
      },
      $$scope: { ctx: s }
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*preview*/
      4 && (l.list = /*preview*/
      e[2]), n & /*preview, value*/
      5 && (l.hasMore = /*preview*/
      e[2].length < /*value*/
      e[0].length), n & /*nodeType, value*/
      3 && (l.label = /*nodeType*/
      e[1] + "(" + /*value*/
      e[0].length + ") "), n & /*root*/
      128 && (l.root = /*root*/
      e[7]), n & /*$$scope, item*/
      768 && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function ir(s) {
  let t, r = String(
    /*key*/
    s[6]
  ) + "", e, n;
  return {
    c() {
      t = b("span"), e = k(r), g(t, "class", n = /*internalKeys*/
      s[4].includes(
        /*key*/
        s[6]
      ) ? "internal" : "property");
    },
    m(l, o) {
      d(l, t, o), v(t, e);
    },
    p(l, o) {
      o & /*key*/
      64 && r !== (r = String(
        /*key*/
        l[6]
      ) + "") && N(e, r), o & /*key*/
      64 && n !== (n = /*internalKeys*/
      l[4].includes(
        /*key*/
        l[6]
      ) ? "internal" : "property") && g(t, "class", n);
    },
    d(l) {
      l && $(t);
    }
  };
}
function ur(s) {
  let t, r;
  return t = new E({
    props: {
      value: (
        /*getValue*/
        s[5](
          /*key*/
          s[6]
        )
      )
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*key*/
      64 && (l.value = /*getValue*/
      e[5](
        /*key*/
        e[6]
      )), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function fr(s) {
  let t, r;
  return t = new F({
    props: {
      keys: (
        /*keys*/
        s[3]
      ),
      $$slots: {
        item_value: [
          ur,
          ({ key: e }) => ({ 6: e }),
          ({ key: e }) => e ? 64 : 0
        ],
        item_key: [
          ir,
          ({ key: e }) => ({ 6: e }),
          ({ key: e }) => e ? 64 : 0
        ],
        preview: [
          ar,
          ({ root: e }) => ({ 7: e }),
          ({ root: e }) => e ? 128 : 0
        ],
        summary: [sr]
      },
      $$scope: { ctx: s }
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, [n]) {
      const l = {};
      n & /*keys*/
      8 && (l.keys = /*keys*/
      e[3]), n & /*$$scope, key, preview, value, nodeType, root*/
      711 && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
const Fe = "Symbol(Symbol.toStringTag)";
function cr(s, t, r) {
  let e, n, { value: l } = t, { nodeType: o } = t;
  const i = ["buffer", "byteLength", "byteOffset", "length", Fe];
  function a(u) {
    return u === Fe ? l[Symbol.toStringTag] : l[u];
  }
  return s.$$set = (u) => {
    "value" in u && r(0, l = u.value), "nodeType" in u && r(1, o = u.nodeType);
  }, s.$$.update = () => {
    s.$$.dirty & /*value*/
    1 && r(3, e = [...Object.getOwnPropertyNames(l), ...i]), s.$$.dirty & /*value*/
    1 && r(2, n = l.slice(0, 5));
  }, [l, o, n, e, i, a];
}
class pr extends O {
  constructor(t) {
    super(), T(this, t, cr, fr, C, { value: 0, nodeType: 1 });
  }
}
function _r(s) {
  U(s, "svelte-17k1wqt", ".regex.svelte-17k1wqt{color:var(--regex-color)}");
}
function mr(s) {
  let t, r;
  return {
    c() {
      t = b("span"), r = k(
        /*str*/
        s[1]
      ), g(t, "class", "regex svelte-17k1wqt");
    },
    m(e, n) {
      d(e, t, n), v(t, r);
    },
    p(e, n) {
      n & /*str*/
      2 && N(
        r,
        /*str*/
        e[1]
      );
    },
    d(e) {
      e && $(t);
    }
  };
}
function dr(s) {
  let t, r;
  return {
    c() {
      t = b("span"), r = k(
        /*str*/
        s[1]
      ), g(t, "class", "regex svelte-17k1wqt");
    },
    m(e, n) {
      d(e, t, n), v(t, r);
    },
    p(e, n) {
      n & /*str*/
      2 && N(
        r,
        /*str*/
        e[1]
      );
    },
    d(e) {
      e && $(t);
    }
  };
}
function $r(s) {
  let t, r = String(
    /*key*/
    s[3]
  ) + "", e;
  return {
    c() {
      t = b("span"), e = k(r), g(t, "class", "internal");
    },
    m(n, l) {
      d(n, t, l), v(t, e);
    },
    p(n, l) {
      l & /*key*/
      8 && r !== (r = String(
        /*key*/
        n[3]
      ) + "") && N(e, r);
    },
    d(n) {
      n && $(t);
    }
  };
}
function gr(s) {
  let t, r;
  return t = new E({
    props: { value: (
      /*value*/
      s[0][
        /*key*/
        s[3]
      ]
    ) }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*value, key*/
      9 && (l.value = /*value*/
      e[0][
        /*key*/
        e[3]
      ]), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function vr(s) {
  let t, r;
  return t = new F({
    props: {
      keys: (
        /*keys*/
        s[2]
      ),
      $$slots: {
        item_value: [
          gr,
          ({ key: e }) => ({ 3: e }),
          ({ key: e }) => e ? 8 : 0
        ],
        item_key: [
          $r,
          ({ key: e }) => ({ 3: e }),
          ({ key: e }) => e ? 8 : 0
        ],
        preview: [dr],
        summary: [mr]
      },
      $$scope: { ctx: s }
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, [n]) {
      const l = {};
      n & /*$$scope, value, key, str*/
      27 && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function br(s, t, r) {
  let e, { value: n } = t;
  const l = [
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
  return s.$$set = (o) => {
    "value" in o && r(0, n = o.value);
  }, s.$$.update = () => {
    s.$$.dirty & /*value*/
    1 && r(1, e = n.toString());
  }, [n, e, l];
}
class kr extends O {
  constructor(t) {
    super(), T(this, t, br, vr, C, { value: 0 }, _r);
  }
}
function hr(s) {
  let t, r, e;
  const n = [
    { value: (
      /*value*/
      s[0]
    ) },
    /*props*/
    s[1]
  ];
  var l = (
    /*componentType*/
    s[2]
  );
  function o(i, a) {
    let u = {};
    for (let f = 0; f < n.length; f += 1)
      u = ce(u, n[f]);
    return a !== void 0 && a & /*value, props*/
    3 && (u = ce(u, ue(n, [
      a & /*value*/
      1 && { value: (
        /*value*/
        i[0]
      ) },
      a & /*props*/
      2 && fe(
        /*props*/
        i[1]
      )
    ]))), { props: u };
  }
  return l && (t = ie(l, o(s))), {
    c() {
      t && h(t.$$.fragment), r = I();
    },
    m(i, a) {
      t && y(t, i, a), d(i, r, a), e = !0;
    },
    p(i, [a]) {
      if (a & /*componentType*/
      4 && l !== (l = /*componentType*/
      i[2])) {
        if (t) {
          q();
          const u = t;
          _(u.$$.fragment, 1, 0, () => {
            w(u, 1);
          }), B();
        }
        l ? (t = ie(l, o(i, a)), h(t.$$.fragment), p(t.$$.fragment, 1), y(t, r.parentNode, r)) : t = null;
      } else if (l) {
        const u = a & /*value, props*/
        3 ? ue(n, [
          a & /*value*/
          1 && { value: (
            /*value*/
            i[0]
          ) },
          a & /*props*/
          2 && fe(
            /*props*/
            i[1]
          )
        ]) : {};
        t.$set(u);
      }
    },
    i(i) {
      e || (t && p(t.$$.fragment, i), e = !0);
    },
    o(i) {
      t && _(t.$$.fragment, i), e = !1;
    },
    d(i) {
      i && $(r), t && w(t, i);
    }
  };
}
function yr(s, t, r) {
  let e, n, l, { value: o } = t;
  const i = re();
  W(s, i, (f) => r(4, l = f));
  const { shouldTreatIterableAsObject: a } = K();
  function u(f, c) {
    switch (f) {
      case "Object":
        return typeof c.subscribe == "function" ? [lr] : [se];
      case "Error":
        return [Tn];
      case "Array":
        return [Kt];
      case "Map":
        return [pn];
      case "Iterable":
      case "Set":
        return [Ht, { nodeType: f }];
      case "Number":
        return [L, { nodeType: f }];
      case "String":
        return [Fn];
      case "Boolean":
        return [
          L,
          {
            nodeType: f,
            value: c ? "true" : "false"
          }
        ];
      case "Date":
        return [
          L,
          {
            nodeType: f,
            value: c.toISOString()
          }
        ];
      case "Null":
        return [L, { nodeType: f, value: "null" }];
      case "Undefined":
        return [L, { nodeType: f, value: "undefined" }];
      case "Function":
      case "AsyncFunction":
      case "AsyncGeneratorFunction":
      case "GeneratorFunction":
        return [Hn];
      case "Symbol":
        return [
          L,
          {
            nodeType: f,
            value: c.toString()
          }
        ];
      case "BigInt":
        return [
          L,
          {
            nodeType: f,
            value: String(c) + "n"
          }
        ];
      case "ArrayBuffer":
        return [
          L,
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
        return [pr, { nodeType: f }];
      case "RegExp":
        return [kr];
      default:
        return [se, { summary: f }];
    }
  }
  return s.$$set = (f) => {
    "value" in f && r(0, o = f.value);
  }, s.$$.update = () => {
    s.$$.dirty & /*value*/
    1 && X(i, l = Cn(o, a), l), s.$$.dirty & /*$nodeType, value*/
    17 && r(2, [e, n] = u(l, o), e, (r(1, n), r(4, l), r(0, o)));
  }, [o, n, e, i, l];
}
class E extends O {
  constructor(t) {
    super(), T(this, t, yr, hr, C, { value: 0 });
  }
}
function wr({ defaultExpandedPaths: s, defaultExpandedLevel: t }) {
  const r = s.map((n) => n.split("."));
  function e(n) {
    e:
      for (const l of r) {
        if (n.length > l.length)
          continue;
        const o = Math.min(n.length, l.length);
        for (let i = 0; i < o; i++)
          if (l[i] !== "*" && l[i] !== String(n[i]))
            continue e;
        return !0;
      }
    return !1;
  }
  return function({ keyPath: n, level: l }) {
    return l <= t || e(n);
  };
}
function jr(s) {
  U(s, "svelte-nh86pb", "div.svelte-nh86pb{--string-color:var(--json-tree-string-color, #cb3f41);--symbol-color:var(--json-tree-symbol-color, #cb3f41);--boolean-color:var(--json-tree-boolean-color, #112aa7);--function-color:var(--json-tree-function-color, #112aa7);--number-color:var(--json-tree-number-color, #3029cf);--label-color:var(--json-tree-label-color, #871d8f);--property-color:var(--json-tree-property-color, #000000);--arrow-color:var(--json-tree-arrow-color, #727272);--operator-color:var(--json-tree-operator-color, #727272);--null-color:var(--json-tree-null-color, #8d8d8d);--undefined-color:var(--json-tree-undefined-color, #8d8d8d);--date-color:var(--json-tree-date-color, #8d8d8d);--internal-color:var(--json-tree-internal-color, grey);--regex-color:var(--json-tree-regex-color, var(--string-color));--li-identation:var(--json-tree-li-indentation, 1em);--li-line-height:var(--json-tree-li-line-height, 1.3);font-size:var(--json-tree-font-size, 12px);font-family:var(--json-tree-font-family, 'Courier New', Courier, monospace)}div.svelte-nh86pb li{line-height:var(--li-line-height);display:var(--li-display, list-item);list-style:none}div.svelte-nh86pb,div.svelte-nh86pb ul{padding:0;margin:0}.expandable.svelte-nh86pb{margin-left:var(--li-identation)}div.svelte-nh86pb{cursor:default}div.svelte-nh86pb .label{color:var(--label-color)}div.svelte-nh86pb .property{color:var(--property-color)}div.svelte-nh86pb .internal{color:var(--internal-color)}div.svelte-nh86pb .operator{color:var(--operator-color)}span.svelte-nh86pb{white-space:pre-wrap}");
}
function Sr(s) {
  let t, r;
  return t = new E({ props: { value: (
    /*value*/
    s[0]
  ) } }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*value*/
      1 && (l.value = /*value*/
      e[0]), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function Nr(s) {
  let t, r;
  return {
    c() {
      t = b("span"), r = k(
        /*value*/
        s[0]
      ), g(t, "class", "svelte-nh86pb");
    },
    m(e, n) {
      d(e, t, n), v(t, r);
    },
    p(e, n) {
      n & /*value*/
      1 && N(
        r,
        /*value*/
        e[0]
      );
    },
    i: M,
    o: M,
    d(e) {
      e && $(t);
    }
  };
}
function Er(s) {
  let t, r;
  return t = new Le({
    props: {
      key: "$",
      expanded: (
        /*expanded*/
        s[2]
      ),
      $$slots: { default: [Ar] },
      $$scope: { ctx: s }
    }
  }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*$$scope, value*/
      257 && (l.$$scope = { dirty: n, ctx: e }), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function Ar(s) {
  let t, r;
  return t = new E({ props: { value: (
    /*value*/
    s[0]
  ) } }), {
    c() {
      h(t.$$.fragment);
    },
    m(e, n) {
      y(t, e, n), r = !0;
    },
    p(e, n) {
      const l = {};
      n & /*value*/
      1 && (l.value = /*value*/
      e[0]), t.$set(l);
    },
    i(e) {
      r || (p(t.$$.fragment, e), r = !0);
    },
    o(e) {
      _(t.$$.fragment, e), r = !1;
    },
    d(e) {
      w(t, e);
    }
  };
}
function Or(s) {
  let t, r, e, n;
  const l = [Er, Nr, Sr], o = [];
  function i(a, u) {
    return (
      /*expandable*/
      a[1] ? 0 : typeof /*value*/
      a[0] == "string" ? 1 : 2
    );
  }
  return r = i(s), e = o[r] = l[r](s), {
    c() {
      t = b("div"), e.c(), g(t, "class", "svelte-nh86pb"), R(
        t,
        "expandable",
        /*expandable*/
        s[1]
      );
    },
    m(a, u) {
      d(a, t, u), o[r].m(t, null), n = !0;
    },
    p(a, [u]) {
      let f = r;
      r = i(a), r === f ? o[r].p(a, u) : (q(), _(o[f], 1, 1, () => {
        o[f] = null;
      }), B(), e = o[r], e ? e.p(a, u) : (e = o[r] = l[r](a), e.c()), p(e, 1), e.m(t, null)), (!n || u & /*expandable*/
      2) && R(
        t,
        "expandable",
        /*expandable*/
        a[1]
      );
    },
    i(a) {
      n || (p(e), n = !0);
    },
    o(a) {
      _(e), n = !1;
    },
    d(a) {
      a && $(t), o[r].d();
    }
  };
}
function Tr(s, t, r) {
  let e, n, { value: l } = t, { shouldShowPreview: o = !0 } = t, { shouldTreatIterableAsObject: i = !1 } = t, { defaultExpandedPaths: a = [] } = t, { defaultExpandedLevel: u = 0 } = t;
  const f = re(!0);
  return K({
    expanded: f,
    isParentExpanded: Qe(!0),
    root: !0,
    shouldExpandNode: (c) => n(c),
    level: 0,
    keyPath: [],
    showPreview: o,
    shouldTreatIterableAsObject: i
  }), s.$$set = (c) => {
    "value" in c && r(0, l = c.value), "shouldShowPreview" in c && r(3, o = c.shouldShowPreview), "shouldTreatIterableAsObject" in c && r(4, i = c.shouldTreatIterableAsObject), "defaultExpandedPaths" in c && r(5, a = c.defaultExpandedPaths), "defaultExpandedLevel" in c && r(6, u = c.defaultExpandedLevel);
  }, s.$$.update = () => {
    s.$$.dirty & /*value*/
    1 && r(1, e = l && typeof l == "object"), s.$$.dirty & /*defaultExpandedPaths, defaultExpandedLevel*/
    96 && (n = wr({
      defaultExpandedPaths: a,
      defaultExpandedLevel: u
    }));
  }, [
    l,
    e,
    f,
    o,
    i,
    a,
    u
  ];
}
class Mr extends O {
  constructor(t) {
    super(), T(
      this,
      t,
      Tr,
      Or,
      C,
      {
        value: 0,
        shouldShowPreview: 3,
        shouldTreatIterableAsObject: 4,
        defaultExpandedPaths: 5,
        defaultExpandedLevel: 6
      },
      jr
    );
  }
}
export {
  Mr as default
};
