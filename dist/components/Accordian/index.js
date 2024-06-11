import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { useState as p } from "react";
import { cn as e, renderIcon as o } from "../../utils.js";
import '../../assets/index13.css';const h = "_faqitem_1tfqd_2", u = "_faqquestion_1tfqd_6", w = "_faqanswer_1tfqd_10", N = "_ans_1tfqd_13", g = "_open_1tfqd_16", v = "_hide_1tfqd_19", n = {
  faqitem: h,
  faqquestion: u,
  faqanswer: w,
  ans: N,
  open: g,
  hide: v
}, A = ({
  question: i,
  answer: c,
  upIcon: f,
  downIcon: q,
  containerClassName: r,
  questionClassName: _,
  contentClassName: d
}) => {
  const [s, m] = p(!1), l = () => {
    m(!s);
  };
  return /* @__PURE__ */ t("div", { className: e(n.faqitem, r), children: [
    /* @__PURE__ */ t("div", { className: e(n.faqquestion, _), onClick: l, children: [
      i,
      s ? o(f) : o(q)
    ] }),
    /* @__PURE__ */ a("div", { className: e(n.faqanswer, { [n.open]: s }, d), children: /* @__PURE__ */ a(
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
