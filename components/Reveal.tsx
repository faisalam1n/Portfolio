import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number; // ms
  duration?: number; // ms
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0, 
  duration = 700,
  direction = "up", 
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Only animate once
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    if (ref.current) observer.observe(ref.current);
    
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getTransform = () => {
    if (direction === "up") return "translate-y-12";
    if (direction === "down") return "-translate-y-12";
    if (direction === "left") return "translate-x-12";
    if (direction === "right") return "-translate-x-12";
    return "";
  };

  const transitionStyle = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  };

  const transitionClass = isVisible 
    ? "opacity-100 translate-y-0 translate-x-0" 
    : `opacity-0 ${getTransform()}`;

  return (
    <div ref={ref} className={`${width === "100%" ? "w-full" : ""} ${className}`}>
        <div 
            style={transitionStyle}
            className={`transition-all cubic-bezier(0.17, 0.55, 0.55, 1) ${transitionClass}`}
        >
            {children}
        </div>
    </div>
  );
};