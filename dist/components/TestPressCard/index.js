import { jsxs as p, jsx as s } from "react/jsx-runtime";
import { cn as t } from "../../utils.js";
import '../../assets/index.css';const n = "_testWrapper_1pvw0_1", c = "_testHeaderWrapper_1pvw0_7", e = {
  testWrapper: n,
  testHeaderWrapper: c,
  "test-press-btn": "_test-press-btn_1pvw0_15",
  "test-press-card": "_test-press-card_1pvw0_39",
  "test-press-title": "_test-press-title_1pvw0_53",
  "test-press-subtitle": "_test-press-subtitle_1pvw0_61",
  "heading-5": "_heading-5_1pvw0_69",
  "body-1": "_body-1_1pvw0_77"
}, o = ({
  testPress: r,
  isPurchased: a,
  testPressCardIcon: _,
  handleRedirection: i
}) => /* @__PURE__ */ p("div", { className: t(e.testWrapper), children: [
  /* @__PURE__ */ s("img", { src: _, alt: "Test Press Icon" }),
  /* @__PURE__ */ p("div", { className: t(e.testHeaderWrapper), children: [
    /* @__PURE__ */ s("span", { className: t(e["test-press-title"], e["heading-5"]), children: r.title }),
    /* @__PURE__ */ s("span", { className: t(e["test-press-subtitle"], e["body-1"]), children: r.subTitle })
  ] }),
  /* @__PURE__ */ s("button", { onClick: i, className: e["test-press-btn"], children: a ? "My Tests" : "Try Free Tests" })
] });
export {
  o as TestPressCard
};
