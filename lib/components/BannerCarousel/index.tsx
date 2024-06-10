import { cn } from "../../utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselProps,
} from "../Carousel";
import s from "./styles.module.css";
const BannerCarousel = ({
  banners,
  mobileQueryMatches,
  bannerClick,
  wrapperClassName,
  contentClassName,
  itemClassName,
  ...props
}: {
  banners: any[];
  mobileQueryMatches: boolean;
  bannerClick: (...args: any) => any;
  wrapperClassName?: string;
  contentClassName?: string;
  itemClassName?: string;
} & CarouselProps) => {
  return (
    <Carousel className={cn(wrapperClassName)} {...props}>
      <CarouselContent className={cn(contentClassName)}>
        {banners.map((item, index) => (
          <CarouselItem
            key={index}
            className={cn(itemClassName)}
            onClick={() => bannerClick(item)}
          >
            <div>
              <img
                src={
                  mobileQueryMatches
                    ? item.resolutionUrl.MOBILE.url
                    : item.resolutionUrl.WEB.url
                }
                className={cn(s.bannerImg)}
                alt="banner"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export { BannerCarousel };
