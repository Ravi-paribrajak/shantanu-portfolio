"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Play, Clock, User, X, Video } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, projectsData } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

/* Individual Video Project Card with metadata details */
function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isPortrait = project.aspectRatio === "portrait";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative bg-slate-950/40 border border-slate-900/80 hover:border-violet-500/30 transition-all duration-300 shadow-xl rounded-2xl overflow-hidden backdrop-blur-sm cursor-pointer w-full ${isPortrait
        ? "aspect-[9/16] max-w-[360px] mx-auto justify-self-center"
        : "aspect-video"
        }`}
    >
      {/* Thumbnail Container with strict overflow-hidden */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-950">
        {imgError ? (
          /* Solid, premium dark gray background fallback with centered Lucide Video icon */
          <div className="w-full h-full bg-slate-900/90 flex flex-col items-center justify-center gap-3 text-slate-500">
            <Video className="w-8 h-8 text-violet-400/60 stroke-[1.5]" />
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Preview Unavailable</span>
          </div>
        ) : (
          <>
            <Image
              src={project.thumbnailUrl}
              alt={project.title}
              fill
              sizes="(max-w-7xl) 33vw, 400px"
              onError={() => setImgError(true)}
              className={`absolute inset-0 w-full h-full object-cover ${project.previewVideoUrl
                ? `transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`
                : "transition-transform duration-[1000ms] ease-out group-hover:scale-[1.08] group-hover:translate-x-1 group-hover:-translate-y-1"
                }`}
            />
            {project.previewVideoUrl && isHovered && (
              <video
                src={project.previewVideoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 opacity-100"
              />
            )}
            {!project.previewVideoUrl && (
              <div
                className={`absolute inset-0 pointer-events-none z-20 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                  }`}
              >
                {/* Corner Viewfinder Brackets */}
                <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-white/60" />
                <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-white/60" />
                <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-white/60" />
                <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-white/60" />

                {/* Blinking REC Overlay */}
                <div className="absolute top-3 right-10 flex items-center gap-1 bg-black/60 px-1.5 py-0.5 rounded text-[8px] font-mono tracking-widest text-red-500 font-bold uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  REC
                </div>

                {/* Aesthetic Scanning Horizontal Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_16px]" />
              </div>
            )}
          </>
        )}

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-85 transition-opacity duration-300 z-10" />
      </div>

      {/* Hover Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
        <div className="w-11 h-11 rounded-full bg-violet-600 border border-violet-400/40 flex items-center justify-center text-white shadow-lg shadow-violet-600/30 scale-90 group-hover:scale-100 transition-transform duration-300">
          <Play className="w-4 h-4 fill-current translate-x-0.5" />
        </div>
      </div>

      {/* Metadata Pill Tags (Duration / Category) */}
      <div className="absolute top-4 left-4 z-20 flex gap-2">
        <span className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md rounded-md text-emerald-400 border border-emerald-500/20">
          {project.category.replace("-", " ")}
        </span>
        <span className="px-2.5 py-1 text-[9px] font-mono bg-slate-950/80 backdrop-blur-md rounded-md text-slate-300 border border-slate-850 flex items-center gap-1">
          <Clock className="w-3 h-3 text-violet-400" />
          {project.duration}
        </span>
      </div>

      {/* Overlay Details (Locked to bottom, preventing top badge overlap) */}
      <div className={`absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent z-20 flex flex-col justify-end ${isPortrait ? "pt-20" : "pt-12"
        }`}>
        <p className="text-[10px] font-semibold text-slate-400 mb-1 flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-slate-500" />
          {project.client}
        </p>
        <h3 className={`font-bold text-white group-hover:text-violet-400 transition-colors line-clamp-1 mb-1.5 ${isPortrait ? "text-base sm:text-lg" : "text-sm sm:text-base"
          }`}>
          {project.title}
        </h3>
        <p className={`text-xs text-slate-355 leading-relaxed mb-3 ${isPortrait ? "line-clamp-2" : "line-clamp-1 sm:line-clamp-2"
          }`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* Redesigned Text-free Graphic Thumbnail Card for Gallery Row */
interface GraphicCardProps {
  project: Project;
  onClick: () => void;
}

function GraphicCard({ project, onClick }: GraphicCardProps) {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isPortrait = project.aspectRatio === "portrait";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative bg-slate-950/40 border border-slate-900/80 hover:border-violet-500/30 transition-all duration-300 shadow-xl rounded-2xl overflow-hidden backdrop-blur-sm cursor-pointer w-full ${isPortrait ? "aspect-[9/16]" : "aspect-video"
        }`}
    >
      {/* Image wrapper */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {imgError ? (
          <div className="w-full h-full bg-slate-900/90 flex flex-col items-center justify-center gap-2 text-slate-500">
            <Video className="w-6 h-6 text-violet-400/40" />
            <span className="text-[9px] uppercase tracking-wider">Preview Unavailable</span>
          </div>
        ) : (
          <>
            <Image
              src={project.thumbnailUrl}
              alt={project.title}
              fill
              sizes="(max-w-7xl) 33vw, 400px"
              onError={() => setImgError(true)}
              className={`absolute inset-0 w-full h-full object-cover ${project.previewVideoUrl
                ? `transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`
                : "transition-transform duration-[1000ms] ease-out group-hover:scale-[1.08] group-hover:translate-x-1 group-hover:-translate-y-1"
                }`}
            />
            {project.previewVideoUrl && isHovered && (
              <video
                src={project.previewVideoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 opacity-100"
              />
            )}
            {!project.previewVideoUrl && (
              <div
                className={`absolute inset-0 pointer-events-none z-20 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                  }`}
              >
                {/* Corner Viewfinder Brackets */}
                <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-white/60" />
                <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-white/60" />
                <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-white/60" />
                <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-white/60" />

                {/* Blinking REC Overlay */}
                <div className="absolute top-3 right-10 flex items-center gap-1 bg-black/60 px-1.5 py-0.5 rounded text-[8px] font-mono tracking-widest text-red-500 font-bold uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  REC
                </div>

                {/* Aesthetic Scanning Horizontal Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_16px]" />
              </div>
            )}
          </>
        )}

        {/* Subtle Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors duration-300 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent z-10" />
      </div>

      {/* Hover Zoom Icon Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
        <div className="w-10 h-10 rounded-full bg-violet-600/90 border border-violet-400/40 flex items-center justify-center text-white shadow-lg scale-90 group-hover:scale-100 transition-all duration-300">
          <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

const SECTIONS_LIST = [
  { id: "landscape-campaigns", label: "Long-form Docs" },
  { id: "short-form-reels", label: "Short-form Reels" },
  { id: "graphic-portfolio", label: "Thumbnail Graphics" },
];

export default function PortfolioGrid() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>("landscape-campaigns");

  // Separate Projects into distinct arrays for structural layout grids
  const landscapeProjects = projectsData.filter(
    (p) => p.aspectRatio === "video" && p.category !== "graphic"
  );
  const verticalProjects = projectsData.filter(
    (p) => p.aspectRatio === "portrait" && p.category !== "graphic"
  );
  const graphicProjects = projectsData.filter(
    (p) => p.category === "graphic"
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // focus area in the upper-middle of viewport
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    SECTIONS_LIST.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      {/* Desktop Floating Vertical Dot Navigation (Scroll-Spy) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-5 items-center hidden lg:flex">
        {SECTIONS_LIST.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <div key={section.id} className="relative flex items-center justify-center group">
              {/* Tooltip */}
              <div className="absolute right-8 px-3 py-1.5 bg-slate-950/90 border border-slate-800/80 backdrop-blur-md text-slate-200 text-[10px] uppercase tracking-widest font-black rounded-lg shadow-2xl opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap">
                {section.label}
              </div>
              {/* Dot */}
              <button
                onClick={() => handleScrollTo(section.id)}
                className={`w-2.5 transition-all duration-300 cursor-pointer rounded-full outline-none focus:ring-1 focus:ring-violet-400/50 ${isActive
                  ? "h-7 bg-gradient-to-b from-violet-400 to-fuchsia-500 shadow-[0_0_12px_rgba(168,85,247,0.4)]"
                  : "h-2.5 bg-slate-800 border border-slate-700/50 hover:bg-slate-700 hover:border-slate-600"
                  }`}
                aria-label={`Scroll to ${section.label}`}
              />
            </div>
          );
        })}
      </div>

      <section id="work" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-950/40 relative portfolio-grid-contain">

        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">Featured Projects</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Selected Cuts & Case Studies
            </p>
          </div>

          {/* Mobile/Tablet Fallback Horizontal Text Chips Navigation (Non-sticky) */}
          <div className="lg:hidden flex flex-wrap gap-2.5 mb-10 py-1 border-b border-slate-900/30">
            {SECTIONS_LIST.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => handleScrollTo(section.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-all duration-300 cursor-pointer outline-none ${isActive
                    ? "bg-slate-900 text-white border-violet-500/50 shadow-sm shadow-violet-500/10"
                    : "bg-slate-950/20 text-slate-400 border-slate-850/80 hover:text-slate-200 hover:border-slate-700"
                    }`}
                >
                  {section.label}
                </button>
              );
            })}
          </div>

          {/* Landscape Projects Section (Wider grid columns) */}
          {landscapeProjects.length > 0 && (
            <div id="landscape-campaigns" className="mb-16 scroll-mt-24">
              <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                LANDSCAPE CAMPAIGNS (16:9)
              </h3>
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
              >
                <AnimatePresence mode="popLayout">
                  {landscapeProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onClick={() => setActiveProject(project)}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          )}

          {/* Vertical Projects Section (Denser smartphone grid columns) */}
          {verticalProjects.length > 0 && (
            <div id="short-form-reels" className="mb-16 scroll-mt-24">
              <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-6 flex items-center gap-2 mt-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                SHORTS & REELS COVERS (9:16)
              </h3>
              <motion.div
                layout
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 items-start"
              >
                <AnimatePresence mode="popLayout">
                  {verticalProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onClick={() => setActiveProject(project)}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          )}

          {/* Overhauled Thumbnail Graphics Section (Uncrowded, breathable gaps, 3-cols) */}
          {graphicProjects.length > 0 && (
            <div id="graphic-portfolio" className="mt-12 scroll-mt-24">
              <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-8 flex items-center gap-2 mt-12 border-t border-slate-900 pt-8">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                HIGH-CTR THUMBNAIL DESIGN
              </h3>

              {/* Row 1: YouTube Widescreen (16:9) - Redesigned to breathable 3-col grid */}
              {graphicProjects.filter((p) => p.aspectRatio === "video").length > 0 && (
                <div className="mb-16">
                  <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <span>YouTube Widescreen (16:9)</span>
                    <span className="h-px bg-slate-900 flex-grow" />
                  </h4>
                  <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-start"
                  >
                    <AnimatePresence mode="popLayout">
                      {graphicProjects
                        .filter((p) => p.aspectRatio === "video")
                        .map((project) => (
                          <GraphicCard
                            key={project.id}
                            project={project}
                            onClick={() => setActiveProject(project)}
                          />
                        ))}
                    </AnimatePresence>
                  </motion.div>
                </div>
              )}

              {/* Row 2: Shorts/Reels Covers (9:16) - Redesigned to breathable 4-col grid */}
              {graphicProjects.filter((p) => p.aspectRatio === "portrait").length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <span>Shorts / Reels Covers (9:16)</span>
                    <span className="h-px bg-slate-900 flex-grow" />
                  </h4>
                  <motion.div
                    layout
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 items-start"
                  >
                    <AnimatePresence mode="popLayout">
                      {graphicProjects
                        .filter((p) => p.aspectRatio === "portrait")
                        .map((project) => (
                          <GraphicCard
                            key={project.id}
                            project={project}
                            onClick={() => setActiveProject(project)}
                          />
                        ))}
                    </AnimatePresence>
                  </motion.div>
                </div>
              )}
            </div>
          )}

          {/* Absolute Viewport Modal Pinning Lightbox */}
          <AnimatePresence>
            {activeProject && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
                onClick={() => setActiveProject(null)}
              >
                {/* Heavy-Contrast Close Button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="fixed top-6 right-6 z-[60] bg-slate-900 text-white p-3 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Content Layer with dual-panel conversion layout */}
                <div
                  className="relative bg-slate-950/95 border border-slate-800 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl h-auto max-h-[90vh] max-w-6xl w-full mx-4"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
                >
                  {/* Left Panel: Video Stage (65% width) */}
                  <div className="lg:w-[65%] w-full aspect-video bg-black flex items-center justify-center relative">
                    {activeProject.category === "graphic" ? (
                      activeProject.aspectRatio === "portrait" ? (
                        <div className="aspect-[9/16] h-full py-4 bg-slate-950 relative">
                          <Image
                            src={activeProject.thumbnailUrl}
                            alt={activeProject.title}
                            fill
                            className="object-contain"
                            sizes="(max-w-4xl) 100vw, 896px"
                            priority
                          />
                        </div>
                      ) : (
                        <div className="relative w-full h-full bg-slate-950/20">
                          <Image
                            src={activeProject.thumbnailUrl}
                            alt={activeProject.title}
                            fill
                            className="object-contain"
                            sizes="(max-w-4xl) 100vw, 896px"
                            priority
                          />
                        </div>
                      )
                    ) : activeProject.aspectRatio === "portrait" ? (
                      <div className="aspect-[9/16] h-full py-4 bg-slate-950 relative">
                        <iframe
                          className="absolute inset-0 w-full h-full border-0"
                          src={`https://www.youtube.com/embed/${activeProject.videoEmbedId}?autoplay=1&modestbranding=1&rel=0`}
                          title={`Video preview of ${activeProject.title}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <iframe
                        className="absolute inset-0 w-full h-full border-0"
                        src={`https://www.youtube.com/embed/${activeProject.videoEmbedId}?autoplay=1&modestbranding=1&rel=0`}
                        title={`Video preview of ${activeProject.title}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    )}
                  </div>

                  {/* Right Panel: Case Study Sidebar (35% width) */}
                  <div className="lg:w-[35%] w-full p-6 flex flex-col justify-between overflow-y-auto border-t lg:border-t-0 lg:border-l border-slate-900">
                    <div>
                      {/* Header */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 font-semibold shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                          {activeProject.client}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 font-medium">
                          {activeProject.category.replace("-", " ")}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3">
                        {activeProject.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-350 leading-relaxed mb-4">
                        {activeProject.description}
                      </p>

                      {/* Data Metrics Grid */}
                      {activeProject.metrics && activeProject.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-3 my-4">
                          {activeProject.metrics.map(m => (
                            <div key={m.label} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/80">
                              <span className="text-[10px] uppercase tracking-wider text-slate-500 block">{m.label}</span>
                              <span className="text-sm font-black text-emerald-400 font-mono mt-0.5 block">{m.value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Software Badges */}
                      {activeProject.tools && activeProject.tools.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {activeProject.tools.map(tool => (
                            <span key={tool} className="text-[9px] px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800/80 font-mono">
                              {tool}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action CTA Button */}
                    <a
                      href="#contact"
                      onClick={() => setActiveProject(null)}
                      className="mt-6 w-full text-center block px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 shadow-md shadow-violet-500/10 transition-all"
                    >
                      Inquire About Similar Edit
                    </a>
                  </div>
                </div>
              </div>
            )}
          </AnimatePresence>

        </div>
      </section>
    </>
  );
}
