import type { BadgeProps } from "~/types/components";

export default function Badge({
  children,
  color = "blue",
  variant = "solid",
  className = "",
}: BadgeProps) {
  const colorClasses = {
    blue: {
      solid: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
      outline: "border border-blue-300 dark:border-blue-600 text-blue-700 dark:text-blue-300",
    },
    slate: {
      solid: "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200",
      outline: "border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200",
    },
    emerald: {
      solid: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300",
      outline: "border border-emerald-300 dark:border-emerald-600 text-emerald-700 dark:text-emerald-300",
    },
    amber: {
      solid: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
      outline: "border border-amber-300 dark:border-amber-600 text-amber-700 dark:text-amber-300",
    },
    red: {
      solid: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
      outline: "border border-red-300 dark:border-red-600 text-red-700 dark:text-red-300",
    },
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colorClasses[color][variant]} ${className}`}
    >
      {children}
    </span>
  );
}
