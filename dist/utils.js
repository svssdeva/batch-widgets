import { clsx as o } from "clsx";
import { twMerge as c } from "tailwind-merge";
function p(...r) {
  return c(o(r));
}
const e = (r, n) => (r == null ? void 0 : r.length) > n ? r.substring(0, n) + "..." : r, t = (r = 0) => "₹" + s(r + ""), s = (r = "") => parseInt(r).toLocaleString();
export {
  p as cn,
  s as numberDisplay,
  t as priceDisplay,
  e as truncate
};
