import { jsxs as n, jsx as f } from "react/jsx-runtime";
import { useState as m } from "react";
import { renderIcon as a } from "../../utils.js";
import '../../assets/index11.css';const l = "_faqitem_1m0qg_2", _ = "_faqquestion_1m0qg_6", d = "_faqanswer_1m0qg_11", e = {
  faqitem: l,
  faqquestion: _,
  faqanswer: d
}, w = ({
  question: t,
  answer: o,
  UpIcon: i,
  DownIcon: q
}) => {
  const [s, r] = m(!1), c = () => {
    r(!s);
  };
  return /* @__PURE__ */ n("div", { className: e.faqitem, children: [
    /* @__PURE__ */ n("div", { className: e.faqquestion, onClick: c, children: [
      t,
      s ? a(i) : a(q)
    ] }),
    s && /* @__PURE__ */ f("div", { className: e.faqanswer, children: o })
  ] });
};
export {
  w as Accordion
};
