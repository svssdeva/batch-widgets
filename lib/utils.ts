import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncate = (text: string, maxLength: number) => {
  return text?.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

export const priceDisplay = (price: number = 0) => {
  return '₹' + numberDisplay(price + '');
};

export const numberDisplay = (str: string = '') => {
  return parseInt(str).toLocaleString();
};

export const renderIcon=(Icon: React.ReactNode) => {
  return Icon;
}
