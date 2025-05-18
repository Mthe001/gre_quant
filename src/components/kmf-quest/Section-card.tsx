"use client";

import { useState } from "react";
import { InfoIcon, PlayCircle } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface SectionCardProps {
  number: number; // Acts as the ID
  difficulty: "Medium" | "Hard" | "Research";
  color: "blue" | "orange" | "purple";
  description: string;
  animationDelay: number;
  large?: boolean;
}

export function SectionCard({
  number,
  difficulty,
  color,
  description,
  animationDelay,
  large = false,
}: SectionCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const borderColor =
    color === "blue"
      ? "border-blue-500"
      : color === "orange"
      ? "border-orange-500"
      : "border-purple-500";

  const glowColor =
    color === "blue"
      ? "shadow-blue-500/20"
      : color === "orange"
      ? "shadow-orange-500/20"
      : "shadow-purple-500/20";

  const textGradient =
    color === "blue"
      ? "from-blue-400 to-foreground"
      : color === "orange"
      ? "from-orange-400 to-foreground"
      : "from-purple-400 to-foreground";

  const badgeColor =
    color === "blue"
      ? "bg-blue-500/20 text-blue-500 dark:text-blue-300"
      : color === "orange"
      ? "bg-orange-500/20 text-orange-500 dark:text-orange-300"
      : "bg-purple-500/20 text-purple-500 dark:text-purple-300";

  return (
    <div
      className={`group relative ${
        large ? "p-6" : "p-4"
      } rounded-xl bg-card/50 backdrop-blur-md border ${borderColor}/30 overflow-hidden transition-all duration-300 animate-fade-in`}
      style={{
        animationDelay: `${animationDelay}s`,
        transform: isHovered
          ? "translateY(-4px) scale(1.02) rotate(0.5deg)"
          : "translateY(0) scale(1) rotate(0deg)",
        boxShadow: isHovered
          ? `0 10px 25px -5px ${
              color === "blue"
                ? "rgba(59, 130, 246, 0.2)"
                : color === "orange"
                ? "rgba(249, 115, 22, 0.2)"
                : "rgba(168, 85, 247, 0.2)"
            }`
          : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowTooltip(false);
      }}
    >
      {/* Animated border glow effect */}
      <div
        className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${glowColor}`}
        style={{
          boxShadow: `0 0 15px 2px ${
            color === "blue"
              ? "rgba(59, 130, 246, 0.3)"
              : color === "orange"
              ? "rgba(249, 115, 22, 0.3)"
              : "rgba(168, 85, 247, 0.3)"
          }`,
        }}
      />

      {/* Glass reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

      <div className="relative z-10 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`text-xl ${
                large ? "text-2xl" : ""
              } font-bold bg-gradient-to-r ${textGradient} bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wider`}
            >
              Section {number}
            </span>
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-medium ${badgeColor}`}
            >
              {difficulty}
            </span>
          </div>

          <div className="relative">
            <button
              className="flex items-center text-muted-foreground hover:text-foreground text-xs gap-1 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(!showTooltip);
              }}
            >
              <InfoIcon className="w-3 h-3" />
              <span>Info</span>
            </button>

            {showTooltip && (
              <div className="absolute top-full left-0 mt-2 p-2 bg-popover border border-border rounded-md text-xs w-48 z-20 shadow-xl">
                {description}
              </div>
            )}
          </div>
        </div>

        {/* Link the Start button to /kmf-quant/[id] */}
        <Link href={`/kmf-quant/${number}`}>
          <Button
            className={`flex items-center justify-center rounded-full ${
              color === "blue"
                ? "text-blue-500 hover:text-blue-400"
                : color === "orange"
                ? "text-orange-500 hover:text-orange-400"
                : "text-purple-500 hover:text-purple-400"
            } transition-transform duration-300 group-hover:scale-110`}
          >
            <PlayCircle
              className={`w-8 h-8 ${isHovered ? "animate-pulse" : ""}`}
            />
          </Button>
        </Link>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/50">
        <div
          className={`h-full ${
            color === "blue"
              ? "bg-blue-500"
              : color === "orange"
              ? "bg-orange-500"
              : "bg-purple-500"
          }`}
          style={{ width: `${Math.random() * 100}%` }}
        />
      </div>
    </div>
  );
}