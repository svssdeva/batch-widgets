import { jsxs as n, Fragment as v, jsx as a } from "react/jsx-runtime";
import '../../assets/index2.css';const g = "_header_1k81e_1", q = "_subject_1k81e_33", p = "_tag_1k81e_39", j = "_thumbnail_1k81e_63", f = "_playImg_1k81e_69", y = "_iframe_1k81e_75", I = "_quote_1k81e_81", x = "_intro_1k81e_117", C = "_about_1k81e_111", e = {
  header: g,
  "close-btn": "_close-btn_1k81e_9",
  "teacher-modal": "_teacher-modal_1k81e_15",
  "teacher-detail": "_teacher-detail_1k81e_21",
  "teacher-name": "_teacher-name_1k81e_27",
  subject: q,
  "tag-container": "_tag-container_1k81e_39",
  tag: p,
  "video-container": "_video-container_1k81e_51",
  "thumnail-container": "_thumnail-container_1k81e_57",
  thumbnail: j,
  playImg: f,
  iframe: y,
  "quote-container": "_quote-container_1k81e_81",
  "quote-subcontainer": "_quote-subcontainer_1k81e_87",
  "quote-heading": "_quote-heading_1k81e_93",
  "blue-line": "_blue-line_1k81e_99",
  quote: I,
  "about-container": "_about-container_1k81e_111",
  intro: x,
  about: C
}, M = ({
  closebtn: l,
  firstName: o,
  lastName: r,
  subject: _,
  tags: t,
  onClose: d,
  quote: c,
  about: i,
  thumbnailImg: s,
  playImg: m,
  onClick: h,
  play: u,
  iframe: b
}) => /* @__PURE__ */ n(v, { children: [
  /* @__PURE__ */ a("div", { className: e.header, children: /* @__PURE__ */ a("div", { className: e["close-btn"], onClick: d, children: /* @__PURE__ */ a("img", { src: l }) }) }),
  /* @__PURE__ */ n("div", { className: e["teacher-modal"], children: [
    /* @__PURE__ */ n("div", { className: e["teacher-detail"], children: [
      /* @__PURE__ */ n("span", { className: e["teacher-name"], children: [
        o,
        " ",
        r
      ] }),
      /* @__PURE__ */ a("span", { className: e.subject, children: _ }),
      /* @__PURE__ */ a("div", { className: e["tag-container"], children: t && t.map((N, k) => /* @__PURE__ */ a("div", { className: e.tag, children: N }, k)) })
    ] }),
    s && /* @__PURE__ */ n("div", { className: e["video-container"], children: [
      /* @__PURE__ */ n("div", { className: e["thumbnail-container"], onClick: h, children: [
        /* @__PURE__ */ a(
          "img",
          {
            src: s,
            alt: "thumbnail",
            className: e.thumbnail
          }
        ),
        /* @__PURE__ */ a("img", { src: m, alt: "play button", className: e.playImg })
      ] }),
      u && /* @__PURE__ */ a("div", { className: e.iframe, children: b })
    ] })
  ] }),
  c && /* @__PURE__ */ a("div", { className: e["quote-container"], children: /* @__PURE__ */ n("div", { className: e["quote-subcontainer"], children: [
    /* @__PURE__ */ a("span", { className: e["quote-heading"], children: "Quotes" }),
    /* @__PURE__ */ a("div", { className: e["blue-line"] }),
    /* @__PURE__ */ a("div", { className: e.quote, children: c })
  ] }) }),
  i && /* @__PURE__ */ n("div", { className: e["about-container"], children: [
    /* @__PURE__ */ n("div", { className: e.intro, children: [
      /* @__PURE__ */ a("span", { className: e["quote-heading"], children: "Introduction" }),
      /* @__PURE__ */ a("div", { className: e["blue-line"] })
    ] }),
    /* @__PURE__ */ a("div", { className: e.about, children: i })
  ] })
] });
export {
  M as TeacherModal
};
