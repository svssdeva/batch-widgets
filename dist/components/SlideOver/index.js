import { jsxs as d, Fragment as h, jsx as t } from "react/jsx-runtime";
import { cn as n } from "../../utils.js";
import '../../assets/index6.css';const p = "_slideover_1ma5z_4", z = "_backdrop_1ma5z_8", g = "_right_1ma5z_12", f = "_left_1ma5z_16", k = "_open_1ma5z_20", v = "_close_1ma5z_24", b = "_one_1ma5z_28", w = "_two_1ma5z_32", u = "_three_1ma5z_36", x = "_corners_1ma5z_39", j = "_container_1ma5z_44", o = {
  slideover: p,
  backdrop: z,
  right: g,
  left: f,
  open: k,
  close: v,
  one: b,
  two: w,
  three: u,
  corners: x,
  container: j
}, B = ({
  side: e = "right",
  children: c,
  isOpen: r,
  onClose: _,
  roundedCorners: s = !0,
  containerClassName: a,
  backDropClassName: i,
  backdropClick: l = !0
}) => {
  const m = () => {
    l && _();
  };
  return /* @__PURE__ */ d(h, { children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: n(
          o.slideover,
          e === "right" ? o.right : o.left,
          r ? o.one : e === "right" ? o.two : o.three,
          {
            [o.corners]: s
          },
          a
        ),
        children: c
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        className: n(o.backdrop, r ? o.open : o.close, i),
        onClick: m
      }
    )
  ] });
};
export {
  B as SlideOver
};
