import { jsx as u } from "react/jsx-runtime";
import p from "clsx";
import '../../assets/index10.css';const s = "_root_vxo0m_1", w = {
  root: s
}, l = ({ children: t, expanded: r, disabled: o }) => {
  const i = p(
    w.root,
    {
      " hover:pw-ui-shadow-lg": !o,
      "pw-ui-opacity-60 ": o,
      "pw-ui-h-full pw-ui-w-full ": r
    },
    "pw-ui-transition-all pw-ui-duration-200 pw-uirounded-lg pw-ui-bg-white "
  );
  return /* @__PURE__ */ u("div", { className: i, children: t });
};
export {
  l as Card
};
