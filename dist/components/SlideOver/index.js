import { jsxs as a, Fragment as d, jsx as t } from "react/jsx-runtime";
import { cn as n } from "../../utils.js";
import '../../assets/index6.css';const h = "_slideover_yg36k_7", p = "_backdrop_yg36k_15", y = "_right_yg36k_23", f = "_left_yg36k_31", m = "_open_yg36k_39", v = "_close_yg36k_47", b = "_one_yg36k_55", w = "_two_yg36k_63", u = "_three_yg36k_71", x = "_corners_yg36k_77", j = "_container_yg36k_87", o = {
  slideover: h,
  backdrop: p,
  right: y,
  left: f,
  open: m,
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
  containerClassName: i,
  backDropClassName: g,
  backdropClick: l = !0
}) => {
  const k = () => {
    l && _();
  };
  return /* @__PURE__ */ a(d, { children: [
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
          i
        ),
        children: c
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        className: n(o.backdrop, r ? o.open : o.close, g),
        onClick: k
      }
    )
  ] });
};
export {
  B as SlideOver
};
