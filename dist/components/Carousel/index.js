import { jsx as K, Fragment as on } from "react/jsx-runtime";
import * as B from "react";
import { useRef as Ft, useState as Ht, useCallback as rn, useEffect as Et } from "react";
import { cn as rt } from "../../utils.js";
import '../../assets/index7.css';function sn(t) {
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
  const i = JSON.stringify(Object.keys(t.breakpoints || {})), o = JSON.stringify(Object.keys(n.breakpoints || {}));
  return i !== o ? !1 : e.every((r) => {
    const a = t[r], u = n[r];
    return typeof a == "function" ? `${a}` == `${u}` : !Rt(a) || !Rt(u) ? a === u : Pt(a, u);
  });
}
function jt(t) {
  return t.concat().sort((n, e) => n.name > e.name ? 1 : -1).map((n) => n.options);
}
function un(t, n) {
  if (t.length !== n.length)
    return !1;
  const e = jt(t), s = jt(n);
  return e.every((i, o) => {
    const r = s[o];
    return Pt(i, r);
  });
}
function Tt(t) {
  return typeof t == "number";
}
function Lt(t) {
  return typeof t == "string";
}
function kt(t) {
  return typeof t == "boolean";
}
function Gt(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function k(t) {
  return Math.abs(t);
}
function _t(t) {
  return Math.sign(t);
}
function lt(t, n) {
  return k(t - n);
}
function an(t, n) {
  if (t === 0 || n === 0 || k(t) <= k(n))
    return 0;
  const e = lt(k(t), k(n));
  return k(e / t);
}
function ft(t) {
  return dt(t).map(Number);
}
function G(t) {
  return t[pt(t)];
}
function pt(t) {
  return Math.max(0, t.length - 1);
}
function Dt(t, n) {
  return n === pt(t);
}
function qt(t, n = 0) {
  return Array.from(Array(t), (e, s) => n + s);
}
function dt(t) {
  return Object.keys(t);
}
function $t(t, n) {
  return [t, n].reduce((e, s) => (dt(s).forEach((i) => {
    const o = e[i], r = s[i], a = Gt(o) && Gt(r);
    e[i] = a ? $t(o, r) : r;
  }), e), {});
}
function Nt(t, n) {
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
function mt() {
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
  const i = mt(), o = 1e3 / 60;
  let r = null, a = 0, u = 0;
  function c() {
    i.add(t, "visibilitychange", () => {
      t.hidden && d();
    });
  }
  function h() {
    C(), i.clear();
  }
  function f(y) {
    if (!u)
      return;
    r || (r = y);
    const l = y - r;
    for (r = y, a += l; a >= o; )
      e(), a -= o;
    const g = k(a / o);
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
    init: c,
    destroy: h,
    start: p,
    stop: C,
    update: e,
    render: s
  };
}
function dn(t, n) {
  const e = n === "rtl", s = t === "y", i = s ? "y" : "x", o = s ? "x" : "y", r = !s && e ? -1 : 1, a = h(), u = f();
  function c(d) {
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
    scroll: i,
    cross: o,
    startEdge: a,
    endEdge: u,
    measureSize: c,
    direction: p
  };
}
function st(t = 0, n = 0) {
  const e = k(t - n);
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
function Kt(t, n, e) {
  const {
    constrain: s
  } = st(0, t), i = t + 1;
  let o = r(n);
  function r(p) {
    return e ? k((i + p) % i) : s(p);
  }
  function a() {
    return o;
  }
  function u(p) {
    return o = r(p), f;
  }
  function c(p) {
    return h().set(a() + p);
  }
  function h() {
    return Kt(t, a(), e);
  }
  const f = {
    get: a,
    set: u,
    add: c,
    clone: h
  };
  return f;
}
function mn(t, n, e, s, i, o, r, a, u, c, h, f, p, C, d, m, y, l, g) {
  const {
    cross: b,
    direction: I
  } = t, v = ["INPUT", "SELECT", "TEXTAREA"], T = {
    passive: !1
  }, x = mt(), E = mt(), N = st(50, 225).constrain(C.measure(20)), P = {
    mouse: 300,
    touch: 400
  }, D = {
    mouse: 500,
    touch: 600
  }, M = d ? 43 : 25;
  let Z = !1, F = 0, U = 0, tt = !1, Q = !1, W = !1, J = !1;
  function nt(S) {
    if (!g)
      return;
    function L(O) {
      (kt(g) || g(S, O)) && V(O);
    }
    const w = n;
    x.add(w, "dragstart", (O) => O.preventDefault(), T).add(w, "touchmove", () => {
    }, T).add(w, "touchend", () => {
    }).add(w, "touchstart", L).add(w, "mousedown", L).add(w, "touchcancel", A).add(w, "contextmenu", A).add(w, "click", ct, !0);
  }
  function X() {
    x.clear(), E.clear();
  }
  function it() {
    const S = J ? e : n;
    E.add(S, "touchmove", q, T).add(S, "touchend", A).add(S, "mousemove", q, T).add(S, "mouseup", A);
  }
  function Y(S) {
    const L = S.nodeName || "";
    return v.includes(L);
  }
  function ut() {
    return (d ? D : P)[J ? "mouse" : "touch"];
  }
  function at(S, L) {
    const w = f.add(_t(S) * -1), O = h.byDistance(S, !d).distance;
    return d || k(S) < N ? O : y && L ? O * 0.5 : h.byIndex(w.get(), 0).distance;
  }
  function V(S) {
    const L = Nt(S, s);
    J = L, W = d && L && !S.buttons && Z, Z = lt(i.get(), r.get()) >= 2, !(L && S.button !== 0) && (Y(S.target) || (tt = !0, o.pointerDown(S), c.useFriction(0).useDuration(0), i.set(r), it(), F = o.readPoint(S), U = o.readPoint(S, b), p.emit("pointerDown")));
  }
  function q(S) {
    if (!Nt(S, s) && S.touches.length >= 2)
      return A(S);
    const w = o.readPoint(S), O = o.readPoint(S, b), $ = lt(w, F), R = lt(O, U);
    if (!Q && !J && (!S.cancelable || (Q = $ > R, !Q)))
      return A(S);
    const j = o.pointerMove(S);
    $ > m && (W = !0), c.useFriction(0.3).useDuration(0.75), a.start(), i.add(I(j)), S.preventDefault();
  }
  function A(S) {
    const w = h.byDistance(0, !1).index !== f.get(), O = o.pointerUp(S) * ut(), $ = at(I(O), w), R = an(O, $), j = M - 10 * R, et = l + R / 50;
    Q = !1, tt = !1, E.clear(), c.useDuration(j).useFriction(et), u.distance($, !d), J = !1, p.emit("pointerUp");
  }
  function ct(S) {
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
  let s, i;
  function o(f) {
    return f.timeStamp;
  }
  function r(f, p) {
    const d = `client${(p || t.scroll) === "x" ? "X" : "Y"}`;
    return (Nt(f, n) ? f : f.touches[0])[d];
  }
  function a(f) {
    return s = f, i = f, r(f);
  }
  function u(f) {
    const p = r(f) - r(i), C = o(f) - o(s) > 170;
    return i = f, C && (s = f), p;
  }
  function c(f) {
    if (!s || !i)
      return 0;
    const p = r(i) - r(s), C = o(f) - o(s), d = o(f) - o(i) > 170, m = p / C;
    return C && !d && k(m) > 0.1 ? m : 0;
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
  let a, u, c = [], h = !1;
  function f(m) {
    return i.measureSize(r.measure(m));
  }
  function p(m) {
    if (!o)
      return;
    u = f(t), c = s.map(f);
    function y(g) {
      for (const b of g) {
        const I = b.target === t, v = s.indexOf(b.target), T = I ? u : c[v], x = f(I ? t : s[v]);
        if (k(x - T) >= 0.5) {
          e.requestAnimationFrame(() => {
            m.reInit(), n.emit("resize");
          });
          break;
        }
      }
    }
    a = new ResizeObserver((g) => {
      h || (kt(o) || o(m, g)) && y(g);
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
function Sn(t, n, e, s, i) {
  let o = 0, r = 0, a = s, u = i, c = t.get(), h = 0;
  function f() {
    const v = e.get() - t.get(), T = !a;
    let x = 0;
    return T ? (o = 0, t.set(e), x = v) : (o += v / a, o *= u, c += o, t.add(o), x = c - h), r = _t(x), h = c, I;
  }
  function p() {
    const v = e.get() - n.get();
    return k(v) < 1e-3;
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
    return b(i);
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
function bn(t, n, e, s, i) {
  const o = i.measure(10), r = i.measure(50), a = st(0.1, 0.99);
  let u = !1;
  function c() {
    return !(u || !t.reachedAny(e.get()) || !t.reachedAny(n.get()));
  }
  function h(C) {
    if (!c())
      return;
    const d = t.reachedMin(n.get()) ? "min" : "max", m = k(t[d] - n.get()), y = e.get() - n.get(), l = a.constrain(m / r);
    e.subtract(y * l), !C && k(y) < o && (e.set(t.constrain(e.get())), s.useDuration(25).useBaseFriction());
  }
  function f(C) {
    u = !C;
  }
  return {
    constrain: h,
    toggleActive: f
  };
}
function xn(t, n, e, s, i) {
  const o = st(-n + t, 0), r = f(), a = h(), u = p();
  function c(d, m) {
    return lt(d, m) < 1;
  }
  function h() {
    const d = r[0], m = G(r), y = r.lastIndexOf(d), l = r.indexOf(m) + 1;
    return st(y, l);
  }
  function f() {
    return e.map((d, m) => {
      const {
        min: y,
        max: l
      } = o, g = o.constrain(d), b = !m, I = Dt(e, m);
      return b ? l : I || c(y, g) ? y : c(l, g) ? l : g;
    }).map((d) => parseFloat(d.toFixed(3)));
  }
  function p() {
    if (n <= t + i)
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
  const s = n[0], i = e ? s - t : G(n);
  return {
    limit: st(i, s)
  };
}
function In(t, n, e, s) {
  const o = n.min + 0.1, r = n.max + 0.1, {
    reachedMin: a,
    reachedMax: u
  } = st(o, r);
  function c(p) {
    return p === 1 ? u(e.get()) : p === -1 ? a(e.get()) : !1;
  }
  function h(p) {
    if (!c(p))
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
function En(t, n, e, s, i) {
  const {
    startEdge: o,
    endEdge: r
  } = t, {
    groupSlides: a
  } = i, u = f().map(n.measure), c = p(), h = C();
  function f() {
    return a(s).map((m) => G(m)[r] - m[0][o]).map(k);
  }
  function p() {
    return s.map((m) => e[o] - m[o]).map((m) => -k(m));
  }
  function C() {
    return a(c).map((m) => m[0]).map((m, y) => m + u[y]);
  }
  return {
    snaps: c,
    snapsAligned: h
  };
}
function Ln(t, n, e, s, i, o) {
  const {
    groupSlides: r
  } = i, {
    min: a,
    max: u
  } = s, c = h();
  function h() {
    const p = r(o), C = !t || n === "keepSnaps";
    return e.length === 1 ? [o] : C ? p : p.slice(a, u).map((d, m, y) => {
      const l = !m, g = Dt(y, m);
      if (l) {
        const b = G(y[0]) + 1;
        return qt(b);
      }
      if (g) {
        const b = pt(o) - G(y)[0] + 1;
        return qt(b, G(y)[0]);
      }
      return d;
    });
  }
  return {
    slideRegistry: c
  };
}
function Nn(t, n, e, s, i) {
  const {
    reachedAny: o,
    removeOffset: r,
    constrain: a
  } = s;
  function u(d) {
    return d.concat().sort((m, y) => k(m) - k(y))[0];
  }
  function c(d) {
    const m = t ? r(d) : a(d), y = n.map((g, b) => ({
      diff: h(g - m, 0),
      index: b
    })).sort((g, b) => k(g.diff) - k(b.diff)), {
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
    const l = y.filter((g) => _t(g) === m);
    return l.length ? u(l) : G(y) - e;
  }
  function f(d, m) {
    const y = n[d] - i.get(), l = h(y, m);
    return {
      index: d,
      distance: l
    };
  }
  function p(d, m) {
    const y = i.get() + d, {
      index: l,
      distance: g
    } = c(y), b = !t && o(y);
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
function Pn(t, n, e, s, i, o, r) {
  function a(f) {
    const p = f.distance, C = f.index !== n.get();
    o.add(p), p && (s.duration() ? t.start() : (t.update(), t.render(1), t.update())), C && (e.set(n.get()), n.set(f.index), r.emit("select"));
  }
  function u(f, p) {
    const C = i.byDistance(f, p);
    a(C);
  }
  function c(f, p) {
    const C = n.clone().set(f), d = i.byIndex(C.get(), p);
    a(d);
  }
  return {
    distance: u,
    index: c
  };
}
function Tn(t, n, e, s, i, o, r) {
  let a = 0;
  function u() {
    o.add(document, "keydown", c, !1), n.forEach(h);
  }
  function c(p) {
    p.code === "Tab" && (a = (/* @__PURE__ */ new Date()).getTime());
  }
  function h(p) {
    const C = () => {
      if ((/* @__PURE__ */ new Date()).getTime() - a > 10)
        return;
      t.scrollLeft = 0;
      const y = n.indexOf(p), l = e.findIndex((g) => g.includes(y));
      Tt(l) && (i.useDuration(0), s.index(l, 0), r.emit("slideFocus"));
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
  function i(u) {
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
    add: i,
    subtract: o
  };
}
function Ut(t, n) {
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
function kn(t, n, e, s, i, o, r, a, u) {
  const h = ft(i), f = ft(i).reverse(), p = l().concat(g());
  function C(x, E) {
    return x.reduce((N, P) => N - i[P], E);
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
    return x.map((D) => {
      const M = N ? 0 : -e, Z = N ? e : 0, F = N ? "end" : "start", U = P[D][F];
      return {
        index: D,
        loopPoint: U,
        slideLocation: yt(-1),
        translate: Ut(t, u[D]),
        target: () => a.get() > U ? M : Z
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
      } = x, D = E();
      D !== P.get() && (N.to(D), P.set(D));
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
function _n(t, n, e) {
  let s, i = !1;
  function o(u) {
    if (!e)
      return;
    function c(h) {
      for (const f of h)
        if (f.type === "childList") {
          u.reInit(), n.emit("slidesChanged");
          break;
        }
    }
    s = new MutationObserver((h) => {
      i || (kt(e) || e(u, h)) && c(h);
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
      u || (d.forEach((m) => {
        const y = n.indexOf(m.target);
        i[y] = m;
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
    return dt(i).reduce((m, y) => {
      const l = parseInt(y), {
        isIntersecting: g
      } = i[l];
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
    init: c,
    destroy: h,
    get: p
  };
}
function wn(t, n, e, s, i, o) {
  const {
    measureSize: r,
    startEdge: a,
    endEdge: u
  } = t, c = e[0] && i, h = d(), f = m(), p = e.map(r), C = y();
  function d() {
    if (!c)
      return 0;
    const g = e[0];
    return k(n[a] - g[a]);
  }
  function m() {
    if (!c)
      return 0;
    const g = o.getComputedStyle(G(s));
    return parseFloat(g.getPropertyValue(`margin-${u}`));
  }
  function y() {
    return e.map((g, b, I) => {
      const v = !b, T = Dt(I, b);
      return v ? p[b] + h : T ? p[b] + f : I[b + 1][a] - g[a];
    }).map(k);
  }
  return {
    slideSizes: p,
    slideSizesWithGaps: C,
    startGap: h,
    endGap: f
  };
}
function Bn(t, n, e, s, i, o, r, a, u) {
  const {
    startEdge: c,
    endEdge: h,
    direction: f
  } = t, p = Tt(e);
  function C(l, g) {
    return ft(l).filter((b) => b % g === 0).map((b) => l.slice(b, b + g));
  }
  function d(l) {
    return l.length ? ft(l).reduce((g, b, I) => {
      const v = G(g) || 0, T = v === 0, x = b === pt(l), E = i[c] - o[v][c], N = i[c] - o[b][h], P = !s && T ? f(r) : 0, D = !s && x ? f(a) : 0, M = k(N - D - (E + P));
      return I && M > n + u && g.push(b), x && g.push(l.length), g;
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
function On(t, n, e, s, i, o, r) {
  const {
    align: a,
    axis: u,
    direction: c,
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
  } = o, T = 2, x = gn(), E = x.measure(n), N = e.map(x.measure), P = dn(u, c), D = P.measureSize(E), M = hn(D), Z = ln(a, D), F = !f && !!g, U = f || !!g, {
    slideSizes: tt,
    slideSizesWithGaps: Q,
    startGap: W,
    endGap: J
  } = wn(P, E, N, e, U, i), nt = Bn(P, D, y, f, E, N, W, J, T), {
    snaps: X,
    snapsAligned: it
  } = En(P, Z, E, N, nt), Y = -G(X) + G(Q), {
    snapsContained: ut,
    scrollContainLimit: at
  } = xn(D, Y, it, g, T), V = F ? ut : it, {
    limit: q
  } = Cn(Y, V, f), A = Kt(pt(V), h, f), ct = A.clone(), H = ft(e), _ = ({
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
    eventHandler: zt,
    options: {
      loop: nn
    }
  }, en) => {
    const Mt = ot.velocity(), Vt = ot.settled();
    Vt && !Wt.pointerDown() && (tn.stop(), zt.emit("settle")), Vt || zt.emit("scroll"), ht.set(vt.get() - Mt + Mt * en), nn && (Yt.loop(ot.direction()), Zt.loop()), It.to(ht.get());
  }, L = fn(s, i, () => _(Ct), (ot) => S(Ct, ot)), w = 0.68, O = V[A.get()], $ = yt(O), R = yt(O), j = yt(O), et = Sn($, R, j, p, w), bt = Nn(f, V, Y, q, j), xt = Pn(L, A, ct, et, bt, j, r), Bt = vn(q), Ot = mt(), Jt = Dn(n, e, r, m), {
    slideRegistry: At
  } = Ln(F, g, V, at, nt, H), Xt = Tn(t, e, At, xt, et, Ot, r), Ct = {
    ownerDocument: s,
    ownerWindow: i,
    eventHandler: r,
    containerRect: E,
    slideRects: N,
    animation: L,
    axis: P,
    dragHandler: mn(P, t, s, i, j, pn(P, i), $, L, xt, et, bt, A, r, M, C, d, l, w, v),
    eventStore: Ot,
    percentOfView: M,
    index: A,
    indexPrevious: ct,
    limit: q,
    location: $,
    offsetLocation: R,
    options: o,
    resizeHandler: yn(n, r, i, e, P, b, x),
    scrollBody: et,
    scrollBounds: bn(q, R, j, et, M),
    scrollLooper: In(Y, q, R, [$, R, j]),
    scrollProgress: Bt,
    scrollSnapList: V.map(Bt.get),
    scrollSnaps: V,
    scrollTarget: bt,
    scrollTo: xt,
    slideLooper: kn(P, D, Y, tt, Q, X, V, R, e),
    slideFocus: Xt,
    slidesHandler: _n(n, r, I),
    slidesInView: Jt,
    slideIndexes: H,
    slideRegistry: At,
    slidesToScroll: nt,
    target: j,
    translate: Ut(P, n)
  };
  return Ct;
}
function An() {
  let t = {}, n;
  function e(c) {
    n = c;
  }
  function s(c) {
    return t[c] || [];
  }
  function i(c) {
    return s(c).forEach((h) => h(n, c)), u;
  }
  function o(c, h) {
    return t[c] = s(c).concat([h]), u;
  }
  function r(c, h) {
    return t[c] = s(c).filter((f) => f !== h), u;
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
const zn = {
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
function Mn(t) {
  function n(o, r) {
    return $t(o, r || {});
  }
  function e(o) {
    const r = o.breakpoints || {}, a = dt(r).filter((u) => t.matchMedia(u).matches).map((u) => r[u]).reduce((u, c) => n(u, c), {});
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
function Vn(t) {
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
  const s = t.ownerDocument, i = s.defaultView, o = Mn(i), r = Vn(o), a = mt(), u = An(), {
    mergeOptions: c,
    optionsAtMedia: h,
    optionsMediaQueries: f
  } = o, {
    on: p,
    off: C,
    emit: d
  } = u, m = D;
  let y = !1, l, g = c(zn, St.globalOptions), b = c(g), I = [], v, T, x;
  function E() {
    const {
      container: _,
      slides: S
    } = b;
    T = (Lt(_) ? t.querySelector(_) : _) || t.children[0];
    const w = Lt(S) ? T.querySelectorAll(S) : S;
    x = [].slice.call(w || T.children);
  }
  function N(_) {
    const S = On(t, T, x, s, i, _, u);
    if (_.loop && !S.slideLooper.canLoop()) {
      const L = Object.assign({}, _, {
        loop: !1
      });
      return N(L);
    }
    return S;
  }
  function P(_, S) {
    y || (g = c(g, _), b = h(g), I = S || I, E(), l = N(b), f([g, ...I.map(({
      options: L
    }) => L)]).forEach((L) => a.add(L, "change", D)), b.active && (l.translate.to(l.location.get()), l.animation.init(), l.slidesInView.init(), l.slideFocus.init(), l.eventHandler.init(H), l.resizeHandler.init(H), l.slidesHandler.init(H), l.options.loop && l.slideLooper.loop(), T.offsetParent && x.length && l.dragHandler.init(H), v = r.init(H, I)));
  }
  function D(_, S) {
    const L = X();
    M(), P(c({
      startIndex: L
    }, _), S), u.emit("reInit");
  }
  function M() {
    l.dragHandler.destroy(), l.eventStore.clear(), l.translate.clear(), l.slideLooper.clear(), l.resizeHandler.destroy(), l.slidesHandler.destroy(), l.slidesInView.destroy(), l.animation.destroy(), r.destroy(), a.clear();
  }
  function Z() {
    y || (y = !0, a.clear(), M(), u.emit("destroy"), u.clear());
  }
  function F(_, S, L) {
    !b.active || y || (l.scrollBody.useBaseFriction().useDuration(S === !0 ? 0 : b.duration), l.scrollTo.index(_, L || 0));
  }
  function U(_) {
    const S = l.index.add(1).get();
    F(S, _, -1);
  }
  function tt(_) {
    const S = l.index.add(-1).get();
    F(S, _, 1);
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
  function it() {
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
  function V() {
    return l;
  }
  function q() {
    return t;
  }
  function A() {
    return T;
  }
  function ct() {
    return x;
  }
  const H = {
    canScrollNext: Q,
    canScrollPrev: W,
    containerNode: A,
    internalEngine: V,
    destroy: Z,
    off: C,
    on: p,
    emit: d,
    plugins: at,
    previousScrollSnap: it,
    reInit: m,
    rootNode: q,
    scrollNext: U,
    scrollPrev: tt,
    scrollProgress: nt,
    scrollSnapList: J,
    scrollTo: F,
    selectedScrollSnap: X,
    slideNodes: ct,
    slidesInView: Y,
    slidesNotInView: ut
  };
  return P(n, e), setTimeout(() => u.emit("init"), 0), H;
}
St.globalOptions = void 0;
function wt(t = {}, n = []) {
  const e = Ft(t), s = Ft(n), [i, o] = Ht(), [r, a] = Ht(), u = rn(() => {
    i && i.reInit(e.current, s.current);
  }, [i]);
  return Et(() => {
    if (cn() && r) {
      St.globalOptions = wt.globalOptions;
      const c = St(r, e.current, s.current);
      return o(c), () => c.destroy();
    } else
      o(void 0);
  }, [r, o]), Et(() => {
    Pt(e.current, t) || (e.current = t, u());
  }, [t, u]), Et(() => {
    un(s.current, n) || (s.current = n, u());
  }, [n, u]), [a, i];
}
wt.globalOptions = void 0;
const Fn = "_carousel_iykau_3", Hn = "_carouselContent_iykau_7", Rn = "_carouselContentInner_iykau_11", jn = "_carouselContentInnerHorizontal_iykau_15", Gn = "_carouselContentInnerVertical_iykau_19", qn = "_carouselItem_iykau_23", $n = "_carouselItemHorizontal_iykau_27", Kn = "_carouselItemVertical_iykau_31", Un = "_carouselBtn_iykau_37", Qn = "_carouselBtnHorizontalLeft_iykau_41", Jn = "_carouselBtnHorizontalRight_iykau_44", Xn = "_carouselBtnVerticalTop_iykau_48", Yn = "_carouselBtnVerticalBottom_iykau_51", Zn = "_myPoint_iykau_55", Wn = "_active_iykau_80", z = {
  carousel: Fn,
  carouselContent: Hn,
  carouselContentInner: Rn,
  carouselContentInnerHorizontal: jn,
  carouselContentInnerVertical: Gn,
  carouselItem: qn,
  carouselItemHorizontal: $n,
  carouselItemVertical: Kn,
  carouselBtn: Un,
  carouselBtnHorizontalLeft: Qn,
  carouselBtnHorizontalRight: Jn,
  carouselBtnVerticalTop: Xn,
  carouselBtnVerticalBottom: Yn,
  myPoint: Zn,
  active: Wn
}, Qt = B.createContext(null);
function gt() {
  const t = B.useContext(Qt);
  if (!t)
    throw new Error("useCarousel must be used within a <Carousel />");
  return t;
}
const te = B.forwardRef(
  ({
    orientation: t = "horizontal",
    opts: n,
    setApi: e,
    plugins: s,
    className: i,
    children: o,
    ...r
  }, a) => {
    const [u, c] = wt(
      {
        ...n,
        axis: t === "horizontal" ? "x" : "y"
      },
      s
    ), [h, f] = B.useState(!1), [p, C] = B.useState(!1), [d, m] = B.useState(0), [y, l] = B.useState([]), g = B.useCallback((x) => {
      x && (l(x.slideNodes), m(x.scrollProgress), f(x.canScrollPrev()), C(x.canScrollNext()));
    }, []), b = B.useCallback(() => {
      c == null || c.scrollPrev();
    }, [c]), I = B.useCallback(() => {
      c == null || c.scrollNext();
    }, [c]), v = B.useCallback(
      (x) => {
        c == null || c.scrollTo(x);
      },
      [c]
    ), T = B.useCallback(
      (x) => {
        x.key === "ArrowLeft" ? (x.preventDefault(), b()) : x.key === "ArrowRight" && (x.preventDefault(), I());
      },
      [b, I]
    );
    return B.useEffect(() => {
      !c || !e || e(c);
    }, [c, e]), B.useEffect(() => {
      if (c)
        return g(c), c.on("reInit", g), c.on("select", g), () => {
          c == null || c.off("select", g);
        };
    }, [c, g]), /* @__PURE__ */ K(
      Qt.Provider,
      {
        value: {
          carouselRef: u,
          api: c,
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
            className: rt(z.carousel, i),
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
const ne = B.forwardRef(({ className: t, ...n }, e) => {
  const { carouselRef: s, orientation: i } = gt();
  return /* @__PURE__ */ K("div", { ref: s, className: z.carouselContent, children: /* @__PURE__ */ K(
    "div",
    {
      ref: e,
      className: rt(
        z.carouselContentInner,
        i === "horizontal" ? z.carouselContentInnerHorizontal : z.carouselContentInnerVertical,
        t
      ),
      ...n
    }
  ) });
});
ne.displayName = "CarouselContent";
const ee = B.forwardRef(({ className: t, ...n }, e) => {
  const { orientation: s } = gt();
  return /* @__PURE__ */ K(
    "div",
    {
      ref: e,
      role: "group",
      "aria-roledescription": "slide",
      className: rt(
        z.carouselItem,
        s === "horizontal" ? z.carouselItemHorizontal : z.carouselItemVertical,
        t
      ),
      ...n
    }
  );
});
ee.displayName = "CarouselItem";
const oe = B.forwardRef(({ className: t, children: n, ...e }, s) => {
  const { orientation: i, scrollPrev: o, canScrollPrev: r } = gt();
  return /* @__PURE__ */ K(
    "button",
    {
      ref: s,
      className: rt(
        z.carouselBtn,
        i === "horizontal" ? z.carouselBtnHorizontalLeft : z.carouselBtnVerticalTop,
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
const re = B.forwardRef(({ className: t, children: n, ...e }, s) => {
  const { orientation: i, scrollNext: o, canScrollNext: r } = gt();
  return /* @__PURE__ */ K(
    "button",
    {
      ref: s,
      className: rt(
        z.carouselBtn,
        i === "horizontal" ? z.carouselBtnHorizontalRight : z.carouselBtnVerticalBottom,
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
const se = B.forwardRef(({ className: t, ...n }, e) => {
  const { scrollTo: s, slidesNodes: i, scrollProgress: o } = gt();
  if (i.length <= 1)
    return /* @__PURE__ */ K(on, {});
  const r = i.length;
  return /* @__PURE__ */ K("ul", { className: rt(z.myPoint, t), ref: e, ...n, children: i.map((a, u) => /* @__PURE__ */ K(
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
