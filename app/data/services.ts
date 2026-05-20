import type { Service } from "~/types/components";

export const services: (Service & { accent?: string })[] = [
  {
    id: "video-production",
    icon: "video",
    title: "Video Production",
    description: "Produksi video profesional dari concept hingga final delivery dengan equipment dan tim berpengalaman.",
    accent: "#7EE8A2",
    features: ["4K Video", "Cinematography", "Editing Profesional", "Color Grading", "Sound Design"],
    cta: {
      text: "Learn More",
      href: "/services#video-production",
    },
  },
  {
    id: "motion-graphics",
    icon: "palette",
    title: "Motion Graphics",
    description: "Animasi dan grafis bergerak yang eye-catching untuk meningkatkan engagement konten kamu.",
    accent: "#C8A96E",
    features: ["2D Animation", "3D Motion", "Typography Animation", "Visual Effects", "Explainer Videos"],
    cta: {
      text: "Learn More",
      href: "/services#motion-graphics",
    },
  },
  {
    id: "brand-film",
    icon: "star",
    title: "Brand Film",
    description: "Film berkualitas tinggi yang menceritakan kisah brand kamu dengan cara yang authentic dan engaging.",
    accent: "#69B4FF",
    features: ["Concept Development", "Scriptwriting", "Production", "Post-Production", "Distribution"],
    cta: {
      text: "Learn More",
      href: "/services#brand-film",
    },
  },
  {
    id: "social-content",
    icon: "trending-up",
    title: "Social Media Content",
    description: "Konten kreatif yang dioptimasi untuk viral di berbagai platform social media.",
    accent: "#E0C5FF",
    features: ["Instagram Reels", "TikTok Videos", "YouTube Shorts", "Content Strategy", "Trending Formats"],
    cta: {
      text: "Learn More",
      href: "/services#social-content",
    },
  },
  {
    id: "event-coverage",
    icon: "code",
    title: "Event Coverage",
    description: "Dokumentasi event berkualitas tinggi dengan perspektif cinematik yang profesional.",
    accent: "#FF9E64",
    features: ["Live Streaming", "Highlight Video", "Photo Coverage", "360 Coverage", "Aerial Shots"],
    cta: {
      text: "Learn More",
      href: "/services#event-coverage",
    },
  },
  {
    id: "post-production",
    icon: "briefcase",
    title: "Post Production",
    description: "Layanan post-production lengkap untuk menyempurnakan setiap frame video kamu.",
    accent: "#A3E635",
    features: ["Editing", "Color Grading", "VFX", "Audio Mixing", "Motion Graphics Integration"],
    cta: {
      text: "Learn More",
      href: "/services#post-production",
    },
  },
];
