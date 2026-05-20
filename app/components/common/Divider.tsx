export interface DividerProps {
  className?: string;
  variant?: "light" | "dark" | "gradient";
}

export default function Divider({ className = "", variant = "light" }: DividerProps) {
  const variantClasses = {
    light: "bg-gray-200 dark:bg-slate-700",
    dark: "bg-slate-800 dark:bg-gray-100",
    gradient: "bg-gradient-to-r from-transparent via-blue-600 to-transparent",
  };

  return <div className={`h-px ${variantClasses[variant]} ${className}`} />;
}
