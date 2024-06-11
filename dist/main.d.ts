import { default as default_2 } from 'react';
import { default as default_3 } from 'embla-carousel-react';
import { FC } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import * as React_2 from 'react';
import { ReactNode } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { UseEmblaCarouselType } from 'embla-carousel-react';

export declare const Accordion: default_2.FC<FAQAccordionProps>;

export declare const BannerCarousel: ({ banners, mobileQueryMatches, bannerClick, wrapperClassName, contentClassName, itemClassName, ...props }: {
    banners: any[];
    mobileQueryMatches: boolean;
    bannerClick: (...args: any) => any;
    wrapperClassName?: string;
    contentClassName?: string;
    itemClassName?: string;
} & CarouselProps) => JSX_2.Element;

export declare function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>): JSX_2.Element;

export declare const Card: default_2.FC<CardProps>;

declare interface CardProps {
    children: any;
    disabled?: boolean;
    expanded?: boolean;
}

export declare const Carousel: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & CarouselProps & React_2.RefAttributes<HTMLDivElement>>;

export declare type CarouselApi = UseEmblaCarouselType[1];

export declare const CarouselContent: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CarouselDotNavigation: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React_2.RefAttributes<HTMLUListElement>>;

export declare const CarouselItem: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CarouselNext: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

declare type CarouselOptions = UseCarouselParameters[0];

declare type CarouselPlugin = UseCarouselParameters[1];

export declare const CarouselPrevious: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

declare type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
};

export declare const CustomModal: FC<CustomModalProps>;

declare interface CustomModalProps {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
    panelClassName?: string;
    backdropClick?: boolean;
}

declare interface FAQAccordionProps {
    question?: string;
    answer?: string;
    upIcon?: default_2.ReactNode;
    downIcon?: default_2.ReactNode;
    containerClassName?: string;
    contentClassName?: string;
    questionClassName?: string;
}

export declare function Input(props: React.InputHTMLAttributes<HTMLInputElement>): JSX_2.Element;

declare interface Item {
    name: string;
    key: string;
    component?: any;
}

export declare function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>): JSX_2.Element;

declare interface Props {
    onChange?: (key: string, index: number) => void;
    items: Item[];
    tabClassName?: string;
    defaultActive?: number;
}

export declare const SlideOver: FC<SlideOverProps>;

declare interface SlideOverProps {
    side?: "left" | "right";
    children: default_2.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    roundedCorners?: boolean;
    containerClassName?: string;
    backDropClassName?: string;
    backdropClick?: boolean;
}

export declare const SubjectCard: ({ subject, tagCount, img, }: {
    subject: string;
    tagCount: string;
    img?: string;
}) => JSX_2.Element;

export declare const Tabs: FC<Props>;

export declare const TeacherCard: ({ firstName, lastName, subject, experience, img, arrowImg, onClick, }: {
    firstName: string;
    lastName: string;
    subject: string;
    experience?: string;
    img?: string;
    arrowImg: React.ReactNode;
    onClick?: () => void;
}) => JSX_2.Element;

export declare const TeacherModal: ({ closebtn, firstName, lastName, subject, tags, onClose, quote, about, thumbnailImg, playImg, onClick, play, iframe, }: {
    closebtn?: string;
    firstName: string;
    lastName: string;
    subject: string;
    tags?: string[];
    quote?: string;
    about?: string;
    thumbnailImg?: string;
    playImg?: string;
    onClick?: () => void;
    onClose?: () => void;
    play?: boolean;
    iframe?: any;
}) => JSX_2.Element;

export declare const TestPressCard: ({ testPress, isPurchased, testPressCardIcon, handleRedirection, }: {
    testPress: {
        title: string;
        subTitle: string;
    };
    isPurchased: string;
    testPressCardIcon: string;
    handleRedirection: () => void;
}) => JSX_2.Element;

export declare const Tooltip: React_2.FC<TooltipPrimitive.TooltipProps>;

export declare const TooltipArrow: React_2.ForwardRefExoticComponent<TooltipPrimitive.TooltipArrowProps & React_2.RefAttributes<SVGSVGElement>>;

export declare const TooltipContent: React_2.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const TooltipPortal: React_2.FC<TooltipPrimitive.TooltipPortalProps>;

export declare const TooltipProvider: React_2.FC<TooltipPrimitive.TooltipProviderProps>;

export declare const TooltipTrigger: React_2.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React_2.RefAttributes<HTMLButtonElement>>;

declare type UseCarouselParameters = Parameters<typeof default_3>;

export { }
