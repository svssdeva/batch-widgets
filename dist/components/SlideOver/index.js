import { jsxs as m, Fragment as h, jsx as t } from "react/jsx-runtime";
import { cn as n } from "../../utils.js";
import '../../assets/index5.css';const d = "_slideover_1ma5z_4", z = "_backdrop_1ma5z_8", p = "_right_1ma5z_12", g = "_left_1ma5z_16", v = "_open_1ma5z_20", f = "_close_1ma5z_24", k = "_one_1ma5z_28", b = "_two_1ma5z_32", w = "_three_1ma5z_36", x = "_corners_1ma5z_39", j = "_container_1ma5z_44", o = {
  slideover: d,
  backdrop: z,
  right: p,
  left: g,
  open: v,
  close: f,
  one: k,
  two: b,
  three: w,
  corners: x,
  container: j
}, C = ({
  side: e = "right",
  children: c,
  isOpen: r,
  onOpen: _,
  onClose: s,
  roundedCorners: a = !0,
  containerClassName: i,
  backDropClassName: l
}) => (console.log(_), /* @__PURE__ */ m(h, { children: [
  /* @__PURE__ */ t(
    "div",
    {
      className: n(
        o.slideover,
        e === "right" ? o.right : o.left,
        r ? o.one : e === "right" ? o.two : o.three,
        {
          [o.corners]: a
        },
        i
      ),
      children: c
    }
  ),
  /* @__PURE__ */ t(
    "div",
    {
      className: n(o.backdrop, r ? o.open : o.close, l),
      onClick: s
    }
  )
] }));
export {
  C as SlideOver
};
