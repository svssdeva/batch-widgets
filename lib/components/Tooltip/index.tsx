import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";
import { cn } from "../../utils";
import s from "./styles.module.css";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipArrow = TooltipPrimitive.Arrow;

const TooltipPortal = TooltipPrimitive.Portal;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(s.TooltipContent, className)}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipPortal,
};
