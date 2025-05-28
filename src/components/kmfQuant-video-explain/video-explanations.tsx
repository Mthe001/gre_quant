"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play } from "lucide-react";



interface VideoResource {
  id: string;
  title: string;
  description: string;
  difficulty?: string;
  thumbnail: string;
  videoSrc?: string;
  duration?: string;
  instructor?: string;
  learningPoints?: string[];
}

interface MasterVideoResource {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

export function VideoExplanations() {


const videoResources = [
  {
    id: "1",
    title: "Math Sprint Practice // Section 1 & 4 [Medium]",
    thumbnail: "/images/Z9oryB6y79A-HD.jpg",
    videoSrc: "https://www.youtube.com/embed/S0ciPJl2f9I?si=pAD8l0qKJsa3uXIx",
    duration: "2:42:40",
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
    id: "2",
    title: "Math Sprint Practice // Section 6 & 8 [Medium]",
    thumbnail: "/images/S0ciPJl2f9I-HD.jpg",
    videoSrc: "https://www.youtube.com/embed/Z9oryB6y79A?si=tWkdgWi48A-D6cTN",
    duration: "2:32:39",
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
    id: "3",
    title: "Subsection - 4 || Questions [52-69] Toughest Geometry",
    thumbnail: "/images/yuMKqkZo_m8-HD.jpg",
    videoSrc: "https://www.youtube.com/embed/yuMKqkZo_m8?si=Xzwb8lO1_m_ZFmjt",
    duration: "1:32:56",
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
  {
    id: "4",
    title: "Subsection - 5 || Questions [1-21] Toughest Data Interpretation",
    thumbnail: "/images/6-IKI0Es0Yk-HD.jpg",
    videoSrc: "https://www.youtube.com/embed/6-IKI0Es0Yk?si=4eXNDkndGIwSHpDu", // Replace with actual YouTube embed URL
    duration: "1:52:11",
    instructor: "Shourav Simantha",
    description:
      "Master essential problem-solving techniques for the first sections",
    learningPoints: [
      "Core algebraic techniques",
      "Basic geometry concepts",
      "Time-saving shortcuts",
      "Practice with real GRE questions",
    ],
  },
  {
    id: "5",
    title: "Math Sprint Practice || Section 17 [Research]",
    thumbnail: "/images/yC_9KjbG3yo-HD.jpg",
    videoSrc: "https://www.youtube.com/embed/yC_9KjbG3yo?si=tHWDHyFVVyC2tO_0", // Replace with actual YouTube embed URL
    duration: "2:00:27",
    instructor: "Shourav Simantha",
    description: "Advanced problem-solving strategies for later sections",
    learningPoints: [
      "Advanced algebraic manipulations",
      "Complex geometry problems",
      "Strategic approaches to quant comparison",
      "Timed practice drills",
    ],
  },
  {
    id: "6",
    title: "Units Digit, Tens Digit & Remainder",
    thumbnail: "/images/1sVX6VhMuAQ-HD.jpg",
    videoSrc: "https://www.youtube.com/embed/1sVX6VhMuAQ?si=-7om2A8-P0vzVBth", // Replace with actual YouTube embed URL
    duration: "39:13",
    instructor: "Shourav Simantha",
    description: "Tackle the most challenging geometry problems",
    learningPoints: [
      "Advanced geometric theorems",
      "3D geometry applications",
      "Coordinate geometry techniques",
      "Solving tricky GRE geometry questions",
    ],
  },
  {
    id: "7",
    title: "Toughest Coordinate Geometry",
    thumbnail: "/images/u22L8xzw-Uc-HD.jpg",
    videoSrc: "https://www.youtube.com/embed/u22L8xzw-Uc?si=5JocZP7O7LChL-gu", // Replace with actual YouTube embed URL
    duration: "1:32:15",
    instructor: "Shourav Simantha",
    description: "Master data interpretation with expert strategies",
    learningPoints: [
      "Interpreting charts and graphs",
      "Statistical analysis techniques",
      "Percentage and ratio problems",
      "Data sufficiency strategies",
    ],
  },
  
];

const masterVideoResources = [
  {
    id: "m1",
    title: "All Essential Updated GRE Quant Formulas",
    thumbnail: "/images/J4OvkHZlMLg-HD.jpg",
    videoSrc: "https://www.youtube.com/embed/J4OvkHZlMLg?si=idyspzK8O9710XLy", // Replace with actual YouTube embed URL
    duration: "4:45:05",
    instructor: "Shourav Simantha",
    description: "Comprehensive video guide to all formulas you need to know",
    learningPoints: [
      "Algebraic formulas",
      "Geometry formulas",
      "Statistics and probability formulas",
      "Quick reference for GRE Quant",
    ],
  },
  {
    id: "m2",
    title: "GRE Exam Day Strategies for 315+",
    thumbnail: "/images/-dsgMSJpGkM-HD.jpg",
    videoSrc: "https://www.youtube.com/embed/-dsgMSJpGkM?si=B0eepgZYUuIewRcO", // Replace with actual YouTube embed URL
    duration: "17:31",
    instructor: "Shourav Simantha",
    description:
      "Video tutorial on mindset hacks and approaches for top scores",
    learningPoints: [
      "Time management strategies",
      "Stress management techniques",
      "Identifying trap answers",
      "Maximizing your GRE score",
    ],
  },
  {
    id: "m3",
    title: "Probability, Counting & Sets",
    thumbnail: "/images/QZvCl5biD40-HD.jpg",
    videoSrc: "https://www.youtube.com/embed/QZvCl5biD40?si=CeNXPMif3UjjQHB4", // Replace with actual YouTube embed URL
    duration: "3:15:20",
    instructor: "Shourav Simantha",
    description: "Video lessons on critical concepts for advanced questions",
    learningPoints: [
      "Fundamental counting principles",
      "Permutations and combinations",
      "Set theory and Venn diagrams",
      "Probability distributions",
    ],
  },
  {
    id: "m4",
    title: "Statistics Fundamentals",
    thumbnail: "/images/oNbrBMr98Fk-HD.jpg",
    videoSrc: "https://www.youtube.com/embed/oNbrBMr98Fk?si=vrCZoCPgwufB0Wmw", // Replace with actual YouTube embed URL
    duration: "3:39:40",
    instructor: "Shourav Simantha",
    description: "Video tutorials on statistical concepts and problem-solving",
    learningPoints: [
      "Measures of central tendency",
      "Standard deviation and variance",
      "Normal distribution",
      "Data interpretation techniques",
    ],
  },
  {
    id: "m5",
    title: "Advanced Quant (Part-1)",
    thumbnail: "/images/4lA11u6Jha8-HD.jpg",
    videoSrc: "https://www.youtube.com/embed/4lA11u6Jha8?si=CmGCggmADPEIoYpy", // Replace with actual YouTube embed URL
    duration: "3:55:35",
    instructor: "Shourav Simantha",
    description: "In-depth video lessons on advanced quantitative concepts",
    learningPoints: [
      "Complex number properties",
      "Advanced algebraic techniques",
      "Specialized problem-solving strategies",
      "Practice with advanced GRE problems",
    ],
  },
  {
    id: "m6",
    title: "Advanced Quant (Part-2)",
    thumbnail: "/images/IWwPCq-qiMg-HD.jpg",
    videoSrc: "https://www.youtube.com/embed/IWwPCq-qiMg?si=jWMB46zFi8J2KB02", // Replace with actual YouTube embed URL
    duration: "3:33:50",
    instructor: "Shourav Simantha",
    description: "Continuation of advanced quantitative video tutorials",
    learningPoints: [
      "Advanced geometry problems",
      "Complex word problems",
      "Integrated reasoning techniques",
      "Timed practice sessions",
    ],
  },
];

  return (
    <>
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
          Video Explanations of KMF 1147 Quant Questions
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {videoResources.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
          A Few Master Pieces for Your Prep
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {masterVideoResources.map((video) => (
            <MasterVideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>
    </>
  );
}

function VideoCard({ video }: { video: VideoResource }) {
  const [open, setOpen] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty?.toLowerCase()) {
      case "easy":
        return "bg-green-500 hover:bg-green-600";
      case "medium":
        return "bg-yellow-500 hover:bg-yellow-600";
      case "hard":
        return "bg-red-500 hover:bg-red-600";
      case "advanced":
        return "bg-purple-500 hover:bg-purple-600";
      default:
        return "bg-blue-500 hover:bg-blue-600";
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-black/50 p-3 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
            <Play className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold line-clamp-2">{video.title}</h3>
          {video.difficulty && (
            <Badge
              className={`ml-2 shrink-0 ${getDifficultyColor(
                video.difficulty
              )}`}
            >
              {video.difficulty}
            </Badge>
          )}
        </div>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {video.description}
        </p>
        {video.instructor && (
          <p className="mt-1 text-xs text-muted-foreground">
            Instructor: {video.instructor}
          </p>
        )}
        {video.duration && (
          <p className="mt-1 text-xs text-muted-foreground">
            Duration: {video.duration}
          </p>
        )}

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="mt-4 w-full">Watch Now</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>{video.title}</DialogTitle>
              <DialogDescription>{video.description}</DialogDescription>
            </DialogHeader>
            <div className="relative aspect-video overflow-hidden rounded-md bg-muted">
              {video.videoSrc ? (
                <iframe
                  src={video.videoSrc}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Play className="h-16 w-16 text-muted-foreground opacity-50" />
                  <p className="mt-4 text-center text-sm text-muted-foreground">
                    Video player placeholder
                  </p>
                </div>
              )}
            </div>
            {video.learningPoints && (
              <div className="mt-4">
                <h4 className="font-medium">Learning Points:</h4>
                <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside">
                  {video.learningPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

function MasterVideoCard({ video }: { video: MasterVideoResource }) {
  const [open, setOpen] = useState(false);

  const getVideoContent = (id: string) => {
    switch (id) {
      case "m1":
        return {
          title: "All Essential Updated GRE Quant Formulas",
          content:
            "This comprehensive video covers all the essential formulas you need to know for GRE Quant, including algebra, geometry, number properties, statistics, and word problems. The video breaks down complex concepts into easy-to-understand segments with visual examples.",
          thumbnail: "/images/J4OvkHZlMLg-HD.jpg",
          videoSrc:
            "https://www.youtube.com/embed/J4OvkHZlMLg?si=idyspzK8O9710XLy",
        };
      case "m2":
        return {
          title: "GRE Exam Day Strategies for 315+",
          content:
            "This strategic video tutorial covers time management techniques, strategic guessing, mental reset techniques between sections, identifying trap answers, and maintaining focus during the 4-hour test. Includes testimonials from students who scored 315+.",
        };
      case "m3":
        return {
          title: "Probability, Counting & Sets",
          content:
            "This in-depth video lesson covers fundamental counting principles, permutations, combinations, probability distributions, set operations, Venn diagrams, and conditional probability with practical examples and problem-solving techniques.",
        };
      case "m4":
        return {
          title: "Statistics Fundamentals",
          content:
            "This video tutorial explains measures of central tendency, normal distribution, standard deviation, quartiles, percentiles, interquartile range, correlation basics, and data interpretation from tables and graphs with step-by-step examples.",
        };
      case "m5":
        return {
          title: "Advanced Quant (Part-1)",
          content:
            "The first part of our advanced quantitative video series covers complex number properties, advanced algebra techniques, and specialized problem-solving strategies with detailed explanations and practice problems.",
        };
      case "m6":
        return {
          title: "Advanced Quant (Part-2)",
          content:
            "The second part of our advanced quantitative video series continues with complex geometry, advanced word problems, and integrated reasoning techniques with comprehensive examples and timed practice sessions.",
        };
      default:
        return {
          title: video.title,
          content: "Detailed video content coming soon...",
        };
    }
  };

  const videoContent = getVideoContent(video.id);

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={video.thumbnail || "/placeholder.svg"}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-black/50 p-3 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
            <Play className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold line-clamp-2">{video.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {video.description}
        </p>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="mt-4 w-full">Watch Video</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>{videoContent.title}</DialogTitle>
              <DialogDescription>{video.description}</DialogDescription>
            </DialogHeader>
            <div className="relative aspect-video overflow-hidden rounded-md bg-muted mb-4">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Play className="h-16 w-16 text-muted-foreground opacity-50" />
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Video player placeholder
                </p>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm text-muted-foreground">
                {videoContent.content}
              </p>
              <Button className="mt-6 w-full">Watch Full Video</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}