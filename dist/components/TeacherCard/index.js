import { jsxs as a, jsx as r } from "react/jsx-runtime";
import { truncate as t, renderIcon as m } from "../../utils.js";
import '../../assets/index3.css';const h = "_subject_p0wbr_25", b = "_experience_p0wbr_28", o = "_btn_p0wbr_31", e = {
  "all-teacher-card": "_all-teacher-card_p0wbr_3",
  "img-container": "_img-container_p0wbr_7",
  "teacher-img": "_teacher-img_p0wbr_10",
  "teacher-div": "_teacher-div_p0wbr_13",
  "teacher-name": "_teacher-name_p0wbr_16",
  "detail-container": "_detail-container_p0wbr_19",
  "detail-subconatiner": "_detail-subconatiner_p0wbr_22",
  subject: h,
  experience: b,
  btn: o
}, N = ({
  firstName: i,
  lastName: s,
  subject: c,
  experience: n,
  img: l,
  arrowImg: _,
  onClick: d
}) => /* @__PURE__ */ a("div", { className: e["all-teacher-card"], children: [
  /* @__PURE__ */ a("div", { className: e["img-container"], children: [
    /* @__PURE__ */ r("img", { src: l, alt: "teacher-img", className: e["teacher-img"] }),
    /* @__PURE__ */ r("div", { className: e["teacher-div"], children: /* @__PURE__ */ a("span", { className: e["teacher-name"], children: [
      i,
      " ",
      s
    ] }) })
  ] }),
  /* @__PURE__ */ a("div", { className: e["detail-container"], children: [
    /* @__PURE__ */ a("div", { className: e["detail-subconatiner"], children: [
      c && /* @__PURE__ */ r("span", { className: e.subject, children: t(c, 10) }),
      n && /* @__PURE__ */ a("span", { className: e.experience, children: [
        "Exp: ",
        t(n, 10),
        " Yr"
      ] })
    ] }),
    /* @__PURE__ */ r("div", { className: e.btn, onClick: d, children: m(_) })
  ] })
] });
export {
  N as TeacherCard
};
