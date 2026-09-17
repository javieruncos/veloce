import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
};

const baseClasses =
  "inline-flex min-h-[48px] items-center justify-center px-6 font-mono text-xs font-medium tracking-[0.16em] uppercase transition-colors duration-150 rounded-[3px]";

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-text text-ink hover:bg-bright",
  secondary:
    "border border-line bg-transparent text-text hover:border-metal hover:text-bright",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
