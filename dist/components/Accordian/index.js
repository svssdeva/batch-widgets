import { jsxs as n, jsx as q } from "react/jsx-runtime";
import { useState as m } from "react";
import { renderIcon as t } from "../../utils.js";
import '../../assets/index11.css';const _ = "_faqitem_7cts3_2", l = "_faqquestion_7cts3_6", p = "_faqanswer_7cts3_10", d = "_open_7cts3_14", s = {
  faqitem: _,
  faqquestion: l,
  faqanswer: p,
  open: d
}, g = ({
  question: o,
  answer: a,
  UpIcon: c,
  DownIcon: r
}) => {
  const [e, i] = m(!1), f = () => {
    i(!e);
  };
  return /* @__PURE__ */ n("div", { className: s.faqitem, children: [
    /* @__PURE__ */ n("div", { className: s.faqquestion, onClick: f, children: [
      o,
      e ? t(c) : t(r)
    ] }),
    e && /* @__PURE__ */ q("div", { className: `${s.faqanswer} ${e ? s.open : ""}`, dangerouslySetInnerHTML: { __html: a || "" }, children: "  " })
  ] });
};
export {
  g as Accordion
};
