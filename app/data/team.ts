import type { TeamMember } from "~/types/components";

export const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "Alex Rivera",
    role: "Creative Director",
    bio: "Visionary creative leader with 10+ years of design and branding expertise. Passionate about crafting digital experiences that inspire.",
    image: "/images/team/alex.jpg",
    social: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "dribbble", url: "https://dribbble.com" },
    ],
  },
  {
    id: "member-2",
    name: "Jordan Chen",
    role: "Lead Developer",
    bio: "Full-stack engineer with deep expertise in modern web technologies. Building scalable, performant applications is Jordan's passion.",
    image: "/images/team/jordan.jpg",
    social: [
      { platform: "github", url: "https://github.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "twitter", url: "https://twitter.com" },
    ],
  },
  {
    id: "member-3",
    name: "Sam Williams",
    role: "Video Producer",
    bio: "Award-winning videographer and editor specializing in cinematic storytelling and motion graphics. Creates content that moves audiences.",
    image: "/images/team/sam.jpg",
    social: [
      { platform: "twitter", url: "https://twitter.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "dribbble", url: "https://dribbble.com" },
    ],
  },
  {
    id: "member-4",
    name: "Taylor Martinez",
    role: "Strategy & Growth",
    bio: "Digital strategist focused on driving growth and impact. Combines data-driven insights with creative thinking to solve complex challenges.",
    image: "/images/team/taylor.jpg",
    social: [
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "twitter", url: "https://twitter.com" },
    ],
  },
  {
    id: "member-5",
    name: "Casey Lee",
    role: "UX/UI Designer",
    bio: "User-centered designer creating intuitive interfaces that delight users. Specializes in design systems and accessible design practices.",
    image: "/images/team/casey.jpg",
    social: [
      { platform: "dribbble", url: "https://dribbble.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "twitter", url: "https://twitter.com" },
    ],
  },
  {
    id: "member-6",
    name: "Morgan Tech",
    role: "DevOps Engineer",
    bio: "Infrastructure expert ensuring our systems run smoothly and securely. Passionate about automation and cloud technologies.",
    image: "/images/team/morgan.jpg",
    social: [
      { platform: "github", url: "https://github.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "twitter", url: "https://twitter.com" },
    ],
  },
];
