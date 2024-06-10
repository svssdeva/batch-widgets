import { jsxs as c, Fragment as N, jsx as a } from "react/jsx-runtime";
import '../../assets/index2.css';const g = "_header_dvpcs_1", q = "_subject_dvpcs_17", j = "_tag_dvpcs_20", f = "_thumbnail_dvpcs_32", y = "_playImg_dvpcs_35", I = "_iframe_dvpcs_38", x = "_quote_dvpcs_41", k = "_intro_dvpcs_59", C = "_about_dvpcs_56", e = {
  header: g,
  "close-btn": "_close-btn_dvpcs_5",
  "teacher-modal": "_teacher-modal_dvpcs_8",
  "teacher-detail": "_teacher-detail_dvpcs_11",
  "teacher-name": "_teacher-name_dvpcs_14",
  subject: q,
  "tag-container": "_tag-container_dvpcs_20",
  tag: j,
  "video-container": "_video-container_dvpcs_26",
  "thumnail-container": "_thumnail-container_dvpcs_29",
  thumbnail: f,
  playImg: y,
  iframe: I,
  "quote-container": "_quote-container_dvpcs_41",
  "quote-subcontainer": "_quote-subcontainer_dvpcs_44",
  "quote-heading": "_quote-heading_dvpcs_47",
  "blue-line": "_blue-line_dvpcs_50",
  quote: x,
  "about-container": "_about-container_dvpcs_56",
  intro: k,
  about: C
}, M = ({
  closebtn: d,
  firstName: l,
  lastName: o,
  subject: r,
  tags: n,
  onClose: _,
  quote: s,
  about: t,
  thumbnailImg: i,
  playImg: m,
  onClick: h,
  play: u,
  iframe: v
}) => /* @__PURE__ */ c(N, { children: [
  /* @__PURE__ */ a("div", { className: e.header, children: /* @__PURE__ */ a("div", { className: e["close-btn"], onClick: _, children: /* @__PURE__ */ a("img", { src: d }) }) }),
  /* @__PURE__ */ c("div", { className: e["teacher-modal"], children: [
    /* @__PURE__ */ c("div", { className: e["teacher-detail"], children: [
      /* @__PURE__ */ c("span", { className: e["teacher-name"], children: [
        l,
        " ",
        o
      ] }),
      /* @__PURE__ */ a("span", { className: e.subject, children: r }),
      /* @__PURE__ */ a("div", { className: e["tag-container"], children: n && n.map((p, b) => /* @__PURE__ */ a("div", { className: e.tag, children: p }, b)) })
    ] }),
    i && /* @__PURE__ */ c("div", { className: e["video-container"], children: [
      /* @__PURE__ */ c("div", { className: e["thumbnail-container"], onClick: h, children: [
        /* @__PURE__ */ a(
          "img",
          {
            src: i,
            alt: "thumbnail",
            className: e.thumbnail
          }
        ),
        /* @__PURE__ */ a("img", { src: m, alt: "play button", className: e.playImg })
      ] }),
      u && /* @__PURE__ */ a("div", { className: e.iframe, children: v })
    ] })
  ] }),
  s && /* @__PURE__ */ a("div", { className: e["quote-container"], children: /* @__PURE__ */ c("div", { className: e["quote-subcontainer"], children: [
    /* @__PURE__ */ a("span", { className: e["quote-heading"], children: "Quotes" }),
    /* @__PURE__ */ a("div", { className: e["blue-line"] }),
    /* @__PURE__ */ a("div", { className: e.quote, children: s })
  ] }) }),
  t && /* @__PURE__ */ c("div", { className: e["about-container"], children: [
    /* @__PURE__ */ c("div", { className: e.intro, children: [
      /* @__PURE__ */ a("span", { className: e["quote-heading"], children: "Introduction" }),
      /* @__PURE__ */ a("div", { className: e["blue-line"] })
    ] }),
    /* @__PURE__ */ a("div", { className: e.about, children: t })
  ] })
] });
export {
  M as TeacherModal
};
