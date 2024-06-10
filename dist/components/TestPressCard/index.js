import { jsxs as p, jsx as s } from "react/jsx-runtime";
import { cn as t } from "../../utils.js";
import '../../assets/index.css';const o = "_testWrapper_1om7l_1", i = "_testHeaderWrapper_1om7l_4", e = {
  testWrapper: o,
  testHeaderWrapper: i,
  "test-press-btn": "_test-press-btn_1om7l_8",
  "test-press-card": "_test-press-card_1om7l_20",
  "test-press-title": "_test-press-title_1om7l_27",
  "test-press-subtitle": "_test-press-subtitle_1om7l_31",
  "heading-5": "_heading-5_1om7l_35",
  "body-1": "_body-1_1om7l_39"
}, d = ({
  testPress: r,
  isPurchased: a,
  testPressCardIcon: l,
  handleRedirection: _
}) => /* @__PURE__ */ p("div", { className: t(e.testWrapper), children: [
  /* @__PURE__ */ s("img", { src: l, alt: "Test Press Icon" }),
  /* @__PURE__ */ p("div", { className: t(e.testHeaderWrapper), children: [
    /* @__PURE__ */ s("span", { className: t(e["test-press-title"], e["heading-5"]), children: r.title }),
    /* @__PURE__ */ s("span", { className: t(e["test-press-subtitle"], e["body-1"]), children: r.subTitle })
  ] }),
  /* @__PURE__ */ s("button", { onClick: _, className: e["test-press-btn"], children: a ? "My Tests" : "Try Free Tests" })
] });
export {
  d as TestPressCard
};
