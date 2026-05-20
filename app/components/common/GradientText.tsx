export interface GradientTextProps {
  children: string;
  className?: string;
}

export default function GradientText({ children, className = "" }: GradientTextProps) {
  return <span className={`gradient-blue-to-cyan ${className}`}>{children}</span>;
}
