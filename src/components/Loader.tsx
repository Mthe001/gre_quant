"use client";

import { useEffect, useState } from "react";
import { TextHoverEffect } from "./ui/text-hover-effect";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed  inset-0 bg-[#c6c6c9] dark:bg-[#030307] flex items-center justify-center z-50">
          <div className="text-4xl  flex items-center justify-center h-screen w-screen  font-bold">
            <div className="h-[40rem] flex items-center  justify-center">
              <TextHoverEffect text="GRE" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
