


"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Animation variants
const slideIn = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 4 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delay: 4 } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-white py-20 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-orange-100 opacity-50 blur-3xl dark:bg-orange-900"></div>
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-100 opacity-30 blur-3xl dark:bg-blue-900"></div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center justify-between gap-8 lg:flex-row"
        >
          <motion.div variants={slideIn} className="max-w-2xl">
            <motion.span
              variants={fadeIn}
              className="mb-3 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
            >
              Premier Education Platform
            </motion.span>
            <motion.h1
              variants={fadeIn}
              className="font-playfair mb-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
            >
              Master Your Studies <br />
              <span className="text-orange-500">With Expert Guidance</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="mb-8 max-w-lg text-lg text-gray-600 dark:text-gray-300"
            >
              Elevate your academic performance with our specialized courses
              designed by top instructors. Comprehensive preparation for
              standardized tests and advanced subjects.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"
              >
                Explore Courses
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
              >
                Free Trial Class
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            variants={slideIn}
            className="relative h-[400px] w-full max-w-md lg:h-[500px]"
          >
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-orange-500 opacity-90">
              <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                <div>
                  <p className="text-xl font-bold">BOOST</p>
                  <p className="text-3xl font-bold">YOUR</p>
                  <p className="text-xl font-bold">SCORE</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-48 w-48 overflow-hidden rounded-lg bg-blue-600 shadow-xl">
              <Image
                src="/images/photo.png"
                alt="Student studying"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-20 right-20 h-56 w-56 overflow-hidden rounded-lg bg-gray-200 shadow-xl dark:bg-gray-700">
              <Image
                src="/images/photo.png"
                alt="Instructor teaching"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}