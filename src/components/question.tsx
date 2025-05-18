// // "use client";

// // import { useState } from "react";
// // import { ArrowRight } from "lucide-react";

// // interface QuestionProps {
// //   id: number;
// //   problem: string;
// //   quantityA: string;
// //   quantityB: string;
// //   options: string[];
// //   onFirstSubmit: () => void;
// // }

// // export default function Question({
// //   id,
// //   problem,
// //   quantityA,
// //   quantityB,
// //   options,
// //   onFirstSubmit,
// // }: QuestionProps) {
// //   const [selectedOption, setSelectedOption] = useState<string | null>(null);
// //   const [hasSubmitted, setHasSubmitted] = useState(false);

// //   const handleSubmit = () => {
// //     if (selectedOption) {
// //       if (!hasSubmitted) {
// //         onFirstSubmit();
// //         setHasSubmitted(true);
// //       }
// //       console.log(`Question ${id} - Selected: ${selectedOption}`);
// //     }
// //   };

// //   return (
// //     <div className="bg-card rounded-xl shadow-md p-6 border border-border hover:shadow-lg transition-shadow">
// //       <div className="flex items-center justify-between mb-4">
// //         <div className="flex items-center">
// //           <h2 className="text-lg font-semibold text-card-foreground">
// //             Question: {id}
// //           </h2>
// //           <button className="ml-3 text-sm text-[#F28C38] border border-[#F28C38] rounded-md px-2 py-1 hover:bg-[#F28C38] hover:text-white transition-colors">
// //             Video Explanation
// //           </button>
// //         </div>
// //       </div>

// //       <p className="text-card-foreground mb-6">{problem}</p>

// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
// //         <div className="bg-muted p-4 rounded-lg shadow-sm">
// //           <p className="font-medium mb-2 text-muted-foreground">Quantity A:</p>
// //           <p className="text-lg text-card-foreground">{quantityA}</p>
// //         </div>
// //         <div className="bg-muted p-4 rounded-lg shadow-sm">
// //           <p className="font-medium mb-2 text-muted-foreground">Quantity B:</p>
// //           <p className="text-lg text-card-foreground">{quantityB}</p>
// //         </div>
// //       </div>

// //       <div className="space-y-3 mb-6">
// //         {options.map((option, index) => (
// //           <div key={index} className="flex items-center">
// //             <input
// //               type="radio"
// //               id={`question-${id}-option-${index}`}
// //               name={`question-${id}`}
// //               value={option}
// //               checked={selectedOption === option}
// //               onChange={() => setSelectedOption(option)}
// //               className="w-4 h-4 text-[#F28C38] focus:ring-[#F28C38] border-border"
// //             />
// //             <label
// //               htmlFor={`question-${id}-option-${index}`}
// //               className="ml-2 text-card-foreground cursor-pointer"
// //             >
// //               {option}
// //             </label>
// //           </div>
// //         ))}
// //       </div>

// //       <button
// //         onClick={handleSubmit}
// //         disabled={!selectedOption}
// //         className={`flex items-center justify-center w-full py-2 px-4 rounded-lg font-medium transition-all transform hover:scale-[1.02] ${
// //           selectedOption
// //             ? "bg-[#F28C38] text-white hover:bg-[#e07c28]"
// //             : "bg-muted text-muted-foreground cursor-not-allowed"
// //         }`}
// //       >
// //         Submit Answer
// //         <ArrowRight className="ml-2 h-4 w-4" />
// //       </button>
// //     </div>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import { ArrowRight, SkipForward } from "lucide-react";

// interface QuestionProps {
//   id: number;
//   problem: string;
//   quantityA: string;
//   quantityB: string;
//   options: string[];
//   correctAnswer?: string;
//   onFirstSubmit: () => void;
//   onAnswer: (questionId: number, selectedOption: string | null) => void;
//   onSkip: (questionId: number) => void;
// }

// export default function Question({
//   id,
//   problem,
//   quantityA,
//   quantityB,
//   options,
//   onFirstSubmit,
//   onAnswer,
//   onSkip,
// }: QuestionProps) {
//   const [selectedOption, setSelectedOption] = useState<string | null>(null);
//   const [hasSubmitted, setHasSubmitted] = useState(false);

//   const handleSubmit = () => {
//     if (selectedOption) {
//       if (!hasSubmitted) {
//         onFirstSubmit();
//         setHasSubmitted(true);
//       }
//       onAnswer(id, selectedOption);
//       console.log(`Question ${id} - Selected: ${selectedOption}`);
//     }
//   };

//   const handleSkip = () => {
//     onSkip(id);
//     console.log(`Question ${id} - Skipped`);
//   };

//   return (
//     <div className="bg-card rounded-xl shadow-md p-6 border border-border hover:shadow-lg transition-shadow">
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center">
//           <h2 className="text-lg font-semibold text-card-foreground">
//             Question: {id}
//           </h2>
//           <button className="ml-3 text-sm text-[#F28C38] border border-[#F28C38] rounded-md px-2 py-1 hover:bg-[#F28C38] hover:text-white transition-colors">
//             Video Explanation
//           </button>
//         </div>
//       </div>

//       <p className="text-card-foreground mb-6">{problem}</p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//         <div className="bg-muted p-4 rounded-lg shadow-sm">
//           <p className="font-medium mb-2 text-muted-foreground">Quantity A:</p>
//           <p className="text-lg text-card-foreground">{quantityA}</p>
//         </div>
//         <div className="bg-muted p-4 rounded-lg shadow-sm">
//           <p className="font-medium mb-2 text-muted-foreground">Quantity B:</p>
//           <p className="text-lg text-card-foreground">{quantityB}</p>
//         </div>
//       </div>

//       <div className="space-y-3 mb-6">
//         {options.map((option, index) => (
//           <div key={index} className="flex items-center">
//             <input
//               type="radio"
//               id={`question-${id}-option-${index}`}
//               name={`question-${id}`}
//               value={option}
//               checked={selectedOption === option}
//               onChange={() => setSelectedOption(option)}
//               className="w-4 h-4 text-[#F28C38] focus:ring-[#F28C38] border-border"
//             />
//             <label
//               htmlFor={`question-${id}-option-${index}`}
//               className="ml-2 text-card-foreground cursor-pointer"
//             >
//               {option}
//             </label>
//           </div>
//         ))}
//       </div>

//       <div className="flex gap-3">
//         <button
//           onClick={handleSubmit}
//           disabled={!selectedOption}
//           className={`flex items-center justify-center flex-1 py-2 px-4 rounded-lg font-medium transition-all transform hover:scale-[1.02] ${
//             selectedOption
//               ? "bg-[#F28C38] text-white hover:bg-[#e07c28]"
//               : "bg-muted text-muted-foreground cursor-not-allowed"
//           }`}
//         >
//           Submit Answer
//           <ArrowRight className="ml-2 h-4 w-4" />
//         </button>

//         <button
//           onClick={handleSkip}
//           className="flex items-center justify-center py-2 px-4 rounded-lg font-medium transition-all transform hover:scale-[1.02] bg-muted text-muted-foreground hover:bg-muted/80"
//         >
//           Skip
//           <SkipForward className="ml-2 h-4 w-4" />
//         </button>
//       </div>
//     </div>
//   );
// }




"use client";

import { useState } from "react";
import { ArrowRight, SkipForward } from "lucide-react";

interface QuestionProps {
  id: number;
  problem: string;
  quantityA: string;
  quantityB: string;
  options: string[];
  correctAnswer?: string;
  onFirstSubmit: () => void;
  onAnswer: (questionId: number, selectedOption: string | null) => void;
  onSkip: (questionId: number) => void;
}

export default function Question({
  id,
  problem,
  quantityA,
  quantityB,
  options,
  onFirstSubmit,
  onAnswer,
  onSkip,
}: QuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isLocked, setIsLocked] = useState(false); // Tracks if answered or skipped
  const [hasTriggeredFirstSubmit, setHasTriggeredFirstSubmit] = useState(false); // Tracks first submit

  const handleSubmit = () => {
    if (selectedOption && !isLocked) {
      if (!hasTriggeredFirstSubmit) {
        onFirstSubmit();
        setHasTriggeredFirstSubmit(true);
      }
      onAnswer(id, selectedOption);
      setIsLocked(true); // Lock the question
      console.log(`Question ${id} - Selected: ${selectedOption}`);
    }
  };

  const handleSkip = () => {
    if (!isLocked) {
      onSkip(id);
      setIsLocked(true); // Lock the question
      if (!hasTriggeredFirstSubmit) {
        onFirstSubmit(); // Treat skip as first submit if not yet triggered
        setHasTriggeredFirstSubmit(true);
      }
      console.log(`Question ${id} - Skipped`);
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-md p-6 border border-border hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold text-card-foreground">
            Question: {id}
          </h2>
          <button className="ml-3 text-sm text-[#F28C38] border border-[#F28C38] rounded-md px-2 py-1 hover:bg-[#F28C38] hover:text-white transition-colors">
            Video Explanation
          </button>
        </div>
      </div>

      <p className="text-card-foreground mb-6">{problem}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-muted p-4 rounded-lg shadow-sm">
          <p className="font-medium mb-2 text-muted-foreground">Quantity A:</p>
          <p className="text-lg text-card-foreground">{quantityA}</p>
        </div>
        <div className="bg-muted p-4 rounded-lg shadow-sm">
          <p className="font-medium mb-2 text-muted-foreground">Quantity B:</p>
          <p className="text-lg text-card-foreground">{quantityB}</p>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {options.map((option, index) => (
          <div key={index} className="flex items-center">
            <input
              type="radio"
              id={`question-${id}-option-${index}`}
              name={`question-${id}`}
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
              disabled={isLocked} // Disable radio buttons after answer/skip
              className="w-4 h-4 text-[#F28C38] focus:ring-[#F28C38] border-border disabled:opacity-50"
            />
            <label
              htmlFor={`question-${id}-option-${index}`}
              className={`ml-2 text-card-foreground ${
                isLocked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {option}
            </label>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleSubmit}
          disabled={!selectedOption || isLocked} // Disable if no selection or locked
          className={`flex items-center justify-center flex-1 py-2 px-4 rounded-lg font-medium transition-all transform hover:scale-[1.02] ${
            selectedOption && !isLocked
              ? "bg-[#F28C38] text-white hover:bg-[#e07c28]"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
        >
          Submit Answer
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>

        <button
          onClick={handleSkip}
          disabled={isLocked} // Disable if locked
          className={`flex items-center justify-center py-2 px-4 rounded-lg font-medium transition-all transform hover:scale-[1.02] ${
            isLocked
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          Skip
          <SkipForward className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}