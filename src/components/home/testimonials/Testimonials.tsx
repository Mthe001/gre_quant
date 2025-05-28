"use client";

import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "../../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { ArrowButton, DotButton } from "../../ui/carousel-conrtols";
import Image from "next/image"; // Import next/image

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const testimonials = [
  {
    id: 1,
    name: "Jessica Wang",
    role: "GRE Student",
    image: "/images/photo.png",
    quote:
      "I've tried multiple GRE prep courses, but this one truly stands out. The instructors are incredibly knowledgeable and the practice questions perfectly mimic the actual test. My score improved from 155 to 168!",
    rating: 5,
  },
  {
    id: 2,
    name: "Robert Chen",
    role: "Graduate Student",
    image: "/images/photo.png",
    quote:
      "The structured approach and personalized feedback made all the difference. I was struggling with quantitative reasoning, but after this course, I feel confident tackling any GRE math problem.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia Martinez",
    role: "MBA Applicant",
    image: "/images/photo.png",
    quote:
      "The instructors break down complex concepts into manageable pieces. Their teaching style is engaging and the practice materials are comprehensive. Highly recommend!",
    rating: 4,
  },
  {
    id: 4,
    name: "Sophia Martinez",
    role: "MBA Applicant",
    image: "/images/photo.png",
    quote:
      "The instructors break down complex concepts into manageable pieces. Their teaching style is engaging and the practice materials are comprehensive. Highly recommend!",
    rating: 4,
  },
  {
    id: 5,
    name: "Sophia Martinez",
    role: "MBA Applicant",
    image: "/images/photo.png",
    quote:
      "The instructors break down complex concepts into manageable pieces. Their teaching style is engaging and the practice materials are comprehensive. Highly recommend!",
    rating: 3,
  },
  {
    id: 6,
    name: "Sophia Martinez",
    role: "MBA Applicant",
    image: "/images/photo.png",
    quote:
      "The instructors break down complex concepts into manageable pieces. Their teaching style is engaging and the practice materials are comprehensive. Highly recommend!",
    rating: 3,
  },
  {
    id: 7,
    name: "Sophia Martinez",
    role: "MBA Applicant",
    image: "/images/photo.png",
    quote:
      "The instructors break down complex concepts into manageable pieces. Their teaching style is engaging and the practice materials are comprehensive. Highly recommend!",
    rating: 3,
  },
];

export default function Testimonials() {
  const [testimonialRef, testimonialApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialSnaps, setTestimonialSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (testimonialApi) {
      setTestimonialSnaps(testimonialApi.scrollSnapList());
      testimonialApi.on("select", () =>
        setTestimonialIndex(testimonialApi.selectedScrollSnap())
      );
    }
  }, [testimonialApi]);

  const scrollTestimonialTo = (index: number) =>
    testimonialApi && testimonialApi.scrollTo(index);
  const scrollTestimonialPrev = () =>
    testimonialApi && testimonialApi.scrollPrev();
  const scrollTestimonialNext = () =>
    testimonialApi && testimonialApi.scrollNext();

  return (
    <section className="py-20 ">
      <div className="container mx-auto lg:p-16 border-t border-b ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-12 text-center"
        >
          <Badge
            variant="outline"
            className="mb-3 border-orange-200 px-3 py-1 text-orange-500 dark:border-orange-800"
          >
            Success Stories
          </Badge>
          <h2 className="font-playfair mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            What Students Say About Us
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
            Hear from our students who have achieved their academic goals with
            our guidance.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative"
        >
          <div className="overflow-hidden" ref={testimonialRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-0 flex-[0_0_100%] px-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <Card className="h-full hover:border-orange-700 hover:transition-colors ">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.image.replace("/public", "")} // Correct path by removing /public
                          alt={testimonial.name}
                          fill // Use fill for responsive layout
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-300 text-gray-300 dark:fill-gray-600 dark:text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {testimonial.quote}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <ArrowButton direction="left" onClick={scrollTestimonialPrev} />
          <ArrowButton direction="right" onClick={scrollTestimonialNext} />
          <div className="mt-6 flex justify-center">
            {testimonialSnaps.map((_, index) => (
              <DotButton
                key={index}
                selected={index === testimonialIndex}
                onClick={() => scrollTestimonialTo(index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}







