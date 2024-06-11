import { jsxs as c, jsx as a } from "react/jsx-runtime";
import { truncate as n, renderIcon as m } from "../../utils.js";
import '../../assets/index3.css';const h = "_subject_w7tc4_49", o = "_experience_w7tc4_55", b = "_btn_w7tc4_61", e = {
  "all-teacher-card": "_all-teacher-card_w7tc4_5",
  "img-container": "_img-container_w7tc4_13",
  "teacher-img": "_teacher-img_w7tc4_19",
  "teacher-div": "_teacher-div_w7tc4_25",
  "teacher-name": "_teacher-name_w7tc4_31",
  "detail-container": "_detail-container_w7tc4_37",
  "detail-subconatiner": "_detail-subconatiner_w7tc4_43",
  subject: h,
  experience: o,
  btn: b
}, N = ({
  firstName: i,
  lastName: s,
  subject: t,
  experience: r,
  img: l,
  arrowImg: _,
  onClick: d
}) => /* @__PURE__ */ c("div", { className: e["all-teacher-card"], children: [
  /* @__PURE__ */ c("div", { className: e["img-container"], children: [
    /* @__PURE__ */ a("img", { src: l, alt: "teacher-img", className: e["teacher-img"] }),
    /* @__PURE__ */ a("div", { className: e["teacher-div"], children: /* @__PURE__ */ c("span", { className: e["teacher-name"], children: [
      i,
      " ",
      s
    ] }) })
  ] }),
  /* @__PURE__ */ c("div", { className: e["detail-container"], children: [
    /* @__PURE__ */ c("div", { className: e["detail-subconatiner"], children: [
      t && /* @__PURE__ */ a("span", { className: e.subject, children: n(t, 10) }),
      r && /* @__PURE__ */ c("span", { className: e.experience, children: [
        "Exp: ",
        n(r, 10),
        " Yr"
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: e.btn, onClick: d, children: m(_) })
  ] })
] });
export {
  N as TeacherCard
};
