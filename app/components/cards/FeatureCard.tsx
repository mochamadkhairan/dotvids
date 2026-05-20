import { Card } from "~/components/common";

export interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <Card variant="glass" className={`p-6 md:p-8 flex flex-col gap-4 ${className}`}>
      {icon && <div className="text-4xl">{icon}</div>}
      <h3 className="heading-4">{title}</h3>
      <p className="body-sm text-slate-600 dark:text-gray-400">{description}</p>
    </Card>
  );
}
