// "use client";

// import { motion } from "framer-motion";
// import useEmblaCarousel from "embla-carousel-react";
// import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";


// import { Calendar, Clock, Star } from "lucide-react";

// import { useEffect, useState } from "react";
// import { Badge } from "../../ui/badge";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card";
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../ui/dialog";
// import { Button } from "@/components/ui/button";
// import { ArrowButton, DotButton } from "../../ui/carousel-conrtols";
// import Image from "next/image";

// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const featuredCourses = [
//   {
//     id: 1,
//     title: "Beat GRE Quant in a Month",
//     image: "/public/images/photo.png",
//     startDate: "5 May 2025",
//     schedule: "Mon, Wed, Fri",
//     time: "7:00 PM - 9:00 PM",
//     instructor: "Dr. Sarah Chen",
//     description:
//       "Intensive course designed to boost your GRE Quant score by 10+ points in just one month. Master all key concepts with our proven methodology.",
//     price: "$299",
//     rating: 4.9,
//   },
//   {
//     id: 2,
//     title: "GRE Quant Mock Test Course",
//     image: "/public/images/photo.png",
//     startDate: "8 May 2025",
//     schedule: "Tue, Thu",
//     time: "6:00 PM - 8:30 PM",
//     instructor: "Prof. Michael Johnson",
//     description:
//       "Practice with real GRE-style questions and get personalized feedback. Includes 5 full-length mock tests with detailed analysis.",
//     price: "$199",
//     rating: 4.8,
//   },
//   {
//     id: 3,
//     title: "KMF's 1794 Quant Questions",
//     image: "/public/images/photo.png",
//     startDate: "10 May 2025",
//     schedule: "Sat, Sun",
//     time: "10:00 AM - 12:30 PM",
//     instructor: "Dr. Emily Wong",
//     description:
//       "Master the most comprehensive collection of GRE Quant questions. Includes strategies for all question types and difficulty levels.",
//     price: "$249",
//     rating: 4.7,
//   },
// ];

// export default function UpcomingBatch() {
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true, align: "start", skipSnaps: false },
//     [WheelGesturesPlugin()]
//   );
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

//   useEffect(() => {
//     if (emblaApi) {
//       setScrollSnaps(emblaApi.scrollSnapList());
//       emblaApi.on("select", () =>
//         setSelectedIndex(emblaApi.selectedScrollSnap())
//       );
//     }
//   }, [emblaApi]);

//   const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);
//   const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
//   const scrollNext = () => emblaApi && emblaApi.scrollNext();

//   return (
//     <section className="bg-white py-20 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//           className="mb-12 text-center"
//         >
//           <Badge
//             variant="outline"
//             className="mb-3 border-orange-200 px-3 py-1 text-orange-500 dark:border-orange-800"
//           >
//             Featured Programs
//           </Badge>
//           <h2 className="font-playfair mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
//             Upcoming Batches
//           </h2>
//           <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
//             Join our highly rated courses taught by industry experts and
//             academic professionals. Limited seats available.
//           </p>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//           className="relative"
//         >
//           <div className="overflow-hidden" ref={emblaRef}>
//             <div className="flex">
//               {featuredCourses.map((course) => (
//                 <div
//                   key={course.id}
//                   className="min-w-0 flex-[0_0_90%] pl-4 sm:flex-[0_0_45%] md:flex-[0_0_30%]"
//                 >
//                   <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg dark:bg-gray-800 dark:hover:shadow-gray-700/30">
//                     <div className="relative h-48 overflow-hidden">
//                       <Image
//                         src={course.image}
//                         alt={course.title}
//                         className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                       <Badge className="absolute bottom-3 right-3 bg-orange-500 hover:bg-orange-600">
//                         {course.price}
//                       </Badge>
//                     </div>
//                     <CardHeader>
//                       <CardTitle className="line-clamp-2 text-xl">
//                         {course.title}
//                       </CardTitle>
//                       <CardDescription className="flex items-center gap-1">
//                         <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                         <span>{course.rating} rating</span>
//                       </CardDescription>
//                     </CardHeader>
//                     <CardContent className="space-y-3">
//                       <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
//                         <Calendar className="h-4 w-4" />
//                         <span>Starting from: {course.startDate}</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
//                         <Clock className="h-4 w-4" />
//                         <span>
//                           {course.schedule} • {course.time}
//                         </span>
//                       </div>
//                       <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
//                         {course.description}
//                       </p>
//                     </CardContent>
//                     <CardFooter>
//                       <Dialog>
//                         <DialogTrigger asChild>
//                           <Button className="w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">
//                             Learn More
//                           </Button>
//                         </DialogTrigger>
//                         <DialogContent className="sm:max-w-[500px]">
//                           <DialogHeader>
//                             <DialogTitle>{course.title}</DialogTitle>
//                             <DialogDescription>
//                               Instructor: {course.instructor}
//                             </DialogDescription>
//                           </DialogHeader>
//                           <div className="grid gap-4 py-4">
//                             <img
//                               src={course.image}
//                               alt={course.title}
//                               className="h-48 w-full rounded-md object-cover"
//                             />
//                             <div className="space-y-2">
//                               <div className="flex items-center gap-2">
//                                 <Calendar className="h-4 w-4 text-orange-500" />
//                                 <span>Starting from: {course.startDate}</span>
//                               </div>
//                               <div className="flex items-center gap-2">
//                                 <Clock className="h-4 w-4 text-orange-500" />
//                                 <span>
//                                   {course.schedule} • {course.time}
//                                 </span>
//                               </div>
//                               <p>{course.description}</p>
//                               <div className="flex items-center gap-2">
//                                 <span className="font-bold">Price:</span>
//                                 <span>{course.price}</span>
//                               </div>
//                             </div>
//                             <Button className="mt-2 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">
//                               Enroll Now
//                             </Button>
//                           </div>
//                         </DialogContent>
//                       </Dialog>
//                     </CardFooter>
//                   </Card>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <ArrowButton direction="left" onClick={scrollPrev} />
//           <ArrowButton direction="right" onClick={scrollNext} />
//           <div className="mt-6 flex justify-center">
//             {scrollSnaps.map((_, index) => (
//               <DotButton
//                 key={index}
//                 selected={index === selectedIndex}
//                 onClick={() => scrollTo(index)}
//               />
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }





import Image from "next/image";

const UpcomingBatch = () => {
  const batches = [
    {
      title: "Beat GRE Quant in a Month",
      date: "Starting May 20, 2025",
      time: "10:00 AM",
      thumbnail: "/images/photo.png",
    },
    // Add more batches as needed
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Upcoming Batches</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {batches.map((batch, index) => (
            <div key={index} className="relative w-full h-[300px]">
              <Image
                src={batch.thumbnail.replace("/public", "")} // Correct path
                alt={batch.title}
                fill // Use fill for responsive layout
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4 bg-black bg-opacity-50">
                <div>
                  <h3 className="text-2xl font-bold">{batch.title}</h3>
                  <p>
                    {batch.date} - {batch.time}
                  </p>
                  <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingBatch;