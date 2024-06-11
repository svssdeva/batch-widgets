import { jsxs as o, jsx as a } from "react/jsx-runtime";
import { useState as p } from "react";
import { cn as e, renderIcon as t } from "../../utils.js";
import '../../assets/index13.css';const h = "_faqitem_88o15_3", u = "_faqquestion_88o15_11", w = "_faqanswer_88o15_19", N = "_ans_88o15_25", g = "_open_88o15_31", v = "_hide_88o15_37", n = {
  faqitem: h,
  faqquestion: u,
  faqanswer: w,
  ans: N,
  open: g,
  hide: v
}, A = ({
  question: i,
  answer: c,
  upIcon: r,
  downIcon: _,
  containerClassName: f,
  questionClassName: q,
  contentClassName: m
}) => {
  const [s, d] = p(!1), l = () => {
    d(!s);
  };
  return /* @__PURE__ */ o("div", { className: e(n.faqitem, f), children: [
    /* @__PURE__ */ o("div", { className: e(n.faqquestion, q), onClick: l, children: [
      i,
      s ? t(r) : t(_)
    ] }),
    /* @__PURE__ */ a("div", { className: e(n.faqanswer, { [n.open]: s }, m), children: /* @__PURE__ */ a(
      "span",
      {
        className: n.ans,
        dangerouslySetInnerHTML: { __html: c || "" }
      }
    ) })
  ] });
};
export {
  A as Accordion
};
