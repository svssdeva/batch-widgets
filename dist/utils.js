import { clsx as o } from "clsx";
import { twMerge as c } from "tailwind-merge";
function i(...r) {
  return c(o(r));
}
const t = (r, n) => (r == null ? void 0 : r.length) > n ? r.substring(0, n) + "..." : r, p = (r = 0) => "₹" + s(r + ""), s = (r = "") => parseInt(r).toLocaleString(), l = (r) => r;
export {
  i as cn,
  s as numberDisplay,
  p as priceDisplay,
  l as renderIcon,
  t as truncate
};
