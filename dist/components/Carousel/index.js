import { jsx as ot, jsxs as $t } from "react/jsx-runtime";
import * as _ from "react";
import { useRef as Ft, useState as Ht, useCallback as rn, useEffect as Et } from "react";
import { cn as pt } from "../../utils.js";
import '../../assets/index5.css';function sn(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Rt(t) {
  return sn(t) || Array.isArray(t);
}
function cn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Nt(t, n) {
  const e = Object.keys(t), s = Object.keys(n);
  if (e.length !== s.length)
    return !1;
  const i = JSON.stringify(Object.keys(t.breakpoints || {})), o = JSON.stringify(Object.keys(n.breakpoints || {}));
  return i !== o ? !1 : e.every((r) => {
    const a = t[r], u = n[r];
    return typeof a == "function" ? `${a}` == `${u}` : !Rt(a) || !Rt(u) ? a === u : Nt(a, u);
  });
}
function qt(t) {
  return t.concat().sort((n, e) => n.name > e.name ? 1 : -1).map((n) => n.options);
}
function un(t, n) {
  if (t.length !== n.length)
    return !1;
  const e = qt(t), s = qt(n);
  return e.every((i, o) => {
    const r = s[o];
    return Nt(i, r);
  });
}
function Pt(t) {
  return typeof t == "number";
}
function Lt(t) {
  return typeof t == "string";
}
function wt(t) {
  return typeof t == "boolean";
}
function jt(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function P(t) {
  return Math.abs(t);
}
function Bt(t) {
  return Math.sign(t);
}
function at(t, n) {
  return P(t - n);
}
function an(t, n) {
  if (t === 0 || n === 0 || P(t) <= P(n))
    return 0;
  const e = at(P(t), P(n));
  return P(e / t);
}
function lt(t) {
  return ft(t).map(Number);
}
function j(t) {
  return t[mt(t)];
}
function mt(t) {
  return Math.max(0, t.length - 1);
}
function Dt(t, n) {
  return n === mt(t);
}
function Gt(t, n = 0) {
  return Array.from(Array(t), (e, s) => n + s);
}
function ft(t) {
  return Object.keys(t);
}
function Kt(t, n) {
  return [t, n].reduce((e, s) => (ft(s).forEach((i) => {
    const o = e[i], r = s[i], a = jt(o) && jt(r);
    e[i] = a ? Kt(o, r) : r;
  }), e), {});
}
function Tt(t, n) {
  return typeof n.MouseEvent < "u" && t instanceof n.MouseEvent;
}
function ln(t, n) {
  const e = {
    start: s,
    center: i,
    end: o
  };
  function s() {
    return 0;
  }
  function i(u) {
    return o(u) / 2;
  }
  function o(u) {
    return n - u;
  }
  function r(u, c) {
    return Lt(t) ? e[t](u) : t(n, u, c);
  }
  return {
    measure: r
  };
}
function dt() {
  let t = [];
  function n(i, o, r, a = {
    passive: !0
  }) {
    let u;
    if ("addEventListener" in i)
      i.addEventListener(o, r, a), u = () => i.removeEventListener(o, r, a);
    else {
      const c = i;
      c.addListener(r), u = () => c.removeListener(r);
    }
    return t.push(u), s;
  }
  function e() {
    t = t.filter((i) => i());
  }
  const s = {
    add: n,
    clear: e
  };
  return s;
}
function fn(t, n, e, s) {
  const i = dt(), o = 1e3 / 60;
  let r = null, a = 0, u = 0;
  function c() {
    i.add(t, "visibilitychange", () => {
      t.hidden && d();
    });
  }
  function y() {
    b(), i.clear();
  }
  function f(h) {
    if (!u)
      return;
    r || (r = h);
    const l = h - r;
    for (r = h, a += l; a >= o; )
      e(), a -= o;
    const m = P(a / o);
    s(m), u && n.requestAnimationFrame(f);
  }
  function g() {
    u || (u = n.requestAnimationFrame(f));
  }
  function b() {
    n.cancelAnimationFrame(u), r = null, a = 0, u = 0;
  }
  function d() {
    r = null, a = 0;
  }
  return {
    init: c,
    destroy: y,
    start: g,
    stop: b,
    update: e,
    render: s
  };
}
function dn(t, n) {
  const e = n === "rtl", s = t === "y", i = s ? "y" : "x", o = s ? "x" : "y", r = !s && e ? -1 : 1, a = y(), u = f();
  function c(d) {
    const {
      height: p,
      width: h
    } = d;
    return s ? p : h;
  }
  function y() {
    return s ? "top" : e ? "right" : "left";
  }
  function f() {
    return s ? "bottom" : e ? "left" : "right";
  }
  function g(d) {
    return d * r;
  }
  return {
    scroll: i,
    cross: o,
    startEdge: a,
    endEdge: u,
    measureSize: c,
    direction: g
  };
}
function rt(t = 0, n = 0) {
  const e = P(t - n);
  function s(c) {
    return c < t;
  }
  function i(c) {
    return c > n;
  }
  function o(c) {
    return s(c) || i(c);
  }
  function r(c) {
    return o(c) ? s(c) ? t : n : c;
  }
  function a(c) {
    return e ? c - e * Math.ceil((c - n) / e) : c;
  }
  return {
    length: e,
    max: n,
    min: t,
    constrain: r,
    reachedAny: o,
    reachedMax: i,
    reachedMin: s,
    removeOffset: a
  };
}
function Ut(t, n, e) {
  const {
    constrain: s
  } = rt(0, t), i = t + 1;
  let o = r(n);
  function r(g) {
    return e ? P((i + g) % i) : s(g);
  }
  function a() {
    return o;
  }
  function u(g) {
    return o = r(g), f;
  }
  function c(g) {
    return y().set(a() + g);
  }
  function y() {
    return Ut(t, a(), e);
  }
  const f = {
    get: a,
    set: u,
    add: c,
    clone: y
  };
  return f;
}
function pn(t, n, e, s, i, o, r, a, u, c, y, f, g, b, d, p, h, l, m) {
  const {
    cross: x,
    direction: C
  } = t, E = ["INPUT", "SELECT", "TEXTAREA"], w = {
    passive: !1
  }, I = dt(), v = dt(), T = rt(50, 225).constrain(b.measure(20)), N = {
    mouse: 300,
    touch: 400
  }, D = {
    mouse: 500,
    touch: 600
  }, V = d ? 43 : 25;
  let Y = !1, F = 0, K = 0, W = !1, U = !1, Z = !1, Q = !1;
  function tt(S) {
    if (!m)
      return;
    function L(A) {
      (wt(m) || m(S, A)) && k(A);
    }
    const O = n;
    I.add(O, "dragstart", (A) => A.preventDefault(), w).add(O, "touchmove", () => {
    }, w).add(O, "touchend", () => {
    }).add(O, "touchstart", L).add(O, "mousedown", L).add(O, "touchcancel", z).add(O, "contextmenu", z).add(O, "click", it, !0);
  }
  function J() {
    I.clear(), v.clear();
  }
  function st() {
    const S = Q ? e : n;
    v.add(S, "touchmove", G, w).add(S, "touchend", z).add(S, "mousemove", G, w).add(S, "mouseup", z);
  }
  function X(S) {
    const L = S.nodeName || "";
    return E.includes(L);
  }
  function ct() {
    return (d ? D : N)[Q ? "mouse" : "touch"];
  }
  function ut(S, L) {
    const O = f.add(Bt(S) * -1), A = y.byDistance(S, !d).distance;
    return d || P(S) < T ? A : h && L ? A * 0.5 : y.byIndex(O.get(), 0).distance;
  }
  function k(S) {
    const L = Tt(S, s);
    Q = L, Z = d && L && !S.buttons && Y, Y = at(i.get(), r.get()) >= 2, !(L && S.button !== 0) && (X(S.target) || (W = !0, o.pointerDown(S), c.useFriction(0).useDuration(0), i.set(r), st(), F = o.readPoint(S), K = o.readPoint(S, x), g.emit("pointerDown")));
  }
  function G(S) {
    if (!Tt(S, s) && S.touches.length >= 2)
      return z(S);
    const O = o.readPoint(S), A = o.readPoint(S, x), $ = at(O, F), R = at(A, K);
    if (!U && !Q && (!S.cancelable || (U = $ > R, !U)))
      return z(S);
    const q = o.pointerMove(S);
    $ > p && (Z = !0), c.useFriction(0.3).useDuration(0.75), a.start(), i.add(C(q)), S.preventDefault();
  }
  function z(S) {
    const O = y.byDistance(0, !1).index !== f.get(), A = o.pointerUp(S) * ct(), $ = ut(C(A), O), R = an(A, $), q = V - 10 * R, nt = l + R / 50;
    U = !1, W = !1, v.clear(), c.useDuration(q).useFriction(nt), u.distance($, !d), Q = !1, g.emit("pointerUp");
  }
  function it(S) {
    Z && (S.stopPropagation(), S.preventDefault(), Z = !1);
  }
  function H() {
    return W;
  }
  return {
    init: tt,
    destroy: J,
    pointerDown: H
  };
}
function mn(t, n) {
  let s, i;
  function o(f) {
    return f.timeStamp;
  }
  function r(f, g) {
    const d = `client${(g || t.scroll) === "x" ? "X" : "Y"}`;
    return (Tt(f, n) ? f : f.touches[0])[d];
  }
  function a(f) {
    return s = f, i = f, r(f);
  }
  function u(f) {
    const g = r(f) - r(i), b = o(f) - o(s) > 170;
    return i = f, b && (s = f), g;
  }
  function c(f) {
    if (!s || !i)
      return 0;
    const g = r(i) - r(s), b = o(f) - o(s), d = o(f) - o(i) > 170, p = g / b;
    return b && !d && P(p) > 0.1 ? p : 0;
  }
  return {
    pointerDown: a,
    pointerMove: u,
    pointerUp: c,
    readPoint: r
  };
}
function gn() {
  function t(e) {
    const {
      offsetTop: s,
      offsetLeft: i,
      offsetWidth: o,
      offsetHeight: r
    } = e;
    return {
      top: s,
      right: i + o,
      bottom: s + r,
      left: i,
      width: o,
      height: r
    };
  }
  return {
    measure: t
  };
}
function hn(t) {
  function n(s) {
    return t * (s / 100);
  }
  return {
    measure: n
  };
}
function yn(t, n, e, s, i, o, r) {
  let a, u, c = [], y = !1;
  function f(p) {
    return i.measureSize(r.measure(p));
  }
  function g(p) {
    if (!o)
      return;
    u = f(t), c = s.map(f);
    function h(m) {
      for (const x of m) {
        const C = x.target === t, E = s.indexOf(x.target), w = C ? u : c[E], I = f(C ? t : s[E]);
        if (P(I - w) >= 0.5) {
          e.requestAnimationFrame(() => {
            p.reInit(), n.emit("resize");
          });
          break;
        }
      }
    }
    a = new ResizeObserver((m) => {
      y || (wt(o) || o(p, m)) && h(m);
    }), [t].concat(s).forEach((m) => a.observe(m));
  }
  function b() {
    a && a.disconnect(), y = !0;
  }
  return {
    init: g,
    destroy: b
  };
}
function Sn(t, n, e, s, i) {
  let o = 0, r = 0, a = s, u = i, c = t.get(), y = 0;
  function f() {
    const E = e.get() - t.get(), w = !a;
    let I = 0;
    return w ? (o = 0, t.set(e), I = E) : (o += E / a, o *= u, c += o, t.add(o), I = c - y), r = Bt(I), y = c, C;
  }
  function g() {
    const E = e.get() - n.get();
    return P(E) < 1e-3;
  }
  function b() {
    return a;
  }
  function d() {
    return r;
  }
  function p() {
    return o;
  }
  function h() {
    return m(s);
  }
  function l() {
    return x(i);
  }
  function m(E) {
    return a = E, C;
  }
  function x(E) {
    return u = E, C;
  }
  const C = {
    direction: d,
    duration: b,
    velocity: p,
    seek: f,
    settled: g,
    useBaseFriction: l,
    useBaseDuration: h,
    useFriction: x,
    useDuration: m
  };
  return C;
}
function bn(t, n, e, s, i) {
  const o = i.measure(10), r = i.measure(50), a = rt(0.1, 0.99);
  let u = !1;
  function c() {
    return !(u || !t.reachedAny(e.get()) || !t.reachedAny(n.get()));
  }
  function y(b) {
    if (!c())
      return;
    const d = t.reachedMin(n.get()) ? "min" : "max", p = P(t[d] - n.get()), h = e.get() - n.get(), l = a.constrain(p / r);
    e.subtract(h * l), !b && P(h) < o && (e.set(t.constrain(e.get())), s.useDuration(25).useBaseFriction());
  }
  function f(b) {
    u = !b;
  }
  return {
    constrain: y,
    toggleActive: f
  };
}
function xn(t, n, e, s, i) {
  const o = rt(-n + t, 0), r = f(), a = y(), u = g();
  function c(d, p) {
    return at(d, p) < 1;
  }
  function y() {
    const d = r[0], p = j(r), h = r.lastIndexOf(d), l = r.indexOf(p) + 1;
    return rt(h, l);
  }
  function f() {
    return e.map((d, p) => {
      const {
        min: h,
        max: l
      } = o, m = o.constrain(d), x = !p, C = Dt(e, p);
      return x ? l : C || c(h, m) ? h : c(l, m) ? l : m;
    }).map((d) => parseFloat(d.toFixed(3)));
  }
  function g() {
    if (n <= t + i)
      return [o.max];
    if (s === "keepSnaps")
      return r;
    const {
      min: d,
      max: p
    } = a;
    return r.slice(d, p);
  }
  return {
    snapsContained: u,
    scrollContainLimit: a
  };
}
function In(t, n, e) {
  const s = n[0], i = e ? s - t : j(n);
  return {
    limit: rt(i, s)
  };
}
function Cn(t, n, e, s) {
  const o = n.min + 0.1, r = n.max + 0.1, {
    reachedMin: a,
    reachedMax: u
  } = rt(o, r);
  function c(g) {
    return g === 1 ? u(e.get()) : g === -1 ? a(e.get()) : !1;
  }
  function y(g) {
    if (!c(g))
      return;
    const b = t * (g * -1);
    s.forEach((d) => d.add(b));
  }
  return {
    loop: y
  };
}
function vn(t) {
  const {
    max: n,
    length: e
  } = t;
  function s(o) {
    const r = o - n;
    return e ? r / -e : 0;
  }
  return {
    get: s
  };
}
function En(t, n, e, s, i) {
  const {
    startEdge: o,
    endEdge: r
  } = t, {
    groupSlides: a
  } = i, u = f().map(n.measure), c = g(), y = b();
  function f() {
    return a(s).map((p) => j(p)[r] - p[0][o]).map(P);
  }
  function g() {
    return s.map((p) => e[o] - p[o]).map((p) => -P(p));
  }
  function b() {
    return a(c).map((p) => p[0]).map((p, h) => p + u[h]);
  }
  return {
    snaps: c,
    snapsAligned: y
  };
}
function Ln(t, n, e, s, i, o) {
  const {
    groupSlides: r
  } = i, {
    min: a,
    max: u
  } = s, c = y();
  function y() {
    const g = r(o), b = !t || n === "keepSnaps";
    return e.length === 1 ? [o] : b ? g : g.slice(a, u).map((d, p, h) => {
      const l = !p, m = Dt(h, p);
      if (l) {
        const x = j(h[0]) + 1;
        return Gt(x);
      }
      if (m) {
        const x = mt(o) - j(h)[0] + 1;
        return Gt(x, j(h)[0]);
      }
      return d;
    });
  }
  return {
    slideRegistry: c
  };
}
function Tn(t, n, e, s, i) {
  const {
    reachedAny: o,
    removeOffset: r,
    constrain: a
  } = s;
  function u(d) {
    return d.concat().sort((p, h) => P(p) - P(h))[0];
  }
  function c(d) {
    const p = t ? r(d) : a(d), h = n.map((m, x) => ({
      diff: y(m - p, 0),
      index: x
    })).sort((m, x) => P(m.diff) - P(x.diff)), {
      index: l
    } = h[0];
    return {
      index: l,
      distance: p
    };
  }
  function y(d, p) {
    const h = [d, d + e, d - e];
    if (!t)
      return d;
    if (!p)
      return u(h);
    const l = h.filter((m) => Bt(m) === p);
    return l.length ? u(l) : j(h) - e;
  }
  function f(d, p) {
    const h = n[d] - i.get(), l = y(h, p);
    return {
      index: d,
      distance: l
    };
  }
  function g(d, p) {
    const h = i.get() + d, {
      index: l,
      distance: m
    } = c(h), x = !t && o(h);
    if (!p || x)
      return {
        index: l,
        distance: d
      };
    const C = n[l] - m, E = d + y(C, 0);
    return {
      index: l,
      distance: E
    };
  }
  return {
    byDistance: g,
    byIndex: f,
    shortcut: y
  };
}
function Nn(t, n, e, s, i, o, r) {
  function a(f) {
    const g = f.distance, b = f.index !== n.get();
    o.add(g), g && (s.duration() ? t.start() : (t.update(), t.render(1), t.update())), b && (e.set(n.get()), n.set(f.index), r.emit("select"));
  }
  function u(f, g) {
    const b = i.byDistance(f, g);
    a(b);
  }
  function c(f, g) {
    const b = n.clone().set(f), d = i.byIndex(b.get(), g);
    a(d);
  }
  return {
    distance: u,
    index: c
  };
}
function Pn(t, n, e, s, i, o, r) {
  let a = 0;
  function u() {
    o.add(document, "keydown", c, !1), n.forEach(y);
  }
  function c(g) {
    g.code === "Tab" && (a = (/* @__PURE__ */ new Date()).getTime());
  }
  function y(g) {
    const b = () => {
      if ((/* @__PURE__ */ new Date()).getTime() - a > 10)
        return;
      t.scrollLeft = 0;
      const h = n.indexOf(g), l = e.findIndex((m) => m.includes(h));
      Pt(l) && (i.useDuration(0), s.index(l, 0), r.emit("slideFocus"));
    };
    o.add(g, "focus", b, {
      passive: !0,
      capture: !0
    });
  }
  return {
    init: u
  };
}
function ht(t) {
  let n = t;
  function e() {
    return n;
  }
  function s(u) {
    n = r(u);
  }
  function i(u) {
    n += r(u);
  }
  function o(u) {
    n -= r(u);
  }
  function r(u) {
    return Pt(u) ? u : u.get();
  }
  return {
    get: e,
    set: s,
    add: i,
    subtract: o
  };
}
function Qt(t, n) {
  const e = t.scroll === "x" ? o : r, s = n.style;
  let i = !1;
  function o(f) {
    return `translate3d(${f}px,0px,0px)`;
  }
  function r(f) {
    return `translate3d(0px,${f}px,0px)`;
  }
  function a(f) {
    i || (s.transform = e(t.direction(f)));
  }
  function u(f) {
    i = !f;
  }
  function c() {
    i || (s.transform = "", n.getAttribute("style") || n.removeAttribute("style"));
  }
  return {
    clear: c,
    to: a,
    toggleActive: u
  };
}
function wn(t, n, e, s, i, o, r, a, u) {
  const y = lt(i), f = lt(i).reverse(), g = l().concat(m());
  function b(I, v) {
    return I.reduce((T, N) => T - i[N], v);
  }
  function d(I, v) {
    return I.reduce((T, N) => b(T, v) > 0 ? T.concat([N]) : T, []);
  }
  function p(I) {
    return o.map((v, T) => ({
      start: v - s[T] + 0.5 + I,
      end: v + n - 0.5 + I
    }));
  }
  function h(I, v, T) {
    const N = p(v);
    return I.map((D) => {
      const V = T ? 0 : -e, Y = T ? e : 0, F = T ? "end" : "start", K = N[D][F];
      return {
        index: D,
        loopPoint: K,
        slideLocation: ht(-1),
        translate: Qt(t, u[D]),
        target: () => a.get() > K ? V : Y
      };
    });
  }
  function l() {
    const I = r[0], v = d(f, I);
    return h(v, e, !1);
  }
  function m() {
    const I = n - r[0] - 1, v = d(y, I);
    return h(v, -e, !0);
  }
  function x() {
    return g.every(({
      index: I
    }) => {
      const v = y.filter((T) => T !== I);
      return b(v, n) <= 0.1;
    });
  }
  function C() {
    g.forEach((I) => {
      const {
        target: v,
        translate: T,
        slideLocation: N
      } = I, D = v();
      D !== N.get() && (T.to(D), N.set(D));
    });
  }
  function E() {
    g.forEach((I) => I.translate.clear());
  }
  return {
    canLoop: x,
    clear: E,
    loop: C,
    loopPoints: g
  };
}
function Bn(t, n, e) {
  let s, i = !1;
  function o(u) {
    if (!e)
      return;
    function c(y) {
      for (const f of y)
        if (f.type === "childList") {
          u.reInit(), n.emit("slidesChanged");
          break;
        }
    }
    s = new MutationObserver((y) => {
      i || (wt(e) || e(u, y)) && c(y);
    }), s.observe(t, {
      childList: !0
    });
  }
  function r() {
    s && s.disconnect(), i = !0;
  }
  return {
    init: o,
    destroy: r
  };
}
function Dn(t, n, e, s) {
  const i = {};
  let o = null, r = null, a, u = !1;
  function c() {
    a = new IntersectionObserver((d) => {
      u || (d.forEach((p) => {
        const h = n.indexOf(p.target);
        i[h] = p;
      }), o = null, r = null, e.emit("slidesInView"));
    }, {
      root: t.parentElement,
      threshold: s
    }), n.forEach((d) => a.observe(d));
  }
  function y() {
    a && a.disconnect(), u = !0;
  }
  function f(d) {
    return ft(i).reduce((p, h) => {
      const l = parseInt(h), {
        isIntersecting: m
      } = i[l];
      return (d && m || !d && !m) && p.push(l), p;
    }, []);
  }
  function g(d = !0) {
    if (d && o)
      return o;
    if (!d && r)
      return r;
    const p = f(d);
    return d && (o = p), d || (r = p), p;
  }
  return {
    init: c,
    destroy: y,
    get: g
  };
}
function On(t, n, e, s, i, o) {
  const {
    measureSize: r,
    startEdge: a,
    endEdge: u
  } = t, c = e[0] && i, y = d(), f = p(), g = e.map(r), b = h();
  function d() {
    if (!c)
      return 0;
    const m = e[0];
    return P(n[a] - m[a]);
  }
  function p() {
    if (!c)
      return 0;
    const m = o.getComputedStyle(j(s));
    return parseFloat(m.getPropertyValue(`margin-${u}`));
  }
  function h() {
    return e.map((m, x, C) => {
      const E = !x, w = Dt(C, x);
      return E ? g[x] + y : w ? g[x] + f : C[x + 1][a] - m[a];
    }).map(P);
  }
  return {
    slideSizes: g,
    slideSizesWithGaps: b,
    startGap: y,
    endGap: f
  };
}
function An(t, n, e, s, i, o, r, a, u) {
  const {
    startEdge: c,
    endEdge: y,
    direction: f
  } = t, g = Pt(e);
  function b(l, m) {
    return lt(l).filter((x) => x % m === 0).map((x) => l.slice(x, x + m));
  }
  function d(l) {
    return l.length ? lt(l).reduce((m, x, C) => {
      const E = j(m) || 0, w = E === 0, I = x === mt(l), v = i[c] - o[E][c], T = i[c] - o[x][y], N = !s && w ? f(r) : 0, D = !s && I ? f(a) : 0, V = P(T - D - (v + N));
      return C && V > n + u && m.push(x), I && m.push(l.length), m;
    }, []).map((m, x, C) => {
      const E = Math.max(C[x - 1] || 0);
      return l.slice(E, m);
    }) : [];
  }
  function p(l) {
    return g ? b(l, e) : d(l);
  }
  return {
    groupSlides: p
  };
}
function zn(t, n, e, s, i, o, r) {
  const {
    align: a,
    axis: u,
    direction: c,
    startIndex: y,
    loop: f,
    duration: g,
    dragFree: b,
    dragThreshold: d,
    inViewThreshold: p,
    slidesToScroll: h,
    skipSnaps: l,
    containScroll: m,
    watchResize: x,
    watchSlides: C,
    watchDrag: E
  } = o, w = 2, I = gn(), v = I.measure(n), T = e.map(I.measure), N = dn(u, c), D = N.measureSize(v), V = hn(D), Y = ln(a, D), F = !f && !!m, K = f || !!m, {
    slideSizes: W,
    slideSizesWithGaps: U,
    startGap: Z,
    endGap: Q
  } = On(N, v, T, e, K, i), tt = An(N, D, h, f, v, T, Z, Q, w), {
    snaps: J,
    snapsAligned: st
  } = En(N, Y, v, T, tt), X = -j(J) + j(U), {
    snapsContained: ct,
    scrollContainLimit: ut
  } = xn(D, X, st, m, w), k = F ? ct : st, {
    limit: G
  } = In(X, k, f), z = Ut(mt(k), y, f), it = z.clone(), H = lt(e), B = ({
    dragHandler: et,
    scrollBody: Ct,
    scrollBounds: vt,
    options: {
      loop: gt
    }
  }) => {
    gt || vt.constrain(et.pointerDown()), Ct.seek();
  }, S = ({
    scrollBody: et,
    translate: Ct,
    location: vt,
    offsetLocation: gt,
    scrollLooper: Zt,
    slideLooper: Wt,
    dragHandler: tn,
    animation: nn,
    eventHandler: Mt,
    options: {
      loop: en
    }
  }, on) => {
    const Vt = et.velocity(), kt = et.settled();
    kt && !tn.pointerDown() && (nn.stop(), Mt.emit("settle")), kt || Mt.emit("scroll"), gt.set(vt.get() - Vt + Vt * on), en && (Zt.loop(et.direction()), Wt.loop()), Ct.to(gt.get());
  }, L = fn(s, i, () => B(It), (et) => S(It, et)), O = 0.68, A = k[z.get()], $ = ht(A), R = ht(A), q = ht(A), nt = Sn($, R, q, g, O), bt = Tn(f, k, X, G, q), xt = Nn(L, z, it, nt, bt, q, r), At = vn(G), zt = dt(), Xt = Dn(n, e, r, p), {
    slideRegistry: _t
  } = Ln(F, m, k, ut, tt, H), Yt = Pn(t, e, _t, xt, nt, zt, r), It = {
    ownerDocument: s,
    ownerWindow: i,
    eventHandler: r,
    containerRect: v,
    slideRects: T,
    animation: L,
    axis: N,
    dragHandler: pn(N, t, s, i, q, mn(N, i), $, L, xt, nt, bt, z, r, V, b, d, l, O, E),
    eventStore: zt,
    percentOfView: V,
    index: z,
    indexPrevious: it,
    limit: G,
    location: $,
    offsetLocation: R,
    options: o,
    resizeHandler: yn(n, r, i, e, N, x, I),
    scrollBody: nt,
    scrollBounds: bn(G, R, q, nt, V),
    scrollLooper: Cn(X, G, R, [$, R, q]),
    scrollProgress: At,
    scrollSnapList: k.map(At.get),
    scrollSnaps: k,
    scrollTarget: bt,
    scrollTo: xt,
    slideLooper: wn(N, D, X, W, U, J, k, R, e),
    slideFocus: Yt,
    slidesHandler: Bn(n, r, C),
    slidesInView: Xt,
    slideIndexes: H,
    slideRegistry: _t,
    slidesToScroll: tt,
    target: q,
    translate: Qt(N, n)
  };
  return It;
}
function _n() {
  let t = {}, n;
  function e(c) {
    n = c;
  }
  function s(c) {
    return t[c] || [];
  }
  function i(c) {
    return s(c).forEach((y) => y(n, c)), u;
  }
  function o(c, y) {
    return t[c] = s(c).concat([y]), u;
  }
  function r(c, y) {
    return t[c] = s(c).filter((f) => f !== y), u;
  }
  function a() {
    t = {};
  }
  const u = {
    init: e,
    emit: i,
    off: r,
    on: o,
    clear: a
  };
  return u;
}
const Mn = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0
};
function Vn(t) {
  function n(o, r) {
    return Kt(o, r || {});
  }
  function e(o) {
    const r = o.breakpoints || {}, a = ft(r).filter((u) => t.matchMedia(u).matches).map((u) => r[u]).reduce((u, c) => n(u, c), {});
    return n(o, a);
  }
  function s(o) {
    return o.map((r) => ft(r.breakpoints || {})).reduce((r, a) => r.concat(a), []).map(t.matchMedia);
  }
  return {
    mergeOptions: n,
    optionsAtMedia: e,
    optionsMediaQueries: s
  };
}
function kn(t) {
  let n = [];
  function e(o, r) {
    return n = r.filter(({
      options: a
    }) => t.optionsAtMedia(a).active !== !1), n.forEach((a) => a.init(o, t)), r.reduce((a, u) => Object.assign(a, {
      [u.name]: u
    }), {});
  }
  function s() {
    n = n.filter((o) => o.destroy());
  }
  return {
    init: e,
    destroy: s
  };
}
function yt(t, n, e) {
  const s = t.ownerDocument, i = s.defaultView, o = Vn(i), r = kn(o), a = dt(), u = _n(), {
    mergeOptions: c,
    optionsAtMedia: y,
    optionsMediaQueries: f
  } = o, {
    on: g,
    off: b,
    emit: d
  } = u, p = D;
  let h = !1, l, m = c(Mn, yt.globalOptions), x = c(m), C = [], E, w, I;
  function v() {
    const {
      container: B,
      slides: S
    } = x;
    w = (Lt(B) ? t.querySelector(B) : B) || t.children[0];
    const O = Lt(S) ? w.querySelectorAll(S) : S;
    I = [].slice.call(O || w.children);
  }
  function T(B) {
    const S = zn(t, w, I, s, i, B, u);
    if (B.loop && !S.slideLooper.canLoop()) {
      const L = Object.assign({}, B, {
        loop: !1
      });
      return T(L);
    }
    return S;
  }
  function N(B, S) {
    h || (m = c(m, B), x = y(m), C = S || C, v(), l = T(x), f([m, ...C.map(({
      options: L
    }) => L)]).forEach((L) => a.add(L, "change", D)), x.active && (l.translate.to(l.location.get()), l.animation.init(), l.slidesInView.init(), l.slideFocus.init(), l.eventHandler.init(H), l.resizeHandler.init(H), l.slidesHandler.init(H), l.options.loop && l.slideLooper.loop(), w.offsetParent && I.length && l.dragHandler.init(H), E = r.init(H, C)));
  }
  function D(B, S) {
    const L = J();
    V(), N(c({
      startIndex: L
    }, B), S), u.emit("reInit");
  }
  function V() {
    l.dragHandler.destroy(), l.eventStore.clear(), l.translate.clear(), l.slideLooper.clear(), l.resizeHandler.destroy(), l.slidesHandler.destroy(), l.slidesInView.destroy(), l.animation.destroy(), r.destroy(), a.clear();
  }
  function Y() {
    h || (h = !0, a.clear(), V(), u.emit("destroy"), u.clear());
  }
  function F(B, S, L) {
    !x.active || h || (l.scrollBody.useBaseFriction().useDuration(S === !0 ? 0 : x.duration), l.scrollTo.index(B, L || 0));
  }
  function K(B) {
    const S = l.index.add(1).get();
    F(S, B, -1);
  }
  function W(B) {
    const S = l.index.add(-1).get();
    F(S, B, 1);
  }
  function U() {
    return l.index.add(1).get() !== J();
  }
  function Z() {
    return l.index.add(-1).get() !== J();
  }
  function Q() {
    return l.scrollSnapList;
  }
  function tt() {
    return l.scrollProgress.get(l.location.get());
  }
  function J() {
    return l.index.get();
  }
  function st() {
    return l.indexPrevious.get();
  }
  function X() {
    return l.slidesInView.get();
  }
  function ct() {
    return l.slidesInView.get(!1);
  }
  function ut() {
    return E;
  }
  function k() {
    return l;
  }
  function G() {
    return t;
  }
  function z() {
    return w;
  }
  function it() {
    return I;
  }
  const H = {
    canScrollNext: U,
    canScrollPrev: Z,
    containerNode: z,
    internalEngine: k,
    destroy: Y,
    off: b,
    on: g,
    emit: d,
    plugins: ut,
    previousScrollSnap: st,
    reInit: p,
    rootNode: G,
    scrollNext: K,
    scrollPrev: W,
    scrollProgress: tt,
    scrollSnapList: Q,
    scrollTo: F,
    selectedScrollSnap: J,
    slideNodes: it,
    slidesInView: X,
    slidesNotInView: ct
  };
  return N(n, e), setTimeout(() => u.emit("init"), 0), H;
}
yt.globalOptions = void 0;
function Ot(t = {}, n = []) {
  const e = Ft(t), s = Ft(n), [i, o] = Ht(), [r, a] = Ht(), u = rn(() => {
    i && i.reInit(e.current, s.current);
  }, [i]);
  return Et(() => {
    if (cn() && r) {
      yt.globalOptions = Ot.globalOptions;
      const c = yt(r, e.current, s.current);
      return o(c), () => c.destroy();
    } else
      o(void 0);
  }, [r, o]), Et(() => {
    Nt(e.current, t) || (e.current = t, u());
  }, [t, u]), Et(() => {
    un(s.current, n) || (s.current = n, u());
  }, [n, u]), [a, i];
}
Ot.globalOptions = void 0;
const Fn = "_carousel_aoq0i_3", Hn = "_carouselContent_aoq0i_7", Rn = "_carouselContentInner_aoq0i_11", qn = "_carouselContentInnerHorizontal_aoq0i_15", jn = "_carouselContentInnerVertical_aoq0i_19", Gn = "_carouselItem_aoq0i_23", $n = "_carouselItemHorizontal_aoq0i_27", Kn = "_carouselItemVertical_aoq0i_31", Un = "_carouselBtn_aoq0i_37", Qn = "_carouselBtnHorizontalLeft_aoq0i_41", Jn = "_carouselBtnHorizontalRight_aoq0i_44", Xn = "_carouselBtnVerticalTop_aoq0i_48", Yn = "_carouselBtnVerticalBottom_aoq0i_51", M = {
  carousel: Fn,
  carouselContent: Hn,
  carouselContentInner: Rn,
  carouselContentInnerHorizontal: qn,
  carouselContentInnerVertical: jn,
  carouselItem: Gn,
  carouselItemHorizontal: $n,
  carouselItemVertical: Kn,
  carouselBtn: Un,
  carouselBtnHorizontalLeft: Qn,
  carouselBtnHorizontalRight: Jn,
  carouselBtnVerticalTop: Xn,
  carouselBtnVerticalBottom: Yn
}, Jt = _.createContext(null);
function St() {
  const t = _.useContext(Jt);
  if (!t)
    throw new Error("useCarousel must be used within a <Carousel />");
  return t;
}
const Zn = _.forwardRef(
  ({
    orientation: t = "horizontal",
    opts: n,
    setApi: e,
    plugins: s,
    className: i,
    children: o,
    ...r
  }, a) => {
    const [u, c] = Ot(
      {
        ...n,
        axis: t === "horizontal" ? "x" : "y"
      },
      s
    ), [y, f] = _.useState(!1), [g, b] = _.useState(!1), d = _.useCallback((m) => {
      m && (f(m.canScrollPrev()), b(m.canScrollNext()));
    }, []), p = _.useCallback(() => {
      c == null || c.scrollPrev();
    }, [c]), h = _.useCallback(() => {
      c == null || c.scrollNext();
    }, [c]), l = _.useCallback(
      (m) => {
        m.key === "ArrowLeft" ? (m.preventDefault(), p()) : m.key === "ArrowRight" && (m.preventDefault(), h());
      },
      [p, h]
    );
    return _.useEffect(() => {
      !c || !e || e(c);
    }, [c, e]), _.useEffect(() => {
      if (c)
        return d(c), c.on("reInit", d), c.on("select", d), () => {
          c == null || c.off("select", d);
        };
    }, [c, d]), /* @__PURE__ */ ot(
      Jt.Provider,
      {
        value: {
          carouselRef: u,
          api: c,
          opts: n,
          orientation: t || ((n == null ? void 0 : n.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: p,
          scrollNext: h,
          canScrollPrev: y,
          canScrollNext: g
        },
        children: /* @__PURE__ */ ot(
          "div",
          {
            ref: a,
            onKeyDownCapture: l,
            className: pt(M.carousel, i),
            role: "region",
            "aria-roledescription": "carousel",
            ...r,
            children: o
          }
        )
      }
    );
  }
);
Zn.displayName = "Carousel";
const Wn = _.forwardRef(({ className: t, ...n }, e) => {
  const { carouselRef: s, orientation: i } = St();
  return /* @__PURE__ */ ot("div", { ref: s, className: M.carouselContent, children: /* @__PURE__ */ ot(
    "div",
    {
      ref: e,
      className: pt(
        M.carouselContentInner,
        i === "horizontal" ? M.carouselContentInnerHorizontal : M.carouselContentInnerVertical,
        t
      ),
      ...n
    }
  ) });
});
Wn.displayName = "CarouselContent";
const te = _.forwardRef(({ className: t, ...n }, e) => {
  const { orientation: s } = St();
  return /* @__PURE__ */ ot(
    "div",
    {
      ref: e,
      role: "group",
      "aria-roledescription": "slide",
      className: pt(
        M.carouselItem,
        s === "horizontal" ? M.carouselItemHorizontal : M.carouselItemVertical,
        t
      ),
      ...n
    }
  );
});
te.displayName = "CarouselItem";
const ne = _.forwardRef(({ className: t, children: n, ...e }, s) => {
  const { orientation: i, scrollPrev: o, canScrollPrev: r } = St();
  return /* @__PURE__ */ $t(
    "button",
    {
      ref: s,
      className: pt(
        M.carouselBtn,
        i === "horizontal" ? M.carouselBtnHorizontalLeft : M.carouselBtnVerticalTop,
        t
      ),
      disabled: !r,
      onClick: o,
      ...e,
      children: [
        n,
        /* @__PURE__ */ ot("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
ne.displayName = "CarouselPrevious";
const ee = _.forwardRef(({ className: t, children: n, ...e }, s) => {
  const { orientation: i, scrollNext: o, canScrollNext: r } = St();
  return /* @__PURE__ */ $t(
    "button",
    {
      ref: s,
      className: pt(
        M.carouselBtn,
        i === "horizontal" ? M.carouselBtnHorizontalRight : M.carouselBtnVerticalBottom,
        t
      ),
      disabled: !r,
      onClick: o,
      ...e,
      children: [
        n,
        /* @__PURE__ */ ot("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
ee.displayName = "CarouselNext";
export {
  Zn as Carousel,
  Wn as CarouselContent,
  te as CarouselItem,
  ee as CarouselNext,
  ne as CarouselPrevious
};
