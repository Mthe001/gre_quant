// "use client";

// import { useEffect } from "react";
// import { CheckCircle, XCircle, Clock, SkipForward } from "lucide-react";

// interface ResultsModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   correct: number;
//   wrong: number;
//   skipped: number;
//   totalTime: number;
//   timeRemaining: number;
// }

// export default function ResultsModal({
//   isOpen,
//   onClose,
//   correct,
//   wrong,
//   skipped,
//   totalTime,
//   timeRemaining,
// }: ResultsModalProps) {
//   // Prevent scrolling when modal is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   const timeTaken = totalTime - timeRemaining;

//   const formatTime = (seconds: number): string => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}m ${remainingSeconds}s`;
//   };

//   const total = correct + wrong + skipped;
//   const score = total > 0 ? Math.round((correct / total) * 100) : 0;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
//       <div className="bg-card w-full max-w-md rounded-xl shadow-lg border border-border p-6 animate-in zoom-in-95 duration-200">
//         <h2 className="text-2xl font-bold text-card-foreground mb-6 text-center">
//           Quiz Results
//         </h2>

//         <div className="space-y-6">
//           <div className="grid grid-cols-3 gap-4 text-center">
//             <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
//               <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
//               <p className="text-sm text-muted-foreground">Correct</p>
//               <p className="text-2xl font-bold text-green-600 dark:text-green-400">
//                 {correct}
//               </p>
//             </div>

//             <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
//               <XCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
//               <p className="text-sm text-muted-foreground">Wrong</p>
//               <p className="text-2xl font-bold text-red-600 dark:text-red-400">
//                 {wrong}
//               </p>
//             </div>

//             <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
//               <SkipForward className="w-8 h-8 text-blue-500 mx-auto mb-2" />
//               <p className="text-sm text-muted-foreground">Skipped</p>
//               <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
//                 {skipped}
//               </p>
//             </div>
//           </div>

//           <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg flex items-center justify-between">
//             <div className="flex items-center">
//               <Clock className="w-6 h-6 text-[#F28C38] mr-3" />
//               <div>
//                 <p className="text-sm text-muted-foreground">Time Taken</p>
//                 <p className="text-xl font-semibold text-card-foreground">
//                   {formatTime(timeTaken)}
//                 </p>
//               </div>
//             </div>
//             <div className="text-right">
//               <p className="text-sm text-muted-foreground">Score</p>
//               <p className="text-2xl font-bold text-[#F28C38]">{score}%</p>
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 flex justify-center gap-4">
//           <button
//             onClick={onClose}
//             className="py-2 px-6 rounded-lg font-medium bg-[#F28C38] text-white hover:bg-[#e07c28] transition-colors"
//           >
//             Close
//           </button>
//           <button
//             onClick={() => window.location.reload()}
//             className="py-2 px-6 rounded-lg font-medium bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";

import { useEffect, useRef } from "react";
import { CheckCircle, XCircle, Clock, SkipForward } from "lucide-react";

interface QuestionData {
  id: number;
  problem: string;
  quantityA: string;
  quantityB: string;
  options: string[];
  correctAnswer?: string;
}

interface Answer {
  questionId: number;
  selectedOption: string | null;
  isCorrect?: boolean;
}

interface ResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  correct: number;
  wrong: number;
  skipped: number;
  totalTime: number;
  timeRemaining: number;
  questions: QuestionData[];
  answers: Answer[];
}

export default function ResultsModal({
  isOpen,
  onClose,
  correct,
  wrong,
  skipped,
  totalTime,
  timeRemaining,
  questions,
  answers,
}: ResultsModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Lock background scroll and focus modal
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      scrollRef.current?.focus(); // Focus scrollable area
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Capture mouse wheel and touch events in modal
  useEffect(() => {
    const handleScroll = (e: WheelEvent | TouchEvent) => {
      if (isOpen && scrollRef.current) {
        e.stopPropagation();
        // Ensure scroll happens in the modal
        const delta = e instanceof WheelEvent ? e.deltaY : 0;
        if (delta) {
          scrollRef.current.scrollTop += delta;
        }
      }
    };

    const preventBackgroundScroll = (e: WheelEvent | TouchEvent) => {
      if (isOpen) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    if (isOpen) {
      scrollRef.current?.addEventListener("wheel", handleScroll, {
        passive: false,
      });
      scrollRef.current?.addEventListener("touchmove", handleScroll, {
        passive: false,
      });
      window.addEventListener("wheel", preventBackgroundScroll, {
        passive: false,
      });
      window.addEventListener("touchmove", preventBackgroundScroll, {
        passive: false,
      });
    }

    return () => {
      scrollRef.current?.removeEventListener("wheel", handleScroll);
      scrollRef.current?.removeEventListener("touchmove", handleScroll);
      window.removeEventListener("wheel", preventBackgroundScroll);
      window.removeEventListener("touchmove", preventBackgroundScroll);
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
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm overflow-hidden pt-4 sm:pt-8">
      <div
        ref={modalRef}
        className="bg-card w-full max-w-2xl rounded-xl shadow-lg border border-border p-6"
      >
        <div
          ref={scrollRef}
          tabIndex={0}
          className="max-h-[80vh] overflow-y-scroll scrollbar-visible focus:outline-none"
        >
          <h2 className="text-2xl font-bold text-card-foreground mb-6 text-center">
            Quiz Results
          </h2>

          <div className="space-y-6">
            {/* Summary Stats */}
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

            {/* Time and Score */}
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

            {/* Question Breakdown */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-card-foreground">
                Question Breakdown
              </h3>
              {questions.length > 0 ? (
                questions.map((question) => {
                  const answer = answers.find(
                    (a) => a.questionId === question.id
                  );
                  const status = answer?.isCorrect
                    ? "correct"
                    : answer?.selectedOption === null
                    ? "skipped"
                    : "wrong";

                  return (
                    <div
                      key={question.id}
                      className="border border-border rounded-lg p-4 space-y-2"
                    >
                      <p className="font-medium text-card-foreground">
                        Question {question.id}: {question.problem}
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <p>Quantity A: {question.quantityA}</p>
                        <p>Quantity B: {question.quantityB}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-card-foreground">
                          Your Answer:
                        </span>
                        <span
                          className={
                            status === "correct"
                              ? "text-green-600 dark:text-green-400"
                              : status === "wrong"
                              ? "text-red-600 dark:text-red-400"
                              : "text-blue-600 dark:text-blue-400"
                          }
                        >
                          {answer?.selectedOption || "Skipped"}
                        </span>
                        {status === "correct" && (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        )}
                        {status === "wrong" && (
                          <XCircle className="w-5 h-5 text-red-500" />
                        )}
                        {status === "skipped" && (
                          <SkipForward className="w-5 h-5 text-blue-500" />
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-card-foreground">
                          Correct Answer:
                        </span>
                        <span className="text-green-600 dark:text-green-400">
                          {question.correctAnswer}
                        </span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-center text-muted-foreground">
                  No questions available.
                </p>
              )}
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
    </div>
  );
}