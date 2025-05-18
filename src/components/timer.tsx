// "use client";

// import { useState, useEffect } from "react";

// interface TimerProps {
//   initialTime: number;
//   isStarted: boolean;
//   isCompleted?: boolean;
//   resetKey?: number; // New prop to trigger reset
//   onTimeUp?: () => void;
//   onTimeUpdate?: (timeRemaining: number) => void;
// }

// export default function Timer({
//   initialTime,
//   isStarted,
//   isCompleted = false,
//   resetKey = 0, // Default to 0
//   onTimeUp,
//   onTimeUpdate,
// }: TimerProps) {
//   const [timeRemaining, setTimeRemaining] = useState(initialTime);
//   const [isRunning, setIsRunning] = useState(false);

//   // Reset timer when resetKey changes
//   useEffect(() => {
//     setTimeRemaining(initialTime);
//     setIsRunning(false);
//   }, [resetKey, initialTime]);

//   // Control running state based on isStarted and isCompleted
//   useEffect(() => {
//     if (isStarted && !isRunning && !isCompleted) {
//       setIsRunning(true);
//     }
//     if (isCompleted && isRunning) {
//       setIsRunning(false); // Stop timer when completed
//     }
//   }, [isStarted, isRunning, isCompleted]);

//   // Timer countdown logic
//   useEffect(() => {
//     let timerId: NodeJS.Timeout;

//     if (isRunning && timeRemaining > 0) {
//       timerId = setTimeout(() => {
//         const newTime = timeRemaining - 1;
//         setTimeRemaining(newTime);
//         if (onTimeUpdate) {
//           onTimeUpdate(newTime);
//         }
//       }, 1000);
//     } else if (timeRemaining === 0) {
//       setIsRunning(false);
//       if (onTimeUp) {
//         onTimeUp();
//       } else {
//         alert("Time's up!");
//       }
//     }

//     return () => {
//       if (timerId) clearTimeout(timerId);
//     };
//   }, [timeRemaining, isRunning, onTimeUp, onTimeUpdate]);

//   const formatTime = (seconds: number): string => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
//       .toString()
//       .padStart(2, "0")}`;
//   };

//   return (
//     <div className="bg-muted px-4 py-2 rounded-lg shadow-sm">
//       <span className="text-xl font-semibold">{formatTime(timeRemaining)}</span>
//     </div>
//   );
// }




"use client";

import { useState, useEffect } from "react";

interface TimerProps {
  initialTime: number; // Still in seconds for consistency
  isStarted: boolean;
  isCompleted?: boolean;
  resetKey?: number;
  onTimeUp?: () => void;
  onTimeUpdate?: (timeRemaining: number) => void; // Reports seconds
}

export default function Timer({
  initialTime,
  isStarted,
  isCompleted = false,
  resetKey = 0,
  onTimeUp,
  onTimeUpdate,
}: TimerProps) {
  const initialTimeMs = initialTime * 1000; // Convert seconds to milliseconds
  const [timeRemainingMs, setTimeRemainingMs] = useState(initialTimeMs); // Track milliseconds
  const [isRunning, setIsRunning] = useState(false);

  // Reset timer when resetKey changes
  useEffect(() => {
    setTimeRemainingMs(initialTimeMs);
    setIsRunning(false);
  }, [resetKey, initialTimeMs]);

  // Control running state based on isStarted and isCompleted
  useEffect(() => {
    if (isStarted && !isRunning && !isCompleted) {
      setIsRunning(true);
    }
    if (isCompleted && isRunning) {
      setIsRunning(false); // Stop timer when completed
    }
  }, [isStarted, isRunning, isCompleted]);

  // Timer countdown logic (10ms interval for millisecond precision)
  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (isRunning && timeRemainingMs > 0) {
      timerId = setInterval(() => {
        setTimeRemainingMs((prev) => {
          const newTimeMs = prev - 10; // Decrease by 10ms
          const newTimeSeconds = Math.floor(newTimeMs / 1000); // Convert to seconds for onTimeUpdate
          if (onTimeUpdate) {
            onTimeUpdate(newTimeSeconds); // Report seconds to page.tsx
          }
          return newTimeMs <= 0 ? 0 : newTimeMs;
        });
      }, 10); // 10ms interval
    } else if (timeRemainingMs <= 0) {
      setIsRunning(false);
      if (onTimeUp) {
        onTimeUp();
      } else {
        alert("Time's up!");
      }
    }

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [timeRemainingMs, isRunning, onTimeUp, onTimeUpdate]);

  const formatTime = (milliseconds: number): string => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    const remainingMilliseconds = Math.floor((milliseconds % 1000) / 10); // 2-digit milliseconds
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}:${remainingMilliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-muted px-4 py-2 rounded-lg shadow-sm">
      <span className="text-xl font-semibold">
        {formatTime(timeRemainingMs)}
      </span>
    </div>
  );
}