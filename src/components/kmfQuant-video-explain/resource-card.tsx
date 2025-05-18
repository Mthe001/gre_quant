"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BookOpen } from "lucide-react";

interface ResourceProps {
  resource: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
  };
}

export function ResourceCard({ resource }: ResourceProps) {
  const [open, setOpen] = useState(false);

  // Mock content for the dialog
  const getResourceContent = (id: string) => {
    switch (id) {
      case "m1":
        return {
          title: "All Essential GRE Quant Formulas",
          content: [
            "Algebra: Quadratic equations, factoring, and exponents",
            "Geometry: Area, volume, and coordinate geometry formulas",
            "Number Properties: Divisibility rules, prime numbers, and remainders",
            "Statistics: Mean, median, mode, standard deviation, and probability",
            "Word Problems: Rate, work, mixture, and distance formulas",
          ],
        };
      case "m2":
        return {
          title: "GRE Exam Day Strategies for 315+",
          content: [
            "Time management techniques for each section",
            "Strategic guessing when necessary",
            "Mental reset techniques between sections",
            "Identifying and avoiding common trap answers",
            "Maintaining focus during the 4-hour test",
          ],
        };
      case "m3":
        return {
          title: "Probability, Counting & Sets",
          content: [
            "Fundamental counting principle and permutations",
            "Combinations and probability distributions",
            "Set operations: union, intersection, and complement",
            "Venn diagrams for solving complex problems",
            "Conditional probability and independence",
          ],
        };
      case "m4":
        return {
          title: "Statistics Fundamentals",
          content: [
            "Measures of central tendency and dispersion",
            "Normal distribution and standard deviation",
            "Quartiles, percentiles, and interquartile range",
            "Correlation and regression basics",
            "Interpreting data from tables and graphs",
          ],
        };
      default:
        return {
          title: resource.title,
          content: ["Detailed content coming soon..."],
        };
    }
  };

  const resourceContent = getResourceContent(resource.id);

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={resource.thumbnail || "/placeholder.svg"}
          alt={resource.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-black/50 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold line-clamp-2">{resource.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {resource.description}
        </p>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="mt-4 w-full">
              Learn More
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>{resourceContent.title}</DialogTitle>
              <DialogDescription>{resource.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <h4 className="mb-2 font-medium">Key Topics:</h4>
              <ul className="space-y-2">
                {resourceContent.content.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-6 w-full">Access Full Resource</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
