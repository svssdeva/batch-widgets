import { jsxs as e, jsx as a } from "react/jsx-runtime";
import { useState as f } from "react";
import { renderIcon as o } from "../../utils.js";
import '../../assets/index11.css';const q = "_faqitem_1ymjx_2", l = "_faqquestion_1ymjx_6", p = "_faqanswer_1ymjx_10", d = "_ans_1ymjx_13", x = "_open_1ymjx_16", s = {
  faqitem: q,
  faqquestion: l,
  faqanswer: p,
  ans: d,
  open: x
}, h = ({
  question: t,
  answer: r,
  upIcon: c,
  downIcon: i
}) => {
  const [n, m] = f(!1), _ = () => {
    m(!n);
  };
  return /* @__PURE__ */ e("div", { className: s.faqitem, children: [
    /* @__PURE__ */ e("div", { className: s.faqquestion, onClick: _, children: [
      t,
      n ? o(c) : o(i)
    ] }),
    /* @__PURE__ */ a("div", { className: `${s.faqanswer} ${n ? s.open : ""}`, children: /* @__PURE__ */ a("span", { className: s.ans, dangerouslySetInnerHTML: { __html: r || "" } }) })
  ] });
};
export {
  h as Accordion
};
