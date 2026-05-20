import type { ReactNode } from "react";

/* ============================================
   BUTTON COMPONENT TYPES
   ============================================ */

export interface ButtonProps {
  variant: "primary" | "secondary" | "ghost" | "glow";
  size: "sm" | "md" | "lg";
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

/* ============================================
   CARD COMPONENT TYPES
   ============================================ */

export interface CardProps {
  variant: "elevated" | "outlined" | "glass" | "interactive";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

/* ============================================
   SECTION COMPONENT TYPES
   ============================================ */

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

/* ============================================
   BADGE & ICON TYPES
   ============================================ */

export interface BadgeProps {
  children: ReactNode;
  color?: "blue" | "slate" | "emerald" | "amber" | "red";
  variant?: "solid" | "outline";
  className?: string;
}

export interface IconProps {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
  className?: string;
}

/* ============================================
   FORM COMPONENT TYPES
   ============================================ */

export interface FormInputProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "phone" | "password" | "number";
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}

export interface FormTextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
  className?: string;
}

export interface FormSelectProps {
  label?: string;
  options: Array<{ value: string; label: string }>;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

/* ============================================
   CONTENT TYPES
   ============================================ */

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  cta?: {
    text: string;
    href: string;
  };
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link?: string;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: Array<{
    platform: "twitter" | "linkedin" | "github" | "dribbble";
    url: string;
  }>;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

/* ============================================
   SECTION COMPONENT PROPS
   ============================================ */

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  backgroundGradient?: string;
}

export interface FeaturesSectionProps {
  title: string;
  subtitle?: string;
  features: Service[];
  columns?: 2 | 3 | 4;
}

export interface PortfolioSectionProps {
  title: string;
  subtitle?: string;
  items: PortfolioItem[];
  featured?: boolean;
  showFilters?: boolean;
  columns?: 2 | 3 | 4;
}

export interface TeamSectionProps {
  title: string;
  subtitle?: string;
  members: TeamMember[];
  columns?: 2 | 3 | 4;
  featured?: boolean;
}

export interface TestimonialsSectionProps {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
  autoPlay?: boolean;
  showNavigation?: boolean;
}

export interface CTASectionProps {
  title: string;
  description?: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  variant?: "default" | "dark" | "gradient";
}

/* ============================================
   INTERACTIVE COMPONENT TYPES
   ============================================ */

export interface ScrollRevealElementProps {
  children: ReactNode;
  variant?: "fadeInUp" | "slideInLeft" | "slideInRight" | "scaleUp";
  delay?: number;
  className?: string;
}

export interface AnimatedCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export interface TabProps {
  label: string;
  value: string;
  badge?: number;
}

export interface TabComponentProps {
  tabs: TabProps[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  variant?: "underline" | "pills" | "solid";
}

/* ============================================
   NAVIGATION TYPES
   ============================================ */

export interface NavBarProps {
  logoText?: string;
  links: NavLink[];
  showDarkModeToggle?: boolean;
  sticky?: boolean;
  variant?: "light" | "dark" | "transparent";
}

export interface FooterProps {
  companyName: string;
  description?: string;
  links: Array<{
    label: string;
    items: NavLink[];
  }>;
  social: Array<{
    platform: string;
    url: string;
  }>;
  copyright?: string;
}

/* ============================================
   LAYOUT COMPONENT TYPES
   ============================================ */

export interface MainLayoutProps {
  children: ReactNode;
  headerProps?: NavBarProps;
  footerProps?: FooterProps;
  className?: string;
}
