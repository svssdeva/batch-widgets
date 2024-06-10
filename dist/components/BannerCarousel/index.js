import { jsx as r } from "react/jsx-runtime";
import { cn as n } from "../../utils.js";
import { Carousel as u, CarouselContent as C, CarouselItem as I } from "../Carousel/index.js";
import '../../assets/index6.css';const b = "_bannerImg_1kv5u_1", d = {
  bannerImg: b
}, N = ({
  banners: a,
  mobileQueryMatches: l,
  bannerClick: o,
  wrapperClassName: s,
  contentClassName: m,
  itemClassName: c,
  ...t
}) => /* @__PURE__ */ r(u, { className: n(s), ...t, children: /* @__PURE__ */ r(C, { className: n(m), children: a.map((e, i) => /* @__PURE__ */ r(
  I,
  {
    className: n(c),
    onClick: () => o(e),
    children: /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
      "img",
      {
        src: l ? e.resolutionUrl.MOBILE.url : e.resolutionUrl.WEB.url,
        className: n(d.bannerImg),
        alt: "banner"
      }
    ) })
  },
  i
)) }) });
export {
  N as BannerCarousel
};
