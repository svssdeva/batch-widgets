import { jsxs as p, Fragment as _, jsx as i } from "react/jsx-runtime";
import { useRef as g, useEffect as h } from "react";
import '../../assets/index8.css';const n = {
  "modal-dialog": "_modal-dialog_tzrzu_1",
  "modal-child": "_modal-child_tzrzu_5",
  "modal-backdrop": "_modal-backdrop_tzrzu_8"
}, L = ({ children: m, open: r, onClose: u }) => {
  const a = g(null);
  h(() => {
    var e, t, s, d, l;
    r ? ((e = a.current) == null || e.showModal(), (t = a.current) == null || t.classList.add("pw-ui-animate-fadeIn"), (s = a.current) == null || s.classList.remove("pw-ui-animate-fadeOut")) : ((d = a.current) == null || d.classList.remove("pw-ui-animate-fadeIn"), (l = a.current) == null || l.classList.add("pw-ui-animate-fadeOut"), setTimeout(() => {
      var c;
      (c = a.current) == null || c.close();
    }, 300));
  }, [r]);
  const o = () => {
    var e, t;
    (e = a.current) == null || e.classList.remove("animate-fadeIn"), (t = a.current) == null || t.classList.add("animate-fadeOut"), setTimeout(() => {
      var s;
      (s = a.current) == null || s.close(), u();
    }, 300);
  }, f = (e) => {
    e.target === a.current && o();
  };
  return /* @__PURE__ */ p(_, { children: [
    r && /* @__PURE__ */ i("div", { className: n["modal-backdrop"] }),
    /* @__PURE__ */ i(
      "dialog",
      {
        ref: a,
        className: n["modal-dialog"],
        onClick: f,
        onClose: o,
        children: m
      }
    )
  ] });
};
export {
  L as CustomModal
};
