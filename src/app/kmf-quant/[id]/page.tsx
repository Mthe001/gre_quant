"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Watch } from "lucide-react";
import { SectionHeader } from "@/components/kmf-quest/Section-header";
import { questionBank } from "../data";
import Timer from "@/components/timer";
import Question from "@/components/question";
import ResultsModal from "@/components/results-modal";

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

export default function KMFQuantPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [isStarted, setIsStarted] = useState(false);
  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(300);
  const [resetKey, setResetKey] = useState(0); 
  const totalTime = 300;

  const handleFirstSubmit = () => {
    if (!hasSubmittedOnce) {
      setHasSubmittedOnce(true);
      setIsStarted(true);
    }
  };

  const handleAnswer = (questionId: number, selectedOption: string | null) => {
    const section = allSections.find((s) => s.id === idStr);
    const question = section?.questions.find((q) => q.id === questionId);
    const isCorrect = selectedOption === question?.answer;

    setAnswers((prev) => {
      const existing = prev.find((a) => a.questionId === questionId);
      if (existing) {
        return prev.map((a) =>
          a.questionId === questionId ? { ...a, selectedOption, isCorrect } : a
        );
      }
      return [...prev, { questionId, selectedOption, isCorrect }];
    });

    const sectionQuestions = section?.questions || [];
    const answeredOrSkipped = sectionQuestions.every(
      (q) =>
        answers.some((a) => a.questionId === q.id) ||
        (selectedOption && q.id === questionId)
    );
    if (answeredOrSkipped) {
      setIsCompleted(true);
    }
  };

  const handleSkip = (questionId: number) => {
    setAnswers((prev) => {
      const existing = prev.find((a) => a.questionId === questionId);
      if (!existing) {
        return [...prev, { questionId, selectedOption: null }];
      }
      return prev;
    });

    const section = allSections.find((s) => s.id === idStr);
    const sectionQuestions = section?.questions || [];
    const answeredOrSkipped = sectionQuestions.every(
      (q) => answers.some((a) => a.questionId === q.id) || q.id === questionId
    );
    if (answeredOrSkipped) {
      setIsCompleted(true);
    }
  };

  const handleTimeUpdate = (remaining: number) => {
    setTimeRemaining(remaining);
  };

  const correct = answers.filter((a) => a.isCorrect).length;
  const skipped = answers.filter((a) => a.selectedOption === null).length;
  const wrong = answers.filter(
    (a) => a.selectedOption !== null && !a.isCorrect
  ).length;

  const handleModalClose = () => {
    setIsCompleted(false);
    setAnswers([]);
    setIsStarted(false);
    setHasSubmittedOnce(false);
    setTimeRemaining(totalTime);
    setResetKey((prev) => prev + 1); // Reset questions and timer
  };

  console.log("Route params:", { id });
  console.log("questionBank:", questionBank);

  const idStr = typeof id === "string" ? id : id?.[0] || "";

  console.log("Normalized id:", idStr);

  const allSections = questionBank.flatMap((cat) => cat.sections);
  const section = allSections.find((s) => s.id === idStr);

  if (!section) {
    console.error(`Section "${idStr}" not found in questionBank`);
    return (
      <div className="min-h-screen bg-background p-4 md:p-8">
        <header className="mb-8">
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Button>
        </header>
        <p className="text-center text-gray-500">
          Section {idStr} not found, bruh.
        </p>
      </div>
    );
  }

  console.log("Matched section:", section);

  const questions: QuestionData[] =
    section.questions.map((q) => ({
      id: q.id,
      problem: q.problem,
      quantityA: q.quantityA,
      quantityB: q.quantityB,
      options: q.options,
      correctAnswer: q.answer,
    })) || [];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <header className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <Button
              variant="outline"
              onClick={() => router.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </Button>
            <div className="flex-1">
              <SectionHeader
                title={section?.title || `Section ${idStr || "Unknown"}`}
                subtitle={section?.subtitle || "KMF Quant Questions"}
              />
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {!isStarted && (
              <Button
                onClick={() => setIsStarted(true)}
                className="bg-[#F28C38] hover:bg-[#e07c28] text-white flex items-center gap-2"
              >
                <div className="bg-white rounded-full p-1.5">
                  <Clock className="w-4 h-4 text-[#F28C38]" />
                </div>
                Start Practice
              </Button>
            )}
            <Timer
              initialTime={totalTime}
              isStarted={isStarted}
              isCompleted={isCompleted}
              resetKey={resetKey} // Pass resetKey to reset timer
              onTimeUpdate={handleTimeUpdate}
            />
          </div>
        </div>
      </header>

      <div key={resetKey} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {questions.length > 0 ? (
          questions.map((question) => (
            <Question
              key={question.id}
              id={question.id}
              problem={question.problem}
              quantityA={question.quantityA}
              quantityB={question.quantityB}
              options={question.options}
              correctAnswer={question.correctAnswer}
              onFirstSubmit={handleFirstSubmit}
              onAnswer={handleAnswer}
              onSkip={handleSkip}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-2">
            No questions for Section {idStr}, fam.
          </p>
        )}
      </div>

      <ResultsModal
        isOpen={isCompleted}
        onClose={handleModalClose}
        correct={correct}
        wrong={wrong}
        skipped={skipped}
        totalTime={totalTime}
        timeRemaining={timeRemaining}
      />
    </div>
  );
}