"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Play, BookOpen, GraduationCap } from "lucide-react";
import { Badge } from "../../ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Card, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import Image from "next/image";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const demoClasses = [
  {
    id: 1,
    title: "Triangles Problems",
    thumbnail: "/images/triangles-thumb.png",
    videoSrc: "https://www.youtube.com/embed/19QvXF7IIvM?si=HgqDA0gqzsNOD2l0",
    duration: "1:45:21",
    instructor: "Shourav Simantha",
    description:
      "Learn essential strategies for solving triangle problems on the GRE. Covers special triangles, similar triangles, and area calculations.",
    learningPoints: [
      "Properties of special triangles (30-60-90, 45-45-90)",
      "Similarity and congruence rules",
      "Area and perimeter calculations",
      "Applications in GRE problem-solving",
    ],
  },
  {
    id: 2,
    title: "Circles and Cylinders",
    thumbnail: "/images/circle-thumb.png",
    videoSrc: "https://www.youtube.com/embed/ctqALQOI0pc?si=Z5pW8Vdc4_jdubnU",
    duration: "1:46:50",
    instructor: "Shourav Simantha",
    description:
      "Master circle properties, arc lengths, sector areas, and cylinder volume calculations for the GRE Quant section.",
    learningPoints: [
      "Circle properties and theorems",
      "Arc length and sector area formulas",
      "Cylinder volume and surface area",
      "Practical GRE quant applications",
    ],
  },
  {
    id: 3,
    title: "Word Problems",
    thumbnail: "/images/word-problems-thumb.png",
    videoSrc: "https://www.youtube.com/embed/sj5QYvRJifQ?si=TMy2ATrrg4PaOerX",
    duration: "1:13:00",
    instructor: "Shourav Simantha",
    description:
      "Learn systematic approaches to solve complex word problems, including rate, work, and mixture problems.",
    learningPoints: [
      "Translating word problems to equations",
      "Rate and work problem strategies",
      "Mixture and concentration techniques",
      "Time management for GRE word problems",
    ],
  },
];

export default function DemoClasses() {
  return (
    <section className="py-20 p-2">
      <div className="container mx-auto border lg:p-16 p-3 rounded-md">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-12 flex flex-wrap items-center justify-between gap-4"
        >
          <div>
            <Badge
              variant="outline"
              className="mb-3 border-orange-200 px-3 py-1 text-orange-500 dark:border-orange-800"
            >
              Free Resources
            </Badge>
            <h2 className="font-playfair mb-2 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Demo Classes
            </h2>
            <p className="max-w-2xl text-gray-600 dark:text-gray-300">
              Sample our teaching methodology with these free demo classes. Get
              a taste of our expert instruction before enrolling.
            </p>
          </div>
          <Button
            variant="outline"
            className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
          >
            View All Classes
          </Button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {demoClasses.map((demoClass) => (
            <motion.div key={demoClass.id} variants={fadeIn}>
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg p-2 dark:border-orange-800 dark:hover:shadow-gray-700/30">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={demoClass.thumbnail}
                        alt={demoClass.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/90 text-white">
                          <Play className="h-8 w-8" />
                        </div>
                      </div>
                      <Badge className="absolute bottom-3 right-3 bg-gray-900/80 text-white dark:bg-gray-700/80">
                        {demoClass.duration}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-1 text-lg">
                        {demoClass.title}
                      </CardTitle>
                      <CardDescription>
                        Instructor: {demoClass.instructor}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </DialogTrigger>

                <DialogContent className="lg:w-full w-[98%] rounded-md h-a">
                  <DialogHeader>
                    <DialogTitle>{demoClass.title}</DialogTitle>
                    <DialogDescription>
                      {demoClass.duration} • Instructor: {demoClass.instructor}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid gap-3 py-2">
                    <HeroVideoDialog
                      className="block"
                      animationStyle="from-center"
                      videoSrc={demoClass.videoSrc}
                      thumbnailSrc={demoClass.thumbnail}
                      thumbnailAlt={demoClass.title}
                    />

                    <Tabs defaultValue="overview">
                      <TabsList className="grid w-full gap-3 grid-cols-2">
                        <TabsTrigger
                          value="overview"
                          className="border p-1 rounded-md"
                        >
                          Overview
                        </TabsTrigger>
                        <TabsTrigger
                          value="resources"
                          className="border p-1 rounded-md"
                        >
                          Resources
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="overview" className="space-y-4 pt-4">
                        <p>{demoClass.description}</p>
                        <div className="rounded-md bg-orange-50 p-4 dark:bg-orange-900/20">
                          <h4 className="mb-2 font-medium">
                            What you will learn:
                          </h4>
                          <ul className="ml-5 list-disc space-y-1">
                            {demoClass.learningPoints.map((point, index) => (
                              <li key={index}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>

                      <TabsContent value="resources" className="space-y-4 pt-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 rounded-md border p-3 cursor-pointer hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                            <BookOpen className="h-5 w-5 text-orange-500" />
                            <span>Practice worksheet (PDF)</span>
                          </div>
                          <div className="flex items-center gap-2 rounded-md border p-3 cursor-pointer hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                            <GraduationCap className="h-5 w-5 text-orange-500" />
                            <span>Formula sheet (PDF)</span>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>

                    <Button className="mt-2 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">
                      Enroll in Full Course
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
