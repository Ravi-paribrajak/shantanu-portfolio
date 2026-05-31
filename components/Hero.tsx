"use client";

import { Fragment } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const FLOATING_BADGES = [
  {
    id: "davinci",
    src: "/icons/davinci-logo.png",
    alt: "DaVinci Resolve",
    left: "60%",
    duration: 16,
    delay: 0,
    swayDuration: 4,
  },
  {
    id: "premiere",
    src: "/icons/premiere-logo.png",
    alt: "Adobe Premiere Pro",
    left: "74%",
    duration: 20,
    delay: 4,
    swayDuration: 5,
  },
  {
    id: "ae",
    src: "/icons/ae-logo.png",
    alt: "Adobe After Effects",
    left: "86%",
    duration: 24,
    delay: 8,
    swayDuration: 6,
  },
];

export default function Hero() {

  // Framer Motion Animation Variants for Staggered Content Reveals
  const parentContainerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };

  const pipelineVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: 0.05,
      },
    },
  };

  const headlineContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.15,
      },
    },
  };

  const wordVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: 1.25, // Exactly 0.3s after headline fully locks (0.15s delay + 5 * 0.06s stagger + 0.5s duration + 0.3s offset)
      },
    },
  };

  const buttonsVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: 1.37, // Staggered by 0.12s after description
      },
    },
  };

  const socialProofVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: 1.49, // Staggered by 0.12s after buttons
      },
    },
  };

  return (
    <section 
      id="showreel" 
      className="relative z-30 min-h-[90vh] flex items-center justify-center bg-slate-950 py-20"
    >
      {/* 🌌 Cyber Backdrop Glow */}
      <div className="absolute inset-0 bg-radial from-purple-600/25 via-indigo-950/10 to-transparent pointer-events-none select-none z-0 scale-110" />
      <div className="absolute w-[800px] h-[800px] rounded-full bg-radial from-purple-600/20 via-indigo-950/5 to-transparent blur-[140px] top-12 left-1/4 animate-pulse pointer-events-none select-none z-0" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-20" />

      {/* Floating Helium Balloon Software Badges */}
      <div className="absolute inset-0 pointer-events-none z-40">
        {FLOATING_BADGES.map((badge) => (
          <motion.div
            key={badge.id}
            className="absolute bottom-0"
            style={{ left: badge.left }}
            animate={{ 
              y: ["0vh", "-150vh"],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: badge.duration,
              delay: badge.delay,
              times: [0, 0.1, 0.9, 1]
            }}
          >
            <motion.div
              animate={{
                x: [0, 20, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                ease: "easeInOut",
                duration: badge.swayDuration,
              }}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center backdrop-blur-md border border-slate-800/80 bg-slate-900/60 shadow-lg text-white select-none"
            >
              <div className="relative w-6 h-6 md:w-7 md:h-7">
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  fill
                  sizes="(max-w-md) 100vw, 64px"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Two-Column Desktop Grid Split */}
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Typography Text Block */}
        <motion.div 
          variants={parentContainerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Active Pipeline Status Dot */}
          <motion.div 
            variants={pipelineVariants} 
            className="inline-flex items-center gap-2.5 mb-6"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
              Shantanu Edits &bull; Available for Freelance & Contracts
            </span>
          </motion.div>

          {/* Clean Main Header Typography with Premium Kinetic Word-Reveal */}
          <motion.h1 
            variants={headlineContainerVariants}
            className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-[1.1] mb-6"
          >
            {"CRAFTING CINEMATIC STORIES WITH DRUM-TIGHT PACING.".split(" ").map((word, index) => {
              const isGradient = word === "DRUM-TIGHT" || word === "PACING.";
              return (
                <Fragment key={index}>
                  <motion.span
                    className="inline-block overflow-hidden vertical-align-bottom align-bottom"
                    style={{ verticalAlign: "bottom" }}
                  >
                    <motion.span
                      variants={wordVariants}
                      className={`inline-block ${
                        isGradient
                          ? "bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-emerald-400 font-black"
                          : ""
                      }`}
                    >
                      {word}
                    </motion.span>
                  </motion.span>
                  {" "}
                </Fragment>
              );
            })}
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p 
            variants={descriptionVariants}
            className="text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-8 max-w-xl"
          >
            Post-production specialist bringing high-energy commercials, visual-first brand campaigns, and documentary storytelling to life. Every frame optimized; every beat synchronized.
          </motion.p>

          {/* Stacked Button Row */}
          <motion.div 
            variants={buttonsVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Magnetic>
              <div className="relative group w-full sm:w-auto">
                {/* Soft continuous background pulse glow */}
                <motion.div
                  className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 blur opacity-60 pointer-events-none"
                  animate={{
                    scale: [1, 1.03, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <a
                  href="#work"
                  className="relative overflow-hidden inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all group cursor-pointer"
                >
                  {/* Animated Border Shine */}
                  <motion.div
                    className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -left-[100%]"
                    animate={{
                      left: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 2,
                    }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <span>View Case Studies</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
              </div>
            </Magnetic>

            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-slate-800 bg-slate-900/30 hover:bg-slate-900 text-slate-350 hover:text-white font-bold px-8 py-4 rounded-xl transition-all hover:border-slate-700 cursor-pointer w-full sm:w-auto"
              >
                <span>Book a Consultation</span>
              </a>
            </Magnetic>
          </motion.div>

          {/* Social Proof Client Capsule */}
          <motion.div 
            variants={socialProofVariants}
            className="mt-12 flex flex-col items-start"
          >
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 font-semibold font-mono mb-3 block">
              {"// TRUSTED BY CREATORS & BRANDS"}
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex -space-x-2">
                {[
                  { path: "/clients/client-logo-1.png", name: "YouTube Creator Network" },
                  { path: "/clients/client-logo-2.jpg", name: "Venture Catalyst" },
                  { path: "/clients/client-logo-3.jpg", name: "Digital Media Agency" },
                  { path: "/clients/client-logo-4.jpg", name: "Studio Edits" },
                  { path: "/clients/client-logo-5.jpg", name: "Creative Brand Group" },
                ].map((logo, i) => (
                  <Image
                    key={i}
                    src={logo.path}
                    alt={logo.name}
                    title={logo.name}
                    width={32}
                    height={32}
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover border-2 border-slate-950 bg-slate-900 shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer relative"
                    style={{ zIndex: 10 - i }}
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm text-slate-350 font-medium">50+ Projects Completed</span>
                <span className="text-[10px] sm:text-xs text-slate-500 font-mono">Retention Rate: 94% &bull; 100M+ Views</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Master Visual Frame */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          {/* Master Viewport Card */}
          <div className="relative w-full aspect-[4/5] md:aspect-square bg-slate-900/50 border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm group p-2">
            <Image
              src="/branding/shantanu-image-1.jpg"
              alt="Shantanu Professional Video Editor"
              fill
              sizes="(max-w-lg) 100vw, 500px"
              priority
              className="object-cover rounded-xl w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Viewfinder Elements inside frame for Dribbble editor vibe */}
            <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none z-10 select-none">
              <div className="flex justify-between items-start">
                <div className="text-[10px] font-mono tracking-widest text-white/40 bg-slate-950/40 backdrop-blur px-2.5 py-0.5 rounded">
                  REC [00:00:00:00]
                </div>
                <div className="text-[10px] font-mono tracking-widest text-white/40 bg-slate-950/40 backdrop-blur px-2.5 py-0.5 rounded">
                  23.976 fps
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div className="text-[10px] font-mono tracking-widest text-white/40 bg-slate-950/40 backdrop-blur px-2.5 py-0.5 rounded">
                  TCG
                </div>
                <div className="text-[10px] font-mono tracking-widest text-emerald-400 bg-slate-950/40 backdrop-blur px-2.5 py-0.5 rounded animate-pulse">
                  &bull; LIVE
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
