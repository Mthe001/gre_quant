// "use client";

// import { motion } from "framer-motion";
// import {  Button } from "@/components/ui/button";

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
// import { Play, BookOpen, GraduationCap } from "lucide-react";
// import { Badge } from "../../ui/badge";
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../ui/dialog";
// import { Card, CardDescription, CardHeader, CardTitle } from "../../ui/card";


// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
// };

// const demoClasses = [
//   {
//     id: 1,
//     title: "Triangles Problems",
//     thumbnail: "/images/photo.png",
//     duration: "24 minutes",
//     instructor: "Dr. Sarah Chen",
//     description:
//       "Learn essential strategies for solving triangle problems on the GRE. Covers special triangles, similar triangles, and area calculations.",
//   },
//   {
//     id: 2,
//     title: "Circles and Cylinders",
//     thumbnail: "/images/photo.png",
//     duration: "18 minutes",
//     instructor: "Prof. Michael Johnson",
//     description:
//       "Master circle properties, arc lengths, sector areas, and cylinder volume calculations for the GRE Quant section.",
//   },
//   {
//     id: 3,
//     title: "Word Problems",
//     thumbnail: "/images/photo.png",
//     duration: "22 minutes",
//     instructor: "Dr. Emily Wong",
//     description:
//       "Learn systematic approaches to solve complex word problems, including rate, work, and mixture problems.",
//   },
//   {
//     id: 4,
//     title: "Two-Variable Word Problems",
//     thumbnail: "/images/photo.png",
//     duration: "26 minutes",
//     instructor: "Prof. David Lee",
//     description:
//       "Advanced techniques for solving complex word problems involving multiple variables and constraints.",
//   },
// ];

// export default function DemoClasses() {
//   return (
//     <section className="bg-gray-50 py-20 dark:bg-gray-800">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//           className="mb-12 flex flex-wrap items-center justify-between gap-4"
//         >
//           <div>
//             <Badge
//               variant="outline"
//               className="mb-3 border-orange-200 px-3 py-1 text-orange-500 dark:border-orange-800"
//             >
//               Free Resources
//             </Badge>
//             <h2 className="font-playfair mb-2 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
//               Demo Classes
//             </h2>
//             <p className="max-w-2xl text-gray-600 dark:text-gray-300">
//               Sample our teaching methodology with these free demo classes. Get
//               a taste of our expert instruction before enrolling.
//             </p>
//           </div>
//           <Button
//             variant="outline"
//             className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-950"
//           >
//             View All Classes
//           </Button>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={staggerContainer}
//           className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
//         >
//           {demoClasses.map((demoClass) => (
//             <motion.div key={demoClass.id} variants={fadeIn}>
//               <Dialog>
//                 <DialogTrigger asChild>
//                   <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg dark:bg-gray-800 dark:hover:shadow-gray-700/30">
//                     <div className="relative h-48 overflow-hidden">
//                       <img
//                         src={demoClass.thumbnail}
//                         alt={demoClass.title}
//                         className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//                       />
//                       <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                         <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/90 text-white">
//                           <Play className="h-8 w-8" />
//                         </div>
//                       </div>
//                       <Badge className="absolute bottom-3 right-3 bg-gray-900/80 text-white dark:bg-gray-700/80">
//                         {demoClass.duration}
//                       </Badge>
//                     </div>
//                     <CardHeader>
//                       <CardTitle className="line-clamp-1 text-lg">
//                         {demoClass.title}
//                       </CardTitle>
//                       <CardDescription>
//                         Instructor: {demoClass.instructor}
//                       </CardDescription>
//                     </CardHeader>
//                   </Card>
//                 </DialogTrigger>
//                 <DialogContent className="sm:max-w-[600px]">
//                   <DialogHeader>
//                     <DialogTitle>{demoClass.title}</DialogTitle>
//                     <DialogDescription>
//                       {demoClass.duration} • Instructor: {demoClass.instructor}
//                     </DialogDescription>
//                   </DialogHeader>
//                   <div className="grid gap-4 py-4">
//                     <div className="relative aspect-video w-full overflow-hidden rounded-md bg-gray-100 dark:bg-gray-700">
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <Play className="h-16 w-16 text-orange-500" />
//                       </div>
//                     </div>
//                     <Tabs defaultValue="overview">
//                       <TabsList className="grid w-full grid-cols-2">
//                         <TabsTrigger value="overview">Overview</TabsTrigger>
//                         <TabsTrigger value="resources">Resources</TabsTrigger>
//                       </TabsList>
//                       <TabsContent value="overview" className="space-y-4 pt-4">
//                         <p>{demoClass.description}</p>
//                         <div className="rounded-md bg-orange-50 p-4 dark:bg-orange-900/20">
//                           <h4 className="mb-2 font-medium">
//                             What you will learn:
//                           </h4>
//                           <ul className="ml-5 list-disc space-y-1">
//                             <li>Key concepts and formulas</li>
//                             <li>Problem-solving strategies</li>
//                             <li>Common pitfalls and how to avoid them</li>
//                             <li>Time-saving techniques</li>
//                           </ul>
//                         </div>
//                       </TabsContent>
//                       <TabsContent value="resources" className="space-y-4 pt-4">
//                         <div className="space-y-2">
//                           <div className="flex items-center gap-2 rounded-md border p-3 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
//                             <BookOpen className="h-5 w-5 text-orange-500" />
//                             <span>Practice worksheet (PDF)</span>
//                           </div>
//                           <div className="flex items-center gap-2 rounded-md border p-3 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
//                             <GraduationCap className="h-5 w-5 text-orange-500" />
//                             <span>Formula sheet (PDF)</span>
//                           </div>
//                         </div>
//                       </TabsContent>
//                     </Tabs>
//                     <Button className="mt-2 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">
//                       Enroll in Full Course
//                     </Button>
//                   </div>
//                 </DialogContent>
//               </Dialog>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }





"use client";

import { motion } from "framer-motion";
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
import Image from "next/image"; // Import next/image
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
    thumbnail: "/images/photo.png",
    duration: "24 minutes",
    instructor: "Dr. Sarah Chen",
    description:
      "Learn essential strategies for solving triangle problems on the GRE. Covers special triangles, similar triangles, and area calculations.",
  },
  {
    id: 2,
    title: "Circles and Cylinders",
    thumbnail: "/images/photo.png",
    duration: "18 minutes",
    instructor: "Prof. Michael Johnson",
    description:
      "Master circle properties, arc lengths, sector areas, and cylinder volume calculations for the GRE Quant section.",
  },
  {
    id: 3,
    title: "Word Problems",
    thumbnail: "/images/photo.png",
    duration: "22 minutes",
    instructor: "Dr. Emily Wong",
    description:
      "Learn systematic approaches to solve complex word problems, including rate, work, and mixture problems.",
  },
  {
    id: 4,
    title: "Two-Variable Word Problems",
    thumbnail: "/images/photo.png",
    duration: "26 minutes",
    instructor: "Prof. David Lee",
    description:
      "Advanced techniques for solving complex word problems involving multiple variables and constraints.",
  },
];

export default function DemoClasses() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
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
                  <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg dark:bg-gray-800 dark:hover:shadow-gray-700/30">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={demoClass.thumbnail.replace("/public", "")} // Correct path by removing /public
                        alt={demoClass.title}
                        fill // Use fill for responsive layout
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>{demoClass.title}</DialogTitle>
                    <DialogDescription>
                      {demoClass.duration} • Instructor: {demoClass.instructor}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="relative">
                      <HeroVideoDialog
                        className="block dark:hidden"
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                        thumbnailAlt="Hero Video"
                      />
                      <HeroVideoDialog
                        className="hidden dark:block"
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                        thumbnailAlt="Hero Video"
                      />
                    </div>
                    
                    <Tabs defaultValue="overview">
                      <TabsList className="grid w-full gap-3  grid-cols-2">
                        <TabsTrigger
                          className="border p-1 rounded-md"
                          value="overview"
                        >
                          Overview
                        </TabsTrigger>
                        <TabsTrigger
                          className="border p-1 rounded-md"
                          value="resources"
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
                            <li>Key concepts and formulas</li>
                            <li>Problem-solving strategies</li>
                            <li>Common pitfalls and how to avoid them</li>
                            <li>Time-saving techniques</li>
                          </ul>
                        </div>
                      </TabsContent>
                      <TabsContent value="resources" className="space-y-4 pt-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 rounded-md border p-3 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                            <BookOpen className="h-5 w-5 text-orange-500" />
                            <span>Practice worksheet (PDF)</span>
                          </div>
                          <div className="flex items-center gap-2 rounded-md border p-3 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
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