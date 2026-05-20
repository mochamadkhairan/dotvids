import { Link } from "react-router";
import { Card, Icon, Badge } from "~/components/common";
import type { Service } from "~/types/components";

export interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card variant="elevated" className="h-full p-6 md:p-8 flex flex-col gap-4">
      {/* Icon */}
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
        <Icon
          name={service.icon}
          size="lg"
          color="currentColor"
          className="text-blue-600 dark:text-blue-400"
        />
      </div>

      {/* Title & Description */}
      <div className="flex-1">
        <h3 className="heading-4 mb-2">{service.title}</h3>
        <p className="body-sm text-slate-600 dark:text-gray-400">{service.description}</p>
      </div>

      {/* Features */}
      <div className="flex flex-wrap gap-2">
        {service.features.slice(0, 3).map((feature, index) => (
          <Badge key={index} color="blue" variant="outline" className="text-xs">
            {feature}
          </Badge>
        ))}
      </div>

      {/* CTA */}
      {service.cta && (
        <Link
          to={service.cta.href}
          className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm flex items-center gap-2 group"
        >
          {service.cta.text}
          <Icon
            name="arrow"
            size="sm"
            color="currentColor"
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      )}
    </Card>
  );
}
