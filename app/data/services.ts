import type { Service } from "~/types/components";

export const services: Service[] = [
  {
    id: "web-development",
    icon: "code",
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies",
    features: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Full-stack"],
    cta: {
      text: "Learn More",
      href: "/services#web-development",
    },
  },
  {
    id: "video-production",
    icon: "video",
    title: "Video Production",
    description: "Professional video content creation and post-production",
    features: ["4K Video", "Editing", "Motion Graphics", "Animation", "Streaming"],
    cta: {
      text: "Learn More",
      href: "/services#video-production",
    },
  },
  {
    id: "design",
    icon: "palette",
    title: "UI/UX Design",
    description: "Beautiful and intuitive interface designs for digital products",
    features: ["Prototyping", "Wireframing", "User Research", "Design Systems"],
    cta: {
      text: "Learn More",
      href: "/services#design",
    },
  },
  {
    id: "branding",
    icon: "star",
    title: "Branding",
    description: "Comprehensive brand identity and strategy development",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Strategy"],
    cta: {
      text: "Learn More",
      href: "/services#branding",
    },
  },
  {
    id: "digital-marketing",
    icon: "trending-up",
    title: "Digital Marketing",
    description: "Strategic digital marketing to grow your online presence",
    features: ["SEO", "Social Media", "Content Marketing", "Analytics"],
    cta: {
      text: "Learn More",
      href: "/services#marketing",
    },
  },
  {
    id: "consulting",
    icon: "briefcase",
    title: "Tech Consulting",
    description: "Expert guidance for your digital transformation journey",
    features: ["Strategy", "Architecture", "Implementation", "Support"],
    cta: {
      text: "Learn More",
      href: "/services#consulting",
    },
  },
];
