"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import Timer from "./timer";
import Question from "./question";

export default function MathSprintPage() {
  const [isStarted, setIsStarted] = useState(false);
  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false);
  

  const handleFirstSubmit = () => {
    if (!hasSubmittedOnce) {
      setHasSubmittedOnce(true);
      setIsStarted(true);
    }
  };

  const questions = [
    {
      id: 1,
      problem:
        "The positive integer x is 7 greater than a multiple of 13, and 2512 < x^2 < 3596.",
      quantityA: "x",
      quantityB: "55",
      options: [
        "Quantity A is greater",
        "Quantity B is greater",
        "The two quantities are equal",
        "The relationship cannot be determined from the information given",
      ],
    },
    {
      id: 2,
      problem: "If y is a positive integer divisible by 5, and 3y + 12 < 102.",
      quantityA: "y",
      quantityB: "30",
      options: [
        "Quantity A is greater",
        "Quantity B is greater",
        "The two quantities are equal",
        "The relationship cannot be determined from the information given",
      ],
    },
    {
      id: 3,
      problem:
        "If z = 2^n where n is a positive integer, and 64 < z < 512, compare:",
      quantityA: "n",
      quantityB: "8",
      options: [
        "Quantity A is greater",
        "Quantity B is greater",
        "The two quantities are equal",
        "The relationship cannot be determined from the information given",
      ],
    },
    {
      id: 4,
      problem:
        "For all real numbers a and b, let a ⊕ b = a² + b². If 3 ⊕ x = 25, compare:",
      quantityA: "x",
      quantityB: "4",
      options: [
        "Quantity A is greater",
        "Quantity B is greater",
        "The two quantities are equal",
        "The relationship cannot be determined from the information given",
      ],
    },
    {
      id: 5,
      problem:
        "The sequence a₁, a₂, a₃, ... is defined by a₁ = 3 and aₙ₊₁ = 2aₙ - 1 for all positive integers n. Compare:",
      quantityA: "a₅",
      quantityB: "31",
      options: [
        "Quantity A is greater",
        "Quantity B is greater",
        "The two quantities are equal",
        "The relationship cannot be determined from the information given",
      ],
    },
  ];

  
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <header className="mb-8">
      

        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-[#F28C38] mb-4 md:mb-0">
            Math Sprint Practice - Section 1
          </h1>
          <div className="flex items-center gap-4">
            {!isStarted && (
              <Button
                onClick={() => setIsStarted(true)}
                className="bg-[#F28C38] hover:bg-[#e07c28] text-white"
              >
                Start Practice
              </Button>
            )}
            <Timer initialTime={300} isStarted={isStarted} />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {questions.map((question) => (
          <Question
            key={question.id}
            id={question.id}
            problem={question.problem}
            quantityA={question.quantityA}
            quantityB={question.quantityB}
            options={question.options}
            onFirstSubmit={handleFirstSubmit}
          />
        ))}
      </div>
    </div>
  );
}
