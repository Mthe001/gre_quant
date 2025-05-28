"use client";

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
    <footer className="border-t rounded-t-xl dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-[#F28C38]">
                GRE Quant School
              </h2>
              <h3 className="text-2xl font-bold mt-2 leading-tight">
                Best Platform to Get Your{" "}
                <span className="text-[#F28C38]">Desired Quant Score</span>
              </h3>
            </div>
            <div className="w-24 sm:w-32">
              <Image
                src="/images/logo.png"
                className="w-full h-auto"
                width={80}
                height={80}
                alt="GRE Quant School logo"
                sizes="(max-width: 640px) 100vw, 128px"
              />
            </div>
            <div>
              <ModeToggle />
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#F28C38]">Contact</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="text-[#F28C38]">{item.icon}</div>
                  <Link
                    href={item.href}
                    className="text-black/60 dark:text-orange-100 hover:text-orange-600 font-semibold transition-colors duration-200 text-sm"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-[#F28C38]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="group flex items-center">
                    <div className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-[#F28C38] mr-2" />
                      <span className="text-gray-300 hover:text-orange-600 font-semibold transition-colors duration-200">
                        {link.name}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent my-8" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>copyright@grequantschool_{new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}