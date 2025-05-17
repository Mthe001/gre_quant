"use client";

import { useState, useEffect } from "react";

interface TimerProps {
  initialTime: number;
  isStarted: boolean;
}

export default function Timer({ initialTime, isStarted }: TimerProps) {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isStarted && !isRunning) {
      setIsRunning(true);
    }
  }, [isStarted, isRunning]);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (isRunning && timeRemaining > 0) {
      timerId = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsRunning(false);
      alert("Time's up!");
    }

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [timeRemaining, isRunning]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="bg-muted px-4 py-2 rounded-lg shadow-sm">
      <span className="text-xl font-semibold">{formatTime(timeRemaining)}</span>
    </div>
  );
}
