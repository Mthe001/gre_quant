"use client";

import { useEffect, useState } from "react";
import { KmfLogo } from "./kmf-logo";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`relative flex items-center justify-between p-6 rounded-2xl bg-card/30 backdrop-blur-md border border-primary/10 overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20 dark:bg-primary/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float 10s infinite ease-in-out, pulse 3s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="z-10">
        <h2 className="text-sm text-primary/80 dark:text-primary/70 mb-1 font-medium tracking-wider">
          {subtitle}
        </h2>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent font-display tracking-tight">
          {title}
        </h1>
      </div>

      <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 flex-shrink-0 animate-pulse-slow">
        <KmfLogo />
      </div>
    </div>
  );
}
