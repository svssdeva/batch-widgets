import { jsxs as u, jsx as i } from "react/jsx-runtime";
import { useRef as k, useEffect as p } from "react";
import '../../assets/index8.css';const o = {
  "modal-dialog": "_modal-dialog_yg87k_1",
  "modal-sub": "_modal-sub_yg87k_4",
  "modal-title": "_modal-title_yg87k_7",
  "modal-btn": "_modal-btn_yg87k_10",
  "modal-child": "_modal-child_yg87k_13"
}, w = ({ title: f, children: _, onClose: g, open: n, dismissible: d = !0 }) => {
  const a = k(null);
  p(() => {
    var e, t, l, c, r;
    n ? ((e = a.current) == null || e.showModal(), (t = a.current) == null || t.classList.add("pw-ui-animate-fadeIn"), (l = a.current) == null || l.classList.remove("pw-ui-animate-fadeOut")) : ((c = a.current) == null || c.classList.remove("pw-ui-animate-fadeIn"), (r = a.current) == null || r.classList.add("pw-ui-animate-fadeOut"), setTimeout(() => {
      var m;
      (m = a.current) == null || m.close();
    }, 300));
  }, [n]);
  const s = () => {
    var e, t;
    (e = a.current) == null || e.classList.remove("animate-fadeIn"), (t = a.current) == null || t.classList.add("animate-fadeOut"), setTimeout(() => {
      var l;
      (l = a.current) == null || l.close(), g();
    }, 300);
  }, h = (e) => {
    d && e.target === a.current && s();
  };
  return /* @__PURE__ */ u(
    "dialog",
    {
      ref: a,
      className: o["modal-dialog"],
      onClick: h,
      onClose: s,
      style: { animationDuration: "0.3s", animationTimingFunction: "pw-ui-ease-in-out" },
      children: [
        /* @__PURE__ */ u("div", { className: o["modal-sub"], children: [
          /* @__PURE__ */ i("h2", { className: o["modal-title"], children: f }),
          d && /* @__PURE__ */ i(
            "button",
            {
              className: o["modal-btn"],
              onClick: s,
              children: "Close"
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: o["modal-child"], children: _ })
      ]
    }
  );
};
export {
  w as CustomModal
};
