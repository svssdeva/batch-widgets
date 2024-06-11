import { jsxs as g, Fragment as w, jsx as i } from "react/jsx-runtime";
import { useRef as h, useEffect as k } from "react";
import { cn as L } from "../../utils.js";
import '../../assets/index9.css';const C = "_modalDialog_5wcq0_1", n = {
  modalDialog: C,
  "modal-child": "_modal-child_5wcq0_9",
  "modal-backdrop": "_modal-backdrop_5wcq0_15"
}, q = ({
  children: m,
  open: s,
  onClose: u,
  panelClassName: f,
  backdropClick: p = !0
}) => {
  const a = h(null);
  k(() => {
    var e, t, o, c, l;
    s ? ((e = a.current) == null || e.showModal(), (t = a.current) == null || t.classList.add("pw-ui-animate-fadeIn"), (o = a.current) == null || o.classList.remove("pw-ui-animate-fadeOut")) : ((c = a.current) == null || c.classList.remove("pw-ui-animate-fadeIn"), (l = a.current) == null || l.classList.add("pw-ui-animate-fadeOut"), setTimeout(() => {
      var d;
      (d = a.current) == null || d.close();
    }, 300));
  }, [s]);
  const r = () => {
    var e, t;
    (e = a.current) == null || e.classList.remove("animate-fadeIn"), (t = a.current) == null || t.classList.add("animate-fadeOut"), setTimeout(() => {
      var o;
      (o = a.current) == null || o.close(), u();
    }, 300);
  }, _ = (e) => {
    p && e.target === a.current && r();
  };
  return /* @__PURE__ */ g(w, { children: [
    s && /* @__PURE__ */ i("div", { className: n["modal-backdrop"] }),
    /* @__PURE__ */ i(
      "dialog",
      {
        ref: a,
        className: L(n.modalDialog, f),
        onClick: _,
        onClose: r,
        children: m
      }
    )
  ] });
};
export {
  q as CustomModal
};
