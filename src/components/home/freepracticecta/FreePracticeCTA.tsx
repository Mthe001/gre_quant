"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FreePracticeCTA() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16  ">
      <div className="container mx-auto m-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left"
        >
          <div className="max-w-xl">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Get 300+ Free Practice Questions
            </h2>
            <p className="text-orange-100">
              Access our comprehensive question bank to test your knowledge and
              prepare for your exams. Includes detailed solutions and
              explanations.
            </p>
          </div>
          <Button size="lg" variant="outline" className="whitespace-nowrap border-orange-600">
            Access Question Bank
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
