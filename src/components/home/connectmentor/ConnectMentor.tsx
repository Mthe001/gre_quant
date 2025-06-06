"use client";

import { motion } from "motion/react";
import {  Button } from "@/components/ui/button";

import { Phone, Mail, MessageSquare, TrendingUp } from "lucide-react";
import { Badge } from "../../ui/badge";
import { Card, CardContent } from "../../ui/card";
import { ShineBorder } from "@/components/magicui/shine-border";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function ConnectMentor() {
  return (
    <section className="relative  mx-auto  lg:py-20 ">
      <div className="container  border-orange-900 border-t border-b  rounded-lg  mx-auto p-10">
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge
            variant="outline"
            className="mb-3 border-orange-200 px-3 py-1 text-orange-500 dark:border-orange-800"
          >
            Get Support
          </Badge>
          <h2 className="font-playfair mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Still Confused? Connect with our GRE Mentor
          </h2>
          <p className="mb-10 text-gray-600 dark:text-gray-300">
            Our expert mentors are available to answer your questions and guide
            you through your preparation journey. Reach out to us through any of
            these channels.
          </p>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 gap-4 lg:grid-cols-4"
          >
            <motion.div variants={fadeIn}>
              <Card className="group h-full w-full transition-all duration-300 hover:shadow-md cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center p-2 lg:p-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white dark:bg-orange-900/30">
                    <Phone className="h-8 w-8" />
                  </div>
                  <h3 className="mb-1 font-medium">Phone</h3>
                  <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                    +1 (555) 123-4567
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className="group h-full transition-all duration-300 hover:shadow-md cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white dark:bg-orange-900/30">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h3 className="mb-1 font-medium">Email</h3>
                  <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                    mentor@grequant.edu
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className="group h-full transition-all duration-300 hover:shadow-md cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white dark:bg-orange-900/30">
                    <MessageSquare className="h-8 w-8" />
                  </div>
                  <h3 className="mb-1 font-medium">WhatsApp</h3>
                  <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                    +1 (555) 987-6543
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeIn}>
              <Card className="group h-full transition-all duration-300 hover:shadow-md cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white dark:bg-orange-900/30">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <h3 className="mb-1 font-medium">Live Chat</h3>
                  <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                    Available 24/7
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeIn} className="mt-10">
            <Button size="lg" variant="outline">
              Schedule a Free Consultation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
