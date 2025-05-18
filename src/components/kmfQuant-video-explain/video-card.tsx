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

interface VideoProps {
  video: {
    id: string;
    title: string;
    description: string;
    difficulty: string;
    thumbnail: string;
  };
}

export function VideoCard({ video }: VideoProps) {
  const [open, setOpen] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
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
          <div className="rounded-full bg-black/50 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Play className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold line-clamp-2">{video.title}</h3>
          <Badge
            className={`ml-2 shrink-0 ${getDifficultyColor(video.difficulty)}`}
          >
            {video.difficulty}
          </Badge>
        </div>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {video.description}
        </p>

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
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Play className="h-16 w-16 text-muted-foreground opacity-50" />
                <p className="mt-4 text-center text-sm text-muted-foreground">
                  Video player placeholder
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
