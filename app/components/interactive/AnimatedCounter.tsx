import { useEffect, useRef, useState } from "react";

interface Props {
  end: number;      // ← sesuai types
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({ end, suffix = "", prefix = "", className = "" }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const duration = 2000;
        const step = end / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current = Math.min(current + step, end);
          setCount(Math.floor(current));
          if (current >= end) clearInterval(timer);
        }, 16);
        observer.unobserve(el);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}