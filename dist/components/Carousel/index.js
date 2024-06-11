import { jsx as K, Fragment as on } from "react/jsx-runtime";
import * as O from "react";
import { useRef as Ft, useState as Ht, useCallback as rn, useEffect as Et } from "react";
import { cn as rt } from "../../utils.js";
import '../../assets/index14.css';function sn(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Rt(t) {
  return sn(t) || Array.isArray(t);
}
function cn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Pt(t, n) {
  const e = Object.keys(t), s = Object.keys(n);
  if (e.length !== s.length)
    return !1;
  const c = JSON.stringify(Object.keys(t.breakpoints || {})), o = JSON.stringify(Object.keys(n.breakpoints || {}));
  return c !== o ? !1 : e.every((r) => {
    const a = t[r], u = n[r];
    return typeof a == "function" ? `${a}` == `${u}` : !Rt(a) || !Rt(u) ? a === u : Pt(a, u);
  });
}
function qt(t) {
  return t.concat().sort((n, e) => n.name > e.name ? 1 : -1).map((n) => n.options);
}
function un(t, n) {
  if (t.length !== n.length)
    return !1;
  const e = qt(t), s = qt(n);
  return e.every((c, o) => {
    const r = s[o];
    return Pt(c, r);
  });
}
function Tt(t) {
  return typeof t == "number";
}
function Lt(t) {
  return typeof t == "string";
}
function _t(t) {
  return typeof t == "boolean";
}
function jt(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function _(t) {
  return Math.abs(t);
}
function Dt(t) {
  return Math.sign(t);
}
function lt(t, n) {
  return _(t - n);
}
function an(t, n) {
  if (t === 0 || n === 0 || _(t) <= _(n))
    return 0;
  const e = lt(_(t), _(n));
  return _(e / t);
}
function ft(t) {
  return dt(t).map(Number);
}
function j(t) {
  return t[pt(t)];
}
function pt(t) {
  return Math.max(0, t.length - 1);
}
function wt(t, n) {
  return n === pt(t);
}
function Gt(t, n = 0) {
  return Array.from(Array(t), (e, s) => n + s);
}
function dt(t) {
  return Object.keys(t);
}
function $t(t, n) {
  return [t, n].reduce((e, s) => (dt(s).forEach((c) => {
    const o = e[c], r = s[c], a = jt(o) && jt(r);
    e[c] = a ? $t(o, r) : r;
  }), e), {});
}
function Nt(t, n) {
  return typeof n.MouseEvent < "u" && t instanceof n.MouseEvent;
}
function ln(t, n) {
  const e = {
    start: s,
    center: c,
    end: o
  };
  function s() {
    return 0;
  }
  function c(u) {
    return o(u) / 2;
  }
  function o(u) {
    return n - u;
  }
  function r(u, i) {
    return Lt(t) ? e[t](u) : t(n, u, i);
  }
  return {
    measure: r
  };
}
function mt() {
  let t = [];
  function n(c, o, r, a = {
    passive: !0
  }) {
    let u;
    if ("addEventListener" in c)
      c.addEventListener(o, r, a), u = () => c.removeEventListener(o, r, a);
    else {
      const i = c;
      i.addListener(r), u = () => i.removeListener(r);
    }
    return t.push(u), s;
  }
  function e() {
    t = t.filter((c) => c());
  }
  const s = {
    add: n,
    clear: e
  };
  return s;
}
function fn(t, n, e, s) {
  const c = mt(), o = 1e3 / 60;
  let r = null, a = 0, u = 0;
  function i() {
    c.add(t, "visibilitychange", () => {
      t.hidden && d();
    });
  }
  function h() {
    C(), c.clear();
  }
  function f(y) {
    if (!u)
      return;
    r || (r = y);
    const l = y - r;
    for (r = y, a += l; a >= o; )
      e(), a -= o;
    const g = _(a / o);
    s(g), u && n.requestAnimationFrame(f);
  }
  function p() {
    u || (u = n.requestAnimationFrame(f));
  }
  function C() {
    n.cancelAnimationFrame(u), r = null, a = 0, u = 0;
  }
  function d() {
    r = null, a = 0;
  }
  return {
    init: i,
    destroy: h,
    start: p,
    stop: C,
    update: e,
    render: s
  };
}
function dn(t, n) {
  const e = n === "rtl", s = t === "y", c = s ? "y" : "x", o = s ? "x" : "y", r = !s && e ? -1 : 1, a = h(), u = f();
  function i(d) {
    const {
      height: m,
      width: y
    } = d;
    return s ? m : y;
  }
  function h() {
    return s ? "top" : e ? "right" : "left";
  }
  function f() {
    return s ? "bottom" : e ? "left" : "right";
  }
  function p(d) {
    return d * r;
  }
  return {
    scroll: c,
    cross: o,
    startEdge: a,
    endEdge: u,
    measureSize: i,
    direction: p
  };
}
function st(t = 0, n = 0) {
  const e = _(t - n);
  function s(i) {
    return i < t;
  }
  function c(i) {
    return i > n;
  }
  function o(i) {
    return s(i) || c(i);
  }
  function r(i) {
    return o(i) ? s(i) ? t : n : i;
  }
  function a(i) {
    return e ? i - e * Math.ceil((i - n) / e) : i;
  }
  return {
    length: e,
    max: n,
    min: t,
    constrain: r,
    reachedAny: o,
    reachedMax: c,
    reachedMin: s,
    removeOffset: a
  };
}
function Kt(t, n, e) {
  const {
    constrain: s
  } = st(0, t), c = t + 1;
  let o = r(n);
  function r(p) {
    return e ? _((c + p) % c) : s(p);
  }
  function a() {
    return o;
  }
  function u(p) {
    return o = r(p), f;
  }
  function i(p) {
    return h().set(a() + p);
  }
  function h() {
    return Kt(t, a(), e);
  }
  const f = {
    get: a,
    set: u,
    add: i,
    clone: h
  };
  return f;
}
function mn(t, n, e, s, c, o, r, a, u, i, h, f, p, C, d, m, y, l, g) {
  const {
    cross: b,
    direction: I
  } = t, v = ["INPUT", "SELECT", "TEXTAREA"], T = {
    passive: !1
  }, x = mt(), E = mt(), N = st(50, 225).constrain(C.measure(20)), P = {
    mouse: 300,
    touch: 400
  }, w = {
    mouse: 500,
    touch: 600
  }, V = d ? 43 : 25;
  let Z = !1, F = 0, U = 0, tt = !1, Q = !1, W = !1, J = !1;
  function nt(S) {
    if (!g)
      return;
    function L(A) {
      (_t(g) || g(S, A)) && k(A);
    }
    const B = n;
    x.add(B, "dragstart", (A) => A.preventDefault(), T).add(B, "touchmove", () => {
    }, T).add(B, "touchend", () => {
    }).add(B, "touchstart", L).add(B, "mousedown", L).add(B, "touchcancel", z).add(B, "contextmenu", z).add(B, "click", it, !0);
  }
  function X() {
    x.clear(), E.clear();
  }
  function ct() {
    const S = J ? e : n;
    E.add(S, "touchmove", G, T).add(S, "touchend", z).add(S, "mousemove", G, T).add(S, "mouseup", z);
  }
  function Y(S) {
    const L = S.nodeName || "";
    return v.includes(L);
  }
  function ut() {
    return (d ? w : P)[J ? "mouse" : "touch"];
  }
  function at(S, L) {
    const B = f.add(Dt(S) * -1), A = h.byDistance(S, !d).distance;
    return d || _(S) < N ? A : y && L ? A * 0.5 : h.byIndex(B.get(), 0).distance;
  }
  function k(S) {
    const L = Nt(S, s);
    J = L, W = d && L && !S.buttons && Z, Z = lt(c.get(), r.get()) >= 2, !(L && S.button !== 0) && (Y(S.target) || (tt = !0, o.pointerDown(S), i.useFriction(0).useDuration(0), c.set(r), ct(), F = o.readPoint(S), U = o.readPoint(S, b), p.emit("pointerDown")));
  }
  function G(S) {
    if (!Nt(S, s) && S.touches.length >= 2)
      return z(S);
    const B = o.readPoint(S), A = o.readPoint(S, b), $ = lt(B, F), R = lt(A, U);
    if (!Q && !J && (!S.cancelable || (Q = $ > R, !Q)))
      return z(S);
    const q = o.pointerMove(S);
    $ > m && (W = !0), i.useFriction(0.3).useDuration(0.75), a.start(), c.add(I(q)), S.preventDefault();
  }
  function z(S) {
    const B = h.byDistance(0, !1).index !== f.get(), A = o.pointerUp(S) * ut(), $ = at(I(A), B), R = an(A, $), q = V - 10 * R, et = l + R / 50;
    Q = !1, tt = !1, E.clear(), i.useDuration(q).useFriction(et), u.distance($, !d), J = !1, p.emit("pointerUp");
  }
  function it(S) {
    W && (S.stopPropagation(), S.preventDefault(), W = !1);
  }
  function H() {
    return tt;
  }
  return {
    init: nt,
    destroy: X,
    pointerDown: H
  };
}
function pn(t, n) {
  let s, c;
  function o(f) {
    return f.timeStamp;
  }
  function r(f, p) {
    const d = `client${(p || t.scroll) === "x" ? "X" : "Y"}`;
    return (Nt(f, n) ? f : f.touches[0])[d];
  }
  function a(f) {
    return s = f, c = f, r(f);
  }
  function u(f) {
    const p = r(f) - r(c), C = o(f) - o(s) > 170;
    return c = f, C && (s = f), p;
  }
  function i(f) {
    if (!s || !c)
      return 0;
    const p = r(c) - r(s), C = o(f) - o(s), d = o(f) - o(c) > 170, m = p / C;
    return C && !d && _(m) > 0.1 ? m : 0;
  }
  return {
    pointerDown: a,
    pointerMove: u,
    pointerUp: i,
    readPoint: r
  };
}
function gn() {
  function t(e) {
    const {
      offsetTop: s,
      offsetLeft: c,
      offsetWidth: o,
      offsetHeight: r
    } = e;
    return {
      top: s,
      right: c + o,
      bottom: s + r,
      left: c,
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
function yn(t, n, e, s, c, o, r) {
  let a, u, i = [], h = !1;
  function f(m) {
    return c.measureSize(r.measure(m));
  }
  function p(m) {
    if (!o)
      return;
    u = f(t), i = s.map(f);
    function y(g) {
      for (const b of g) {
        const I = b.target === t, v = s.indexOf(b.target), T = I ? u : i[v], x = f(I ? t : s[v]);
        if (_(x - T) >= 0.5) {
          e.requestAnimationFrame(() => {
            m.reInit(), n.emit("resize");
          });
          break;
        }
      }
    }
    a = new ResizeObserver((g) => {
      h || (_t(o) || o(m, g)) && y(g);
    }), [t].concat(s).forEach((g) => a.observe(g));
  }
  function C() {
    a && a.disconnect(), h = !0;
  }
  return {
    init: p,
    destroy: C
  };
}
function Sn(t, n, e, s, c) {
  let o = 0, r = 0, a = s, u = c, i = t.get(), h = 0;
  function f() {
    const v = e.get() - t.get(), T = !a;
    let x = 0;
    return T ? (o = 0, t.set(e), x = v) : (o += v / a, o *= u, i += o, t.add(o), x = i - h), r = Dt(x), h = i, I;
  }
  function p() {
    const v = e.get() - n.get();
    return _(v) < 1e-3;
  }
  function C() {
    return a;
  }
  function d() {
    return r;
  }
  function m() {
    return o;
  }
  function y() {
    return g(s);
  }
  function l() {
    return b(c);
  }
  function g(v) {
    return a = v, I;
  }
  function b(v) {
    return u = v, I;
  }
  const I = {
    direction: d,
    duration: C,
    velocity: m,
    seek: f,
    settled: p,
    useBaseFriction: l,
    useBaseDuration: y,
    useFriction: b,
    useDuration: g
  };
  return I;
}
function bn(t, n, e, s, c) {
  const o = c.measure(10), r = c.measure(50), a = st(0.1, 0.99);
  let u = !1;
  function i() {
    return !(u || !t.reachedAny(e.get()) || !t.reachedAny(n.get()));
  }
  function h(C) {
    if (!i())
      return;
    const d = t.reachedMin(n.get()) ? "min" : "max", m = _(t[d] - n.get()), y = e.get() - n.get(), l = a.constrain(m / r);
    e.subtract(y * l), !C && _(y) < o && (e.set(t.constrain(e.get())), s.useDuration(25).useBaseFriction());
  }
  function f(C) {
    u = !C;
  }
  return {
    constrain: h,
    toggleActive: f
  };
}
function xn(t, n, e, s, c) {
  const o = st(-n + t, 0), r = f(), a = h(), u = p();
  function i(d, m) {
    return lt(d, m) < 1;
  }
  function h() {
    const d = r[0], m = j(r), y = r.lastIndexOf(d), l = r.indexOf(m) + 1;
    return st(y, l);
  }
  function f() {
    return e.map((d, m) => {
      const {
        min: y,
        max: l
      } = o, g = o.constrain(d), b = !m, I = wt(e, m);
      return b ? l : I || i(y, g) ? y : i(l, g) ? l : g;
    }).map((d) => parseFloat(d.toFixed(3)));
  }
  function p() {
    if (n <= t + c)
      return [o.max];
    if (s === "keepSnaps")
      return r;
    const {
      min: d,
      max: m
    } = a;
    return r.slice(d, m);
  }
  return {
    snapsContained: u,
    scrollContainLimit: a
  };
}
function Cn(t, n, e) {
  const s = n[0], c = e ? s - t : j(n);
  return {
    limit: st(c, s)
  };
}
function In(t, n, e, s) {
  const o = n.min + 0.1, r = n.max + 0.1, {
    reachedMin: a,
    reachedMax: u
  } = st(o, r);
  function i(p) {
    return p === 1 ? u(e.get()) : p === -1 ? a(e.get()) : !1;
  }
  function h(p) {
    if (!i(p))
      return;
    const C = t * (p * -1);
    s.forEach((d) => d.add(C));
  }
  return {
    loop: h
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
function En(t, n, e, s, c) {
  const {
    startEdge: o,
    endEdge: r
  } = t, {
    groupSlides: a
  } = c, u = f().map(n.measure), i = p(), h = C();
  function f() {
    return a(s).map((m) => j(m)[r] - m[0][o]).map(_);
  }
  function p() {
    return s.map((m) => e[o] - m[o]).map((m) => -_(m));
  }
  function C() {
    return a(i).map((m) => m[0]).map((m, y) => m + u[y]);
  }
  return {
    snaps: i,
    snapsAligned: h
  };
}
function Ln(t, n, e, s, c, o) {
  const {
    groupSlides: r
  } = c, {
    min: a,
    max: u
  } = s, i = h();
  function h() {
    const p = r(o), C = !t || n === "keepSnaps";
    return e.length === 1 ? [o] : C ? p : p.slice(a, u).map((d, m, y) => {
      const l = !m, g = wt(y, m);
      if (l) {
        const b = j(y[0]) + 1;
        return Gt(b);
      }
      if (g) {
        const b = pt(o) - j(y)[0] + 1;
        return Gt(b, j(y)[0]);
      }
      return d;
    });
  }
  return {
    slideRegistry: i
  };
}
function Nn(t, n, e, s, c) {
  const {
    reachedAny: o,
    removeOffset: r,
    constrain: a
  } = s;
  function u(d) {
    return d.concat().sort((m, y) => _(m) - _(y))[0];
  }
  function i(d) {
    const m = t ? r(d) : a(d), y = n.map((g, b) => ({
      diff: h(g - m, 0),
      index: b
    })).sort((g, b) => _(g.diff) - _(b.diff)), {
      index: l
    } = y[0];
    return {
      index: l,
      distance: m
    };
  }
  function h(d, m) {
    const y = [d, d + e, d - e];
    if (!t)
      return d;
    if (!m)
      return u(y);
    const l = y.filter((g) => Dt(g) === m);
    return l.length ? u(l) : j(y) - e;
  }
  function f(d, m) {
    const y = n[d] - c.get(), l = h(y, m);
    return {
      index: d,
      distance: l
    };
  }
  function p(d, m) {
    const y = c.get() + d, {
      index: l,
      distance: g
    } = i(y), b = !t && o(y);
    if (!m || b)
      return {
        index: l,
        distance: d
      };
    const I = n[l] - g, v = d + h(I, 0);
    return {
      index: l,
      distance: v
    };
  }
  return {
    byDistance: p,
    byIndex: f,
    shortcut: h
  };
}
function Pn(t, n, e, s, c, o, r) {
  function a(f) {
    const p = f.distance, C = f.index !== n.get();
    o.add(p), p && (s.duration() ? t.start() : (t.update(), t.render(1), t.update())), C && (e.set(n.get()), n.set(f.index), r.emit("select"));
  }
  function u(f, p) {
    const C = c.byDistance(f, p);
    a(C);
  }
  function i(f, p) {
    const C = n.clone().set(f), d = c.byIndex(C.get(), p);
    a(d);
  }
  return {
    distance: u,
    index: i
  };
}
function Tn(t, n, e, s, c, o, r) {
  let a = 0;
  function u() {
    o.add(document, "keydown", i, !1), n.forEach(h);
  }
  function i(p) {
    p.code === "Tab" && (a = (/* @__PURE__ */ new Date()).getTime());
  }
  function h(p) {
    const C = () => {
      if ((/* @__PURE__ */ new Date()).getTime() - a > 10)
        return;
      t.scrollLeft = 0;
      const y = n.indexOf(p), l = e.findIndex((g) => g.includes(y));
      Tt(l) && (c.useDuration(0), s.index(l, 0), r.emit("slideFocus"));
    };
    o.add(p, "focus", C, {
      passive: !0,
      capture: !0
    });
  }
  return {
    init: u
  };
}
function yt(t) {
  let n = t;
  function e() {
    return n;
  }
  function s(u) {
    n = r(u);
  }
  function c(u) {
    n += r(u);
  }
  function o(u) {
    n -= r(u);
  }
  function r(u) {
    return Tt(u) ? u : u.get();
  }
  return {
    get: e,
    set: s,
    add: c,
    subtract: o
  };
}
function Ut(t, n) {
  const e = t.scroll === "x" ? o : r, s = n.style;
  let c = !1;
  function o(f) {
    return `translate3d(${f}px,0px,0px)`;
  }
  function r(f) {
    return `translate3d(0px,${f}px,0px)`;
  }
  function a(f) {
    c || (s.transform = e(t.direction(f)));
  }
  function u(f) {
    c = !f;
  }
  function i() {
    c || (s.transform = "", n.getAttribute("style") || n.removeAttribute("style"));
  }
  return {
    clear: i,
    to: a,
    toggleActive: u
  };
}
function _n(t, n, e, s, c, o, r, a, u) {
  const h = ft(c), f = ft(c).reverse(), p = l().concat(g());
  function C(x, E) {
    return x.reduce((N, P) => N - c[P], E);
  }
  function d(x, E) {
    return x.reduce((N, P) => C(N, E) > 0 ? N.concat([P]) : N, []);
  }
  function m(x) {
    return o.map((E, N) => ({
      start: E - s[N] + 0.5 + x,
      end: E + n - 0.5 + x
    }));
  }
  function y(x, E, N) {
    const P = m(E);
    return x.map((w) => {
      const V = N ? 0 : -e, Z = N ? e : 0, F = N ? "end" : "start", U = P[w][F];
      return {
        index: w,
        loopPoint: U,
        slideLocation: yt(-1),
        translate: Ut(t, u[w]),
        target: () => a.get() > U ? V : Z
      };
    });
  }
  function l() {
    const x = r[0], E = d(f, x);
    return y(E, e, !1);
  }
  function g() {
    const x = n - r[0] - 1, E = d(h, x);
    return y(E, -e, !0);
  }
  function b() {
    return p.every(({
      index: x
    }) => {
      const E = h.filter((N) => N !== x);
      return C(E, n) <= 0.1;
    });
  }
  function I() {
    p.forEach((x) => {
      const {
        target: E,
        translate: N,
        slideLocation: P
      } = x, w = E();
      w !== P.get() && (N.to(w), P.set(w));
    });
  }
  function v() {
    p.forEach((x) => x.translate.clear());
  }
  return {
    canLoop: b,
    clear: v,
    loop: I,
    loopPoints: p
  };
}
function Dn(t, n, e) {
  let s, c = !1;
  function o(u) {
    if (!e)
      return;
    function i(h) {
      for (const f of h)
        if (f.type === "childList") {
          u.reInit(), n.emit("slidesChanged");
          break;
        }
    }
    s = new MutationObserver((h) => {
      c || (_t(e) || e(u, h)) && i(h);
    }), s.observe(t, {
      childList: !0
    });
  }
  function r() {
    s && s.disconnect(), c = !0;
  }
  return {
    init: o,
    destroy: r
  };
}
function wn(t, n, e, s) {
  const c = {};
  let o = null, r = null, a, u = !1;
  function i() {
    a = new IntersectionObserver((d) => {
      u || (d.forEach((m) => {
        const y = n.indexOf(m.target);
        c[y] = m;
      }), o = null, r = null, e.emit("slidesInView"));
    }, {
      root: t.parentElement,
      threshold: s
    }), n.forEach((d) => a.observe(d));
  }
  function h() {
    a && a.disconnect(), u = !0;
  }
  function f(d) {
    return dt(c).reduce((m, y) => {
      const l = parseInt(y), {
        isIntersecting: g
      } = c[l];
      return (d && g || !d && !g) && m.push(l), m;
    }, []);
  }
  function p(d = !0) {
    if (d && o)
      return o;
    if (!d && r)
      return r;
    const m = f(d);
    return d && (o = m), d || (r = m), m;
  }
  return {
    init: i,
    destroy: h,
    get: p
  };
}
function Bn(t, n, e, s, c, o) {
  const {
    measureSize: r,
    startEdge: a,
    endEdge: u
  } = t, i = e[0] && c, h = d(), f = m(), p = e.map(r), C = y();
  function d() {
    if (!i)
      return 0;
    const g = e[0];
    return _(n[a] - g[a]);
  }
  function m() {
    if (!i)
      return 0;
    const g = o.getComputedStyle(j(s));
    return parseFloat(g.getPropertyValue(`margin-${u}`));
  }
  function y() {
    return e.map((g, b, I) => {
      const v = !b, T = wt(I, b);
      return v ? p[b] + h : T ? p[b] + f : I[b + 1][a] - g[a];
    }).map(_);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: C,
    startGap: h,
    endGap: f
  };
}
function On(t, n, e, s, c, o, r, a, u) {
  const {
    startEdge: i,
    endEdge: h,
    direction: f
  } = t, p = Tt(e);
  function C(l, g) {
    return ft(l).filter((b) => b % g === 0).map((b) => l.slice(b, b + g));
  }
  function d(l) {
    return l.length ? ft(l).reduce((g, b, I) => {
      const v = j(g) || 0, T = v === 0, x = b === pt(l), E = c[i] - o[v][i], N = c[i] - o[b][h], P = !s && T ? f(r) : 0, w = !s && x ? f(a) : 0, V = _(N - w - (E + P));
      return I && V > n + u && g.push(b), x && g.push(l.length), g;
    }, []).map((g, b, I) => {
      const v = Math.max(I[b - 1] || 0);
      return l.slice(v, g);
    }) : [];
  }
  function m(l) {
    return p ? C(l, e) : d(l);
  }
  return {
    groupSlides: m
  };
}
function An(t, n, e, s, c, o, r) {
  const {
    align: a,
    axis: u,
    direction: i,
    startIndex: h,
    loop: f,
    duration: p,
    dragFree: C,
    dragThreshold: d,
    inViewThreshold: m,
    slidesToScroll: y,
    skipSnaps: l,
    containScroll: g,
    watchResize: b,
    watchSlides: I,
    watchDrag: v
  } = o, T = 2, x = gn(), E = x.measure(n), N = e.map(x.measure), P = dn(u, i), w = P.measureSize(E), V = hn(w), Z = ln(a, w), F = !f && !!g, U = f || !!g, {
    slideSizes: tt,
    slideSizesWithGaps: Q,
    startGap: W,
    endGap: J
  } = Bn(P, E, N, e, U, c), nt = On(P, w, y, f, E, N, W, J, T), {
    snaps: X,
    snapsAligned: ct
  } = En(P, Z, E, N, nt), Y = -j(X) + j(Q), {
    snapsContained: ut,
    scrollContainLimit: at
  } = xn(w, Y, ct, g, T), k = F ? ut : ct, {
    limit: G
  } = Cn(Y, k, f), z = Kt(pt(k), h, f), it = z.clone(), H = ft(e), D = ({
    dragHandler: ot,
    scrollBody: It,
    scrollBounds: vt,
    options: {
      loop: ht
    }
  }) => {
    ht || vt.constrain(ot.pointerDown()), It.seek();
  }, S = ({
    scrollBody: ot,
    translate: It,
    location: vt,
    offsetLocation: ht,
    scrollLooper: Yt,
    slideLooper: Zt,
    dragHandler: Wt,
    animation: tn,
    eventHandler: Mt,
    options: {
      loop: nn
    }
  }, en) => {
    const Vt = ot.velocity(), kt = ot.settled();
    kt && !Wt.pointerDown() && (tn.stop(), Mt.emit("settle")), kt || Mt.emit("scroll"), ht.set(vt.get() - Vt + Vt * en), nn && (Yt.loop(ot.direction()), Zt.loop()), It.to(ht.get());
  }, L = fn(s, c, () => D(Ct), (ot) => S(Ct, ot)), B = 0.68, A = k[z.get()], $ = yt(A), R = yt(A), q = yt(A), et = Sn($, R, q, p, B), bt = Nn(f, k, Y, G, q), xt = Pn(L, z, it, et, bt, q, r), Ot = vn(G), At = mt(), Jt = wn(n, e, r, m), {
    slideRegistry: zt
  } = Ln(F, g, k, at, nt, H), Xt = Tn(t, e, zt, xt, et, At, r), Ct = {
    ownerDocument: s,
    ownerWindow: c,
    eventHandler: r,
    containerRect: E,
    slideRects: N,
    animation: L,
    axis: P,
    dragHandler: mn(P, t, s, c, q, pn(P, c), $, L, xt, et, bt, z, r, V, C, d, l, B, v),
    eventStore: At,
    percentOfView: V,
    index: z,
    indexPrevious: it,
    limit: G,
    location: $,
    offsetLocation: R,
    options: o,
    resizeHandler: yn(n, r, c, e, P, b, x),
    scrollBody: et,
    scrollBounds: bn(G, R, q, et, V),
    scrollLooper: In(Y, G, R, [$, R, q]),
    scrollProgress: Ot,
    scrollSnapList: k.map(Ot.get),
    scrollSnaps: k,
    scrollTarget: bt,
    scrollTo: xt,
    slideLooper: _n(P, w, Y, tt, Q, X, k, R, e),
    slideFocus: Xt,
    slidesHandler: Dn(n, r, I),
    slidesInView: Jt,
    slideIndexes: H,
    slideRegistry: zt,
    slidesToScroll: nt,
    target: q,
    translate: Ut(P, n)
  };
  return Ct;
}
function zn() {
  let t = {}, n;
  function e(i) {
    n = i;
  }
  function s(i) {
    return t[i] || [];
  }
  function c(i) {
    return s(i).forEach((h) => h(n, i)), u;
  }
  function o(i, h) {
    return t[i] = s(i).concat([h]), u;
  }
  function r(i, h) {
    return t[i] = s(i).filter((f) => f !== h), u;
  }
  function a() {
    t = {};
  }
  const u = {
    init: e,
    emit: c,
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
    return $t(o, r || {});
  }
  function e(o) {
    const r = o.breakpoints || {}, a = dt(r).filter((u) => t.matchMedia(u).matches).map((u) => r[u]).reduce((u, i) => n(u, i), {});
    return n(o, a);
  }
  function s(o) {
    return o.map((r) => dt(r.breakpoints || {})).reduce((r, a) => r.concat(a), []).map(t.matchMedia);
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
function St(t, n, e) {
  const s = t.ownerDocument, c = s.defaultView, o = Vn(c), r = kn(o), a = mt(), u = zn(), {
    mergeOptions: i,
    optionsAtMedia: h,
    optionsMediaQueries: f
  } = o, {
    on: p,
    off: C,
    emit: d
  } = u, m = w;
  let y = !1, l, g = i(Mn, St.globalOptions), b = i(g), I = [], v, T, x;
  function E() {
    const {
      container: D,
      slides: S
    } = b;
    T = (Lt(D) ? t.querySelector(D) : D) || t.children[0];
    const B = Lt(S) ? T.querySelectorAll(S) : S;
    x = [].slice.call(B || T.children);
  }
  function N(D) {
    const S = An(t, T, x, s, c, D, u);
    if (D.loop && !S.slideLooper.canLoop()) {
      const L = Object.assign({}, D, {
        loop: !1
      });
      return N(L);
    }
    return S;
  }
  function P(D, S) {
    y || (g = i(g, D), b = h(g), I = S || I, E(), l = N(b), f([g, ...I.map(({
      options: L
    }) => L)]).forEach((L) => a.add(L, "change", w)), b.active && (l.translate.to(l.location.get()), l.animation.init(), l.slidesInView.init(), l.slideFocus.init(), l.eventHandler.init(H), l.resizeHandler.init(H), l.slidesHandler.init(H), l.options.loop && l.slideLooper.loop(), T.offsetParent && x.length && l.dragHandler.init(H), v = r.init(H, I)));
  }
  function w(D, S) {
    const L = X();
    V(), P(i({
      startIndex: L
    }, D), S), u.emit("reInit");
  }
  function V() {
    l.dragHandler.destroy(), l.eventStore.clear(), l.translate.clear(), l.slideLooper.clear(), l.resizeHandler.destroy(), l.slidesHandler.destroy(), l.slidesInView.destroy(), l.animation.destroy(), r.destroy(), a.clear();
  }
  function Z() {
    y || (y = !0, a.clear(), V(), u.emit("destroy"), u.clear());
  }
  function F(D, S, L) {
    !b.active || y || (l.scrollBody.useBaseFriction().useDuration(S === !0 ? 0 : b.duration), l.scrollTo.index(D, L || 0));
  }
  function U(D) {
    const S = l.index.add(1).get();
    F(S, D, -1);
  }
  function tt(D) {
    const S = l.index.add(-1).get();
    F(S, D, 1);
  }
  function Q() {
    return l.index.add(1).get() !== X();
  }
  function W() {
    return l.index.add(-1).get() !== X();
  }
  function J() {
    return l.scrollSnapList;
  }
  function nt() {
    return l.scrollProgress.get(l.location.get());
  }
  function X() {
    return l.index.get();
  }
  function ct() {
    return l.indexPrevious.get();
  }
  function Y() {
    return l.slidesInView.get();
  }
  function ut() {
    return l.slidesInView.get(!1);
  }
  function at() {
    return v;
  }
  function k() {
    return l;
  }
  function G() {
    return t;
  }
  function z() {
    return T;
  }
  function it() {
    return x;
  }
  const H = {
    canScrollNext: Q,
    canScrollPrev: W,
    containerNode: z,
    internalEngine: k,
    destroy: Z,
    off: C,
    on: p,
    emit: d,
    plugins: at,
    previousScrollSnap: ct,
    reInit: m,
    rootNode: G,
    scrollNext: U,
    scrollPrev: tt,
    scrollProgress: nt,
    scrollSnapList: J,
    scrollTo: F,
    selectedScrollSnap: X,
    slideNodes: it,
    slidesInView: Y,
    slidesNotInView: ut
  };
  return P(n, e), setTimeout(() => u.emit("init"), 0), H;
}
St.globalOptions = void 0;
function Bt(t = {}, n = []) {
  const e = Ft(t), s = Ft(n), [c, o] = Ht(), [r, a] = Ht(), u = rn(() => {
    c && c.reInit(e.current, s.current);
  }, [c]);
  return Et(() => {
    if (cn() && r) {
      St.globalOptions = Bt.globalOptions;
      const i = St(r, e.current, s.current);
      return o(i), () => i.destroy();
    } else
      o(void 0);
  }, [r, o]), Et(() => {
    Pt(e.current, t) || (e.current = t, u());
  }, [t, u]), Et(() => {
    un(s.current, n) || (s.current = n, u());
  }, [n, u]), [a, c];
}
Bt.globalOptions = void 0;
const Fn = "_carousel_1dhqr_5", Hn = "_carouselContent_1dhqr_13", Rn = "_carouselContentInner_1dhqr_21", qn = "_carouselContentInnerHorizontal_1dhqr_29", jn = "_carouselContentInnerVertical_1dhqr_37", Gn = "_carouselItem_1dhqr_45", $n = "_carouselItemHorizontal_1dhqr_53", Kn = "_carouselItemVertical_1dhqr_61", Un = "_carouselBtn_1dhqr_73", Qn = "_carouselBtnHorizontalLeft_1dhqr_81", Jn = "_carouselBtnHorizontalRight_1dhqr_87", Xn = "_carouselBtnVerticalTop_1dhqr_95", Yn = "_carouselBtnVerticalBottom_1dhqr_101", Zn = "_myPoint_1dhqr_109", Wn = "_active_1dhqr_159", M = {
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
  carouselBtnVerticalBottom: Yn,
  myPoint: Zn,
  active: Wn
}, Qt = O.createContext(null);
function gt() {
  const t = O.useContext(Qt);
  if (!t)
    throw new Error("useCarousel must be used within a <Carousel />");
  return t;
}
const te = O.forwardRef(
  ({
    orientation: t = "horizontal",
    opts: n,
    setApi: e,
    plugins: s,
    className: c,
    children: o,
    ...r
  }, a) => {
    const [u, i] = Bt(
      {
        ...n,
        axis: t === "horizontal" ? "x" : "y"
      },
      s
    ), [h, f] = O.useState(!1), [p, C] = O.useState(!1), [d, m] = O.useState(0), [y, l] = O.useState([]), g = O.useCallback((x) => {
      x && (l(x.slideNodes), m(x.scrollProgress), f(x.canScrollPrev()), C(x.canScrollNext()));
    }, []), b = O.useCallback(() => {
      i == null || i.scrollPrev();
    }, [i]), I = O.useCallback(() => {
      i == null || i.scrollNext();
    }, [i]), v = O.useCallback(
      (x) => {
        i == null || i.scrollTo(x);
      },
      [i]
    ), T = O.useCallback(
      (x) => {
        x.key === "ArrowLeft" ? (x.preventDefault(), b()) : x.key === "ArrowRight" && (x.preventDefault(), I());
      },
      [b, I]
    );
    return O.useEffect(() => {
      !i || !e || e(i);
    }, [i, e]), O.useEffect(() => {
      if (i)
        return g(i), i.on("reInit", g), i.on("select", g), () => {
          i == null || i.off("select", g);
        };
    }, [i, g]), /* @__PURE__ */ K(
      Qt.Provider,
      {
        value: {
          carouselRef: u,
          api: i,
          opts: n,
          orientation: t || ((n == null ? void 0 : n.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: b,
          scrollNext: I,
          canScrollPrev: h,
          canScrollNext: p,
          scrollTo: v,
          slidesNodes: y,
          scrollProgress: d
        },
        children: /* @__PURE__ */ K(
          "div",
          {
            ref: a,
            onKeyDownCapture: T,
            className: rt(M.carousel, c),
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
te.displayName = "Carousel";
const ne = O.forwardRef(({ className: t, ...n }, e) => {
  const { carouselRef: s, orientation: c } = gt();
  return /* @__PURE__ */ K("div", { ref: s, className: M.carouselContent, children: /* @__PURE__ */ K(
    "div",
    {
      ref: e,
      className: rt(
        M.carouselContentInner,
        c === "horizontal" ? M.carouselContentInnerHorizontal : M.carouselContentInnerVertical,
        t
      ),
      ...n
    }
  ) });
});
ne.displayName = "CarouselContent";
const ee = O.forwardRef(({ className: t, ...n }, e) => {
  const { orientation: s } = gt();
  return /* @__PURE__ */ K(
    "div",
    {
      ref: e,
      role: "group",
      "aria-roledescription": "slide",
      className: rt(
        M.carouselItem,
        s === "horizontal" ? M.carouselItemHorizontal : M.carouselItemVertical,
        t
      ),
      ...n
    }
  );
});
ee.displayName = "CarouselItem";
const oe = O.forwardRef(({ className: t, children: n, ...e }, s) => {
  const { orientation: c, scrollPrev: o, canScrollPrev: r } = gt();
  return /* @__PURE__ */ K(
    "button",
    {
      ref: s,
      className: rt(
        M.carouselBtn,
        c === "horizontal" ? M.carouselBtnHorizontalLeft : M.carouselBtnVerticalTop,
        t
      ),
      disabled: !r,
      onClick: o,
      ...e,
      children: n
    }
  );
});
oe.displayName = "CarouselPrevious";
const re = O.forwardRef(({ className: t, children: n, ...e }, s) => {
  const { orientation: c, scrollNext: o, canScrollNext: r } = gt();
  return /* @__PURE__ */ K(
    "button",
    {
      ref: s,
      className: rt(
        M.carouselBtn,
        c === "horizontal" ? M.carouselBtnHorizontalRight : M.carouselBtnVerticalBottom,
        t
      ),
      disabled: !r,
      onClick: o,
      ...e,
      children: n
    }
  );
});
re.displayName = "CarouselNext";
const se = O.forwardRef(({ className: t, ...n }, e) => {
  const { scrollTo: s, slidesNodes: c, scrollProgress: o } = gt();
  if (c.length <= 1)
    return /* @__PURE__ */ K(on, {});
  const r = c.length;
  return /* @__PURE__ */ K("ul", { className: rt(M.myPoint, t), ref: e, ...n, children: c.map((a, u) => /* @__PURE__ */ K(
    "li",
    {
      onClick: () => s(u),
      className: rt({
        active: u + 1 === Math.ceil(o * r)
      })
    },
    u
  )) });
});
se.displayName = "CarouselDotNavigation";
export {
  te as Carousel,
  ne as CarouselContent,
  se as CarouselDotNavigation,
  ee as CarouselItem,
  re as CarouselNext,
  oe as CarouselPrevious
};
