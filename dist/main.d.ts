import { default as default_2 } from 'embla-carousel-react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import * as React_2 from 'react';
import { UseEmblaCarouselType } from 'embla-carousel-react';

export declare function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>): JSX_2.Element;

export declare const Carousel: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & CarouselProps & React_2.RefAttributes<HTMLDivElement>>;

export declare type CarouselApi = UseEmblaCarouselType[1];

export declare const CarouselContent: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CarouselItem: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CarouselNext: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

declare type CarouselOptions = UseCarouselParameters[0];

declare type CarouselPlugin = UseCarouselParameters[1];

export declare const CarouselPrevious: React_2.ForwardRefExoticComponent<Omit<React_2.DetailedHTMLProps<React_2.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & React_2.RefAttributes<HTMLButtonElement>>;

declare type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: 'horizontal' | 'vertical';
    setApi?: (api: CarouselApi) => void;
};

export declare function Input(props: React.InputHTMLAttributes<HTMLInputElement>): JSX_2.Element;

export declare function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>): JSX_2.Element;

declare type UseCarouselParameters = Parameters<typeof default_2>;

export { }
