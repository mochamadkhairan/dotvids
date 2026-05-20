import type { NavLink } from "~/types/components";

export const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const footerLinks = [
  {
    label: "Services",
    items: [
      { label: "Video Production", href: "/services#video-production" },
      { label: "Motion Graphics", href: "/services#motion-graphics" },
      { label: "Brand Film", href: "/services#brand-film" },
      { label: "Social Content", href: "/services#social-content" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Team", href: "/about#team" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/portfolio" },
      { label: "Instagram", href: "https://instagram.com/dotvids.id" },
      { label: "YouTube", href: "https://youtube.com/dotvids" },
    ],
  },
  {
    label: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export const socialLinks = [
  { platform: "twitter", url: "https://twitter.com/dotvids" },
  { platform: "linkedin", url: "https://linkedin.com/company/dotvids" },
  { platform: "dribbble", url: "https://dribbble.com/dotvids" },
  { platform: "github", url: "https://github.com/dotvids" },
];
