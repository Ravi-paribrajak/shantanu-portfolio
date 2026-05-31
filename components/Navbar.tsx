"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Showreel", href: "#showreel" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/70 backdrop-blur-md border-b border-slate-900/60 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3),0_1px_20px_rgba(168,85,247,0.08)]"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo Branding */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="#" className="flex items-center gap-2 group">
              <Image
                src="/branding/shantanu-image-5.jpg"
                alt="Shantanu"
                width={36}
                height={36}
                className="w-9 h-9 object-cover rounded-full border border-slate-800 hover:border-violet-500/50 transition-colors flex-shrink-0"
              />
              <span className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-100 to-violet-400 uppercase">
                Shantanu
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Magnetic key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 ease-in-out relative py-2 px-3 group block tracking-normal hover:tracking-wide"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-fuchsia-500 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out shadow-[0_0_8px_rgba(240,46,170,0.8)]" />
                  </a>
                </Magnetic>
              ))}
            </div>

            <Magnetic>
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white rounded-full transition-all duration-300 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 hover:from-purple-500/20 hover:to-fuchsia-500/20 border border-purple-500/30 hover:border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] group"
              >
                <span>Let&apos;s Cut</span>
                <span className="inline-block ml-1.5 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-slate-800/60 bg-slate-950/95 backdrop-blur-xl"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-semibold text-slate-300 hover:text-white hover:bg-slate-900/60 transition-all duration-300 ease-in-out border-l-2 border-transparent hover:border-violet-500"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center block px-4 py-3 rounded-md text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-emerald-500 shadow-md shadow-violet-500/20"
                >
                  Let&apos;s Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
