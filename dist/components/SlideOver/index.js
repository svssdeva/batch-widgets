import { jsx as n, jsxs as c } from "react/jsx-runtime";
import { Fragment as r } from "react";
import { K as i, _, A as a, V as h } from "../../transition-Dr3VHGv3.js";
import '../../assets/index5.css';const m = "_panel_17kdq_1", v = "_container_17kdq_5", u = "_subContainer_17kdq_8", p = "_card_17kdq_11", k = "_subCard_17kdq_14", q = "_child_17kdq_17", C = "_panelChild_17kdq_20", b = "_rounded_17kdq_26", F = "_enter_17kdq_29", T = "_enterFrom_17kdq_32", N = "_enterTo_17kdq_35", f = "_childEnter_17kdq_38", E = "_leave_17kdq_41", e = {
  panel: m,
  container: v,
  subContainer: u,
  card: p,
  subCard: k,
  child: q,
  panelChild: C,
  "panel-sub-child": "_panel-sub-child_17kdq_23",
  rounded: b,
  enter: F,
  enterFrom: T,
  enterTo: N,
  childEnter: f,
  leave: E
}, K = ({
  children: d,
  open: l,
  setOpen: s,
  roundedCorners: t,
  disableBackdropClick: o
}) => /* @__PURE__ */ n(i, { show: l, as: r, children: /* @__PURE__ */ c(
  _,
  {
    as: "div",
    className: e.container,
    onClose: () => {
      o || s(!1);
    },
    children: [
      /* @__PURE__ */ n(
        a,
        {
          as: r,
          enter: e.enter,
          enterFrom: e.enterFrom,
          enterTo: e.enterTo,
          leave: e.enter,
          leaveFrom: e.enterTo,
          leaveTo: e.enterFrom,
          children: /* @__PURE__ */ n("div", { className: e.subContainer })
        }
      ),
      /* @__PURE__ */ n("div", { className: e.card, children: /* @__PURE__ */ n("div", { className: e.subCard, children: /* @__PURE__ */ n("div", { className: e.child, children: /* @__PURE__ */ n(
        a,
        {
          as: r,
          enter: e.childEnter,
          enterFrom: e.leave,
          enterTo: "translate-x-0",
          leave: e.childEnter,
          leaveTo: e.leave,
          children: /* @__PURE__ */ n(
            h,
            {
              className: `${e.panel} ${t ? e.rounded : ""}`,
              children: /* @__PURE__ */ n("div", { className: e.panelChild, children: /* @__PURE__ */ n("div", { className: e["panel-sub-child"], children: d }) })
            }
          )
        }
      ) }) }) })
    ]
  }
) });
export {
  K as SlideOver,
  K as default
};
