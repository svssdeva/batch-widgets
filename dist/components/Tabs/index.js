import { jsx as c, Fragment as _, jsxs as x } from "react/jsx-runtime";
import l from "clsx";
import f, { useState as j, useEffect as v, useMemo as y } from "react";
import '../../assets/index4.css';const N = "_root_9jxjm_1", k = "_item_9jxjm_9", u = "_itemActive_9jxjm_15", m = {
  root: N,
  item: k,
  itemActive: u
}, h = ({
  item: o,
  isActive: a,
  onClick: s
}) => {
  const t = l(m.item, { [m.itemActive]: a });
  return /* @__PURE__ */ c("div", { className: t, onClick: s, children: /* @__PURE__ */ c(
    "span",
    {
      className: `whitespace-nowrap font-semibold ${a ? "text-[#5A4BDA]" : "text-[#525252]"}`,
      children: o.name
    }
  ) });
}, b = f.memo(
  ({ items: o, onChange: a, tabClassName: s = "", defaultActive: t = 0 }) => {
    const d = l(m.root, s), [n, i] = j(o == null ? void 0 : o[t].key);
    v(() => {
      t !== void 0 && i(o == null ? void 0 : o[t].key);
    }, [t]);
    const p = y(() => {
      var e;
      return /* @__PURE__ */ c(
        "div",
        {
          className: "animated fadeIn mt-4 px-0.5 duration-200",
          children: ((e = o.find((r) => r.key === n)) == null ? void 0 : e.component) || /* @__PURE__ */ c(_, {})
        },
        n
      );
    }, [o, n]);
    return /* @__PURE__ */ x("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ c("div", { className: d, children: o.map((e, r) => /* @__PURE__ */ c(
        h,
        {
          onClick: () => {
            i(e.key), a && a(e.key, r);
          },
          item: e,
          isActive: e.key === n
        },
        r
      )) }),
      p
    ] });
  }
);
b.displayName = "Tabs";
export {
  b as Tabs
};
