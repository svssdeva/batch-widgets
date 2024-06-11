import { jsxs as a, Fragment as l, jsx as r } from "react/jsx-runtime";
import '../../assets/index5.css';const i = "_slideover_1ma5z_4", m = "_backdrop_1ma5z_8", h = "_right_1ma5z_12", d = "_left_1ma5z_16", z = "_open_1ma5z_20", g = "_close_1ma5z_24", p = "_one_1ma5z_28", v = "_two_1ma5z_32", $ = "_three_1ma5z_36", f = "_corners_1ma5z_39", k = "_container_1ma5z_44", o = {
  slideover: i,
  backdrop: m,
  right: h,
  left: d,
  open: z,
  close: g,
  one: p,
  two: v,
  three: $,
  corners: f,
  container: k
}, w = ({ side: e = "right", children: n, isOpen: t, onOpen: c, onClose: _, roundedCorners: s = !0 }) => (console.log(c), /* @__PURE__ */ a(l, { children: [
  /* @__PURE__ */ r(
    "div",
    {
      className: `${o.slideover} ${s ? o.corners : ""} ${e === "right" ? o.right : o.left} ${t ? o.one : e === "right" ? o.two : o.three}`,
      children: n
    }
  ),
  /* @__PURE__ */ r(
    "div",
    {
      className: `${o.backdrop} ${t ? o.open : o.close}`,
      onClick: _
    }
  )
] }));
export {
  w as SlideOver
};
