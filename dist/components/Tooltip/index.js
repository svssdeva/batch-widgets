import { jsx as an } from "react/jsx-runtime";
import * as S from "react";
import { useCallback as I, createContext as He, useMemo as me, createElement as P, useContext as xt, Fragment as ln, forwardRef as k, Children as ie, isValidElement as _e, cloneElement as qe, useEffect as D, useRef as M, useState as W, useLayoutEffect as Pt, useReducer as fn } from "react";
import * as un from "react-dom";
import dn, { flushSync as Ot } from "react-dom";
import { cn as pn } from "../../utils.js";
import '../../assets/index13.css';function K() {
  return K = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, K.apply(null, arguments);
}
function G(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (e == null || e(r), n === !1 || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  };
}
function hn(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Ct(...e) {
  return (t) => e.forEach(
    (n) => hn(n, t)
  );
}
function le(...e) {
  return I(Ct(...e), e);
}
function At(e, t = []) {
  let n = [];
  function o(i, s) {
    const a = /* @__PURE__ */ He(s), c = n.length;
    n = [
      ...n,
      s
    ];
    function l(u) {
      const { scope: p, children: d, ...h } = u, g = (p == null ? void 0 : p[e][c]) || a, m = me(
        () => h,
        Object.values(h)
      );
      return /* @__PURE__ */ P(g.Provider, {
        value: m
      }, d);
    }
    function f(u, p) {
      const d = (p == null ? void 0 : p[e][c]) || a, h = xt(d);
      if (h)
        return h;
      if (s !== void 0)
        return s;
      throw new Error(`\`${u}\` must be used within \`${i}\``);
    }
    return l.displayName = i + "Provider", [
      l,
      f
    ];
  }
  const r = () => {
    const i = n.map((s) => /* @__PURE__ */ He(s));
    return function(a) {
      const c = (a == null ? void 0 : a[e]) || i;
      return me(
        () => ({
          [`__scope${e}`]: {
            ...a,
            [e]: c
          }
        }),
        [
          a,
          c
        ]
      );
    };
  };
  return r.scopeName = e, [
    o,
    mn(r, ...t)
  ];
}
function mn(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const o = e.map(
      (r) => ({
        useScope: r(),
        scopeName: r.scopeName
      })
    );
    return function(i) {
      const s = o.reduce((a, { useScope: c, scopeName: l }) => {
        const u = c(i)[`__scope${l}`];
        return {
          ...a,
          ...u
        };
      }, {});
      return me(
        () => ({
          [`__scope${t.scopeName}`]: s
        }),
        [
          s
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Be() {
  return Be = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, Be.apply(null, arguments);
}
function We() {
  return We = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, We.apply(null, arguments);
}
function De() {
  return De = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, De.apply(null, arguments);
}
const Tt = /* @__PURE__ */ k((e, t) => {
  const { children: n, ...o } = e, r = ie.toArray(n), i = r.find(gn);
  if (i) {
    const s = i.props.children, a = r.map((c) => c === i ? ie.count(s) > 1 ? ie.only(null) : /* @__PURE__ */ _e(s) ? s.props.children : null : c);
    return /* @__PURE__ */ P(je, De({}, o, {
      ref: t
    }), /* @__PURE__ */ _e(s) ? /* @__PURE__ */ qe(s, void 0, a) : null);
  }
  return /* @__PURE__ */ P(je, De({}, o, {
    ref: t
  }), n);
});
Tt.displayName = "Slot";
const je = /* @__PURE__ */ k((e, t) => {
  const { children: n, ...o } = e;
  return /* @__PURE__ */ _e(n) ? /* @__PURE__ */ qe(n, {
    ...vn(o, n.props),
    ref: t ? Ct(t, n.ref) : n.ref
  }) : ie.count(n) > 1 ? ie.only(null) : null;
});
je.displayName = "SlotClone";
const Et = ({ children: e }) => /* @__PURE__ */ P(ln, null, e);
function gn(e) {
  return /* @__PURE__ */ _e(e) && e.type === Et;
}
function vn(e, t) {
  const n = {
    ...t
  };
  for (const o in t) {
    const r = e[o], i = t[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...a) => {
      i(...a), r(...a);
    } : r && (n[o] = r) : o === "style" ? n[o] = {
      ...r,
      ...i
    } : o === "className" && (n[o] = [
      r,
      i
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
const $n = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], oe = $n.reduce((e, t) => {
  const n = /* @__PURE__ */ k((o, r) => {
    const { asChild: i, ...s } = o, a = i ? Tt : t;
    return D(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ P(a, We({}, s, {
      ref: r
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function wn(e, t) {
  e && Ot(
    () => e.dispatchEvent(t)
  );
}
function fe(e) {
  const t = M(e);
  return D(() => {
    t.current = e;
  }), me(
    () => (...n) => {
      var o;
      return (o = t.current) === null || o === void 0 ? void 0 : o.call(t, ...n);
    },
    []
  );
}
function bn(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e);
  D(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return t.addEventListener("keydown", o), () => t.removeEventListener("keydown", o);
  }, [
    n,
    t
  ]);
}
const ze = "dismissableLayer.update", yn = "dismissableLayer.pointerDownOutside", xn = "dismissableLayer.focusOutside";
let ft;
const Pn = /* @__PURE__ */ He({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), On = /* @__PURE__ */ k((e, t) => {
  var n;
  const { disableOutsidePointerEvents: o = !1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: s, onInteractOutside: a, onDismiss: c, ...l } = e, f = xt(Pn), [u, p] = W(null), d = (n = u == null ? void 0 : u.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, h] = W({}), g = le(
    t,
    (x) => p(x)
  ), m = Array.from(f.layers), [v] = [
    ...f.layersWithOutsidePointerEventsDisabled
  ].slice(-1), $ = m.indexOf(v), w = u ? m.indexOf(u) : -1, b = f.layersWithOutsidePointerEventsDisabled.size > 0, y = w >= $, O = Cn((x) => {
    const R = x.target, N = [
      ...f.branches
    ].some(
      (L) => L.contains(R)
    );
    !y || N || (i == null || i(x), a == null || a(x), x.defaultPrevented || c == null || c());
  }, d), C = An((x) => {
    const R = x.target;
    [
      ...f.branches
    ].some(
      (L) => L.contains(R)
    ) || (s == null || s(x), a == null || a(x), x.defaultPrevented || c == null || c());
  }, d);
  return bn((x) => {
    w === f.layers.size - 1 && (r == null || r(x), !x.defaultPrevented && c && (x.preventDefault(), c()));
  }, d), D(() => {
    if (u)
      return o && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (ft = d.body.style.pointerEvents, d.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(u)), f.layers.add(u), ut(), () => {
        o && f.layersWithOutsidePointerEventsDisabled.size === 1 && (d.body.style.pointerEvents = ft);
      };
  }, [
    u,
    d,
    o,
    f
  ]), D(() => () => {
    u && (f.layers.delete(u), f.layersWithOutsidePointerEventsDisabled.delete(u), ut());
  }, [
    u,
    f
  ]), D(() => {
    const x = () => h({});
    return document.addEventListener(ze, x), () => document.removeEventListener(ze, x);
  }, []), /* @__PURE__ */ P(oe.div, Be({}, l, {
    ref: g,
    style: {
      pointerEvents: b ? y ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: G(e.onFocusCapture, C.onFocusCapture),
    onBlurCapture: G(e.onBlurCapture, C.onBlurCapture),
    onPointerDownCapture: G(e.onPointerDownCapture, O.onPointerDownCapture)
  }));
});
function Cn(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e), o = M(!1), r = M(() => {
  });
  return D(() => {
    const i = (a) => {
      if (a.target && !o.current) {
        let l = function() {
          _t(yn, n, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: a
        };
        a.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = l, t.addEventListener("click", r.current, {
          once: !0
        })) : l();
      } else
        t.removeEventListener("click", r.current);
      o.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", r.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function An(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e), o = M(!1);
  return D(() => {
    const r = (i) => {
      i.target && !o.current && _t(xn, n, {
        originalEvent: i
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function ut() {
  const e = new CustomEvent(ze);
  document.dispatchEvent(e);
}
function _t(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, {
    once: !0
  }), o ? wn(r, i) : r.dispatchEvent(i);
}
const ce = globalThis != null && globalThis.document ? Pt : () => {
}, Tn = S.useId || (() => {
});
let En = 0;
function _n(e) {
  const [t, n] = S.useState(Tn());
  return ce(() => {
    n(
      (o) => o ?? String(En++)
    );
  }, [
    e
  ]), t ? `radix-${t}` : "";
}
function ge() {
  return ge = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, ge.apply(null, arguments);
}
const Dn = ["top", "right", "bottom", "left"], U = Math.min, H = Math.max, Re = Math.round, Ae = Math.floor, ee = (e) => ({
  x: e,
  y: e
}), Rn = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Sn = {
  start: "end",
  end: "start"
};
function Ue(e, t, n) {
  return H(e, U(t, n));
}
function q(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Z(e) {
  return e.split("-")[0];
}
function ue(e) {
  return e.split("-")[1];
}
function Ze(e) {
  return e === "x" ? "y" : "x";
}
function Je(e) {
  return e === "y" ? "height" : "width";
}
function de(e) {
  return ["top", "bottom"].includes(Z(e)) ? "y" : "x";
}
function Qe(e) {
  return Ze(de(e));
}
function Ln(e, t, n) {
  n === void 0 && (n = !1);
  const o = ue(e), r = Qe(e), i = Je(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Se(s)), [s, Se(s)];
}
function Nn(e) {
  const t = Se(e);
  return [Ve(e), t, Ve(t)];
}
function Ve(e) {
  return e.replace(/start|end/g, (t) => Sn[t]);
}
function Mn(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function Fn(e, t, n, o) {
  const r = ue(e);
  let i = Mn(Z(e), n === "start", o);
  return r && (i = i.map((s) => s + "-" + r), t && (i = i.concat(i.map(Ve)))), i;
}
function Se(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Rn[t]);
}
function kn(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Dt(e) {
  return typeof e != "number" ? kn(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Le(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
function dt(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const i = de(t), s = Qe(t), a = Je(s), c = Z(t), l = i === "y", f = o.x + o.width / 2 - r.width / 2, u = o.y + o.height / 2 - r.height / 2, p = o[a] / 2 - r[a] / 2;
  let d;
  switch (c) {
    case "top":
      d = {
        x: f,
        y: o.y - r.height
      };
      break;
    case "bottom":
      d = {
        x: f,
        y: o.y + o.height
      };
      break;
    case "right":
      d = {
        x: o.x + o.width,
        y: u
      };
      break;
    case "left":
      d = {
        x: o.x - r.width,
        y: u
      };
      break;
    default:
      d = {
        x: o.x,
        y: o.y
      };
  }
  switch (ue(t)) {
    case "start":
      d[s] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      d[s] += p * (n && l ? -1 : 1);
      break;
  }
  return d;
}
const In = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: f,
    y: u
  } = dt(l, o, c), p = o, d = {}, h = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: m,
      fn: v
    } = a[g], {
      x: $,
      y: w,
      data: b,
      reset: y
    } = await v({
      x: f,
      y: u,
      initialPlacement: o,
      placement: p,
      strategy: r,
      middlewareData: d,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = $ ?? f, u = w ?? u, d = {
      ...d,
      [m]: {
        ...d[m],
        ...b
      }
    }, y && h <= 50 && (h++, typeof y == "object" && (y.placement && (p = y.placement), y.rects && (l = y.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : y.rects), {
      x: f,
      y: u
    } = dt(l, p, c)), g = -1);
  }
  return {
    x: f,
    y: u,
    placement: p,
    strategy: r,
    middlewareData: d
  };
};
async function ve(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: i,
    rects: s,
    elements: a,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: u = "floating",
    altBoundary: p = !1,
    padding: d = 0
  } = q(t, e), h = Dt(d), m = a[p ? u === "floating" ? "reference" : "floating" : u], v = Le(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(m))) == null || n ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: f,
    strategy: c
  })), $ = u === "floating" ? {
    x: o,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), b = await (i.isElement == null ? void 0 : i.isElement(w)) ? await (i.getScale == null ? void 0 : i.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, y = Le(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: $,
    offsetParent: w,
    strategy: c
  }) : $);
  return {
    top: (v.top - y.top + h.top) / b.y,
    bottom: (y.bottom - v.bottom + h.bottom) / b.y,
    left: (v.left - y.left + h.left) / b.x,
    right: (y.right - v.right + h.right) / b.x
  };
}
const Hn = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: c
    } = t, {
      element: l,
      padding: f = 0
    } = q(e, t) || {};
    if (l == null)
      return {};
    const u = Dt(f), p = {
      x: n,
      y: o
    }, d = Qe(r), h = Je(d), g = await s.getDimensions(l), m = d === "y", v = m ? "top" : "left", $ = m ? "bottom" : "right", w = m ? "clientHeight" : "clientWidth", b = i.reference[h] + i.reference[d] - p[d] - i.floating[h], y = p[d] - i.reference[d], O = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let C = O ? O[w] : 0;
    (!C || !await (s.isElement == null ? void 0 : s.isElement(O))) && (C = a.floating[w] || i.floating[h]);
    const x = b / 2 - y / 2, R = C / 2 - g[h] / 2 - 1, N = U(u[v], R), L = U(u[$], R), E = N, j = C - g[h] - L, T = C / 2 - g[h] / 2 + x, _ = Ue(E, T, j), F = !c.arrow && ue(r) != null && T !== _ && i.reference[h] / 2 - (T < E ? N : L) - g[h] / 2 < 0, A = F ? T < E ? T - E : T - j : 0;
    return {
      [d]: p[d] + A,
      data: {
        [d]: _,
        centerOffset: T - _ - A,
        ...F && {
          alignmentOffset: A
        }
      },
      reset: F
    };
  }
}), Bn = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: c,
        elements: l
      } = t, {
        mainAxis: f = !0,
        crossAxis: u = !0,
        fallbackPlacements: p,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: g = !0,
        ...m
      } = q(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const v = Z(r), $ = Z(a) === a, w = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), b = p || ($ || !g ? [Se(a)] : Nn(a));
      !p && h !== "none" && b.push(...Fn(a, g, h, w));
      const y = [a, ...b], O = await ve(t, m), C = [];
      let x = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (f && C.push(O[v]), u) {
        const E = Ln(r, s, w);
        C.push(O[E[0]], O[E[1]]);
      }
      if (x = [...x, {
        placement: r,
        overflows: C
      }], !C.every((E) => E <= 0)) {
        var R, N;
        const E = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1, j = y[E];
        if (j)
          return {
            data: {
              index: E,
              overflows: x
            },
            reset: {
              placement: j
            }
          };
        let T = (N = x.filter((_) => _.overflows[0] <= 0).sort((_, F) => _.overflows[1] - F.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!T)
          switch (d) {
            case "bestFit": {
              var L;
              const _ = (L = x.map((F) => [F.placement, F.overflows.filter((A) => A > 0).reduce((A, Q) => A + Q, 0)]).sort((F, A) => F[1] - A[1])[0]) == null ? void 0 : L[0];
              _ && (T = _);
              break;
            }
            case "initialPlacement":
              T = a;
              break;
          }
        if (r !== T)
          return {
            reset: {
              placement: T
            }
          };
      }
      return {};
    }
  };
};
function pt(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ht(e) {
  return Dn.some((t) => e[t] >= 0);
}
const Wn = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = q(e, t);
      switch (o) {
        case "referenceHidden": {
          const i = await ve(t, {
            ...r,
            elementContext: "reference"
          }), s = pt(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: ht(s)
            }
          };
        }
        case "escaped": {
          const i = await ve(t, {
            ...r,
            altBoundary: !0
          }), s = pt(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: ht(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function jn(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = Z(n), a = ue(n), c = de(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, f = i && c ? -1 : 1, u = q(t, e);
  let {
    mainAxis: p,
    crossAxis: d,
    alignmentAxis: h
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return a && typeof h == "number" && (d = a === "end" ? h * -1 : h), c ? {
    x: d * f,
    y: p * l
  } : {
    x: p * l,
    y: d * f
  };
}
const zn = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: i,
        placement: s,
        middlewareData: a
      } = t, c = await jn(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (o = a.arrow) != null && o.alignmentOffset ? {} : {
        x: r + c.x,
        y: i + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, Un = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (m) => {
            let {
              x: v,
              y: $
            } = m;
            return {
              x: v,
              y: $
            };
          }
        },
        ...c
      } = q(e, t), l = {
        x: n,
        y: o
      }, f = await ve(t, c), u = de(Z(r)), p = Ze(u);
      let d = l[p], h = l[u];
      if (i) {
        const m = p === "y" ? "top" : "left", v = p === "y" ? "bottom" : "right", $ = d + f[m], w = d - f[v];
        d = Ue($, d, w);
      }
      if (s) {
        const m = u === "y" ? "top" : "left", v = u === "y" ? "bottom" : "right", $ = h + f[m], w = h - f[v];
        h = Ue($, h, w);
      }
      const g = a.fn({
        ...t,
        [p]: d,
        [u]: h
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - o
        }
      };
    }
  };
}, Vn = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: i,
        middlewareData: s
      } = t, {
        offset: a = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = q(e, t), f = {
        x: n,
        y: o
      }, u = de(r), p = Ze(u);
      let d = f[p], h = f[u];
      const g = q(a, t), m = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (c) {
        const w = p === "y" ? "height" : "width", b = i.reference[p] - i.floating[w] + m.mainAxis, y = i.reference[p] + i.reference[w] - m.mainAxis;
        d < b ? d = b : d > y && (d = y);
      }
      if (l) {
        var v, $;
        const w = p === "y" ? "width" : "height", b = ["top", "left"].includes(Z(r)), y = i.reference[u] - i.floating[w] + (b && ((v = s.offset) == null ? void 0 : v[u]) || 0) + (b ? 0 : m.crossAxis), O = i.reference[u] + i.reference[w] + (b ? 0 : (($ = s.offset) == null ? void 0 : $[u]) || 0) - (b ? m.crossAxis : 0);
        h < y ? h = y : h > O && (h = O);
      }
      return {
        [p]: d,
        [u]: h
      };
    }
  };
}, Yn = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: o,
        platform: r,
        elements: i
      } = t, {
        apply: s = () => {
        },
        ...a
      } = q(e, t), c = await ve(t, a), l = Z(n), f = ue(n), u = de(n) === "y", {
        width: p,
        height: d
      } = o.floating;
      let h, g;
      l === "top" || l === "bottom" ? (h = l, g = f === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = l, h = f === "end" ? "top" : "bottom");
      const m = d - c.top - c.bottom, v = p - c.left - c.right, $ = U(d - c[h], m), w = U(p - c[g], v), b = !t.middlewareData.shift;
      let y = $, O = w;
      if (u ? O = f || b ? U(w, v) : v : y = f || b ? U($, m) : m, b && !f) {
        const x = H(c.left, 0), R = H(c.right, 0), N = H(c.top, 0), L = H(c.bottom, 0);
        u ? O = p - 2 * (x !== 0 || R !== 0 ? x + R : H(c.left, c.right)) : y = d - 2 * (N !== 0 || L !== 0 ? N + L : H(c.top, c.bottom));
      }
      await s({
        ...t,
        availableWidth: O,
        availableHeight: y
      });
      const C = await r.getDimensions(i.floating);
      return p !== C.width || d !== C.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function pe(e) {
  return Rt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function B(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function J(e) {
  var t;
  return (t = (Rt(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Rt(e) {
  return e instanceof Node || e instanceof B(e).Node;
}
function V(e) {
  return e instanceof Element || e instanceof B(e).Element;
}
function Y(e) {
  return e instanceof HTMLElement || e instanceof B(e).HTMLElement;
}
function mt(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof B(e).ShadowRoot;
}
function be(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = z(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function Xn(e) {
  return ["table", "td", "th"].includes(pe(e));
}
function et(e) {
  const t = tt(), n = z(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function Gn(e) {
  let t = te(e);
  for (; Y(t) && !ae(t); ) {
    if (et(t))
      return t;
    t = te(t);
  }
  return null;
}
function tt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ae(e) {
  return ["html", "body", "#document"].includes(pe(e));
}
function z(e) {
  return B(e).getComputedStyle(e);
}
function Me(e) {
  return V(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function te(e) {
  if (pe(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    mt(e) && e.host || // Fallback.
    J(e)
  );
  return mt(t) ? t.host : t;
}
function St(e) {
  const t = te(e);
  return ae(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Y(t) && be(t) ? t : St(t);
}
function $e(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = St(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), s = B(r);
  return i ? t.concat(s, s.visualViewport || [], be(r) ? r : [], s.frameElement && n ? $e(s.frameElement) : []) : t.concat(r, $e(r, [], n));
}
function Lt(e) {
  const t = z(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = Y(e), i = r ? e.offsetWidth : n, s = r ? e.offsetHeight : o, a = Re(n) !== i || Re(o) !== s;
  return a && (n = i, o = s), {
    width: n,
    height: o,
    $: a
  };
}
function nt(e) {
  return V(e) ? e : e.contextElement;
}
function se(e) {
  const t = nt(e);
  if (!Y(t))
    return ee(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: i
  } = Lt(t);
  let s = (i ? Re(n.width) : n.width) / o, a = (i ? Re(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Kn = /* @__PURE__ */ ee(0);
function Nt(e) {
  const t = B(e);
  return !tt() || !t.visualViewport ? Kn : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function qn(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== B(e) ? !1 : t;
}
function ne(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), i = nt(e);
  let s = ee(1);
  t && (o ? V(o) && (s = se(o)) : s = se(e));
  const a = qn(i, n, o) ? Nt(i) : ee(0);
  let c = (r.left + a.x) / s.x, l = (r.top + a.y) / s.y, f = r.width / s.x, u = r.height / s.y;
  if (i) {
    const p = B(i), d = o && V(o) ? B(o) : o;
    let h = p, g = h.frameElement;
    for (; g && o && d !== h; ) {
      const m = se(g), v = g.getBoundingClientRect(), $ = z(g), w = v.left + (g.clientLeft + parseFloat($.paddingLeft)) * m.x, b = v.top + (g.clientTop + parseFloat($.paddingTop)) * m.y;
      c *= m.x, l *= m.y, f *= m.x, u *= m.y, c += w, l += b, h = B(g), g = h.frameElement;
    }
  }
  return Le({
    width: f,
    height: u,
    x: c,
    y: l
  });
}
const Zn = [":popover-open", ":modal"];
function ot(e) {
  return Zn.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Jn(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const i = r === "fixed", s = J(o), a = t ? ot(t.floating) : !1;
  if (o === s || a && i)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = ee(1);
  const f = ee(0), u = Y(o);
  if ((u || !u && !i) && ((pe(o) !== "body" || be(s)) && (c = Me(o)), Y(o))) {
    const p = ne(o);
    l = se(o), f.x = p.x + o.clientLeft, f.y = p.y + o.clientTop;
  }
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + f.x,
    y: n.y * l.y - c.scrollTop * l.y + f.y
  };
}
function Qn(e) {
  return Array.from(e.getClientRects());
}
function Mt(e) {
  return ne(J(e)).left + Me(e).scrollLeft;
}
function eo(e) {
  const t = J(e), n = Me(e), o = e.ownerDocument.body, r = H(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), i = H(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + Mt(e);
  const a = -n.scrollTop;
  return z(o).direction === "rtl" && (s += H(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: i,
    x: s,
    y: a
  };
}
function to(e, t) {
  const n = B(e), o = J(e), r = n.visualViewport;
  let i = o.clientWidth, s = o.clientHeight, a = 0, c = 0;
  if (r) {
    i = r.width, s = r.height;
    const l = tt();
    (!l || l && t === "fixed") && (a = r.offsetLeft, c = r.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: c
  };
}
function no(e, t) {
  const n = ne(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, i = Y(e) ? se(e) : ee(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, c = r * i.x, l = o * i.y;
  return {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function gt(e, t, n) {
  let o;
  if (t === "viewport")
    o = to(e, n);
  else if (t === "document")
    o = eo(J(e));
  else if (V(t))
    o = no(t, n);
  else {
    const r = Nt(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return Le(o);
}
function Ft(e, t) {
  const n = te(e);
  return n === t || !V(n) || ae(n) ? !1 : z(n).position === "fixed" || Ft(n, t);
}
function oo(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = $e(e, [], !1).filter((a) => V(a) && pe(a) !== "body"), r = null;
  const i = z(e).position === "fixed";
  let s = i ? te(e) : e;
  for (; V(s) && !ae(s); ) {
    const a = z(s), c = et(s);
    !c && a.position === "fixed" && (r = null), (i ? !c && !r : !c && a.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || be(s) && !c && Ft(e, s)) ? o = o.filter((f) => f !== s) : r = a, s = te(s);
  }
  return t.set(e, o), o;
}
function ro(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const s = [...n === "clippingAncestors" ? ot(t) ? [] : oo(t, this._c) : [].concat(n), o], a = s[0], c = s.reduce((l, f) => {
    const u = gt(t, f, r);
    return l.top = H(u.top, l.top), l.right = U(u.right, l.right), l.bottom = U(u.bottom, l.bottom), l.left = H(u.left, l.left), l;
  }, gt(t, a, r));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function io(e) {
  const {
    width: t,
    height: n
  } = Lt(e);
  return {
    width: t,
    height: n
  };
}
function so(e, t, n) {
  const o = Y(t), r = J(t), i = n === "fixed", s = ne(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ee(0);
  if (o || !o && !i)
    if ((pe(t) !== "body" || be(r)) && (a = Me(t)), o) {
      const u = ne(t, !0, i, t);
      c.x = u.x + t.clientLeft, c.y = u.y + t.clientTop;
    } else
      r && (c.x = Mt(r));
  const l = s.left + a.scrollLeft - c.x, f = s.top + a.scrollTop - c.y;
  return {
    x: l,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Ie(e) {
  return z(e).position === "static";
}
function vt(e, t) {
  return !Y(e) || z(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function kt(e, t) {
  const n = B(e);
  if (ot(e))
    return n;
  if (!Y(e)) {
    let r = te(e);
    for (; r && !ae(r); ) {
      if (V(r) && !Ie(r))
        return r;
      r = te(r);
    }
    return n;
  }
  let o = vt(e, t);
  for (; o && Xn(o) && Ie(o); )
    o = vt(o, t);
  return o && ae(o) && Ie(o) && !et(o) ? n : o || Gn(e) || n;
}
const co = async function(e) {
  const t = this.getOffsetParent || kt, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: so(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function ao(e) {
  return z(e).direction === "rtl";
}
const lo = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Jn,
  getDocumentElement: J,
  getClippingRect: ro,
  getOffsetParent: kt,
  getElementRects: co,
  getClientRects: Qn,
  getDimensions: io,
  getScale: se,
  isElement: V,
  isRTL: ao
};
function fo(e, t) {
  let n = null, o;
  const r = J(e);
  function i() {
    var a;
    clearTimeout(o), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), i();
    const {
      left: l,
      top: f,
      width: u,
      height: p
    } = e.getBoundingClientRect();
    if (a || t(), !u || !p)
      return;
    const d = Ae(f), h = Ae(r.clientWidth - (l + u)), g = Ae(r.clientHeight - (f + p)), m = Ae(l), $ = {
      rootMargin: -d + "px " + -h + "px " + -g + "px " + -m + "px",
      threshold: H(0, U(1, c)) || 1
    };
    let w = !0;
    function b(y) {
      const O = y[0].intersectionRatio;
      if (O !== c) {
        if (!w)
          return s();
        O ? s(!1, O) : o = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      w = !1;
    }
    try {
      n = new IntersectionObserver(b, {
        ...$,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(b, $);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function uo(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = o, l = nt(e), f = r || i ? [...l ? $e(l) : [], ...$e(t)] : [];
  f.forEach((v) => {
    r && v.addEventListener("scroll", n, {
      passive: !0
    }), i && v.addEventListener("resize", n);
  });
  const u = l && a ? fo(l, n) : null;
  let p = -1, d = null;
  s && (d = new ResizeObserver((v) => {
    let [$] = v;
    $ && $.target === l && d && (d.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var w;
      (w = d) == null || w.observe(t);
    })), n();
  }), l && !c && d.observe(l), d.observe(t));
  let h, g = c ? ne(e) : null;
  c && m();
  function m() {
    const v = ne(e);
    g && (v.x !== g.x || v.y !== g.y || v.width !== g.width || v.height !== g.height) && n(), g = v, h = requestAnimationFrame(m);
  }
  return n(), () => {
    var v;
    f.forEach(($) => {
      r && $.removeEventListener("scroll", n), i && $.removeEventListener("resize", n);
    }), u == null || u(), (v = d) == null || v.disconnect(), d = null, c && cancelAnimationFrame(h);
  };
}
const po = zn, ho = Un, mo = Bn, go = Yn, vo = Wn, $t = Hn, $o = Vn, wo = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: lo,
    ...n
  }, i = {
    ...r.platform,
    _c: o
  };
  return In(e, t, {
    ...r,
    platform: i
  });
};
var Ee = typeof document < "u" ? Pt : D;
function Ne(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length)
        return !1;
      for (o = n; o-- !== 0; )
        if (!Ne(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (!(i === "_owner" && e.$$typeof) && !Ne(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function It(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function wt(e, t) {
  const n = It(e);
  return Math.round(t * n) / n;
}
function bt(e) {
  const t = S.useRef(e);
  return Ee(() => {
    t.current = e;
  }), t;
}
function bo(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: c,
    open: l
  } = e, [f, u] = S.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, d] = S.useState(o);
  Ne(p, o) || d(o);
  const [h, g] = S.useState(null), [m, v] = S.useState(null), $ = S.useCallback((A) => {
    A !== O.current && (O.current = A, g(A));
  }, []), w = S.useCallback((A) => {
    A !== C.current && (C.current = A, v(A));
  }, []), b = i || h, y = s || m, O = S.useRef(null), C = S.useRef(null), x = S.useRef(f), R = c != null, N = bt(c), L = bt(r), E = S.useCallback(() => {
    if (!O.current || !C.current)
      return;
    const A = {
      placement: t,
      strategy: n,
      middleware: p
    };
    L.current && (A.platform = L.current), wo(O.current, C.current, A).then((Q) => {
      const X = {
        ...Q,
        isPositioned: !0
      };
      j.current && !Ne(x.current, X) && (x.current = X, un.flushSync(() => {
        u(X);
      }));
    });
  }, [p, t, n, L]);
  Ee(() => {
    l === !1 && x.current.isPositioned && (x.current.isPositioned = !1, u((A) => ({
      ...A,
      isPositioned: !1
    })));
  }, [l]);
  const j = S.useRef(!1);
  Ee(() => (j.current = !0, () => {
    j.current = !1;
  }), []), Ee(() => {
    if (b && (O.current = b), y && (C.current = y), b && y) {
      if (N.current)
        return N.current(b, y, E);
      E();
    }
  }, [b, y, E, N, R]);
  const T = S.useMemo(() => ({
    reference: O,
    floating: C,
    setReference: $,
    setFloating: w
  }), [$, w]), _ = S.useMemo(() => ({
    reference: b,
    floating: y
  }), [b, y]), F = S.useMemo(() => {
    const A = {
      position: n,
      left: 0,
      top: 0
    };
    if (!_.floating)
      return A;
    const Q = wt(_.floating, f.x), X = wt(_.floating, f.y);
    return a ? {
      ...A,
      transform: "translate(" + Q + "px, " + X + "px)",
      ...It(_.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: Q,
      top: X
    };
  }, [n, a, _.floating, f.x, f.y]);
  return S.useMemo(() => ({
    ...f,
    update: E,
    refs: T,
    elements: _,
    floatingStyles: F
  }), [f, E, T, _, F]);
}
const yo = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? $t({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? $t({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, xo = (e, t) => ({
  ...po(e),
  options: [e, t]
}), Po = (e, t) => ({
  ...ho(e),
  options: [e, t]
}), Oo = (e, t) => ({
  ...$o(e),
  options: [e, t]
}), Co = (e, t) => ({
  ...mo(e),
  options: [e, t]
}), Ao = (e, t) => ({
  ...go(e),
  options: [e, t]
}), To = (e, t) => ({
  ...vo(e),
  options: [e, t]
}), Eo = (e, t) => ({
  ...yo(e),
  options: [e, t]
});
function Ye() {
  return Ye = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, Ye.apply(null, arguments);
}
const _o = /* @__PURE__ */ k((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...i } = e;
  return /* @__PURE__ */ P(oe.svg, Ye({}, i, {
    ref: t,
    width: o,
    height: r,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none"
  }), e.asChild ? n : /* @__PURE__ */ P("polygon", {
    points: "0,0 30,0 15,10"
  }));
}), Do = _o;
function Ro(e) {
  const [t, n] = W(void 0);
  return ce(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          s = l.inlineSize, a = l.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        n({
          width: s,
          height: a
        });
      });
      return o.observe(e, {
        box: "border-box"
      }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [
    e
  ]), t;
}
const Ht = "Popper", [Bt, Wt] = At(Ht), [So, jt] = Bt(Ht), Lo = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = W(null);
  return /* @__PURE__ */ P(So, {
    scope: t,
    anchor: o,
    onAnchorChange: r
  }, n);
}, No = "PopperAnchor", Mo = /* @__PURE__ */ k((e, t) => {
  const { __scopePopper: n, virtualRef: o, ...r } = e, i = jt(No, n), s = M(null), a = le(t, s);
  return D(() => {
    i.onAnchorChange((o == null ? void 0 : o.current) || s.current);
  }), o ? null : /* @__PURE__ */ P(oe.div, ge({}, r, {
    ref: a
  }));
}), zt = "PopperContent", [Fo, ko] = Bt(zt), Io = /* @__PURE__ */ k((e, t) => {
  var n, o, r, i, s, a, c, l;
  const { __scopePopper: f, side: u = "bottom", sideOffset: p = 0, align: d = "center", alignOffset: h = 0, arrowPadding: g = 0, avoidCollisions: m = !0, collisionBoundary: v = [], collisionPadding: $ = 0, sticky: w = "partial", hideWhenDetached: b = !1, updatePositionStrategy: y = "optimized", onPlaced: O, ...C } = e, x = jt(zt, f), [R, N] = W(null), L = le(
    t,
    (he) => N(he)
  ), [E, j] = W(null), T = Ro(E), _ = (n = T == null ? void 0 : T.width) !== null && n !== void 0 ? n : 0, F = (o = T == null ? void 0 : T.height) !== null && o !== void 0 ? o : 0, A = u + (d !== "center" ? "-" + d : ""), Q = typeof $ == "number" ? $ : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...$
  }, X = Array.isArray(v) ? v : [
    v
  ], Gt = X.length > 0, xe = {
    padding: Q,
    boundary: X.filter(jo),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: Gt
  }, { refs: Kt, floatingStyles: ct, placement: qt, isPositioned: Pe, middlewareData: re } = bo({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: A,
    whileElementsMounted: (...he) => uo(...he, {
      animationFrame: y === "always"
    }),
    elements: {
      reference: x.anchor
    },
    middleware: [
      xo({
        mainAxis: p + F,
        alignmentAxis: h
      }),
      m && Po({
        mainAxis: !0,
        crossAxis: !1,
        limiter: w === "partial" ? Oo() : void 0,
        ...xe
      }),
      m && Co({
        ...xe
      }),
      Ao({
        ...xe,
        apply: ({ elements: he, rects: lt, availableWidth: on, availableHeight: rn }) => {
          const { width: sn, height: cn } = lt.reference, Ce = he.floating.style;
          Ce.setProperty("--radix-popper-available-width", `${on}px`), Ce.setProperty("--radix-popper-available-height", `${rn}px`), Ce.setProperty("--radix-popper-anchor-width", `${sn}px`), Ce.setProperty("--radix-popper-anchor-height", `${cn}px`);
        }
      }),
      E && Eo({
        element: E,
        padding: g
      }),
      zo({
        arrowWidth: _,
        arrowHeight: F
      }),
      b && To({
        strategy: "referenceHidden",
        ...xe
      })
    ]
  }), [at, Zt] = Ut(qt), Oe = fe(O);
  ce(() => {
    Pe && (Oe == null || Oe());
  }, [
    Pe,
    Oe
  ]);
  const Jt = (r = re.arrow) === null || r === void 0 ? void 0 : r.x, Qt = (i = re.arrow) === null || i === void 0 ? void 0 : i.y, en = ((s = re.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !== 0, [tn, nn] = W();
  return ce(() => {
    R && nn(window.getComputedStyle(R).zIndex);
  }, [
    R
  ]), /* @__PURE__ */ P("div", {
    ref: Kt.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...ct,
      transform: Pe ? ct.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: tn,
      "--radix-popper-transform-origin": [
        (a = re.transformOrigin) === null || a === void 0 ? void 0 : a.x,
        (c = re.transformOrigin) === null || c === void 0 ? void 0 : c.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ P(Fo, {
    scope: f,
    placedSide: at,
    onArrowChange: j,
    arrowX: Jt,
    arrowY: Qt,
    shouldHideArrow: en
  }, /* @__PURE__ */ P(oe.div, ge({
    "data-side": at,
    "data-align": Zt
  }, C, {
    ref: L,
    style: {
      ...C.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: Pe ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = re.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
}), Ho = "PopperArrow", Bo = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Wo = /* @__PURE__ */ k(function(t, n) {
  const { __scopePopper: o, ...r } = t, i = ko(Ho, o), s = Bo[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ P("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0
      }
    }, /* @__PURE__ */ P(Do, ge({}, r, {
      ref: n,
      style: {
        ...r.style,
        // ensures the element can be measured correctly (mostly for if SVG)
        display: "block"
      }
    })))
  );
});
function jo(e) {
  return e !== null;
}
const zo = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, o, r, i, s;
    const { placement: a, rects: c, middlewareData: l } = t, u = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = u ? 0 : e.arrowWidth, d = u ? 0 : e.arrowHeight, [h, g] = Ut(a), m = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[g], v = ((o = (r = l.arrow) === null || r === void 0 ? void 0 : r.x) !== null && o !== void 0 ? o : 0) + p / 2, $ = ((i = (s = l.arrow) === null || s === void 0 ? void 0 : s.y) !== null && i !== void 0 ? i : 0) + d / 2;
    let w = "", b = "";
    return h === "bottom" ? (w = u ? m : `${v}px`, b = `${-d}px`) : h === "top" ? (w = u ? m : `${v}px`, b = `${c.floating.height + d}px`) : h === "right" ? (w = `${-d}px`, b = u ? m : `${$}px`) : h === "left" && (w = `${c.floating.width + d}px`, b = u ? m : `${$}px`), {
      data: {
        x: w,
        y: b
      }
    };
  }
});
function Ut(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Uo = Lo, Vo = Mo, Yo = Io, Xo = Wo;
function Xe() {
  return Xe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, Xe.apply(null, arguments);
}
const Go = /* @__PURE__ */ k((e, t) => {
  var n;
  const { container: o = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...r } = e;
  return o ? /* @__PURE__ */ dn.createPortal(/* @__PURE__ */ P(oe.div, Xe({}, r, {
    ref: t
  })), o) : null;
});
function Ko(e, t) {
  return fn((n, o) => {
    const r = t[n][o];
    return r ?? n;
  }, e);
}
const rt = (e) => {
  const { present: t, children: n } = e, o = qo(t), r = typeof n == "function" ? n({
    present: o.isPresent
  }) : ie.only(n), i = le(o.ref, r.ref);
  return typeof n == "function" || o.isPresent ? /* @__PURE__ */ qe(r, {
    ref: i
  }) : null;
};
rt.displayName = "Presence";
function qo(e) {
  const [t, n] = W(), o = M({}), r = M(e), i = M("none"), s = e ? "mounted" : "unmounted", [a, c] = Ko(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return D(() => {
    const l = Te(o.current);
    i.current = a === "mounted" ? l : "none";
  }, [
    a
  ]), ce(() => {
    const l = o.current, f = r.current;
    if (f !== e) {
      const p = i.current, d = Te(l);
      e ? c("MOUNT") : d === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(f && p !== d ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [
    e,
    c
  ]), ce(() => {
    if (t) {
      const l = (u) => {
        const d = Te(o.current).includes(u.animationName);
        u.target === t && d && Ot(
          () => c("ANIMATION_END")
        );
      }, f = (u) => {
        u.target === t && (i.current = Te(o.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      c("ANIMATION_END");
  }, [
    t,
    c
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(a),
    ref: I((l) => {
      l && (o.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Te(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Zo({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [o, r] = Jo({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, s = i ? e : o, a = fe(n), c = I((l) => {
    if (i) {
      const u = typeof l == "function" ? l(e) : l;
      u !== e && a(u);
    } else
      r(l);
  }, [
    i,
    e,
    r,
    a
  ]);
  return [
    s,
    c
  ];
}
function Jo({ defaultProp: e, onChange: t }) {
  const n = W(e), [o] = n, r = M(o), i = fe(t);
  return D(() => {
    r.current !== o && (i(o), r.current = o);
  }, [
    o,
    r,
    i
  ]), n;
}
function Ge() {
  return Ge = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        ({}).hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, Ge.apply(null, arguments);
}
const Qo = /* @__PURE__ */ k((e, t) => /* @__PURE__ */ P(oe.span, Ge({}, e, {
  ref: t,
  style: {
    // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...e.style
  }
}))), er = Qo, [Fe, Wr] = At("Tooltip", [
  Wt
]), ke = Wt(), tr = "TooltipProvider", nr = 700, Ke = "tooltip.open", [or, it] = Fe(tr), rr = (e) => {
  const { __scopeTooltip: t, delayDuration: n = nr, skipDelayDuration: o = 300, disableHoverableContent: r = !1, children: i } = e, [s, a] = W(!0), c = M(!1), l = M(0);
  return D(() => {
    const f = l.current;
    return () => window.clearTimeout(f);
  }, []), /* @__PURE__ */ P(or, {
    scope: t,
    isOpenDelayed: s,
    delayDuration: n,
    onOpen: I(() => {
      window.clearTimeout(l.current), a(!1);
    }, []),
    onClose: I(() => {
      window.clearTimeout(l.current), l.current = window.setTimeout(
        () => a(!0),
        o
      );
    }, [
      o
    ]),
    isPointerInTransitRef: c,
    onPointerInTransitChange: I((f) => {
      c.current = f;
    }, []),
    disableHoverableContent: r
  }, i);
}, st = "Tooltip", [ir, ye] = Fe(st), sr = (e) => {
  const { __scopeTooltip: t, children: n, open: o, defaultOpen: r = !1, onOpenChange: i, disableHoverableContent: s, delayDuration: a } = e, c = it(st, e.__scopeTooltip), l = ke(t), [f, u] = W(null), p = _n(), d = M(0), h = s ?? c.disableHoverableContent, g = a ?? c.delayDuration, m = M(!1), [v = !1, $] = Zo({
    prop: o,
    defaultProp: r,
    onChange: (C) => {
      C ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Ke))) : c.onClose(), i == null || i(C);
    }
  }), w = me(() => v ? m.current ? "delayed-open" : "instant-open" : "closed", [
    v
  ]), b = I(() => {
    window.clearTimeout(d.current), m.current = !1, $(!0);
  }, [
    $
  ]), y = I(() => {
    window.clearTimeout(d.current), $(!1);
  }, [
    $
  ]), O = I(() => {
    window.clearTimeout(d.current), d.current = window.setTimeout(() => {
      m.current = !0, $(!0);
    }, g);
  }, [
    g,
    $
  ]);
  return D(() => () => window.clearTimeout(d.current), []), /* @__PURE__ */ P(Uo, l, /* @__PURE__ */ P(ir, {
    scope: t,
    contentId: p,
    open: v,
    stateAttribute: w,
    trigger: f,
    onTriggerChange: u,
    onTriggerEnter: I(() => {
      c.isOpenDelayed ? O() : b();
    }, [
      c.isOpenDelayed,
      O,
      b
    ]),
    onTriggerLeave: I(() => {
      h ? y() : window.clearTimeout(d.current);
    }, [
      y,
      h
    ]),
    onOpen: b,
    onClose: y,
    disableHoverableContent: h
  }, n));
}, yt = "TooltipTrigger", cr = /* @__PURE__ */ k((e, t) => {
  const { __scopeTooltip: n, ...o } = e, r = ye(yt, n), i = it(yt, n), s = ke(n), a = M(null), c = le(t, a, r.onTriggerChange), l = M(!1), f = M(!1), u = I(
    () => l.current = !1,
    []
  );
  return D(() => () => document.removeEventListener("pointerup", u), [
    u
  ]), /* @__PURE__ */ P(Vo, K({
    asChild: !0
  }, s), /* @__PURE__ */ P(oe.button, K({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": r.open ? r.contentId : void 0,
    "data-state": r.stateAttribute
  }, o, {
    ref: c,
    onPointerMove: G(e.onPointerMove, (p) => {
      p.pointerType !== "touch" && !f.current && !i.isPointerInTransitRef.current && (r.onTriggerEnter(), f.current = !0);
    }),
    onPointerLeave: G(e.onPointerLeave, () => {
      r.onTriggerLeave(), f.current = !1;
    }),
    onPointerDown: G(e.onPointerDown, () => {
      l.current = !0, document.addEventListener("pointerup", u, {
        once: !0
      });
    }),
    onFocus: G(e.onFocus, () => {
      l.current || r.onOpen();
    }),
    onBlur: G(e.onBlur, r.onClose),
    onClick: G(e.onClick, r.onClose)
  })));
}), Vt = "TooltipPortal", [ar, lr] = Fe(Vt, {
  forceMount: void 0
}), fr = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: o, container: r } = e, i = ye(Vt, t);
  return /* @__PURE__ */ P(ar, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ P(rt, {
    present: n || i.open
  }, /* @__PURE__ */ P(Go, {
    asChild: !0,
    container: r
  }, o)));
}, we = "TooltipContent", ur = /* @__PURE__ */ k((e, t) => {
  const n = lr(we, e.__scopeTooltip), { forceMount: o = n.forceMount, side: r = "top", ...i } = e, s = ye(we, e.__scopeTooltip);
  return /* @__PURE__ */ P(rt, {
    present: o || s.open
  }, s.disableHoverableContent ? /* @__PURE__ */ P(Yt, K({
    side: r
  }, i, {
    ref: t
  })) : /* @__PURE__ */ P(dr, K({
    side: r
  }, i, {
    ref: t
  })));
}), dr = /* @__PURE__ */ k((e, t) => {
  const n = ye(we, e.__scopeTooltip), o = it(we, e.__scopeTooltip), r = M(null), i = le(t, r), [s, a] = W(null), { trigger: c, onClose: l } = n, f = r.current, { onPointerInTransitChange: u } = o, p = I(() => {
    a(null), u(!1);
  }, [
    u
  ]), d = I((h, g) => {
    const m = h.currentTarget, v = {
      x: h.clientX,
      y: h.clientY
    }, $ = vr(v, m.getBoundingClientRect()), w = $r(v, $), b = wr(g.getBoundingClientRect()), y = yr([
      ...w,
      ...b
    ]);
    a(y), u(!0);
  }, [
    u
  ]);
  return D(() => () => p(), [
    p
  ]), D(() => {
    if (c && f) {
      const h = (m) => d(m, f), g = (m) => d(m, c);
      return c.addEventListener("pointerleave", h), f.addEventListener("pointerleave", g), () => {
        c.removeEventListener("pointerleave", h), f.removeEventListener("pointerleave", g);
      };
    }
  }, [
    c,
    f,
    d,
    p
  ]), D(() => {
    if (s) {
      const h = (g) => {
        const m = g.target, v = {
          x: g.clientX,
          y: g.clientY
        }, $ = (c == null ? void 0 : c.contains(m)) || (f == null ? void 0 : f.contains(m)), w = !br(v, s);
        $ ? p() : w && (p(), l());
      };
      return document.addEventListener("pointermove", h), () => document.removeEventListener("pointermove", h);
    }
  }, [
    c,
    f,
    s,
    l,
    p
  ]), /* @__PURE__ */ P(Yt, K({}, e, {
    ref: i
  }));
}), [pr, hr] = Fe(st, {
  isInside: !1
}), Yt = /* @__PURE__ */ k((e, t) => {
  const { __scopeTooltip: n, children: o, "aria-label": r, onEscapeKeyDown: i, onPointerDownOutside: s, ...a } = e, c = ye(we, n), l = ke(n), { onClose: f } = c;
  return D(() => (document.addEventListener(Ke, f), () => document.removeEventListener(Ke, f)), [
    f
  ]), D(() => {
    if (c.trigger) {
      const u = (p) => {
        const d = p.target;
        d != null && d.contains(c.trigger) && f();
      };
      return window.addEventListener("scroll", u, {
        capture: !0
      }), () => window.removeEventListener("scroll", u, {
        capture: !0
      });
    }
  }, [
    c.trigger,
    f
  ]), /* @__PURE__ */ P(On, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: i,
    onPointerDownOutside: s,
    onFocusOutside: (u) => u.preventDefault(),
    onDismiss: f
  }, /* @__PURE__ */ P(Yo, K({
    "data-state": c.stateAttribute
  }, l, a, {
    ref: t,
    style: {
      ...a.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ P(Et, null, o), /* @__PURE__ */ P(pr, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ P(er, {
    id: c.contentId,
    role: "tooltip"
  }, r || o))));
}), mr = "TooltipArrow", gr = /* @__PURE__ */ k((e, t) => {
  const { __scopeTooltip: n, ...o } = e, r = ke(n);
  return hr(mr, n).isInside ? null : /* @__PURE__ */ P(Xo, K({}, r, o, {
    ref: t
  }));
});
function vr(e, t) {
  const n = Math.abs(t.top - e.y), o = Math.abs(t.bottom - e.y), r = Math.abs(t.right - e.x), i = Math.abs(t.left - e.x);
  switch (Math.min(n, o, r, i)) {
    case i:
      return "left";
    case r:
      return "right";
    case n:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function $r(e, t, n = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push({
        x: e.x - n,
        y: e.y + n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "bottom":
      o.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y - n
      });
      break;
    case "left":
      o.push({
        x: e.x + n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "right":
      o.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x - n,
        y: e.y + n
      });
      break;
  }
  return o;
}
function wr(e) {
  const { top: t, right: n, bottom: o, left: r } = e;
  return [
    {
      x: r,
      y: t
    },
    {
      x: n,
      y: t
    },
    {
      x: n,
      y: o
    },
    {
      x: r,
      y: o
    }
  ];
}
function br(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x, c = t[i].y, l = t[s].x, f = t[s].y;
    c > o != f > o && n < (l - a) * (o - c) / (f - c) + a && (r = !r);
  }
  return r;
}
function yr(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), xr(t);
}
function xr(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], s = t[t.length - 2];
      if ((i.x - s.x) * (r.y - s.y) >= (i.y - s.y) * (r.x - s.x))
        t.pop();
      else
        break;
    }
    t.push(r);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const r = e[o];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1], s = n[n.length - 2];
      if ((i.x - s.x) * (r.y - s.y) >= (i.y - s.y) * (r.x - s.x))
        n.pop();
      else
        break;
    }
    n.push(r);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
const Pr = rr, Or = sr, Cr = cr, Ar = fr, Xt = ur, Tr = gr, Er = "_TooltipContent_1bjfa_6", _r = "_slideDownAndFade_1bjfa_1", Dr = "_slideLeftAndFade_1bjfa_1", Rr = "_slideUpAndFade_1bjfa_1", Sr = "_slideRightAndFade_1bjfa_1", Lr = "_TooltipArrow_1bjfa_34", Nr = "_IconButton_1bjfa_38", Mr = {
  TooltipContent: Er,
  slideDownAndFade: _r,
  slideLeftAndFade: Dr,
  slideUpAndFade: Rr,
  slideRightAndFade: Sr,
  TooltipArrow: Lr,
  IconButton: Nr
}, jr = Pr, zr = Or, Ur = Cr, Vr = Tr, Yr = Ar, Fr = S.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ an(
  Xt,
  {
    ref: o,
    sideOffset: t,
    className: pn(Mr.TooltipContent, e),
    ...n
  }
));
Fr.displayName = Xt.displayName;
export {
  zr as Tooltip,
  Vr as TooltipArrow,
  Fr as TooltipContent,
  Yr as TooltipPortal,
  jr as TooltipProvider,
  Ur as TooltipTrigger
};
