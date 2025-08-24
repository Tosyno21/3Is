import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center rounded-lg  font-medium", {
  variants: {
    variant: {
      default: "bg-primary-50 border-transparent text-primary-700 uppercase",
      warning: "bg-warning-25 border-transparent text-warning-500 uppercase",
      success: "bg-teal-100 border-transparent text-background-dark uppercase",
      destructive:
        "bg-destructive-50 border-transparent text-destructive-500 uppercase",
      outline: "text-neutral-700 border-[1px]",
    },
    size: {
      default: "px-2.5 py-1.5 text-[12px] md:text-[12px]",
      lg: "px-8 py-2 text-[14px] md:text-[16px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
