import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors disabled:opacity-60 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-brand text-white hover:bg-brand-dark",
        outline: "border border-white/25 text-white hover:bg-white/10",
        dark: "bg-navy-950 text-white hover:bg-navy-800",
      },
      size: { sm: "h-10 px-5 text-sm", md: "h-12 px-7 text-base", lg: "h-14 px-9 text-lg" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = VariantProps<typeof buttonVariants> &
  (({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) |
   ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>));

export function Button({ variant, size, className, ...props }: Props) {
  const cls = cn(buttonVariants({ variant, size }), className);
  if ("href" in props && props.href !== undefined) return <a className={cls} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  return <button className={cls} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
