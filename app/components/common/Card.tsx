import type { CardProps } from "~/types/components";

export default function Card({
  variant = "elevated",
  children,
  className = "",
  onClick,
}: CardProps) {
  const variantClasses = {
    elevated: "card-elevated",
    outlined: "border-2 border-gray-200 dark:border-slate-700 rounded-xl",
    glass: "card-glass",
    interactive: "card-interactive",
  };

  return (
    <div
      className={`${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
