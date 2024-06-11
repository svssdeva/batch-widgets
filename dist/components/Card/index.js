import { jsx as p } from "react/jsx-runtime";
import u from "clsx";
import '../../assets/index10.css';const n = "_root_1nkp1_1", s = {
  root: n
}, l = ({ children: t, expanded: r, disabled: o }) => {
  const i = u(
    s.root,
    {
      " hover:pw-ui-shadow-lg": !o,
      "pw-ui-opacity-60 ": o,
      "pw-ui-h-full pw-ui-w-full ": r
    },
    "pw-ui-transition-all pw-ui-duration-200 pw-uirounded-lg pw-ui-bg-white "
  );
  return /* @__PURE__ */ p("div", { className: i, children: t });
};
export {
  l as Card
};
