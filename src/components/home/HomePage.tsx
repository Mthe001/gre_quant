"use client";

import { useState, useEffect } from "react";
import HeroSection from "./hero/HeroSection";
import UpcomingBatch from "./upcomingbatch/UpcomngBatch";
import FreePracticeCTA from "./freepracticecta/FreePracticeCTA";
import DemoClasses from "./democlasses/DemoClasses";
import Testimonials from "./testimonials/Testimonials";
import ConnectMentor from "./connectmentor/ConnectMentor";
import StatsSection from "./statssection/StatsSection";


export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <HeroSection />
      <UpcomingBatch />
      <FreePracticeCTA />
      <DemoClasses />
      <Testimonials />
      <ConnectMentor/>
      <StatsSection/>
    </div>
  );
}
