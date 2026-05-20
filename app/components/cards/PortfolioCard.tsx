import { Link } from "react-router";
import { Card, Badge, Icon } from "~/components/common";
import type { PortfolioItem } from "~/types/components";

export interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <Card variant="interactive" className="overflow-hidden h-full">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-mesh-bg h-48 md:h-56">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%231e293b' width='400' height='300'/%3E%3C/svg%3E";
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
          {item.link && (
            <Link
              to={item.link}
              className="text-white font-medium hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              View Project
              <Icon name="arrow" size="sm" color="currentColor" />
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 flex flex-col gap-3">
        {/* Category Badge */}
        <div>
          <Badge color="blue" variant="solid" className="text-xs capitalize">
            {item.category}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="heading-4">{item.title}</h3>

        {/* Description */}
        <p className="body-sm text-slate-600 dark:text-gray-400 flex-1">
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200 dark:border-slate-700">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-slate-600 dark:text-gray-400 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
