import { jsx as a, Fragment as _, jsxs as f } from "react/jsx-runtime";
import l from "clsx";
import v, { useState as y, useEffect as N, useMemo as k } from "react";
import '../../assets/index4.css';const x = "_root_31ai6_1", u = "_item_31ai6_5", h = "_itemActive_31ai6_8", i = {
  root: x,
  item: u,
  itemActive: h
}, b = ({
  item: o,
  isActive: c,
  onClick: s
}) => {
  const t = l(i.item, { [i.itemActive]: c });
  return /* @__PURE__ */ a("div", { className: t, onClick: s, children: /* @__PURE__ */ a(
    "span",
    {
      className: `whitespace-nowrap font-semibold ${c ? "text-[#5A4BDA]" : "text-[#525252]"}`,
      children: o.name
    }
  ) });
}, A = v.memo(
  ({ items: o, onChange: c, tabClassName: s = "", defaultActive: t = 0 }) => {
    const d = l(i.root, s), [n, m] = y(o == null ? void 0 : o[t].key);
    N(() => {
      t !== void 0 && m(o == null ? void 0 : o[t].key);
    }, [t]);
    const p = k(() => {
      var e;
      return /* @__PURE__ */ a(
        "div",
        {
          className: "animated fadeIn mt-4 px-0.5 duration-200",
          children: ((e = o.find((r) => r.key === n)) == null ? void 0 : e.component) || /* @__PURE__ */ a(_, {})
        },
        n
      );
    }, [o, n]);
    return /* @__PURE__ */ f("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ a("div", { className: d, children: o.map((e, r) => /* @__PURE__ */ a(
        b,
        {
          onClick: () => {
            m(e.key), c && c(e.key, r);
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
A.displayName = "Tabs";
export {
  A as Tabs
};
