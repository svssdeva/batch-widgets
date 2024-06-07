import { jsxs as d, jsx as s } from "react/jsx-runtime";
import { truncate as t, cn as i } from "../../utils.js";
import '../../assets/index.css';const a = {
  "all-class-card": "_all-class-card_15dd5_3",
  class: "_class_15dd5_10",
  "class-title": "_class-title_15dd5_14",
  "tag-color": "_tag-color_15dd5_18",
  "caption-1": "_caption-1_15dd5_22"
}, _ = ({
  subject: c,
  tagCount: l,
  img: r
}) => /* @__PURE__ */ d("div", { className: a["all-class-card"], children: [
  /* @__PURE__ */ s("img", { src: r, alt: c }),
  /* @__PURE__ */ d("div", { className: a.class, children: [
    /* @__PURE__ */ s("div", { className: a["class-title"], children: t(c, 15) }),
    /* @__PURE__ */ s("div", { className: i(a["tag-color"], a["caption-1"]), children: l ? `${l} Chapters` : "" })
  ] })
] });
export {
  _ as default
};