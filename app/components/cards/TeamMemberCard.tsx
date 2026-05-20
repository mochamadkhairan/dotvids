import { Link } from "react-router";
import { Card, Icon } from "~/components/common";
import type { TeamMember } from "~/types/components";

export interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card variant="elevated" className="overflow-hidden h-full flex flex-col">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-mesh-bg aspect-square">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%231e293b' width='400' height='400'/%3E%3Ccircle cx='200' cy='200' r='80' fill='%235a67d8'/%3E%3C/svg%3E";
          }}
        />
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 flex flex-col gap-3 flex-1">
        {/* Name */}
        <h3 className="heading-4">{member.name}</h3>

        {/* Role */}
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
          {member.role}
        </p>

        {/* Bio */}
        <p className="body-sm text-slate-600 dark:text-gray-400 flex-1">
          {member.bio}
        </p>

        {/* Social Links */}
        <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-slate-700">
          {member.social.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              aria-label={social.platform}
            >
              <Icon
                name={social.platform}
                size="md"
                color="currentColor"
                className="text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              />
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}
