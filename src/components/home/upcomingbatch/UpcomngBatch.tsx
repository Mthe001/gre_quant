"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User } from "lucide-react";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const batches = [
  {
    title: "Beat GRE Quant in a Month",
    date: "Starting May 20, 2025",
    time: "10:00 AM",
    instructor: "Dr. Sarah Chen",
    description:
      "Intensive course to boost your GRE Quant score by 10+ points in just one month.",
    duration: "4 weeks",
    price: "$299",
    thumbnail: "/images/photo.png",
  },
  {
    title: "GRE Quant Mock Test Course",
    date: "Starting May 22, 2025",
    time: "2:00 PM",
    instructor: "Prof. Michael Johnson",
    description:
      "Practice with real GRE-style questions and get personalized feedback.",
    duration: "3 weeks",
    price: "$199",
  },
  {
    title: "KMF's 1794 Quant Questions",
    date: "Starting May 25, 2025",
    time: "9:00 AM",
    instructor: "Dr. Emily Wong",
    description:
      "Master a comprehensive collection of GRE Quant questions with strategies.",
    duration: "5 weeks",
    price: "$249",
  },
  {
    title: "Advanced GRE Quant Strategies",
    date: "Starting May 28, 2025",
    time: "11:00 AM",
    instructor: "Prof. David Lee",
    description: "Deep dive into advanced GRE Quant techniques for top scores.",
    duration: "6 weeks",
    price: "$349",
  },
];

const UpcomingBatch = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto p-10 rounded-md border">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-12 text-center"
        >
          <Badge
            variant="outline"
            className="mb-4 border-orange-200 px-3 py-1 text-orange-500 dark:border-orange-800"
          >
            Upcoming Programs
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Upcoming Batches
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Join our expert-led courses to excel in GRE Quant. Limited seats
            available—enroll today!
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {batches.map((batch, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <Card className="h-full border dark:border-orange-800 text-orange-600 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {index === 0 && batch.thumbnail && (
                  <div className="relative h-auto">
                    <Image
                      src={batch.thumbnail}
                      alt={batch.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-lg"></div>
                  </div>
                )}
                <CardHeader className="relative">
                  <Badge className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600">
                    {batch.price}
                  </Badge>
                  <CardTitle
                    className={`text-xl ${
                      index === 0 ? "pr-20" : "pr-20"
                    }`}
                  >
                    {batch.title}
                  </CardTitle>
                  <CardDescription
                    className={`text-sm ${
                      index === 0
                        ? "text-gray-500 font-semibold dark:text-gray-300"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {batch.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div
                    className={`flex items-center gap-2 text-sm ${
                      index === 0
                        ? "text-gray-500 font-semibold dark:text-gray-300"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    <Calendar className="h-4 w-4 text-orange-500" />
                    <span>{batch.date}</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 text-sm ${
                      index === 0
                        ? "text-gray-400 font-semibold dark:text-gray-300"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span>{batch.time}</span>
                  </div>
                  <div
                    className={`flex items-center gap-2 text-sm ${
                      index === 0
                        ? "text-gray-500 font-semibold dark:text-gray-300"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span>Duration: {batch.duration}</span>
                  </div>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div
                        className={`flex items-center gap-2 text-sm ${
                          index === 0
                            ? "text-gray-500 font-semibold dark:text-gray-300 hover:text-orange-400"
                            : "text-gray-600 dark:text-gray-300 hover:text-orange-500"
                        } cursor-pointer transition-colors`}
                      >
                        <User className="h-4 w-4 text-orange-500" />
                        <span>Instructor: {batch.instructor}</span>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">
                          {batch.instructor}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Expert in GRE Quant with over 10 years of teaching
                          experience.
                        </p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </CardContent>
                <Separator className="my-2" />
                <CardFooter>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingBatch;