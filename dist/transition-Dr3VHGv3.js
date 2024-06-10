import * as me from "react";
import v, { useState as R, useEffect as O, useLayoutEffect as Dt, useRef as b, createContext as D, useContext as S, forwardRef as Mt, Fragment as q, isValidElement as kt, cloneElement as Rt, createElement as xt, useId as Oe, useMemo as C, useSyncExternalStore as Ht, useReducer as It, createRef as jt, useCallback as Fe } from "react";
import { createPortal as st } from "react-dom";
var Ut = Object.defineProperty, _t = (e, t, n) => t in e ? Ut(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, je = (e, t, n) => (_t(e, typeof t != "symbol" ? t + "" : t, n), n);
let Wt = class {
  constructor() {
    je(this, "current", this.detect()), je(this, "handoffState", "pending"), je(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, le = new Wt();
function ze(e) {
  return le.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
function Ce(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function J() {
  let e = [], t = { addEventListener(n, r, l, i) {
    return n.addEventListener(r, l, i), t.add(() => n.removeEventListener(r, l, i));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    return t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    return t.add(() => clearTimeout(r));
  }, microTask(...n) {
    let r = { current: !0 };
    return Ce(() => {
      r.current && n[0]();
    }), t.add(() => {
      r.current = !1;
    });
  }, style(n, r, l) {
    let i = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: l }), this.add(() => {
      Object.assign(n.style, { [r]: i });
    });
  }, group(n) {
    let r = J();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.includes(n) || e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0)
        for (let l of e.splice(r, 1))
          l();
    };
  }, dispose() {
    for (let n of e.splice(0))
      n();
  } };
  return t;
}
function Ze() {
  let [e] = R(J);
  return O(() => () => e.dispose(), [e]), e;
}
let P = (e, t) => {
  le.isServer ? O(e, t) : Dt(e, t);
};
function U(e) {
  let t = b(e);
  return P(() => {
    t.current = e;
  }, [e]), t;
}
let w = function(e) {
  let t = U(e);
  return v.useCallback((...n) => t.current(...n), [t]);
}, Bt = D(void 0);
function Vt() {
  return S(Bt);
}
function pe(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function T(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((l) => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, T), r;
}
var Se = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Se || {}), Z = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Z || {});
function x({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: l, visible: i = !0, name: o, mergeRefs: a }) {
  a = a ?? qt;
  let u = ct(t, e);
  if (i)
    return Pe(u, n, r, o, a);
  let d = l ?? 0;
  if (d & 2) {
    let { static: s = !1, ...c } = u;
    if (s)
      return Pe(c, n, r, o, a);
  }
  if (d & 1) {
    let { unmount: s = !0, ...c } = u;
    return T(s ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Pe({ ...c, hidden: !0, style: { display: "none" } }, n, r, o, a);
    } });
  }
  return Pe(u, n, r, o, a);
}
function Pe(e, t = {}, n, r, l) {
  let { as: i = n, children: o, refName: a = "ref", ...u } = Ue(e, ["unmount", "static"]), d = e.ref !== void 0 ? { [a]: e.ref } : {}, s = typeof o == "function" ? o(t) : o;
  "className" in u && u.className && typeof u.className == "function" && (u.className = u.className(t)), u["aria-labelledby"] && u["aria-labelledby"] === u.id && (u["aria-labelledby"] = void 0);
  let c = {};
  if (t) {
    let h = !1, m = [];
    for (let [f, E] of Object.entries(t))
      typeof E == "boolean" && (h = !0), E === !0 && m.push(f.replace(/([A-Z])/g, (p) => `-${p.toLowerCase()}`));
    if (h) {
      c["data-headlessui-state"] = m.join(" ");
      for (let f of m)
        c[`data-${f}`] = "";
    }
  }
  if (i === q && (Object.keys(ce(u)).length > 0 || Object.keys(ce(c)).length > 0))
    if (!kt(s) || Array.isArray(s) && s.length > 1) {
      if (Object.keys(ce(u)).length > 0)
        throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(ce(u)).concat(Object.keys(ce(c))).map((h) => `  - ${h}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((h) => `  - ${h}`).join(`
`)].join(`
`));
    } else {
      let h = s.props, m = h == null ? void 0 : h.className, f = typeof m == "function" ? (...g) => pe(m(...g), u.className) : pe(m, u.className), E = f ? { className: f } : {}, p = ct(s.props, ce(Ue(u, ["ref"])));
      for (let g in c)
        g in p && delete c[g];
      return Rt(s, Object.assign({}, p, c, d, { ref: l(s.ref, d.ref) }, E));
    }
  return xt(i, Object.assign({}, Ue(u, ["ref"]), i !== q && d, i !== q && c), s);
}
function qt(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e)
      n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function ct(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let r of e)
    for (let l in r)
      l.startsWith("on") && typeof r[l] == "function" ? (n[l] != null || (n[l] = []), n[l].push(r[l])) : t[l] = r[l];
  if (t.disabled || t["aria-disabled"])
    for (let r in n)
      /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (n[r] = [(l) => {
        var i;
        return (i = l == null ? void 0 : l.preventDefault) == null ? void 0 : i.call(l);
      }]);
  for (let r in n)
    Object.assign(t, { [r](l, ...i) {
      let o = n[r];
      for (let a of o) {
        if ((l instanceof Event || (l == null ? void 0 : l.nativeEvent) instanceof Event) && l.defaultPrevented)
          return;
        a(l, ...i);
      }
    } });
  return t;
}
function M(e) {
  var t;
  return Object.assign(Mt(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function ce(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function Ue(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t)
    r in n && delete n[r];
  return n;
}
let Yt = "div";
var Ne = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ne || {});
function Gt(e, t) {
  var n;
  let { features: r = 1, ...l } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = l["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return x({ ourProps: i, theirProps: l, slot: {}, defaultTag: Yt, name: "Hidden" });
}
let Be = M(Gt), Kt = D(null);
function Xt({ children: e }) {
  let t = S(Kt);
  if (!t)
    return v.createElement(v.Fragment, null, e);
  let { target: n } = t;
  return n ? st(v.createElement(v.Fragment, null, e), n) : null;
}
let dt = Symbol();
function zt(e, t = !0) {
  return Object.assign(e, { [dt]: t });
}
function _(...e) {
  let t = b(e);
  O(() => {
    t.current = e;
  }, [e]);
  let n = w((r) => {
    for (let l of t.current)
      l != null && (typeof l == "function" ? l(r) : l.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[dt])) ? void 0 : n;
}
let Je = D(null);
Je.displayName = "DescriptionContext";
function ft() {
  let e = S(Je);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, ft), t;
  }
  return e;
}
function Zt() {
  let [e, t] = R([]);
  return [e.length > 0 ? e.join(" ") : void 0, C(() => function(n) {
    let r = w((i) => (t((o) => [...o, i]), () => t((o) => {
      let a = o.slice(), u = a.indexOf(i);
      return u !== -1 && a.splice(u, 1), a;
    }))), l = C(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return v.createElement(Je.Provider, { value: l }, n.children);
  }, [t])];
}
let Jt = "p";
function Qt(e, t) {
  let n = Oe(), r = Vt(), { id: l = `headlessui-description-${n}`, ...i } = e, o = ft(), a = _(t);
  P(() => o.register(l), [l, o.register]);
  let u = r || !1, d = C(() => ({ ...o.slot, disabled: u }), [o.slot, u]), s = { ref: a, ...o.props, id: l };
  return x({ ourProps: s, theirProps: i, slot: d, defaultTag: Jt, name: o.name || "Description" });
}
let en = M(Qt), tn = Object.assign(en, {});
var mt = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(mt || {});
let nn = D(() => {
});
function rn({ value: e, children: t }) {
  return v.createElement(nn.Provider, { value: e }, t);
}
let Ve = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map();
function ot(e) {
  var t;
  let n = (t = ve.get(e)) != null ? t : 0;
  return ve.set(e, n + 1), n !== 0 ? () => it(e) : (Ve.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => it(e));
}
function it(e) {
  var t;
  let n = (t = ve.get(e)) != null ? t : 1;
  if (n === 1 ? ve.delete(e) : ve.set(e, n - 1), n !== 1)
    return;
  let r = Ve.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, Ve.delete(e));
}
function ln({ allowed: e, disallowed: t } = {}, n = !0) {
  P(() => {
    var r, l;
    if (!n)
      return;
    let i = J();
    for (let a of (r = t == null ? void 0 : t()) != null ? r : [])
      a && i.add(ot(a));
    let o = (l = e == null ? void 0 : e()) != null ? l : [];
    for (let a of o) {
      if (!a)
        continue;
      let u = ze(a);
      if (!u)
        continue;
      let d = a.parentElement;
      for (; d && d !== u.body; ) {
        for (let s of d.children)
          o.some((c) => s.contains(c)) || i.add(ot(s));
        d = d.parentElement;
      }
    }
    return i.dispose;
  }, [n, e, t]);
}
function pt(e, t, n = !0) {
  let r = U((l) => {
    let i = l.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && t();
  });
  O(() => {
    if (!n)
      return;
    let l = e === null ? null : e instanceof HTMLElement ? e : e.current;
    if (!l)
      return;
    let i = J();
    if (typeof ResizeObserver < "u") {
      let o = new ResizeObserver(() => r.current(l));
      o.observe(l), i.add(() => o.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let o = new IntersectionObserver(() => r.current(l));
      o.observe(l), i.add(() => o.disconnect());
    }
    return () => i.dispose();
  }, [e, r, n]);
}
let qe = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), on = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var V = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(V || {}), Ye = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ye || {}), an = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(an || {});
function un(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(qe)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function sn(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(on)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var vt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(vt || {});
function cn(e, t = 0) {
  var n;
  return e === ((n = ze(e)) == null ? void 0 : n.body) ? !1 : T(t, { 0() {
    return e.matches(qe);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(qe))
        return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var dn = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(dn || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Y(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let fn = ["textarea", "input"].join(",");
function mn(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, fn)) != null ? n : !1;
}
function pn(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let l = t(n), i = t(r);
    if (l === null || i === null)
      return 0;
    let o = l.compareDocumentPosition(i);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function he(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: l = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, o = Array.isArray(e) ? n ? pn(e) : e : t & 64 ? sn(e) : un(e);
  l.length > 0 && o.length > 1 && (o = o.filter((m) => !l.some((f) => f != null && "current" in f ? (f == null ? void 0 : f.current) === m : f === m))), r = r ?? i.activeElement;
  let a = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, o.indexOf(r)) - 1;
    if (t & 4)
      return Math.max(0, o.indexOf(r)) + 1;
    if (t & 8)
      return o.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = t & 32 ? { preventScroll: !0 } : {}, s = 0, c = o.length, h;
  do {
    if (s >= c || s + c <= 0)
      return 0;
    let m = u + s;
    if (t & 16)
      m = (m + c) % c;
    else {
      if (m < 0)
        return 3;
      if (m >= c)
        return 1;
    }
    h = o[m], h == null || h.focus(d), s += a;
  } while (h !== i.activeElement);
  return t & 6 && mn(h) && h.select(), 2;
}
function ht() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function vn() {
  return /Android/gi.test(window.navigator.userAgent);
}
function hn() {
  return ht() || vn();
}
function Le(e, t, n) {
  let r = U(t);
  O(() => {
    function l(i) {
      r.current(i);
    }
    return document.addEventListener(e, l, n), () => document.removeEventListener(e, l, n);
  }, [e, n]);
}
function gt(e, t, n) {
  let r = U(t);
  O(() => {
    function l(i) {
      r.current(i);
    }
    return window.addEventListener(e, l, n), () => window.removeEventListener(e, l, n);
  }, [e, n]);
}
function gn(e, t, n = !0) {
  let r = b(!1);
  O(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function l(o, a) {
    if (!r.current || o.defaultPrevented)
      return;
    let u = a(o);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected)
      return;
    let d = function s(c) {
      return typeof c == "function" ? s(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let s of d) {
      if (s === null)
        continue;
      let c = s instanceof HTMLElement ? s : s.current;
      if (c != null && c.contains(u) || o.composed && o.composedPath().includes(c))
        return;
    }
    return !cn(u, vt.Loose) && u.tabIndex !== -1 && o.preventDefault(), t(o, u);
  }
  let i = b(null);
  Le("pointerdown", (o) => {
    var a, u;
    r.current && (i.current = ((u = (a = o.composedPath) == null ? void 0 : a.call(o)) == null ? void 0 : u[0]) || o.target);
  }, !0), Le("mousedown", (o) => {
    var a, u;
    r.current && (i.current = ((u = (a = o.composedPath) == null ? void 0 : a.call(o)) == null ? void 0 : u[0]) || o.target);
  }, !0), Le("click", (o) => {
    hn() || i.current && (l(o, () => i.current), i.current = null);
  }, !0), Le("touchend", (o) => l(o, () => o.target instanceof HTMLElement ? o.target : null), !0), gt("blur", (o) => l(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function ge(...e) {
  return C(() => ze(...e), [...e]);
}
function Et(e, t, n, r) {
  let l = U(n);
  O(() => {
    e = e ?? window;
    function i(o) {
      l.current(o);
    }
    return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function En(e) {
  return Ht(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function bn(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(l) {
    return r.add(l), () => r.delete(l);
  }, dispatch(l, ...i) {
    let o = t[l].call(n, ...i);
    o && (n = o, r.forEach((a) => a()));
  } };
}
function wn() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement, l = (n = t.defaultView) != null ? n : window;
    e = Math.max(0, l.innerWidth - r.clientWidth);
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, l = Math.max(0, r.clientWidth - r.offsetWidth), i = Math.max(0, e - l);
    n.style(r, "paddingRight", `${i}px`);
  } };
}
function yn() {
  return ht() ? { before({ doc: e, d: t, meta: n }) {
    function r(l) {
      return n.containers.flatMap((i) => i()).some((i) => i.contains(l));
    }
    t.microTask(() => {
      var l;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let a = J();
        a.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => a.dispose()));
      }
      let i = (l = window.scrollY) != null ? l : window.pageYOffset, o = null;
      t.addEventListener(e, "click", (a) => {
        if (a.target instanceof HTMLElement)
          try {
            let u = a.target.closest("a");
            if (!u)
              return;
            let { hash: d } = new URL(u.href), s = e.querySelector(d);
            s && !r(s) && (o = s);
          } catch {
          }
      }, !0), t.addEventListener(e, "touchstart", (a) => {
        if (a.target instanceof HTMLElement)
          if (r(a.target)) {
            let u = a.target;
            for (; u.parentElement && r(u.parentElement); )
              u = u.parentElement;
            t.style(u, "overscrollBehavior", "contain");
          } else
            t.style(a.target, "touchAction", "none");
      }), t.addEventListener(e, "touchmove", (a) => {
        if (a.target instanceof HTMLElement) {
          if (a.target.tagName === "INPUT")
            return;
          if (r(a.target)) {
            let u = a.target;
            for (; u.parentElement && u.dataset.headlessuiPortal !== "" && !(u.scrollHeight > u.clientHeight || u.scrollWidth > u.clientWidth); )
              u = u.parentElement;
            u.dataset.headlessuiPortal === "" && a.preventDefault();
          } else
            a.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var a;
        let u = (a = window.scrollY) != null ? a : window.pageYOffset;
        i !== u && window.scrollTo(0, i), o && o.isConnected && (o.scrollIntoView({ block: "nearest" }), o = null);
      });
    });
  } } : {};
}
function $n() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Tn(e) {
  let t = {};
  for (let n of e)
    Object.assign(t, n(t));
  return t;
}
let re = bn(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: J(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: Tn(n) }, l = [yn(), wn(), $n()];
  l.forEach(({ before: i }) => i == null ? void 0 : i(r)), l.forEach(({ after: i }) => i == null ? void 0 : i(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
re.subscribe(() => {
  let e = re.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e)
    t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", l = n.count !== 0;
    (l && !r || !l && r) && re.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && re.dispatch("TEARDOWN", n);
  }
});
function Fn(e, t, n = () => ({ containers: [] })) {
  let r = En(re), l = e ? r.get(e) : void 0, i = l ? l.count > 0 : !1;
  return P(() => {
    if (!(!e || !t))
      return re.dispatch("PUSH", e, n), () => re.dispatch("POP", e, n);
  }, [t, e]), i;
}
function Pn(e, t, n = () => [document.body]) {
  Fn(e, t, (r) => {
    var l;
    return { containers: [...(l = r.containers) != null ? l : [], n] };
  });
}
function Qe(e, t) {
  let n = b([]), r = w(e);
  O(() => {
    let l = [...n.current];
    for (let [i, o] of t.entries())
      if (n.current[i] !== o) {
        let a = r(t, l);
        return n.current = t, a;
      }
  }, [r, ...t]);
}
let et = D(null);
et.displayName = "OpenClosedContext";
var A = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(A || {});
function tt() {
  return S(et);
}
function Ln({ value: e, children: t }) {
  return v.createElement(et.Provider, { value: e }, t);
}
function Sn(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t());
}
let z = [];
Sn(() => {
  function e(t) {
    t.target instanceof HTMLElement && t.target !== document.body && z[0] !== t.target && (z.unshift(t.target), z = z.filter((n) => n != null && n.isConnected), z.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function bt(e) {
  let t = w(e), n = b(!1);
  O(() => (n.current = !1, () => {
    n.current = !0, Ce(() => {
      n.current && t();
    });
  }), [t]);
}
function Nn() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in me ? ((t) => t.useSyncExternalStore)(me)(() => () => {
  }, () => !1, () => !e) : !1;
}
function Ee() {
  let e = Nn(), [t, n] = me.useState(le.isHandoffComplete);
  return t && le.isHandoffComplete === !1 && n(!1), me.useEffect(() => {
    t !== !0 && n(!0);
  }, [t]), me.useEffect(() => le.handoff(), []), e ? !1 : t;
}
let wt = D(!1);
function An() {
  return S(wt);
}
function at(e) {
  return v.createElement(wt.Provider, { value: e.force }, e.children);
}
function On(e) {
  let t = An(), n = S($t), r = ge(e), [l, i] = R(() => {
    var o;
    if (!t && n !== null)
      return (o = n.current) != null ? o : null;
    if (le.isServer)
      return null;
    let a = r == null ? void 0 : r.getElementById("headlessui-portal-root");
    if (a)
      return a;
    if (r === null)
      return null;
    let u = r.createElement("div");
    return u.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(u);
  });
  return O(() => {
    l !== null && (r != null && r.body.contains(l) || r == null || r.body.appendChild(l));
  }, [l, r]), O(() => {
    t || n !== null && i(n.current);
  }, [n, i, t]), l;
}
let yt = q, Cn = M(function(e, t) {
  let n = e, r = b(null), l = _(zt((s) => {
    r.current = s;
  }), t), i = ge(r), o = On(r), [a] = R(() => {
    var s;
    return le.isServer ? null : (s = i == null ? void 0 : i.createElement("div")) != null ? s : null;
  }), u = S(Ge), d = Ee();
  return P(() => {
    !o || !a || o.contains(a) || (a.setAttribute("data-headlessui-portal", ""), o.appendChild(a));
  }, [o, a]), P(() => {
    if (a && u)
      return u.register(a);
  }, [u, a]), bt(() => {
    var s;
    !o || !a || (a instanceof Node && o.contains(a) && o.removeChild(a), o.childNodes.length <= 0 && ((s = o.parentElement) == null || s.removeChild(o)));
  }), d ? !o || !a ? null : st(x({ ourProps: { ref: l }, theirProps: n, slot: {}, defaultTag: yt, name: "Portal" }), a) : null;
});
function Dn(e, t) {
  let n = _(t), { enabled: r = !0, ...l } = e;
  return r ? v.createElement(Cn, { ...l, ref: n }) : x({ ourProps: { ref: n }, theirProps: l, slot: {}, defaultTag: yt, name: "Portal" });
}
let Mn = q, $t = D(null);
function kn(e, t) {
  let { target: n, ...r } = e, l = { ref: _(t) };
  return v.createElement($t.Provider, { value: n }, x({ ourProps: l, theirProps: r, defaultTag: Mn, name: "Popover.Group" }));
}
let Ge = D(null);
function Rn() {
  let e = S(Ge), t = b([]), n = w((i) => (t.current.push(i), e && e.register(i), () => r(i))), r = w((i) => {
    let o = t.current.indexOf(i);
    o !== -1 && t.current.splice(o, 1), e && e.unregister(i);
  }), l = C(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, C(() => function({ children: i }) {
    return v.createElement(Ge.Provider, { value: l }, i);
  }, [l])];
}
let xn = M(Dn), Hn = M(kn), ut = Object.assign(xn, { Group: Hn });
function In() {
  var e;
  let [t] = R(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [n, r] = R((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return P(() => {
    if (!t)
      return;
    function l(i) {
      r(i.matches);
    }
    return t.addEventListener("change", l), () => t.removeEventListener("change", l);
  }, [t]), n;
}
function jn({ defaultContainers: e = [], portals: t, mainTreeNodeRef: n } = {}) {
  var r;
  let l = b((r = n == null ? void 0 : n.current) != null ? r : null), i = ge(l), o = w(() => {
    var a, u, d;
    let s = [];
    for (let c of e)
      c !== null && (c instanceof HTMLElement ? s.push(c) : "current" in c && c.current instanceof HTMLElement && s.push(c.current));
    if (t != null && t.current)
      for (let c of t.current)
        s.push(c);
    for (let c of (a = i == null ? void 0 : i.querySelectorAll("html > *, body > *")) != null ? a : [])
      c !== document.body && c !== document.head && c instanceof HTMLElement && c.id !== "headlessui-portal-root" && (c.contains(l.current) || c.contains((d = (u = l.current) == null ? void 0 : u.getRootNode()) == null ? void 0 : d.host) || s.some((h) => c.contains(h)) || s.push(c));
    return s;
  });
  return { resolveContainers: o, contains: w((a) => o().some((u) => u.contains(a))), mainTreeNodeRef: l, MainTreeNode: C(() => function() {
    return n != null ? null : v.createElement(Be, { features: Ne.Hidden, ref: l });
  }, [l, n]) };
}
let nt = D(() => {
});
nt.displayName = "StackContext";
var Ke = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Ke || {});
function Un() {
  return S(nt);
}
function _n({ children: e, onUpdate: t, type: n, element: r, enabled: l }) {
  let i = Un(), o = w((...a) => {
    t == null || t(...a), i(...a);
  });
  return P(() => {
    let a = l === void 0 || l === !0;
    return a && o(0, n, r), () => {
      a && o(1, n, r);
    };
  }, [o, n, r, l]), v.createElement(nt.Provider, { value: o }, e);
}
function be() {
  let e = b(!1);
  return P(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var fe = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(fe || {});
function Wn() {
  let e = b(0);
  return gt("keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function Tt(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current)
    n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let Bn = "div";
var B = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.AutoFocus = 32] = "AutoFocus", e[e.All = 30] = "All", e))(B || {});
function Vn(e, t) {
  let n = b(null), r = _(n, t), { initialFocus: l, initialFocusFallback: i, containers: o, features: a = 30, ...u } = e;
  Ee() || (a = 1);
  let d = ge(n);
  Kn({ ownerDocument: d }, !!(a & 16));
  let s = Xn({ ownerDocument: d, container: n, initialFocus: l, initialFocusFallback: i }, a);
  zn({ ownerDocument: d, container: n, containers: o, previousActiveElement: s }, !!(a & 8));
  let c = Wn(), h = w((p) => {
    let g = n.current;
    g && ((F) => F())(() => {
      T(c.current, { [fe.Forwards]: () => {
        he(g, V.First, { skipElements: [p.relatedTarget, i] });
      }, [fe.Backwards]: () => {
        he(g, V.Last, { skipElements: [p.relatedTarget, i] });
      } });
    });
  }), m = Ze(), f = b(!1), E = { ref: r, onKeyDown(p) {
    p.key == "Tab" && (f.current = !0, m.requestAnimationFrame(() => {
      f.current = !1;
    }));
  }, onBlur(p) {
    if (!(a & 8))
      return;
    let g = Tt(o);
    n.current instanceof HTMLElement && g.add(n.current);
    let F = p.relatedTarget;
    F instanceof HTMLElement && F.dataset.headlessuiFocusGuard !== "true" && (Ft(g, F) || (f.current ? he(n.current, T(c.current, { [fe.Forwards]: () => V.Next, [fe.Backwards]: () => V.Previous }) | V.WrapAround, { relativeTo: p.target }) : p.target instanceof HTMLElement && Y(p.target)));
  } };
  return v.createElement(v.Fragment, null, !!(a & 4) && v.createElement(Be, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: h, features: Ne.Focusable }), x({ ourProps: E, theirProps: u, defaultTag: Bn, name: "FocusTrap" }), !!(a & 4) && v.createElement(Be, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: h, features: Ne.Focusable }));
}
let qn = M(Vn), Yn = Object.assign(qn, { features: B });
function Gn(e = !0) {
  let t = b(z.slice());
  return Qe(([n], [r]) => {
    r === !0 && n === !1 && Ce(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = z.slice());
  }, [e, z, t]), w(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function Kn({ ownerDocument: e }, t) {
  let n = Gn(t);
  Qe(() => {
    t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && Y(n());
  }, [t]), bt(() => {
    t && Y(n());
  });
}
function Xn({ ownerDocument: e, container: t, initialFocus: n, initialFocusFallback: r }, l) {
  let i = !!(l & 2), o = b(null), a = be();
  return Qe(() => {
    if (!i) {
      r != null && r.current && Y(r.current);
      return;
    }
    let u = t.current;
    u && Ce(() => {
      if (!a.current)
        return;
      let d = e == null ? void 0 : e.activeElement;
      if (n != null && n.current) {
        if ((n == null ? void 0 : n.current) === d) {
          o.current = d;
          return;
        }
      } else if (u.contains(d)) {
        o.current = d;
        return;
      }
      if (n != null && n.current)
        Y(n.current);
      else {
        if (l & 32) {
          if (he(u, V.First | V.AutoFocus) !== Ye.Error)
            return;
        } else if (he(u, V.First) !== Ye.Error)
          return;
        if (r != null && r.current && (Y(r.current), (e == null ? void 0 : e.activeElement) === r.current))
          return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      o.current = e == null ? void 0 : e.activeElement;
    });
  }, [r, i, l]), o;
}
function zn({ ownerDocument: e, container: t, containers: n, previousActiveElement: r }, l) {
  let i = be();
  Et(e == null ? void 0 : e.defaultView, "focus", (o) => {
    if (!l || !i.current)
      return;
    let a = Tt(n);
    t.current instanceof HTMLElement && a.add(t.current);
    let u = r.current;
    if (!u)
      return;
    let d = o.target;
    d && d instanceof HTMLElement ? Ft(a, d) ? (r.current = d, Y(d)) : (o.preventDefault(), o.stopPropagation(), Y(u)) : Y(r.current);
  }, !0);
}
function Ft(e, t) {
  for (let n of e)
    if (n.contains(t))
      return !0;
  return !1;
}
var Zn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Zn || {}), Jn = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(Jn || {});
let Qn = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, Ae = D(null);
Ae.displayName = "DialogContext";
function rt(e) {
  let t = S(Ae);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, rt), n;
  }
  return t;
}
function er(e, t) {
  return T(t.type, Qn, e, t);
}
let tr = "div", nr = Se.RenderStrategy | Se.Static;
function rr(e, t) {
  let n = Oe(), { id: r = `headlessui-dialog-${n}`, open: l, onClose: i, initialFocus: o, role: a = "dialog", autoFocus: u = !0, __demoMode: d = !1, ...s } = e, [c, h] = R(0), m = b(!1);
  a = function() {
    return a === "dialog" || a === "alertdialog" ? a : (m.current || (m.current = !0, console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let f = tt();
  l === void 0 && f !== null && (l = (f & A.Open) === A.Open);
  let E = b(null), p = _(E, t), g = ge(E), F = e.hasOwnProperty("open") || f !== null, oe = e.hasOwnProperty("onClose");
  if (!F && !oe)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!F)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!oe)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof l != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`);
  if (typeof i != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${i}`);
  let y = l ? 0 : 1, [H, we] = It(er, { titleId: null, descriptionId: null, panelRef: jt() }), W = w(() => i(!1)), I = w(($) => we({ type: 0, id: $ })), Q = Ee() ? y === 0 : !1, ee = c > 1, ie = S(Ae) !== null, [ae, G] = Rn(), ue = { get current() {
    var $;
    return ($ = H.panelRef.current) != null ? $ : E.current;
  } }, { resolveContainers: te, mainTreeNodeRef: Re, MainTreeNode: ye } = jn({ portals: ae, defaultContainers: [ue] }), $e = ee ? "parent" : "leaf", K = f !== null ? (f & A.Closing) === A.Closing : !1, xe = ee || K ? !1 : Q;
  ln({ allowed: w(() => {
    var $, ne;
    return [(ne = ($ = E.current) == null ? void 0 : $.closest("[data-headlessui-portal]")) != null ? ne : null];
  }), disallowed: w(() => {
    var $, ne;
    return [(ne = ($ = Re.current) == null ? void 0 : $.closest("body > *:not(#headlessui-portal-root)")) != null ? ne : null];
  }) }, d ? !1 : xe), gn(te, ($) => {
    $.preventDefault(), W();
  }, !(!Q || ee));
  let se = !(ee || y !== 0);
  Et(g == null ? void 0 : g.defaultView, "keydown", ($) => {
    se && ($.defaultPrevented || $.key === mt.Escape && ($.preventDefault(), $.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), W()));
  }), Pn(g, d ? !1 : !(K || y !== 0 || ie), te), pt(E, W, y === 0);
  let [k, He] = Zt(), j = C(() => [{ dialogState: y, close: W, setTitleId: I }, H], [y, H, W, I]), L = C(() => ({ open: y === 0 }), [y]), N = { ref: p, id: r, role: a, tabIndex: -1, "aria-modal": d ? void 0 : y === 0 ? !0 : void 0, "aria-labelledby": H.titleId, "aria-describedby": k }, Ct = !In(), Te = Q ? T($e, { parent: B.RestoreFocus, leaf: B.All & ~B.FocusLock }) : B.None;
  return u && (Te |= B.AutoFocus), Ct || (Te &= ~B.InitialFocus), d && (Te = B.None), v.createElement(_n, { type: "Dialog", enabled: y === 0, element: E, onUpdate: w(($, ne) => {
    ne === "Dialog" && T($, { [Ke.Add]: () => h((Ie) => Ie + 1), [Ke.Remove]: () => h((Ie) => Ie - 1) });
  }) }, v.createElement(at, { force: !0 }, v.createElement(ut, null, v.createElement(Ae.Provider, { value: j }, v.createElement(ut.Group, { target: E }, v.createElement(at, { force: !1 }, v.createElement(He, { slot: L, name: "Dialog.Description" }, v.createElement(G, null, v.createElement(Yn, { initialFocus: o, initialFocusFallback: d ? void 0 : E, containers: te, features: Te }, v.createElement(rn, { value: W }, x({ ourProps: N, theirProps: s, slot: L, defaultTag: tr, features: nr, visible: y === 0, name: "Dialog" })))))))))), v.createElement(Xt, null, v.createElement(ye, null)));
}
let lr = "div";
function or(e, t) {
  let n = Oe(), { id: r = `headlessui-dialog-panel-${n}`, ...l } = e, [{ dialogState: i }, o] = rt("Dialog.Panel"), a = _(t, o.panelRef), u = C(() => ({ open: i === 0 }), [i]), d = w((s) => {
    s.stopPropagation();
  });
  return x({ ourProps: { ref: a, id: r, onClick: d }, theirProps: l, slot: u, defaultTag: lr, name: "Dialog.Panel" });
}
let ir = "h2";
function ar(e, t) {
  let n = Oe(), { id: r = `headlessui-dialog-title-${n}`, ...l } = e, [{ dialogState: i, setTitleId: o }] = rt("Dialog.Title"), a = _(t);
  O(() => (o(r), () => o(null)), [r, o]);
  let u = C(() => ({ open: i === 0 }), [i]);
  return x({ ourProps: { ref: a, id: r }, theirProps: l, slot: u, defaultTag: ir, name: "Dialog.Title" });
}
let ur = M(rr), sr = M(or), cr = M(ar), Lr = Object.assign(ur, { Panel: sr, Title: cr, Description: tn });
function dr(e = 0) {
  let [t, n] = R(e), r = be(), l = Fe((u) => {
    r.current && n((d) => d | u);
  }, [t, r]), i = Fe((u) => !!(t & u), [t]), o = Fe((u) => {
    r.current && n((d) => d & ~u);
  }, [n, r]), a = Fe((u) => {
    r.current && n((d) => d ^ u);
  }, [n]);
  return { flags: t, addFlag: l, hasFlag: i, removeFlag: o, toggleFlag: a };
}
function Pt(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function _e(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function We(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function fr(e, t) {
  let n = Pt(t), r = J();
  if (!e)
    return r.dispose;
  let { transitionDuration: l, transitionDelay: i } = getComputedStyle(e), [o, a] = [l, i].map((d) => {
    let [s = 0] = d.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, h) => h - c);
    return s;
  }), u = o + a;
  if (u !== 0) {
    let d = r.group((s) => {
      let c = s.setTimeout(() => {
        n(), s.dispose();
      }, u);
      s.addEventListener(e, "transitionrun", (h) => {
        h.target === h.currentTarget && (c(), s.addEventListener(e, "transitioncancel", (m) => {
          m.target === m.currentTarget && (n(), d());
        }));
      });
    });
    r.addEventListener(e, "transitionend", (s) => {
      s.target === s.currentTarget && (n(), r.dispose());
    });
  } else
    n();
  return r.dispose;
}
function mr(e, { direction: t, done: n, classes: r, inFlight: l }) {
  let i = J(), o = n !== void 0 ? Pt(n) : () => {
  };
  t === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
  let a = T(t, { enter: () => r.enter, leave: () => r.leave }), u = T(t, { enter: () => r.enterTo, leave: () => r.leaveTo }), d = T(t, { enter: () => r.enterFrom, leave: () => r.leaveFrom });
  return pr(e, { prepare() {
    We(e, ...r.base, ...r.enter, ...r.enterTo, ...r.enterFrom, ...r.leave, ...r.leaveFrom, ...r.leaveTo, ...r.entered), _e(e, ...r.base, ...a, ...d);
  }, inFlight: l }), l && (l.current = !0), i.nextFrame(() => {
    i.add(fr(e, () => (We(e, ...r.base, ...a), _e(e, ...r.base, ...r.entered, ...u), l && (l.current = !1), o()))), We(e, ...r.base, ...a, ...d), _e(e, ...r.base, ...a, ...u);
  }), i.dispose;
}
function pr(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function vr({ container: e, direction: t, classes: n, onStart: r, onStop: l }) {
  let i = be(), o = Ze(), a = b(!1);
  P(() => {
    if (t === "idle" || !i.current)
      return;
    r.current(t);
    let u = e.current;
    return u ? o.add(mr(u, { direction: t, classes: n.current, inFlight: a, done() {
      l.current(t);
    } })) : l.current(t), o.dispose;
  }, [t]);
}
function X(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
function Lt(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : Nt) !== q || v.Children.count(e.children) === 1;
}
let De = D(null);
De.displayName = "TransitionContext";
var hr = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(hr || {});
function gr() {
  let e = S(De);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function Er() {
  let e = S(Me);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let Me = D(null);
Me.displayName = "NestingContext";
function ke(e) {
  return "children" in e ? ke(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function St(e, t) {
  let n = U(e), r = b([]), l = be(), i = Ze(), o = w((m, f = Z.Hidden) => {
    let E = r.current.findIndex(({ el: p }) => p === m);
    E !== -1 && (T(f, { [Z.Unmount]() {
      r.current.splice(E, 1);
    }, [Z.Hidden]() {
      r.current[E].state = "hidden";
    } }), i.microTask(() => {
      var p;
      !ke(r) && l.current && ((p = n.current) == null || p.call(n));
    }));
  }), a = w((m) => {
    let f = r.current.find(({ el: E }) => E === m);
    return f ? f.state !== "visible" && (f.state = "visible") : r.current.push({ el: m, state: "visible" }), () => o(m, Z.Unmount);
  }), u = b([]), d = b(Promise.resolve()), s = b({ enter: [], leave: [], idle: [] }), c = w((m, f, E) => {
    u.current.splice(0), t && (t.chains.current[f] = t.chains.current[f].filter(([p]) => p !== m)), t == null || t.chains.current[f].push([m, new Promise((p) => {
      u.current.push(p);
    })]), t == null || t.chains.current[f].push([m, new Promise((p) => {
      Promise.all(s.current[f].map(([g, F]) => F)).then(() => p());
    })]), f === "enter" ? d.current = d.current.then(() => t == null ? void 0 : t.wait.current).then(() => E(f)) : E(f);
  }), h = w((m, f, E) => {
    Promise.all(s.current[f].splice(0).map(([p, g]) => g)).then(() => {
      var p;
      (p = u.current.shift()) == null || p();
    }).then(() => E(f));
  });
  return C(() => ({ children: r, register: a, unregister: o, onStart: c, onStop: h, wait: d, chains: s }), [a, o, r, c, h, s, d]);
}
let Nt = q, At = Se.RenderStrategy;
function br(e, t) {
  var n, r, l;
  let { beforeEnter: i, afterEnter: o, beforeLeave: a, afterLeave: u, enter: d, enterFrom: s, enterTo: c, entered: h, leave: m, leaveFrom: f, leaveTo: E, ...p } = e, g = b(null), F = Lt(e), oe = _(...F ? [g, t] : t === null ? [] : [t]), y = (n = p.unmount) == null || n ? Z.Unmount : Z.Hidden, { show: H, appear: we, initial: W } = gr(), [I, Q] = R(H ? "visible" : "hidden"), ee = Er(), { register: ie, unregister: ae } = ee;
  P(() => ie(g), [ie, g]), P(() => {
    if (y === Z.Hidden && g.current) {
      if (H && I !== "visible") {
        Q("visible");
        return;
      }
      return T(I, { hidden: () => ae(g), visible: () => ie(g) });
    }
  }, [I, g, ie, ae, H, y]);
  let G = U({ base: X(p.className), enter: X(d), enterFrom: X(s), enterTo: X(c), entered: X(h), leave: X(m), leaveFrom: X(f), leaveTo: X(E) }), ue = U({ beforeEnter: i, afterEnter: o, beforeLeave: a, afterLeave: u }), te = Ee();
  P(() => {
    if (F && te && I === "visible" && g.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [g, I, te, F]);
  let Re = W && !we, ye = we && H && W, $e = ye ? "enter" : !te || Re ? "idle" : H ? "enter" : "leave", K = dr(0), xe = w((j) => T(j, { enter: () => {
    var L, N;
    K.addFlag(A.Opening), (N = (L = ue.current).beforeEnter) == null || N.call(L);
  }, leave: () => {
    var L, N;
    K.addFlag(A.Closing), (N = (L = ue.current).beforeLeave) == null || N.call(L);
  }, idle: () => {
  } })), lt = w((j) => T(j, { enter: () => {
    var L, N;
    K.removeFlag(A.Opening), (N = (L = ue.current).afterEnter) == null || N.call(L);
  }, leave: () => {
    var L, N;
    K.removeFlag(A.Closing), (N = (L = ue.current).afterLeave) == null || N.call(L);
  }, idle: () => {
  } })), se = b(!1), de = St(() => {
    se.current || (Q("hidden"), ae(g));
  }, ee);
  vr({ container: g, classes: G, direction: $e, onStart: U((j) => {
    se.current = !0, de.onStart(g, j, xe);
  }), onStop: U((j) => {
    se.current = !1, de.onStop(g, j, lt), j === "leave" && !ke(de) && (Q("hidden"), ae(g));
  }) });
  let k = p, He = { ref: oe };
  return ye ? k = { ...k, className: pe(p.className, ...G.current.enter, ...G.current.enterFrom) } : se.current ? (k.className = pe(p.className, (r = g.current) == null ? void 0 : r.className), k.className === "" && delete k.className) : (k.className = pe(p.className, (l = g.current) == null ? void 0 : l.className, ...T($e, { enter: [...G.current.enterTo, ...G.current.entered], leave: G.current.leaveTo, idle: [] })), k.className === "" && delete k.className), v.createElement(Me.Provider, { value: de }, v.createElement(Ln, { value: T(I, { visible: A.Open, hidden: A.Closed }) | K.flags }, x({ ourProps: He, theirProps: k, defaultTag: Nt, features: At, visible: I === "visible", name: "Transition.Child" })));
}
function wr(e, t) {
  let { show: n, appear: r = !1, unmount: l = !0, ...i } = e, o = b(null), a = Lt(e), u = _(...a ? [o, t] : t === null ? [] : [t]);
  Ee();
  let d = tt();
  if (n === void 0 && d !== null && (n = (d & A.Open) === A.Open), n === void 0)
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [s, c] = R(n ? "visible" : "hidden"), h = St(() => {
    n || c("hidden");
  }), [m, f] = R(!0), E = b([n]);
  P(() => {
    m !== !1 && E.current[E.current.length - 1] !== n && (E.current.push(n), f(!1));
  }, [E, n]);
  let p = C(() => ({ show: n, appear: r, initial: m }), [n, r, m]);
  pt(o, () => c("hidden")), P(() => {
    n ? c("visible") : !ke(h) && o.current !== null && c("hidden");
  }, [n, h]);
  let g = { unmount: l }, F = w(() => {
    var y;
    m && f(!1), (y = e.beforeEnter) == null || y.call(e);
  }), oe = w(() => {
    var y;
    m && f(!1), (y = e.beforeLeave) == null || y.call(e);
  });
  return v.createElement(Me.Provider, { value: h }, v.createElement(De.Provider, { value: p }, x({ ourProps: { ...g, as: q, children: v.createElement(Ot, { ref: u, ...g, ...i, beforeEnter: F, beforeLeave: oe }) }, theirProps: {}, defaultTag: q, features: At, visible: s === "visible", name: "Transition" })));
}
function yr(e, t) {
  let n = S(De) !== null, r = tt() !== null;
  return v.createElement(v.Fragment, null, !n && r ? v.createElement(Xe, { ref: t, ...e }) : v.createElement(Ot, { ref: t, ...e }));
}
let Xe = M(wr), Ot = M(br), $r = M(yr), Sr = Object.assign(Xe, { Child: $r, Root: Xe });
export {
  $r as A,
  Sr as K,
  sr as V,
  Lr as _
};
