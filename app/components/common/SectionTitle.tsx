import type { SectionTitleProps } from "~/types/components";

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`space-y-3 ${alignClasses[align]} ${className}`}>
      <h2 className="heading-2">{title}</h2>
      {subtitle && (
        <p className="body-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
