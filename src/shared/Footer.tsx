"use client";

import { motion } from "motion/react";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const linkVariants = {
    initial: { x: 0 },
    hover: { x: 5, transition: { duration: 0.2 } },
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, transition: { duration: 0.2 } },
  };

  const quickLinks = [
    { name: "Courses", href: "#" },
    { name: "Instructor Profile", href: "#" },
    { name: "Free Questions", href: "#" },
    { name: "Reviews", href: "#" },
    { name: "About Us", href: "#" },
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-4 w-4" />,
      text: "+18.0123456535",
      href: "tel:+180123456535",
    },
    {
      icon: <Mail className="h-4 w-4" />,
      text: "quantschool@gmail.com",
      href: "mailto:quantschool@gmail.com",
    },
    {
      icon: <Facebook className="h-4 w-4" />,
      text: "GRE Quant School (Online Group Study)",
      href: "#",
    },
    {
      icon: <Instagram className="h-4 w-4" />,
      text: "+18.0123456535",
      href: "#",
    },
    {
      icon: <Youtube className="h-4 w-4" />,
      text: "GRE Quant School",
      href: "https://www.youtube.com/@GREQuantSchool",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" border-t rounded-t-xl dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-lg font-semibold text-[#F28C38]">
                GRE Quant School
              </h2>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl font-bold mt-2 leading-tight"
              >
                Best Platform to Get Your{" "}
                <span className="text-[#F28C38]">Desired Quant Score</span>
              </motion.h3>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-32"
            >
              <Image
                src={"/images/logo.png"}
                className="w-auto"
                width={80}
                height={80}
                alt="gre quant school logo"
              />
            </motion.div>
            {/* mode toggle for switching color */}
            <div>
              <ModeToggle/>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-[#F28C38]">Contact</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-center space-x-3"
                >
                  <motion.div
                    whileHover="hover"
                    initial="initial"
                    variants={iconVariants}
                    className="text-[#F28C38]"
                  >
                    {item.icon}
                  </motion.div>
                  <Link
                    href={item.href}
                    className="text-black/60 dark:text-orange-100 hover:text-orange-600  font-semibold transition-colors duration-200 text-sm"
                  >
                    {item.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-[#F28C38]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <motion.div
                      variants={linkVariants}
                      initial="initial"
                      animate={hoveredLink === link.name ? "hover" : "initial"}
                      className="flex items-center"
                    >
                      <ChevronRight className="h-4 w-4 text-[#F28C38] mr-2" />
                      <span className="text-gray-300 hover:text-orange-600 font-semibold transition-colors duration-200">
                        {link.name}
                      </span>
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent my-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-sm text-gray-400"
        >
          <p>copyright@grequantschool_{new Date().getFullYear()}</p>
        </motion.div>
      </div>

      {/* Animated Background Accent */}
      <div className="relative overflow-hidden h-1">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F28C38] to-transparent h-full w-1/2"
        />
      </div>
    </motion.footer>
  );
}
