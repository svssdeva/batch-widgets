import { jsxs as r, Fragment as m, jsx as t } from "react/jsx-runtime";
import { useState as f } from "react";
import '../../assets/index5.css';const a = "_slideover_1m9f5_1", h = "_container_1m9f5_5", d = "_btn_1m9f5_8", p = "_sub_1m9f5_11", b = "_right_1m9f5_14", u = "_left_1m9f5_17", g = "_open_1m9f5_20", v = "_close_1m9f5_23", O = "_one_1m9f5_26", C = "_two_1m9f5_29", $ = "_three_1m9f5_32", e = {
  slideover: a,
  container: h,
  btn: d,
  sub: p,
  right: b,
  left: u,
  open: g,
  close: v,
  one: O,
  two: C,
  three: $
}, N = ({ side: n = "right", width: _ = "300px", children: l }) => {
  const [o, s] = f(!1), i = () => s(!0), c = () => s(!1);
  return /* @__PURE__ */ r(m, { children: [
    /* @__PURE__ */ t("button", { onClick: i, className: e.slideover, children: "Open SlideOver" }),
    /* @__PURE__ */ r(
      "div",
      {
        className: `${e.container} ${n === "right" ? e.right : e.left} ${o ? e.one : n === "right" ? e.two : e.three}`,
        style: { width: _ },
        children: [
          /* @__PURE__ */ t("button", { className: e.btn, onClick: c, children: "Close" }),
          l
        ]
      }
    ),
    /* @__PURE__ */ t(
      "div",
      {
        className: `${e.sub} ${o ? e.open : e.close}`,
        onClick: c
      }
    )
  ] });
};
export {
  N as SlideOver
};
