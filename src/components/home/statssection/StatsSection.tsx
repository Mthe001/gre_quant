"use client";

import { motion } from "motion/react";
import { Award, BookOpen, GraduationCap, TrendingUp } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function StatsSection() {
  return (
    <section className="py-20 lg:w-full w-[90%] mx-auto">
      <div className="container relative mx-auto lg:p-8 p-4 border rounded-md ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={fadeIn} className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-orange-900/30">
              <Award className="h-10 w-10" />
            </div>
            <h3 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
              98%
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Success Rate</p>
          </motion.div>
          <motion.div variants={fadeIn} className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-orange-900/30">
              <GraduationCap className="h-10 w-10" />
            </div>
            <h3 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
              15K+
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Students Taught</p>
          </motion.div>
          <motion.div variants={fadeIn} className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-orange-900/30">
              <BookOpen className="h-10 w-10" />
            </div>
            <h3 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
              50+
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Specialized Courses
            </p>
          </motion.div>
          <motion.div variants={fadeIn} className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-orange-500 dark:bg-orange-900/30">
              <TrendingUp className="h-10 w-10" />
            </div>
            <h3 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
              10+
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Avg. Score Improvement
            </p>
          </motion.div>
        </motion.div>
        <BorderBeam duration={9} size={200} />
      </div>
    </section>
  );
}
