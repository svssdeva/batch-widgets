import { jsxs as r, jsx as a } from "react/jsx-runtime";
import { truncate as t, cn as i } from "../../utils.js";
import '../../assets/index5.css';const s = {
  "all-class-card": "_all-class-card_1e149_5",
  class: "_class_1e149_19",
  "class-title": "_class-title_1e149_27",
  "tag-color": "_tag-color_1e149_35",
  "caption-1": "_caption-1_1e149_43"
}, d = ({
  subject: c,
  tagCount: l,
  img: e
}) => /* @__PURE__ */ r("div", { className: s["all-class-card"], children: [
  /* @__PURE__ */ a("img", { src: e, alt: c }),
  /* @__PURE__ */ r("div", { className: s.class, children: [
    /* @__PURE__ */ a("div", { className: s["class-title"], children: t(c, 15) }),
    /* @__PURE__ */ a("div", { className: i(s["tag-color"], s["caption-1"]), children: l ? `${l} Chapters` : "" })
  ] })
] });
export {
  d as SubjectCard
};
