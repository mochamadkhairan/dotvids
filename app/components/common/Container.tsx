import type { ContainerProps } from "~/types/components";

export default function Container({
  children,
  className = "",
  maxWidth = "lg",
}: ContainerProps) {
  const maxWidthClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-7xl",
    xl: "max-w-screen-2xl",
    "2xl": "max-w-screen-xl",
    full: "w-full",
  };

  return (
    <div className={`${maxWidthClasses[maxWidth]} mx-auto px-4 md:px-6 ${className}`}>
      {children}
    </div>
  );
}
