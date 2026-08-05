import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-display font-semibold uppercase tracking-wider transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        electric:
          "bg-primary text-primary-foreground shadow-[0_10px_40px_-14px_var(--electric)] hover:brightness-115 hover:-translate-y-0.5",
        action:
          "bg-destructive text-destructive-foreground hover:brightness-110 hover:-translate-y-0.5",
        outline:
          "border border-border bg-surface/60 text-foreground hover:border-electric hover:bg-surface-2",
        ghost: "text-foreground/80 hover:text-foreground hover:bg-surface-2",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-sm sm:text-base",
      },
    },
    defaultVariants: { variant: "electric", size: "md" },
  },
);

type CTAProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof ctaVariants>;

export function CTALink({ className, variant, size, ...props }: CTAProps) {
  return <a className={cn(ctaVariants({ variant, size }), className)} {...props} />;
}

export { ctaVariants };
