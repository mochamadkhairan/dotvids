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
    label: "Team",
    href: "/team",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const footerLinks = [
  {
    label: "Product",
    items: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Security", href: "/security" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Documentation", href: "/docs" },
      { label: "Community", href: "/community" },
      { label: "GitHub", href: "https://github.com" },
      { label: "API", href: "/api" },
    ],
  },
  {
    label: "Legal",
    items: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
      { label: "License", href: "/license" },
    ],
  },
];

export const socialLinks = [
  { platform: "twitter", url: "https://twitter.com" },
  { platform: "linkedin", url: "https://linkedin.com" },
  { platform: "github", url: "https://github.com" },
  { platform: "dribbble", url: "https://dribbble.com" },
];
