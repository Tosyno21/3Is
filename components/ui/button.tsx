"use client";
import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition duration-500 ease-in rounded-sm uppercase font-bold cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-brand text-white shadow-sm hover:bg-brand/90",
        white:
          "bg-white text-neutral-700 border-neutral-200 border-[1px] shadow-sm hover:text-neutral-800 hover:bg-neutral-50",
        link: "bg-transparent text-white text-accent-500 hover:text-accent-600 hover:underline",
        back: "bg-transparent text-accent-500 outline hover:text-brand",
      },
      size: {
        default: "py-2 px-3 text-[14px] md:py-2 md:px-4",
        sm: "py-2 px-4 text-[14px] md:py-2 md:px-6 md:text-[16px]",
        lg: "py-2 px-6 text-[14px] md:py-3 md:px-8 md:text-[16px]",
        xl: "py-2 px-6 text-[14px] md:py-3 md:px-8 md:text-[16px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
