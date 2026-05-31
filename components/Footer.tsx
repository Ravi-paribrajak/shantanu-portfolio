"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Mail, 
  Send, 
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "youtube-long",
    budget: "$1k - $3k",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: "",
        email: "",
        projectType: "youtube-long",
        budget: "$1k - $3k",
        message: ""
      });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const socials = [
    {
      name: "YouTube",
      url: "https://youtube.com",
      svg: (
        <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      svg: (
        <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      svg: (
        <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      svg: (
        <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      )
    }
  ];

  return (
    <footer id="contact" className="border-t border-slate-900 bg-slate-950 pt-20 pb-12 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background soft lighting glows */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-gradient-to-br from-violet-600/5 to-transparent rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Left Column: Branding, Socials, Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Image
                  src="/branding/shantanu-image-5.jpg"
                  alt="Shantanu"
                  width={36}
                  height={36}
                  className="w-9 h-9 object-cover rounded-full border border-slate-800 hover:border-violet-500/50 transition-colors flex-shrink-0"
                />
                <span className="text-xl font-black tracking-widest text-white uppercase">
                  Shantanu
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
                Ready to elevate your raw footage into high-retention cinematic cuts? Drop a message detailing your project, and let&apos;s create something remarkable.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:shantanu.edits@example.com" 
                  className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors group w-fit"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-violet-500/30 transition-all">
                    <Mail className="w-4 h-4 text-violet-400" />
                  </div>
                  <span>shantanu.edits@example.com</span>
                </a>
              </div>
            </div>

            {/* Social List Link Grid */}
            <div className="mt-12">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">Follow the Feed</h4>
              <div className="flex gap-3">
                {socials.map((social) => {
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-slate-900 bg-slate-950 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 shadow-md group"
                      aria-label={social.name}
                    >
                      {social.svg}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Email Form */}
          <div className="lg:col-span-7 bg-slate-950/40 backdrop-blur-md border border-slate-900 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] p-6 md:p-8 relative overflow-hidden">
            <h3 className="text-lg font-bold text-white mb-2">Start a Project</h3>
            <p className="text-xs text-slate-400 mb-6">Complete the brief below and I&apos;ll get back to you within 24 hours.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-400">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Carter"
                    className="bg-slate-950 border border-slate-900 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 text-white rounded-xl transition-all duration-300 outline-none w-full px-4 py-2.5 text-sm placeholder:text-slate-600"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-400">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className="bg-slate-950 border border-slate-900 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 text-white rounded-xl transition-all duration-300 outline-none w-full px-4 py-2.5 text-sm placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Project Type */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="projectType" className="text-xs font-semibold text-slate-400">Project Format</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formState.projectType}
                    onChange={handleChange}
                    className="bg-slate-950 border border-slate-900 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 text-white rounded-xl transition-all duration-300 outline-none w-full px-4 py-2.5 text-sm cursor-pointer appearance-none"
                  >
                    <option value="youtube-long">YouTube Long-form / Tech Video</option>
                    <option value="high-retention-short">High-Retention Short / Reel (9:16)</option>
                    <option value="high-ctr-thumbnail">High-CTR Thumbnail Design</option>
                  </select>
                </div>
                {/* Budget */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="budget" className="text-xs font-semibold text-slate-400">Estimated Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formState.budget}
                    onChange={handleChange}
                    className="bg-slate-950 border border-slate-900 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 text-white rounded-xl transition-all duration-300 outline-none w-full px-4 py-2.5 text-sm cursor-pointer appearance-none"
                  >
                    <option value="Under $1k">Under $1k</option>
                    <option value="$1k - $3k">$1k - $3k</option>
                    <option value="$3k - $5k">$3k - $5k</option>
                    <option value="$5k+">$5k+</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-400">Project Brief & Details</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Outline the scope, deadline, raw footage volume, and stylistic references..."
                  className="bg-slate-950 border border-slate-900 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 text-white rounded-xl transition-all duration-300 outline-none w-full px-4 py-2.5 text-sm placeholder:text-slate-600 resize-none"
                />
              </div>

              {/* Form Status Notifications */}
              {submitted && (
                <div className="p-3 bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs rounded-lg flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Success! Your project inquiry has been received. Shantanu will contact you shortly.</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex flex-col items-center justify-center gap-1.5 bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-505 hover:to-violet-405 disabled:opacity-50 text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-lg hover:shadow-violet-600/10 transition-all cursor-pointer relative overflow-hidden"
              >
                {isSubmitting ? (
                  <div className="flex flex-col items-center gap-1.5 w-full">
                    <span>Encrypting Timeline...</span>
                    <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden relative">
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-400 to-emerald-400"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5 }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2 w-full">
                    <span>Send Project Brief</span>
                    <Send className="w-4 h-4" />
                  </div>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Footer Sub-bar */}
        <div className="border-t border-slate-900/60 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Shantanu Edits. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
