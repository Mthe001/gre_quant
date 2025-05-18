"use client";

import { useEffect } from "react";
import { CheckCircle, XCircle, Clock, SkipForward } from "lucide-react";

interface ResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  correct: number;
  wrong: number;
  skipped: number;
  totalTime: number;
  timeRemaining: number;
}

export default function ResultsModal({
  isOpen,
  onClose,
  correct,
  wrong,
  skipped,
  totalTime,
  timeRemaining,
}: ResultsModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const timeTaken = totalTime - timeRemaining;

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const total = correct + wrong + skipped;
  const score = total > 0 ? Math.round((correct / total) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-card w-full max-w-md rounded-xl shadow-lg border border-border p-6 animate-in zoom-in-95 duration-200">
        <h2 className="text-2xl font-bold text-card-foreground mb-6 text-center">
          Quiz Results
        </h2>

        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Correct</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {correct}
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <XCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Wrong</p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                {wrong}
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <SkipForward className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Skipped</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {skipped}
              </p>
            </div>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg flex items-center justify-between">
            <div className="flex items-center">
              <Clock className="w-6 h-6 text-[#F28C38] mr-3" />
              <div>
                <p className="text-sm text-muted-foreground">Time Taken</p>
                <p className="text-xl font-semibold text-card-foreground">
                  {formatTime(timeTaken)}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Score</p>
              <p className="text-2xl font-bold text-[#F28C38]">{score}%</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={onClose}
            className="py-2 px-6 rounded-lg font-medium bg-[#F28C38] text-white hover:bg-[#e07c28] transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => window.location.reload()}
            className="py-2 px-6 rounded-lg font-medium bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
