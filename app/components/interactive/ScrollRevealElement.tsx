import { useEffect, useRef, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "scale";
}

export function ScrollRevealElement({ children, className = "", delay = 0, direction = "up" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "none";
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const initialTransform = direction === "left" ? "translateX(-30px)" 
    : direction === "scale" ? "scale(0.9)" 
    : "translateY(30px)";

  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: initialTransform, transition: "opacity 0.6s ease, transform 0.6s ease" }}
    >
      {children}
    </div>
  );
}