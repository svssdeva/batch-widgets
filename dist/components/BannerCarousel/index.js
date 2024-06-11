import { jsx as r } from "react/jsx-runtime";
import { cn as n } from "../../utils.js";
import { Carousel as u, CarouselContent as C, CarouselItem as I } from "../Carousel/index.js";
import '../../assets/index12.css';const b = "_bannerImg_1ms67_1", d = {
  bannerImg: b
}, N = ({
  banners: s,
  mobileQueryMatches: a,
  bannerClick: l,
  wrapperClassName: o,
  contentClassName: m,
  itemClassName: c,
  ...t
}) => /* @__PURE__ */ r(u, { className: n(o), ...t, children: /* @__PURE__ */ r(C, { className: n(m), children: s.map((e, i) => /* @__PURE__ */ r(
  I,
  {
    className: n(c),
    onClick: () => l(e),
    children: /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(
      "img",
      {
        src: a ? e.resolutionUrl.MOBILE.url : e.resolutionUrl.WEB.url,
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
