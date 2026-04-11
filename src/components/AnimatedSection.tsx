import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import React, { forwardRef } from "react";

type AnimationVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "fade";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
}

const variantStyles: Record<AnimationVariant, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-down": {
    hidden: "opacity-0 -translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    hidden: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    hidden: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  scale: {
    hidden: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
  fade: {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
};

export function AnimatedSection({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  duration = 600,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();
  const styles = variantStyles[variant];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out will-change-transform",
        isVisible ? styles.visible : styles.hidden,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        willChange: isVisible ? "auto" : "transform, opacity",
      }}
      aria-hidden={!isVisible}
    >
      {children}
    </div>
  );
}

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  variant?: AnimationVariant;
  duration?: number;
}

export function StaggerChildren({
  children,
  className,
  staggerDelay = 100,
  variant = "fade-up",
  duration = 500,
}: StaggerChildrenProps) {
  const { ref, isVisible } = useScrollAnimation();
  const styles = variantStyles[variant];

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          className={cn(
            "transition-all ease-out will-change-transform",
            isVisible ? styles.visible : styles.hidden
          )}
          style={{
            transitionDuration: `${duration}ms`,
            transitionDelay: `${index * staggerDelay}ms`,
            willChange: isVisible ? "auto" : "transform, opacity",
          }}
          aria-hidden={!isVisible}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
