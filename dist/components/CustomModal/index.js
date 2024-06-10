import { jsx as e, jsxs as c } from "react/jsx-runtime";
import { Fragment as i } from "react";
import { K as l, _ as d, A as o, V as p } from "../../transition-Dr3VHGv3.js";
import '../../assets/index8.css';const m = "_container_19342_7", _ = "_panel_19342_13", a = {
  "dialog-div": "_dialog-div_19342_1",
  "transition-child-div": "_transition-child-div_19342_4",
  container: m,
  "sub-container": "_sub-container_19342_10",
  panel: _
}, y = ({
  panelclassName: n = "",
  isOpen: t,
  setOpen: s,
  children: r
}) => /* @__PURE__ */ e(l, { appear: !0, show: t, as: i, children: /* @__PURE__ */ c(d, { as: "div", className: a["dialog-div"], onClose: s, children: [
  /* @__PURE__ */ e(
    o,
    {
      as: i,
      enter: "ease-out duration-300",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in duration-200",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0",
      children: /* @__PURE__ */ e("div", { className: a["transition-child-div"] })
    }
  ),
  /* @__PURE__ */ e("div", { className: a.container, children: /* @__PURE__ */ e("div", { className: a["sub-container"], children: /* @__PURE__ */ e(
    o,
    {
      as: i,
      enter: "ease-out duration-300",
      enterFrom: "opacity-0 scale-95",
      enterTo: "opacity-100 scale-100",
      leave: "ease-in duration-200",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-95",
      children: /* @__PURE__ */ e(p, { className: `${a.panel} ${n} `, children: r })
    }
  ) }) })
] }) });
export {
  y as CustomModal
};
