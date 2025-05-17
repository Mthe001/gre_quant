"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const DotButton = ({
  selected,
  onClick,
}: {
  selected: boolean;
  onClick: () => void;
}) => (
  <Button
    className={`relative mx-1 h-3 w-3 rounded-full ${
      selected ? "bg-orange-500" : "bg-gray-300 dark:bg-gray-700"
    }`}
    type="button"
    onClick={onClick}
  />
);

export const ArrowButton = ({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm transition-all hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 ${
      direction === "left" ? "left-2" : "right-2"
    }`}
    aria-label={direction === "left" ? "Previous slide" : "Next slide"}
  >
    {direction === "left" ? (
      <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-200" />
    ) : (
      <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-200" />
    )}
  </button>
);
