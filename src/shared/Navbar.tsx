"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { ModeToggle } from "../components/ui/mode-toggle";
import Image from "next/image";
import { Button } from "@/components/ui/button";



const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Course Details",
    href: "/course-details",
    submenu: true,
    subItems: [
      { name: "Course Structure", href: "/course-details/structure" },
      { name: "Syllabus", href: "/course-details/syllabus" },
      { name: "Schedule", href: "/course-details/schedule" },
    ],
  },
  {
    name: "Video Materials",
    href: "/video-materials",
    submenu: true,
    subItems: [
      { name: "Lectures", href: "/video-materials/lectures" },
      { name: "Tutorials", href: "/video-materials/tutorials" },
      { name: "Workshops", href: "/video-materials/workshops" },
    ],
  },
  { name: "Free Questions", href: "/free-questions" },
  { name: "KMF Quant", href: "/kmf-quant" },
  { name: "KMF Verbal", href: "/kmf-verbal" },
  { name: "Quant Prep", href: "/quant-prep" },
  { name: "Verbal Prep", href: "/verbal-prep" },
  { name: "AWA Prep", href: "/awa-prep" },
  { name: "Students Review", href: "/students-review" },
  { name: "Instructor Profile", href: "/instructor-profile" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Reset expanded items when closing menu
    if (isOpen) {
      setExpandedItems([]);
    }
  };

  const toggleSubmenu = (itemName: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((item) => item !== itemName)
        : [...prev, itemName]
    );
  };

  const isSubmenuExpanded = (itemName: string) => {
    return expandedItems.includes(itemName);
  };

  const handleDropdownEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  // Variants for animations
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  const submenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3 },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -5,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <>
      <header className="sticky z-50  top-0 w-full  mx-auto border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className=" flex h-16 lg:w-[95%] mx-auto items-center justify-between">
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mr-2"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-bold text-lg"
            >
              <Image
                src="/images/logo.png"
                alt="GRE Quant School Logo"
                width={80} // Assuming the logo is 80px wide (adjust based on actual dimensions)
                height={80} // Assuming the logo is 80px tall (adjust based on actual dimensions)
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.submenu && handleDropdownEnter(item.name)
                }
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-orange-500",
                    activeDropdown === item.name && "text-orange-500"
                  )}
                >
                  <div className="flex items-center gap-1">
                    {item.name}
                    {item.submenu && <ChevronDown className="h-4 w-4" />}
                  </div>
                </Link>

                {/* Desktop Dropdown */}
                {item.submenu && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        className="absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-md border bg-background shadow-md"
                      >
                        <div className="py-1">
                          {item.subItems?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm hover:bg-muted hover:text-orange-500"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Theme toggle */}
            <div>
              <ModeToggle />
            </div>

            {/* Mobile menu button - only visible on smaller screens */}
            <Button
              onClick={toggleMenu}
              variant={"ghost"}
              className="rounded-md p-2  focus:ring-2  lg:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <Menu className={cn("h-6 w-6", isOpen ? "hidden" : "block")} />
              <X className={cn("h-6 w-6", isOpen ? "block" : "hidden")} />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu - only for smaller screens */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 flex flex-col bg-black pt-16 text-white overflow-y-auto lg:hidden"
          >
            <div className="absolute top-4 right-4">
              <button
                onClick={toggleMenu}
                className="rounded-md p-2 text-white focus:outline-none"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-1 p-4">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-800">
                  {item.submenu ? (
                    <div>
                      <motion.button
                        variants={itemVariants}
                        onClick={() => toggleSubmenu(item.name)}
                        className="flex w-full items-center justify-between py-3 text-left hover:text-yellow-400 focus:outline-none"
                      >
                        <span
                          className={
                            expandedItems.includes(item.name)
                              ? "text-yellow-400"
                              : ""
                          }
                        >
                          {item.name}
                        </span>
                        <motion.div
                          animate={{
                            rotate: isSubmenuExpanded(item.name) ? 90 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="h-5 w-5" />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {isSubmenuExpanded(item.name) && (
                          <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={submenuVariants}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 border-l border-gray-800 pl-4 py-2 space-y-2">
                              {item.subItems?.map((subItem) => (
                                <motion.div
                                  key={subItem.name}
                                  variants={itemVariants}
                                  className="py-2"
                                >
                                  <Link
                                    href={subItem.href}
                                    className="block hover:text-yellow-400"
                                    onClick={toggleMenu}
                                  >
                                    {subItem.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.div variants={itemVariants}>
                      <Link
                        href={item.href}
                        className="block py-3 hover:text-yellow-400"
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
